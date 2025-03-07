import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    width: 250px;
    height: auto;
`

export const TeamWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    height: auto;
    padding: 10px 80px;
    width: 100vw;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 24px;
        align-items: center;
    }
`