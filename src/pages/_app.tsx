import { AppProps } from "next/app"
import React from "react"
import { globalStyles } from "../styles/global"
// import logoImg from '../assets/logo.svg'
import HomeImg from '../assets/Home.svg'
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

    return (
        <Container>
            <Header>
                <Image src={HomeImg} />
            </Header>

            <Component {...pageProps} />
        </Container>

    )
}
