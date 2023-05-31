// import prisma from "./prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
}
export async function getUser(id) {
    const user = await prisma.user.findUnique({
        where: { id },
    });

    return user;
}
export async function createUser(name, email, birthYear) {
    const user = await prisma.user.create({
        data: {
            name,
            email,
            birthYear,
        },
    });
    return user;
}

export async function updateUser(id, data) {
    const user = await prisma.user.update({
        where: { id },
        data: {
            ...data,
        },
    });
    return user;
}

export async function deleteUser(id) {
    const user = await prisma.user.delete({
        where: { id },
    });
    return user;
}
