import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { Prisma } from "../../generated/prisma/client";


export const createBuku = async (req: Request, res: Response) => {
    try {
        const { judul, penerbit, tahunTerbit, penulis, rakId, stok } = req.body;
        const buku = await prisma.buku.create({
            data: {
                judul,
                penerbit,
                tahunTerbit: +tahunTerbit,
                penulis,
                stok: +stok,
                rakId,
            },
        });
        res.status(201).json({
            message: "Buku berhasil ditambahkan",
            success: true,
            data: buku,
        });
    } catch (err) {
        console.log({err});
        
        res.status(500).json({
            message: "Gagal menambahkan buku",
            success: false,
            error: err,
        });
    }
};

export const getBuku = async (req: Request, res: Response) => {
    try {
        const { search, page = 1, limit = 10, rakId, stok, tahunTerbit } = req.query;
        const where: Prisma.BukuWhereInput = {};
        if (search) {
            where.OR = [
                { judul: { contains: search as string, mode: "insensitive" } },
                { penerbit: { contains: search as string, mode: "insensitive" } },
                { penulis: { contains: search as string, mode: "insensitive" } },
                { rakId: { contains: search as string, mode: "insensitive" } },
            ];
        }
        if (rakId) {
            where.rakId = {
                contains: rakId as string
            }
        }
        if (stok) {
            where.stok = {
                gte: +stok
            }
        }

        if (tahunTerbit) {
            where.tahunTerbit = {
                gte: +tahunTerbit
            }
        }

        const buku = await prisma.buku.findMany({
            where,
            skip: (Number(page) - 1) * Number(limit),
            take: Number(limit),
            include : {
                rak: true
            },
            orderBy: { cretedAt: 'asc' },
        });

        const total = await prisma.buku.count({
            where,
        });

        res.status(200).json({
            msg: "Success get data",
            success: true,
            data: buku,
            total
        });
    } catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: "Gagal mendapatkan buku",
            error: error,
            success: false
        });
    }
};
