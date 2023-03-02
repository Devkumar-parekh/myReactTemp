import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const MyNav = (props) => {
  return (
    <>
      <li className="nav-item">
        <NavLink className={`nav-link ${props.mycolor}`} to='/'>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={`nav-link ${props.mycolor}`} to='/gallery'>Gallery</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={`nav-link ${props.mycolor}`} to='/user'>User Page</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={`nav-link ${props.mycolor}`} to='/axiospage'>AxiosPage</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={`nav-link ${props.mycolor}`} to='/about'>About</NavLink>
      </li>
    </>
  );
}


function NavBar() {
  const [searchIp, setSearchIp] = useState();

  const updateSearchip = (e) => {
    setSearchIp(e.target.value);
  }
  return (
    <>
    <div className="container fs-5">
        <nav className="my-5 row d-flex align-items-center">
          <a className="col-sm-2 navbar-brand " href="#">
            <img src="https://picsum.photos/200/100" alt="Avatar Logo" className="thumbnail rounded-pill img-fluid"/> 
          </a>
          <ul className="col-sm-8">
            <div className="row g-2">
              <ul className="col-sm-12 nav nav-tabs nav-justified">
                <MyNav mycolor=''/>
              </ul>
            </div>
          </ul>
          <div className="col-sm-2">
            <input className="w-100" type='text' name="serachbar" placeholder="Search..." value={searchIp} onChange={updateSearchip} />
          </div>
        </nav>
    </div>
      <div className="fs-4 font-monospace">
        <img src={searchIp} alt=""/>
        
      <Outlet />
      </div>
      
      <footer className="bg-dark  fs-5">
        <ul className=" navbar nav nav-pills nav-justified p-5 mt-5">
          <MyNav mycolor='text-light'/>
        </ul>
      </footer>
    </>
    
  );
}

export default NavBar;
