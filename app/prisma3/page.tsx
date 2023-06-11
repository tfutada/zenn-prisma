import {prisma} from '@/lib/prisma';

export default async function Posts() {
    const user = await prisma.user.findFirst({
        include: {
            posts: true,
        },
    })

    console.log(user)

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}
