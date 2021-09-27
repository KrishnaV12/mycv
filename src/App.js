import react from "react";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import "./sidebar.css";
import Navbar from "./Navbar";
import { BrowserRouter,Route, Redirect, Switch } from "react-router-dom";
import Project from "./Project"
import Resume from "./Resume"


const App=()=>{
    return(
        <>
        <BrowserRouter>
        <div className="App">
         <div className="container">
          <div className="row">
           <div className="col-lg-3" >
            <Sidebar/>
            
          </div>
          <div className="col-lg-9 main_portion"><Navbar/>
          <Switch>

          <Resume/>
          <Route path="/Project">
          <Project/>
          </Route>
          </Switch>
          
          
          </div>
        </div>
        </div>
        </div>
        </BrowserRouter>
        </>
    )

}

export default App;