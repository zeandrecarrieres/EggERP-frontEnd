import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import List from "./pages/List";
import ListProduct from "./pages/ListProduct";
import RegisterProduct from "./pages/RegisterProduct";
import AddTransaction from "./pages/AddTransaction";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="menu">

      </div>
       
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/transaction" component={AddTransaction} />
          <Route path="/register" component={Register} />
          <Route path="/list" component={List} />
          <Route path="/prod_register" component={RegisterProduct} />
          <Route path="/prod_list" component={ListProduct} />
          <Register />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
