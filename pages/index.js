import Head from "next/head";
import React from "react";
import User from "../components/user";
import Link from 'next/link'


export default function JobBoard({jsonRes}) {
    console.log(jsonRes);
    return (
        <div className="flex justify-center	">
            <Head>
                <title>Job board Desktop</title>
            </Head>
            <div className="main ">
                <div className="wrapper">
                    {jsonRes.map((obj) => (
                        //для переходу і насторінку користувача без перезавнтаження
                            <Link href={`/${obj.id}`} key={obj.id} >
                                    <User {...obj} />
                            </Link>
                    ))}
                </div>
                <div className="font-bold flex justify-center">
                    <div className="shadow-md flex bg-slate-100 h-[52px] my-[49px] justify-center">
                        <button className="mr-2">◁</button>
                        <div className="flex items-center mx-10 tracking-[.4em]">1 2 3 4 5 6</div>
                        <button className="ml-2">▷</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
// данні з бек-енду для того щоб робило СЕО в пошуковиках (без юзСтейта)
JobBoard.getInitialProps = async () => {
    const response = await fetch ("https://api.json-generator.com/templates/ZM1r0eic3XEy/data/?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu")
    const jsonRes = await response.json()
    return {
        jsonRes
    }
}
