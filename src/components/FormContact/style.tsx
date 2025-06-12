import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: black;
    padding: 36px 24px;
    gap: 12px;
    width: 100%;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        height: auto; 
        align-items: center;
        justify-content: center;
        padding: 36px 24px;
        gap: 48px
    }
`

export const FormWrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        width: 100%;
        height: auto; 
        align-items: center;
        justify-content: center;
    }
`

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    align-items: center;
    border-radius: 12px;
    background: #FFFFFF;
    padding: 12px 24px;
    width: 100%;
`

export const LabelInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    flex-direction: column
`

export const Label = styled.label`
    font-family: montserrat.style.fontFamily;
    color: black;
    font-size: 12px;
    font-weight: 500;
    align-self: start
`

export const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  color: black;

  &::placeholder {
    font-size: 14px;
    color: #999;
  }
`

export const DescriptionForm = styled.div`
    display: flex;   
    flex-direction: column;
    width: 50%;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        width: 100%
    }
`

export const Input = styled.input`
    diplay: flex;
    flex-direction: column;
`