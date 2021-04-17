import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import List from "./pages/List";
import ListProduct from "./pages/ListProduct";
import EditProduct from "./pages/EditProduct";
import RegisterProduct from "./pages/RegisterProduct";
import AddTransaction from "./pages/AddTransaction";
import RegisterUser from "./pages/RegisterUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="menu">

      </div>
       
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/transaction" component={AddTransaction} />
          <Route path="/register" component={Register} />
          <Route path="/list" component={List} />
          <Route path="/prod_register" component={RegisterProduct} />
          <Route path="/prod_edit" component={EditProduct} />
          <Route path="/prod_list" component={ListProduct} />
          <Route path="/user_register" component={RegisterUser} />
          <Register />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
