import { Container } from "./styles";

export function Core({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            {children}
        </Container>
    )
}