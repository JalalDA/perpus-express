import { Request, Response } from "express";
import prisma from "../prisma/prisma";

export const tambahStok = async (req: Request, res: Response) => {
  const { bukuId, jumlah } = req.body;
  try {
    const buku = await prisma.buku.update({
      where: { id: bukuId },
      data: {
        stok: { increment: jumlah },
      },
    });

    res.json({ message: "Stok berhasil ditambahkan", buku });
  } catch (err) {
    res.status(500).json({ message: "Gagal menambahkan stok", error: err });
  }
};
