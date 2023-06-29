
import './App.css';
import Navbar from "./component/Navbar";
import Create from "./component/Create";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Read from "./component/Read";
import Update from './component/Update';
function App() {
  return (
    <div className="App">
     <h1>hello</h1>
     <BrowserRouter>
     <Navbar/>
     <Routes>
    
     <Route path="/" element ={ <Create/>}/>
     <Route path="/read" element ={ <Read/>}/>
     <Route path="/edit/:id" element ={ <Update/>}/>
    
    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
