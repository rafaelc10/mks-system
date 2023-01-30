import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    max-width: 218px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 30px;
`;

export const ImgArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Img = styled.img`
    max-height: 138px;
    height: 100%;
`;

export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
`;

export const Title = styled.span`
    width: 124px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
    float: left;
`;

export const PriceArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #373737;
    border-radius: 5px;
    margin-top: 4px;
    width: 64px;
    height: 26px;
    padding: 3px;
`;

export const Price = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
`;

export const Description = styled.span`
    margin: 8px 0;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #2C2C2C;
`;

export const Button = styled.button`
    cursor: pointer;
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    text-transform: uppercase;
    width: 100%;
    height: 32px;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: -22px;
`;

export const ShopIcon = styled.img`
    width: 100%;
    max-width: 12px;
    height: 100%;
    max-height: 13.5px;
    margin-right: 14px;
`;