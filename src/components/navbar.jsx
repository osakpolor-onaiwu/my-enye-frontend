import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AlignJustify, X } from "react-feather";


const Navbar = () => {
    const initState = {
        show: false,
    };

    const [state, setState] = useState(initState);
    const toggle = () => {
        setState({
            show: !state.show,
        });
    };


    //modal that shows on small screen when the user clicks the bar icon on small screen
    const MobileNavLink = () => {
        
        const mobileLink = (
            <div id="modParent">

                <ul id="modUl">
                    <li className="linka" onClick={toggle}>
                        <X size="24" color="white" />
                    </li>
                    <li>
                        <NavLink className="navli" to="/">
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navli" to="/signUP">
                            SignUp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navli" to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
        
        let dropdown;
        const x = document.getElementById("mobile");
        if (state.show === true) {
            return (dropdown = mobileLink);
        }
    };

    return (
        <div id="parentDiv">

            <ul id="desktop" >
                <a href="#">Records</a>
                <li className="link1">
                    <NavLink className="navlink" to="/">
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/signUP">
                        SignUp
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/login">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/#">
                        Categories
                    </NavLink>
                </li>
            </ul>

            {MobileNavLink()}

            <ul id="mobile" >
                <a style={{ fontSize: "23px" }} href="#">
                    Records
                </a>

                <li onClick={toggle}>
                    <AlignJustify size="24" color="white" />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
