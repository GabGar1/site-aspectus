import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
`

export const TeamWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 24px;
        align-items: center;
    }
`

export const PersonInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: start; 
    max-width: 250px
`