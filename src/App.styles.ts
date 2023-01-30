import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: #E5E5E5;
    position: relative;
    min-height: 100vh;
    height: 100%;
  }
`

export const TopMenu = styled.header`
    width: 100%;
    height: 101px;
    background: #0F52BA;
`;

export const TopMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1300px;
  width: 100%;
  height: inherit;
`

export const TopMenuLeft = styled.div`
  display: block;
  width: 70%;

`;

export const TextMKS = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    margin-left: 20px;

    @media (max-width: 768px) {
      font-weight: 600;
      font-size: 32px;
      line-height: 19px;
  }

`
export const TextSistemas = styled.span`
    display: inline-block;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #FFFFFF;
    mix-blend-mode: normal;

    @media (max-width: 768px) {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
  }
`;

export const TopMenuRight = styled.div`
  display: block;
  cursor: pointer;

`;

export const TopMenuCart = styled.div`
  width: 90px;
  height: 45px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 20px;
`;

export const TopMenuCartIcon = styled.img`
  width: 19px;
  height: 18px;
`;

export const TopMenuCartQtd = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  width: 13px;
  height: 22px;
  color: #000;
`;

export const ProductContainer = styled.div`
  display: grid;
  justify-content: center;
  width: 1050px;
  width: 100%;
`;

export const ProductGrid = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  width: 100%;
  max-width: 1050px;
  margin: 100px 0;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr)
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr)
  }
  @media (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr)
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  clear: both;
  background: #EEEEEE;
  padding: 8px 0;
  width: 100%;
`;

export const FooterText = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin: 0;
`;

/*
export const Cart = styled.div<Cart>`
  overflow: hidden;
  right: 0;
  top: 0;
  position: absolute;
  width: 480px;
  height: 100%;
  background: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  padding: 35px;
`;

export const CartTop = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CartTopTitle = styled.span`
  width: 180px;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: #FFFFFF;
`;

export const CartTopButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background-color: #000;
  border-radius: 50%;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #FFFFFF;
`;

export const CartItems = styled.div`
  width: 100%;
  margin-top: 50px;
  height: 700px;
  overflow-y: auto;
`;

export const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 10px;
`;

export const CartTotalTitle = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #FFFFFF;
`;

export const CartTotalNumber = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #FFFFFF;
`;

export const CartBuy = styled.div`
  cursor: pointer;
  position: absolute;
  background: #000000;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #FFFFFF;
`;*/