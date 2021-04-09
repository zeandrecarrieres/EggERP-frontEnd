import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Home from './pages/Home'
import List from './pages/List'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>EggERP</h1>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register"  component={Register} />
        <Route path="/list"  component={List} />
      <Register />
      </Switch>
     
      
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
