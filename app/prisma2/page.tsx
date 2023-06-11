import {prisma} from '@/lib/prisma';
import {User} from "@prisma/client";

export default async function Posts() {
    const rows = await prisma.user.findMany();
    console.log(rows)

    const userById: User | null = await prisma.user.findUnique({
        where: {
            id: 2,
        },
    })
    console.log(userById)

    const userName = await prisma.user.findUnique({
        where: {
            email: 'abc@google.com',
        },
        select: {
            name: true,
            email: true,
        },
    })
    console.log(userName)

    const feed = await prisma.post.findMany({
        where: {published: true},
        include: {
            author: {
                select: {name: true},
            },
        },
    });

    return (
        <div>
            <div>
                {rows.map((row) => (
                    <div key={row.id}>
                        {JSON.stringify(row)}
                    </div>
                ))}
            </div>
            <div>
                {feed.map((row) => (
                    <div key={row.id}>
                        {JSON.stringify(row)}
                    </div>
                ))}
            </div>
        </div>
    );
}
