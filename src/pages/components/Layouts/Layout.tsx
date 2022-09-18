import Header from "./Header";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({children}: Props) {
    return(
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className="container mx-auto flex flex-col items-center justify-center p-4">{children}</main>
        </>
    )
}