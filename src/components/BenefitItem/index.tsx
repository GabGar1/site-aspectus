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
        <Flex vertical gap={24} align="center" style={{ maxWidth: 300 }}>
            {icon}
            <Flex vertical align="center" >
                <h3 style={{color: 'black'}}>{title}</h3>
                <p style={{color: 'black', fontSize: 14, textAlign: 'center'}}>{subtitle}</p>
            </Flex>
        </Flex>

    )
}