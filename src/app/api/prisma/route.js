import {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
} from "../../../../prisma/queries";
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
        const user = await getAllUsers();
        return new Response(JSON.stringify(user), { status: 200 });
    } else {
        const user = await getUser(id);
        return new Response(JSON.stringify(user), { status: 200 });
    }
}
export async function POST(req) {
    const body = await req.json();
    if (!body) {
        return new Response(
            JSON.stringify({ message: "User cannot be created" }),
            { status: 400 }
        );
    }
    const { name, email, birthYear } = body;
    const user = await createUser(name, email, birthYear);
    return new Response(JSON.stringify(user), { status: 201 });
}
export async function PUT(req) {
    const body = await req.json();
    const { id, ...data } = body;
    const user = await updateUser(id, data);
    return new Response(JSON.stringify(user), { status: 202 });
}
export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const user = await deleteUser(id);
    return new Response(JSON.stringify(user), { status: 200 });
}
