import {NextResponse} from 'next/server';
import {prisma} from "@/lib/prisma";

export async function GET() {

    const cart = {
        items: [1, 2, 3]
    }
    const start = Date.now();
    const rows = await prisma.user.findMany();
    const end = Date.now();
    console.log(`Elapsed time: ${end - start} ms`);

    return NextResponse.json(cart);
}
