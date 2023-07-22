import React, { useContext } from "react";
import { NavLink, useNavigate, useRoutes } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useAuth } from "../hoooks/auth.hook";



export const Navbar = () =>{
    const {token,login,logout, userId} = useAuth();
    const isAuthenticated = !!token


    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        navigate('/');
        window.location.reload();
    }
    return(
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo">Коллекции</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/collections">Коллекции</NavLink></li>
                {isAuthenticated == true && <li><NavLink to="/create">Создать</NavLink></li>}
                {isAuthenticated == true &&<li><NavLink to="/links">Ссылки</NavLink></li>}
                {isAuthenticated == false && <li><NavLink to="/auth">Авторизация</NavLink></li>}
                {isAuthenticated == true && <li><a href="/" onClick={logoutHandler} >Выход</a></li>}
            </ul>
            </div>
        </nav>
    )
}