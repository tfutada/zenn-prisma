import {sql} from "@vercel/postgres";

export default async function Posts() {

    const {rows} = await sql`SELECT *
                             from "User"`;

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
