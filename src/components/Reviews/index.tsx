import { Container, ReviewCard, ReviewsWrapper, StarsWrapper } from "./styles";
import { StarFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface IReviews {
    reviews: {
        name: string
        text: string
        rating: number
    }[]
}

export function Reviews(params: IReviews) {
    const { reviews } = params;
    // const [index, setIndex] = useState(0)

    // useEffect(() => {
    //     if (reviews.length > 0) {
    //         setIndex(0);
    //     }
    // }, [reviews]);
    return (
        <Container>
            <h1 style={{ color: "white", textAlign: "center", fontSize: 32 }}>
                O que nossos clientes dizem
            </h1>
            <ReviewsWrapper>
                {reviews.map((review, index) => (
                    <ReviewCard key={index}>
                        <h1 style={{ color: "white", fontSize: 16}}>{review.name}</h1>
                        <StarsWrapper>
                            {[...Array(review.rating)].map((_, i) => (
                                <StarFilled key={i} style={{ color: "#FFD700" }} />
                            ))}
                        </StarsWrapper>
                        <p style={{ color: "white", fontSize: 12}}>{review.text}</p>
                    </ReviewCard>
                ))}
            </ReviewsWrapper>
        </Container>
    );
}
