import * as C from './App.styles'
import CartImg from './assets/image.png'
import { GridItem } from './components/GridItem'
import { useEffect, useState } from 'react'

import { api } from './api'
import { Cart } from './components/Cart'

import { Mks } from './types/mks'

import { useAppSelector } from './redux/hooks/useAppSelector'
import { useDispatch } from 'react-redux';
import { addItem } from './redux/reducers/cartReducer'

function App() {
  const dispatch = useDispatch();

  const [response, setResponse] = useState<Mks[]>([]);
  const [apiState, setApiState] = useState<boolean>(false);
  const [cartMenu, setCartMenu] = useState<boolean>(false);
  
  const lenght = useAppSelector(state => state.cart.length)
  
  const openCartMenu = () => {
    setCartMenu(!cartMenu)
  }

  const loadProducts = async () => {
    try {
      const json = await api.getProducts();
      setResponse(json.products);
      setApiState(true)
    } catch (error) {
      setResponse([])
      setApiState(false)
      console.error(error)
    }
  }

  useEffect(() => {
    loadProducts();
  }, [])
  
  const cart = useAppSelector(state => state.cart)
  const addItemCart = (item: any) => {
    const teste = cart.find((product: any) => product.id === item.id)

    if(!teste){
      dispatch( addItem(item) );
    } else {
      console.log(teste)
    }

  }

  return (
    <>
      <C.GlobalStyle />
      <C.TopMenu>
        <C.TopMenuContainer>

          <C.TopMenuLeft>
            <C.TextMKS>MKS</C.TextMKS>
            <C.TextSistemas>Sistemas</C.TextSistemas>
          </C.TopMenuLeft>

          <C.TopMenuRight>
            <C.TopMenuCart onClick={openCartMenu}>

              <C.TopMenuCartIcon src={CartImg} alt="" />
              <C.TopMenuCartQtd> {lenght} </C.TopMenuCartQtd>

            </C.TopMenuCart>
          </C.TopMenuRight>

        </C.TopMenuContainer>

      </C.TopMenu>

      <C.ProductContainer>
        <C.ProductGrid>

          { 
          apiState &&
          
            response.map((item, key) => 
              (
                <GridItem
                  product={item}
                  key={key}
                  addItemCart={addItemCart}
                />
              )
            )
          }
          
        </C.ProductGrid>
      </C.ProductContainer>
      
      <C.Footer><C.FooterText> MKS sistemas © Todos os direitos reservados</C.FooterText></C.Footer>
          {
            cartMenu && 
            <Cart clickFn={openCartMenu} />

          }
      
    </>
  )
}

export default App