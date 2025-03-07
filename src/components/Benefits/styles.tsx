import styled from "styled-components";

export const Container = styled.div`
    justify-content: space-between;
    width: 100%; 
    padding: 12px 56px;
    display: flex;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: space-between;
        gap: 12
    }
`