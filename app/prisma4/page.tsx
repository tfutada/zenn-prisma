import {revalidatePath} from "next/cache";
import {prisma} from "@/lib/prisma";


export default async function Update() {

    // Server Actions. These are executed on the server.
    async function addItem(formData: FormData): Promise<void> {
        'use server'; // This is required for server actions.
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        // const session = await getServerSession(options) 実際にはセッションからメルアドを取得

        const result = await prisma.post.create({
            data: {
                title,
                content,
                author: {connect: {email: 'abc@google.com'}},
            },
        });
        console.log(result)
        revalidatePath('/prisma4')
    }

    return (
        <>
            <form action={addItem}>
                <input type="text" name="title" defaultValue="My Title" className="bg-gray-500"/>
                <input type="text" name="content" defaultValue="News Body" className="bg-gray-500"/>
                <button type="submit">記事を作成</button>
            </form>
        </>
    )
}
