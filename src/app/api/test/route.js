export async function POST(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    return new Response(JSON.stringify({ message: id }), {
        status: 200,
    });
}
