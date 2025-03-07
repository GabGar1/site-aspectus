import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 350px;
    flex-direction: column;
    padding: 24px;
    gap: 12px;
    background: black;
    position: relative;
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    align-self: flex-start;
    position: absolute;
    left: 150px;
    top: 120px;

    @media screen and (max-width: 600px) {
        align-self: center;
        position: sticky;
        padding-top: 60px;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    position: absolute;
    bottom: 24px;

    @media screen and (max-width: 600px) {
        width: 30%;
    }
    
`