import Head from "next/head"
import EnviromentSlider from "../components/EnviromentSlider/EnviromentSlider"
import Header from "../components/Header/Header"
import MainScreen from "../components/MainScreen/MainScreen"
import TravelSlider from "../components/TravelSlider/TravelSlider"
import FAQ from "../components/FAQ/FAQ"
import Mission from "../components/Mission/Mission"
import GetStarted from "../components/GetStarted/GetStarted"
import OurTeam from "../components/OurTeam/OurTeam"

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
                <TravelSlider />
                <OurTeam />
                <Mission />
                <GetStarted />
                <FAQ />
                <EnviromentSlider />
            </main>
        </div>
    )
}
