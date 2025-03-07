import {  Typography } from "antd";
import { Container, ReviewCard, ReviewsWrapper, StarsWrapper } from "./styles";
import { StarFilled } from "@ant-design/icons";

interface IReviews {
    reviews: {
        name: string
        text: string
        rating: number
    }[]
}

const { Title, Text } = Typography;

export function Reviews(params: IReviews) {
    const { reviews } = params;

    return (
        <Container>
            <Title level={2} style={{ color: "white", textAlign: "center" }}>
                O que nossos clientes dizem
            </Title>
            <ReviewsWrapper>
                {reviews.map((review, index) => (
                    <ReviewCard key={index}>
                        <Text strong style={{ color: "white"}}>{review.name}</Text>
                        <StarsWrapper>
                            {[...Array(review.rating)].map((_, i) => (
                                <StarFilled key={i} style={{ color: "#FFD700" }} />
                            ))}
                        </StarsWrapper>
                        <Text style={{ color: "white"}}>{review.text}</Text>
                    </ReviewCard>
                ))}
            </ReviewsWrapper>
        </Container>
    );
}
