import { Flex, Typography } from "antd";
import React, { ReactNode } from "react";

const { Title } = Typography;

interface IBenefitItem {
    icon: ReactNode,
    title: string,
    subtitle: string
}



export function BenefitItem(params: IBenefitItem) {
    const { icon, subtitle, title } = params;

    return (
        <Flex vertical gap={56} align="center" style={{ maxWidth: 300 }}>
            {icon}
            <Flex vertical align="center" >
                <Title level={2}>
                    {title}
                </Title>
                <Title level={5}>
                    {subtitle}
                </Title>
            </Flex>
        </Flex>

    )
}