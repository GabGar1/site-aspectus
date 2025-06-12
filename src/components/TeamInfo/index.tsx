import { Image, Typography } from "antd";
import { Container, PersonInfo, TeamWrapper } from "./styles";

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
        <Container>
            <h1 style={{ color: "black", alignSelf: "center", fontSize: 32 }}>Nossa equipe</h1>
            <TeamWrapper>
                {team_info.map((data, index) => (
                    <PersonInfo key={index}>
                        <Image src={data.photo} preview={false} style={{ height: 200, objectFit: "contain", width: 300 }} alt={data.alt} />
                        <h1 style={{color: 'black', fontSize: 18}}>
                            {data.name}
                        </h1>
                        <p style={{color: 'black', fontSize: 14}}>
                            {data.info}
                        </p>
                    </PersonInfo>
                ))}
            </TeamWrapper>
        </Container>


    )
}