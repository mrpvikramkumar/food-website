import {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import foodImage from '../../Assests/food.jpeg'
import classes from './Header.module.css'

const moveHandle= ()=>{
    window.location = 'default.aspx'; 
}

const Header =( props) =>{
    return <Fragment>
        <header className={classes.header}>
           <div className={classes.headerContent}>
           
                <h2 className={classes.heaading} onClick={moveHandle}>😋 Meals on Website 😋</h2>
           <h5 className={classes.para}>"రుచి కర్మైన తెలంగాణ వంటలు"</h5>
           </div> 
            <HeaderCartButton onClick={props.onShowCart}/>
            {/* <button>Cart</button> */}
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt='indian-food'/>
        </div>
    </Fragment>
}

export default Header;

// <Link to="/dashboard">
//      <button type="button">
//           Click Me!
//      </button>
//  </Link>