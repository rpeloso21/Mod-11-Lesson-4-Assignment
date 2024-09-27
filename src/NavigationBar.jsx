import {Link, NavLink } from 'react-router-dom';

function NavigationBar () {
    return(
        <nav>
            <NavLink to={'/Home'} activeClassName='active'>Home</NavLink>
            <NavLink to={'/Browse'} activeClassName='active'>Browse Characters</NavLink>
            <NavLink to={'/Comics'} activeClassName='active'>Comics</NavLink>
        </nav>
    )
}

export default NavigationBar