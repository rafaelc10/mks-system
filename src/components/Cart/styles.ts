import styled from "styled-components";

  export const Cart = styled.div`
    overflow: hidden;
    right: 0;
    top: 0;
    position: fixed;
    width: 480px;
    min-height: 100vh;
    height: 100%;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    padding: 35px;

    @media (max-width: 768px) {
      width: 80%;
      padding: 20px;
    }

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
    height: 650px;
    overflow-y: auto;
  `;
  
  export const CartTotal = styled.div`
      display: flex;
      justify-content: space-between;
      margin: 25px 0;
      @media(max-width: 768px){
        margin: 28px 0;
      }
  `;
  
  export const CartTotalTitle = styled.span`
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      color: #FFFFFF;
      @media (max-width: 768px){
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 15px;
        color: #FFFFFF;
    }
  `;
  
  export const CartTotalNumber = styled.span`
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      color: #FFFFFF;
      @media (max-width: 768px){
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 15px;
        color: #FFFFFF;
    }
  `;
  
  export const CartBuy = styled.div`
    cursor: pointer;
    position: absolute;
    background: #000000;
    left: 0;
    bottom: 70px;
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
    
    @media (max-width: 768px) {
      font-size: 20px;
      bottom: 40px;
      height: 65px;
    }
  `;