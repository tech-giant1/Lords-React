import './NavBar.css';
import { MENUS } from '../../Constants/routes';
import { NavLink } from 'react-router-dom';

const NavBarComponent = () => {
    return(
        <div className='nav-bar'>
          <div className="title">LIET</div>
          <div className='nav-btns-container'>
            {
              MENUS.map((item, index) => 
                <NavLink key={index} to={item.path}>
                  {item.title}
                </NavLink>
              )
            }
          </div>
        </div>
    )
}

export default NavBarComponent;