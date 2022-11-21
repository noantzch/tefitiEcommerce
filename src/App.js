import './App.css'
import CartContextProvider from './context/CartContext';
import Router from './routes';

function App() {
  
  return (
    <div className="App">
        <CartContextProvider>
        <Router />
        </CartContextProvider>
    </div>
  );
}

export default App;