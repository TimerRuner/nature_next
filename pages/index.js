import Head from "next/head"
import Header from "../components/Header/Header"
import MainScreen from "../components/MainScreen/MainScreen"
import Script from "next/script"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Rootz</title>
                <meta
                    name="description"
                    content="The scale of the challenges facing our planet can seem daunting, but we can all do something."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <MainScreen />
            </main>
        </div>
    )
}
