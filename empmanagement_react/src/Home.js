//import logo from './logo.svg';
import Datatable from './components/Datatable';
import classes from   './components/Emp.module.css';
import logo from './components/assets/img/1.webp'
import Product from './pages/Products';
import Welcome from './pages/Welcome';
const Home = props =>{
    return (
        
        <div className={classes.main} style={{maxHeight:1000,width:'100%' ,margin:1}} style={{ backgroundImage: `url(${logo})`}}>
           {/* { <Datatable></Datatable> } */}    
        </div>
         
     
    )
}
export default Home;