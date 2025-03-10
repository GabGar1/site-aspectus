import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: auto;
    align-items: stretch;
    background: #dddddd;
    margin-top: 24px;

    @media screen and (max-width: 600px) {

    }
`

// export const TitleTypo = styled.Typo\

export const CtaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 8px;
    height: 400px;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 24px;

    @media screen and (max-width: 600px) {
        height: auto;
    }
`

export const MediaWrapper = styled.div`
`