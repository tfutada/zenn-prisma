import {prisma} from '@/lib/prisma';

export default async function Posts() {
    const rows = await prisma.user.findMany();
    console.log(rows)

    return (
        <div>
            {rows.map((row) => (
                <div key={row.id}>
                    {JSON.stringify(row)}
                </div>
            ))}
        </div>
    );
}
