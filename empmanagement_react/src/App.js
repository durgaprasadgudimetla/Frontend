import { BrowserRouter as Router ,Link,NavLink,Route,Switch,Redirect} from "react-router-dom";
import Home from "./Home";
import Product from "./pages/Products";
import Welcome from "./pages/Welcome";
import classes from   './components/Emp.module.css';
import headerclass from './headermenu.module.css';

function App() {
   // style={{ backgroundImage: `url(${logo})`}}
  return (   
     <Router>
        <div className={classes.container}>
       
       <div className={classes.header} style={{padding:10}}>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div>
                    </nav>
                </header>
           
       </div>
       <div className={classes.sidemenu}>

       <header className={headerclass.header}>
         <nav>
            <ul>
               <li>
                  <NavLink activeClassName={headerclass.active} to="/">home</NavLink>
               </li>
               <li>
                  <NavLink activeClassName={headerclass.active} to="/welcome">welcome</NavLink>
               </li>
               <li>
                  <NavLink activeClassName={headerclass.active} to="/product">product</NavLink>
               </li>
            </ul>
         </nav>
       </header>
          
       </div>
          <Switch> 
         <Route path="/" exact><Redirect to='/home'></Redirect></Route>
         <Route path="/home"   component={Home}/>
         <Route path="/product"  component={Product}/> 
         <Route path="/welcome"  component={Welcome}/>
         </Switch> 
               <div className={classes.footer} style={{padding:5}}>
               footer
             </div> 
         </div>
    </Router>
  );
}

export default App;
