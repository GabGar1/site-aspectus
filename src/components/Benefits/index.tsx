import { ReactNode } from "react";
import { BenefitItem } from "../BenefitItem";
import { BenefitsWrapper, Container } from "./styles";
import { Typography } from "antd";

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
            <h1 style={{
                alignSelf: "center",
                color: 'black',
                fontSize: 32
            }}
            >Benefícios</h1>
            <BenefitsWrapper>
                {benefit_info.map((b, index) => (
                    <BenefitItem
                        key={index}
                        icon={b.icon}
                        title={b.title}
                        subtitle={b.subtitle}
                    />
                ))}
            </BenefitsWrapper>
        </Container>
    );
}
