import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 24px;
    gap: 16px;
    background: #000000;
    color: white;
`;

export const ReviewCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #222;
    padding: 16px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
`;

export const StarsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 8px 0;
`;


export const ReviewsWrapper = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
