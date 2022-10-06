import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import PaginaContacto from "./Componentes/Contacto/PaginaContacto";
import PaginaError from "./Componentes/PaginaError/PaginaError";
import CartContainer from "./Componentes/CartContainer/CartContainer"
import { CartProvider } from "./Context/CartContext";
import Footer from "./Footer/Footer";
import { Order } from "./Componentes/Order/Order";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
          <header className="App-header">
            <NavBar></NavBar>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/> 
              <Route path="/contacto" element={<PaginaContacto/>}/>
              <Route path="/Item/:detalleJuegos" element={<ItemDetailContainer/>} ></Route>
              <Route path="/juegos/:categoria" element={<ItemListContainer/>} ></Route>
              <Route path="/carrito" element={<CartContainer/>}></Route>
              <Route path="*" element={<PaginaError/>}/>
              <Route path="/order" element={<Order/>}></Route>
            </Routes>
          </main> 
      </div>
    </BrowserRouter>
</CartProvider>
  );
}

export default App;
