"use client";
import { Button, Dropdown, Flex, Image, MenuProps } from "antd";
import { Container, CustomButton } from "./styles";
import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

interface IHeader {
    navItems: { label: string; onClick: () => void }[];
}

export function Header(params: IHeader) {
    const { navItems } = params
    const [maxWidth, setMaxWidth] = useState(0);

    
    useEffect(() => {
        if (typeof window !== "undefined")
            setMaxWidth(window.innerWidth);
    }, []);

    const menuItems: MenuProps["items"] = navItems.map((item) => ({
        key: item.label,
        label: <a onClick={item.onClick}>{item.label}</a>,
    }));


    return (
        <Container>
            <Image src="/logo_aspectus_real.png" preview={false} style={{maxWidth: 60}} />
            {maxWidth <= 600 ? (
                <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                    <Button type="text" style={{ background: "black" }} icon={<MenuOutlined style={{ color: "white" }} />} />
                </Dropdown>
            ) : (
                <Flex>
                    {navItems.map((item) => (
                        <CustomButton key={item.label} onClick={item.onClick} type="link" style={{ margin: "0 8px" }}>
                            <p style={{ color: "white" }}>{item.label}</p>
                        </CustomButton>
                    ))}
                </Flex>
            )}
        </Container>
    );
}
