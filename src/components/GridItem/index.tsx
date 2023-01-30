import * as C from './styles';
import ShoppingIcon from '../../assets/shopping.png'

type Props = {
    product: {
        name: string,
        description: string
        price: number,
        photo: string,
        qtd: number;
    },
    addItemCart: (item: any) => void;
  }

export const GridItem = ({product, addItemCart}: Props) => {
    return (
        <C.Card>
            <C.ImgArea>
                <C.Img src={product.photo} alt={product.name} />
            </C.ImgArea>
            <C.TitleArea>
                <C.Title>{product.name}</C.Title>
                <C.PriceArea>
                    <C.Price>R${Math.trunc(product.price)}</C.Price>
                </C.PriceArea>
            </C.TitleArea>
            <C.Description>{product.description}</C.Description>
            <C.Button onClick={() => addItemCart(product)}><C.ShopIcon src={ShoppingIcon} alt="" /> Comprar</C.Button>
        </C.Card>
    );
}