import Navigation from './Navbar/Navigation';
import User from './Navbar/User';
import {useRouteMatch} from "react-router-dom";
import TopSearch from './Navbar/TopSearch';
import LibFilter from './Navbar/LibFilter';
import {Icon} from 'components/Icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';





export default function Navbar() {
	const searchRoute = useRouteMatch('/search')

		const libRoute = useRouteMatch('/collection')

    return(
      <nav className="h-[3.75rem] flex items-center justify-between px-8">
      {/* <a href="javascript:void(0);" className="openbtn" >
      <i class="fa fa-bars"></i>
       </a>  */}

        <Navigation />
        <div className='flex justify-between' id='m_menu'>
        <NavLink activeClassName="!text-white " to={"/"} exact className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {<Link to="/Home"></Link> ? <Icon name="acthome"/> : <Icon name="home"/>}
        </NavLink>
        <NavLink activeClassName="!text-white" to={"/search"} className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {<Link to="/Search"></Link> ? <Icon name="actsearch"/> : <Icon name="search"/>}
        </NavLink>
        <NavLink activeClassName="!text-white" to={"/collection"} className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {<Link to="/Collection"></Link> ? <Icon name="actcollection"/> : <Icon name="lib"/>}
        </NavLink>



        </div>
        {searchRoute &&(<TopSearch /> )}
        {libRoute &&(<LibFilter /> )}
        <User />
      </nav>
    )
  }