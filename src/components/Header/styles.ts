import { Button } from "antd";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 90%;
    height: 60px;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 12px;
    /* position: sticky;
    top: 0;
    z-index: 1000; */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
`

export const NavigationArea = styled.div`
    display: flex;
    width: 200px;
    gap: 8px;

`

export const CustomButton = styled(Button)`
  background-color:rgb(0, 0, 0);
  
  &:hover {
    background-color:rgb(255, 255, 255);
  }
`;
