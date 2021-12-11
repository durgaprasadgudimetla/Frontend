import react from "react";
import mealImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{
    return (
        <react.Fragment>
            <header className={classes.header}>
                <h2>react meal</h2>
                <HeaderCartButton onClick={props.onCartShown}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="Good food"></img> 
            </div>
        </react.Fragment>
    )
}
export default Header;