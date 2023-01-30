import styled from "styled-components";

export const CartItems = styled.div`
  width: 100%;
  margin-top: 50px;
  height: 600px;
  overflow-y: auto;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;