"use client"
import { Button, Image, Skeleton, Typography } from "antd";
import { Container, CtaWrapper, MediaWrapper } from "./styles";
import { Montserrat, Lato, Inter } from "next/font/google";
import { useEffect, useState } from "react";

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
    const [maxWidth, setMaxWidth] = useState(0);
    const [loading, setLoading] = useState(true);
   
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //       setMaxWidth(window.innerWidth);
    //     }
    
    //     const timer = setTimeout(() => {
    //       setLoading(false);
    //     }, 500);
    
    //     return () => clearTimeout(timer);
    //   }, []);
    
    //   if (loading || maxWidth === null) {
    //     return <Skeleton active />;
    //   }

    return (
        <Container>
            <CtaWrapper>
                <Title level={1} style={{ color: "#3b0707", fontFamily: montserrat.style.fontFamily, fontSize: 42 }}>
                    Mantenha seu carro seguro com uma oficina mecânica de confiança.
                </Title>
                <Text className="text-base" style={{ fontSize: "24px", fontFamily: lato.style.fontFamily }}>
                    Qualidade, confiança e um preço justo – seu carro merece o melhor.
                </Text>
                <Button
                    type="primary"
                    style={{ background: "#471c1c", fontFamily: inter.style.fontFamily, padding: 8, marginTop: 20 }}
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