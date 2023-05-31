import React from "react";
// import { SessionAuthentication } from "../../lib/exceptions";
const session = true;
const Page = async () => {
    const wait = (s) => new Promise((resolve) => setTimeout(resolve, s));
    await wait(3000);
    const res = await fetch("http://localhost:3000/api/prisma", {
        method: "GET",
        next: {
            revalidate: 50,
        },
    });
    const data = await res.json();
    console.log(data);
    if (!session) throw new SessionAuthentication();
    return (
        <div>
            {data.map((daa) => {
                return <p key={daa.id}>{daa.name}</p>;
            })}
        </div>
    );
};

export default Page;
