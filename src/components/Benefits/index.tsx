import { ReactNode } from "react";
import { BenefitItem } from "../BenefitItem";
import { Flex } from "antd";
import { Container } from "./styles";

interface IBenefit {
    icon: ReactNode;
    title: string;
    subtitle: string;
}

interface IBenefits {
    benefit_info: IBenefit[];
}

export function Benefits({ benefit_info }: IBenefits) {
    return (
        <Container> 
            {benefit_info.map((b, index) => (
                <BenefitItem
                    key={index}
                    icon={b.icon}
                    title={b.title}
                    subtitle={b.subtitle}
                />
            ))}
        </Container>
    );
}
