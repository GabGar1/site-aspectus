"use client"
import { Flex } from "antd";
import { ContactWrapper, Container, SocialMedia } from "./styles";
import { EnvironmentOutlined, GoogleOutlined, InstagramOutlined, PhoneOutlined, TikTokOutlined, WhatsAppOutlined } from "@ant-design/icons";



export function Footer() {
    return (
        <Container>
            <ContactWrapper>
                <h2 style={{ color: "white" }}>Aspectus Auto Mecânica</h2>
                <Flex gap={8}>
                    <PhoneOutlined style={{ color: "white" }} />
                    <p style={{ color: "white" }}>41 3248-9339</p>
                </Flex>
                <Flex gap={8}>
                    <WhatsAppOutlined style={{ color: "white" }} />
                    <p style={{ color: "white" }}>
                        41 98720-5759
                    </p>
                </Flex>
                <Flex gap={8}>
                    <EnvironmentOutlined style={{ color: "white" }} />
                    <p style={{ color: "white" }}>Rua José Ferreira Barros, 198 - Fanny - Curitiba/PR</p>
                </Flex>

            </ContactWrapper>
            <SocialMedia>
                <WhatsAppOutlined style={{ fontSize: '24px', color: "white" }} onClick={() => window.open("https://wa.me/5541987205759?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20Poderia%20me%20ajudar%3F", "_blank")} />
                <InstagramOutlined style={{ fontSize: '24px', color: "white" }} onClick={() => window.open("https://www.instagram.com/aspectusoficina?igsh=MTR1OHlienN2MTdmdw==", "_blank")} />
                <GoogleOutlined style={{ fontSize: '24px', color: "white" }} onClick={() => window.open("https://g.co/kgs/MtJq2He", "_blank")} />
                <TikTokOutlined style={{ fontSize: '24px', color: "white" }} onClick={() => window.open("https://www.tiktok.com/@aspectusoficina?_t=ZM-8uR9Ev6ckLe&_r=1", "_blank")} />
            </SocialMedia>
        </Container>
    )
}