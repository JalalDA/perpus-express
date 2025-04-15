import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { Prisma } from "../../generated/prisma/client";

export const createMahasiswa = async (req: Request, res: Response) => {
    try {
        const { nama, nim, jurusan } = req.body;
        const mhs = await prisma.mahasiswa.create({
            data: { nama, nim, jurusan },
        });
        res.status(201).json({
            msg: "Success add mahasiswa",
            success: true,
            data: mhs
        });
    } catch (err) {
        res.status(500).json({
            msg: "Gagal menambahkan mahasiswa",
            success: false,
            error: err
        });
    }
};

export const getMahasiswa = async (req: Request, res: Response) => {
    try {
        const { search, page = 1, limit = 10, jurusan } = req.query;
        const where: Prisma.MahasiswaWhereInput = {};
        if (search) {
            where.OR = [
                { nama: { contains: search as string, mode: "insensitive" } },
                { nim: { contains: search as string, mode: "insensitive" } },
            ];
        }
        if (jurusan) {
            where.jurusan = { contains: jurusan as string, mode: "insensitive" };
        }
        const data = await prisma.mahasiswa.findMany({
            where: where,
            skip: (Number(page) - 1) * Number(limit),
            take: Number(limit),
            orderBy: { nama: "asc" },
        });

        const total = await prisma.mahasiswa.count({ where: where });

        res.json({
            msg: "Success get mahasiswa",
            success: true,
            data,
            total,
        });
    } catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: "Gagaal get mahasiswa",
            success: false,
            error
        })
    }

};
