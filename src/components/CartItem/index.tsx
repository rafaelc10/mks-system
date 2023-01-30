import * as C from './styles';
import { removeItem } from '../../redux/reducers/cartReducer';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
type Props = {
    data: {
        id: number,
        name: string,
        photo: string,
        price: number,
        qtd: number;
    }
}


export const CartItem = ({data}: Props) => {
    const dispatch = useDispatch();
    
    const removeItemCart = (id: any) => {
        dispatch(removeItem(id));
    }

    const [qtd, setQtd] = useState(1);
    const incrementCart = () => {
        setQtd(qtd + 1)
    }

    const decrementCart = () => {
        if(qtd > 0){
            setQtd(qtd - 1)
        }
    }

    return (
        <C.CartItem>
            <C.CartItemPhoto src={data.photo} alt={data.name}  />
            <C.CartItemName>{data.name} </C.CartItemName>
            <C.CartMobileDiv>
                <C.CartItemQtd>
                    <C.CartItemQtdText>Qtd</C.CartItemQtdText>
                    <C.CartItemQtdMenu>
                        <C.CartItemQtdMenuRemove onClick={decrementCart}>-</C.CartItemQtdMenuRemove>
                        <C.CartItemQtdMenuQtd>{qtd}</C.CartItemQtdMenuQtd>
                        <C.CartItemQtdMenuAdd onClick={incrementCart}>+</C.CartItemQtdMenuAdd>
                    </C.CartItemQtdMenu>
                </C.CartItemQtd>
                <C.CartItemQtdPrice> {`R$${Math.trunc(data.price * qtd)}`} </C.CartItemQtdPrice>
            </C.CartMobileDiv>
            <C.CartItemDelete onClick={() => removeItemCart(data.id)}>X</C.CartItemDelete>
            
        </C.CartItem>
    );
}