import classes from './Model.module.css';
import { Fragment } from 'react';
import reactDom from 'react-dom';

const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModelOverlay = props =>{
    
    return <div className={classes.modal}>
        <div  className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');
const Model = props => {
    return <Fragment>
       {reactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
       {reactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
    </Fragment>
}
export default Model;