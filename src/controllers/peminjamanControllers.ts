
import { Request, Response } from 'express';
import prisma from '../prisma/prisma';

export const createPeminjaman = async (req: Request, res: Response) => {
  const { mahasiswaId, bukuIds } = req.body;

  if (!mahasiswaId || !Array.isArray(bukuIds) || bukuIds.length === 0) {
     res.status(400).json({ error: 'mahasiswaId dan bukuIds wajib diisi' });
     return
  }

  const bukuSet = new Set(bukuIds);
  if (bukuSet.size !== bukuIds.length) {
    res.status(400).json({ error: 'Terdapat duplikasi buku dalam input' });
    return
  }

  try {
    const mahasiswa = await prisma.mahasiswa.findUnique({
      where: { id: mahasiswaId },
    });

    if (!mahasiswa) {
      res.status(404).json({ error: 'Mahasiswa tidak ditemukan' });
      return
    }

    const duaMingguLalu = new Date();
    duaMingguLalu.setDate(duaMingguLalu.getDate() - 14);

    const aktifPeminjaman = await prisma.peminjaman.findFirst({
      where: {
        mahasiswaId,
        tanggalPinjam: { gte: duaMingguLalu },
        tanggalKembali: null,
      },
    });

    if (aktifPeminjaman) {
      await prisma.mahasiswa.update({
        where: { id: mahasiswaId },
        data: { isActive: false },
      });

      res.status(403).json({
        error: 'Mahasiswa masih memiliki peminjaman aktif dalam 2 minggu terakhir. Mahasiswa telah dinonaktifkan.',
      });
      return
    }

    if (!mahasiswa.isActive) {
      res.status(400).json({ error: 'Mahasiswa tidak aktif' });
      return
    }

    const bukuList = await prisma.buku.findMany({
      where: {
        id: { in: bukuIds },
      },
    });

    const bukuTidakTersedia = bukuList.filter(buku => buku.stok <= 0);
    if (bukuTidakTersedia.length > 0) {
       res.status(400).json({
        error: 'Beberapa buku tidak tersedia',
        buku: bukuTidakTersedia.map(b => ({ id: b.id, judul: b.judul })),
      });
      return
    }

    const tanggalPinjam = new Date();
    const tanggalKembali = new Date();
    tanggalKembali.setDate(tanggalPinjam.getDate() + 14);

    const peminjaman = await prisma.peminjaman.create({
      data: {
        mahasiswaId,
        tanggalPinjam,
        tanggalKembali,
        details: {
          create: bukuIds.map(bukuId => ({
            bukuId,
          })),
        },
        histories: {
          create: {
            status: 'Dipinjam',
            tanggalStatus: new Date(),
          },
        },
      },
    });

    await Promise.all(
      bukuIds.map(bukuId =>
        prisma.buku.update({
          where: { id: bukuId },
          data: { stok: { decrement: 1 } },
        })
      )
    );

    res.status(201).json({ message: 'Peminjaman berhasil', peminjaman });
  } catch (error) {
    console.error('Error create peminjaman:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat memproses peminjaman' });
  }
};
