import "./App.css";
import Navbars from "./components/Navbars";
import Router from "./components/Router";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbars />
        <Router />
      </ShopContextProvider>
    </div>
  );
}

export default App;
