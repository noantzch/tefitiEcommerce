import './App.css'
import CartContextProvider from './context/CartContext';
import ThemeProvider from './context/Theme';
import Router from './routes';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <CartContextProvider>
        <Router />
        </CartContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;