import Datatable from '../components/Datatable';
import classes from   '../components/Emp.module.css';

const Product = props =>{
    return (
        <div className={classes.main} style={{maxHeight:900,width:'100%' ,margin:1}} >
            <Datatable></Datatable>    
     </div>
    )
}

export default Product;