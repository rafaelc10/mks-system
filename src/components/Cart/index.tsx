import * as C from './styles'
import { CartItems } from '../CartItems';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

type Props = {
    clickFn: () => void;
}

export const Cart = ({ clickFn }: Props) => {
    
    const cart = useAppSelector(state => state.cart)

    return (
        <C.Cart>
            <C.CartTop>
                <C.CartTopTitle>Carrinho de compras</C.CartTopTitle>
                <C.CartTopButton onClick={clickFn}>X</C.CartTopButton>
            </C.CartTop>

            <CartItems cart={cart} />

            <C.CartTotal>
                <C.CartTotalTitle>Total:</C.CartTotalTitle>
                <C.CartTotalNumber>R${cart.reduce((acc: number, item: any) => acc + +item.price, 0)}</C.CartTotalNumber>
            </C.CartTotal>
            <C.CartBuy>Finalizar Compra</C.CartBuy>
        </C.Cart>
    )
}