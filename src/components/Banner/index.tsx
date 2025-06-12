"use client"
import { Button, Image, Typography } from "antd";
import { Container, CtaWrapper, MediaWrapper } from "./styles";
import { Montserrat, Lato, Inter } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "700",
});

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
});

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
});

interface IBanner {
    media: string,
}

const { Title, Text } = Typography

export function Banner(params: IBanner) {
    const { media } = params;

    return (
        <Container>
            <CtaWrapper>
                <h1 style={{ color: "#2C2C2C", fontSize: 32 }}>
                    Mantenha seu carro seguro com uma oficina mecânica de confiança.
                </h1>
                <p className="text-base" style={{ color: '#2C2C2C', fontSize: "20px" }}>
                    Qualidade, confiança e um preço justo – seu carro merece o melhor.
                </p>
                <Button
                    type="primary"
                    style={{ background: "#C8102E", fontFamily: inter.style.fontFamily, padding: 8, marginTop: 20 }}
                    onClick={() => window.open("https://wa.me/5541987205759?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20Poderia%20me%20ajudar%3F", "_blank")}
                    size="large"
                >
                    Chamar no WhatsApp
                </Button>
            </CtaWrapper>
            <MediaWrapper>
                <Image
                    alt="banner"
                    src={media}
                    width="100%"
                    height="100%"
                    preview={false}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
            </MediaWrapper>
        </Container>
    )
}