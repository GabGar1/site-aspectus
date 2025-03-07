import { Image, Typography } from "antd";
import { Container, TeamWrapper } from "./styles";

const { Title, Paragraph } = Typography

interface ITeamInfo {
    team_info: {
        photo: string,
        name: string,
        info: string,
        alt: string
    }[]
}
export function TeamInfo(params: ITeamInfo) {
    const { team_info = [] } = params

    return (
        <TeamWrapper>
            {team_info.map((data, index) => (
                <Container key={index}>
                    <Image src={data.photo} preview={false} style={{ height: 200, objectFit: "contain", width: 300 }} alt={data.alt} />
                    <Title level={4}>
                        {data.name}
                    </Title>
                    <Paragraph>
                        {data.info}
                    </Paragraph>
                </Container>
            ))}
        </TeamWrapper>

    )
}