import '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/assets/Banner-About.scss'
import IMG from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/assets/img/Montagne-forets.png'
import logo from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/assets/img/Group.png'
import { NavLink } from 'react-router-dom'

const Nav = () =>{


      return (
        <nav>
            <div className='header'>
                 <h1 className='title-header'>K<img src={logo} className='logo-kasa'  alt='logo kasa'/>sa </h1>
            <div className='a-menu'>
               <NavLink to='/accueil'>
                Accueil
               </NavLink>
                <NavLink to="/about">
                    A  propos
                </NavLink>
            </div>
            </div>
           

            <div className='IMG1-cover'>
                <img src={IMG} className='IMG-about'/>

</div>

        </nav>
    )
}
  


export default Nav()