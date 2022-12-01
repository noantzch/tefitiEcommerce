import { useContext } from 'react';
import './App.css'
import CartContextProvider from './context/CartContext';
import { Theme } from './context/Theme';
import Router from './routes';

function App() {
  const {darkmode} = useContext(Theme);
  return (
    <div className={darkmode ? "App-dark": "App"}>
        <CartContextProvider>
        <Router />
        </CartContextProvider>
    </div>
  );
}

export default App;