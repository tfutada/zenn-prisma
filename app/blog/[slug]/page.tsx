import {prisma} from "@/lib/prisma";

export default async function Cart({params}: { params: { slug: string } }) {
    console.log(params.slug)

    // measure elapsed time
    const start = Date.now();
    const rows = await prisma.user.findMany();
    const end = Date.now();
    console.log(`Elapsed time: ${end - start} ms`);

    console.log(rows)

    return <div>My Post</div>
}