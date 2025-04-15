import { Request, Response } from 'express';
import prisma from '../prisma/prisma';
import { Prisma } from '../../generated/prisma';

export const getHistoryReport = async (req: Request, res: Response) => {
  const {
    search,
    tanggalPinjam,
    tanggalKembali,
  } = req.query;

  try {
    const where: Prisma.HistoryPeminjamanWhereInput = {};
    if (search) {
      where.OR = [
        {
          peminjaman: {
            mahasiswa: {
              nim: {
                contains: search as string,
              },
            },
          },
        },
        {
          peminjaman: {
            mahasiswa: {
              nama: {
                contains: search as string,
              },
            },
          },
        },
        {
          peminjaman: {
            details: {
              some: {
                buku: {
                  judul: {
                    contains: search as string,
                  },
                },
              },
            },
          },
        },
      ];
    }

    if(tanggalPinjam){
      where.peminjaman = {
        tanggalPinjam: {
          gte: new Date(tanggalPinjam as string),
        },
      };
    }

    if(tanggalKembali){
      where.peminjaman = {
        tanggalKembali: {
          lte: new Date(tanggalKembali as string),
        },
      };
    }
    const histories = await prisma.historyPeminjaman.findMany({
      where,
      include: {
        peminjaman: {
          include: {
            mahasiswa: true,
            details: {
              include: {
                buku: true,
              },
            },
          },
        },
      },
    });

    const result = histories.map((history) => {
      const peminjaman = history.peminjaman;
      return peminjaman.details.map((detail) => ({
        nim: peminjaman.mahasiswa.nim,
        namaMahasiswa: peminjaman.mahasiswa.nama,
        idBuku: detail.buku.id,
        namaBuku: detail.buku.judul,
        tanggalPinjam: peminjaman.tanggalPinjam,
        tanggalKembali: peminjaman.tanggalKembali,
        lamaPinjam: peminjaman.tanggalKembali
          ? Math.ceil(
            (new Date(peminjaman.tanggalKembali).getTime() -
              new Date(peminjaman.tanggalPinjam).getTime()) /
            (1000 * 3600 * 24)
          )
          : null,
        status: history.status,
        tanggalStatus: history.tanggalStatus,
      }));
    }).flat();

    res.status(200).json({
      msg: "Success get history",
      success: true,
      data: result,
      total: result.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data history' });
  }
};
