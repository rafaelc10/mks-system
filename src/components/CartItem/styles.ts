import styled from "styled-components";

export const CartItem = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    height: 95px;
    margin: 20px 0;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 250px;
      height: 220px;
      flex-direction: column;
      padding: 10px;
      background: #FFFFFF;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
      border-radius: 8px;
    }

`;

export const CartItemPhoto = styled.img`
    max-height: 110px;
`;

export const CartItemName = styled.span`
    max-width: 113px;
    @media (max-width: 768px) {
        width: 100%;
        max-width: 250px;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #2C2C2C;
    }
`;

export const CartMobileDiv = styled.span`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px){
        width: 200px;
    }
`;

export const CartItemQtd = styled.div`
    
`;

export const CartItemQtdText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 6px;
    line-height: 6px;
    color: #000000;
    @media (max-width: 768px){
        display: none;
    }

`;

export const CartItemQtdMenu = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    width: 60px;

    @media (max-width: 768px) {
      width: 100px;
    }
`;

export const CartItemQtdMenuRemove = styled.div`
    cursor: pointer;
    width: 33%;
    text-align: center;
    border-right: 0.3px solid #BFBFBF;
    padding: 4px;
`;

export const CartItemQtdMenuQtd = styled.span`
    width: 33%;
    padding: 2px;
    border-right: 0.3px solid #BFBFBF;
    text-align: center;
`;

export const CartItemQtdMenuAdd = styled.div`
    width: 33%;
    cursor: pointer;
    text-align: center;
    padding: 2px;
`;


export const CartItemQtdPrice = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;

    @media (max-width: 768px) {
        background-color: #373737;
        border-radius: 5px;
        color: #FFF;
        padding: 8px 14px;
    }

`;

export const CartItemDelete = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: -10px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #000;
    color: #FFF;
    padding: 2px;

    @media(max-width: 768px){
      font-size: 38px;
      top: 0px;
      right: 10px;
      background-color: transparent;
      border: none;
      color: #000000;
      width: auto;
      height: auto;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
    }
`;