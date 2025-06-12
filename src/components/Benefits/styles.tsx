import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    flex-direction: column;
    display: flex;
    gap: 24px
`

export const BenefitsWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: space-between;
        gap: 24px
    }
`
