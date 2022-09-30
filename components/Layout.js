import Head from "next/head"
import Button from "./Button"
import Logo from "./Logo"
export default function Layout({children}) {
return(
    <>
    <Head>
        <link rel="shortcut icon" href="https://cdn.imgbin.com/12/24/4/imgbin-movie-icons-film-cinema-others-N2P6ZxSCqJFK6CUuTWFwzr6gd.jpg" />
        <title>IgnisFlix</title>
    </Head>
    <Logo />
    <main className="main-container">{children}</main>
    <Button />
    </>
)
}