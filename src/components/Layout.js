import Head from "next/head"
import Logo from "../components/Logo"
export default function Layout({children}) {
return(
    <>
    <Head>
        <link rel="shortcut icon" href="https://cdn.imgbin.com/12/24/4/imgbin-movie-icons-film-cinema-others-N2P6ZxSCqJFK6CUuTWFwzr6gd.jpg" />
        <title>IgnisFlix | Cinema em Casa</title>
    </Head>
    <Logo />
    <main className="main-container">{children}</main>
    </>
)
}