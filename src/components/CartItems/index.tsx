import * as C from './styles';
import { CartItem } from '../CartItem';

export const CartItems = ({ cart }: any  ) => {
    return (
        <C.CartItems>
            {
                cart ? cart.map((item: any) => (
                    <CartItem
                        key={item.id}
                        data={item}
                    />
                )) : ''
            }
        </C.CartItems>
    );
}