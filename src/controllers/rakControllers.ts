import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { Prisma } from "../../generated/prisma/client";

export const createRak = async (req: Request, res: Response) => {
    try {
        const { lokasi, namaRak } = req.body
        const rak = await prisma.rak.create({
            data: {
                lokasi,
                namaRak,
            }
        })
        res.status(201).json({
            msg: "Berhasil menambahkan rak",
            success: true,
            data: rak
        });
    } catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: "Gagal menambahkan rak",
            success: false,
            error: error
        });
    }
}

export const getAllRak = async (req: Request, res: Response) => {
    try {
        const rak = await prisma.rak.findMany()
        res.status(200).json({
            msg: "Berhasil mendapatkan rak",
            success: true,
            data: rak
        });
    } catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: "Gagal mendapatkan rak",
            success: false,
            error: error
        });
    }
}