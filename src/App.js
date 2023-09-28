import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import HomeRoutes from "./routes";

function App() {
  return (
   <BrowserRouter>
     <HomeRoutes/>
   </BrowserRouter>
  );
}

export default App;
