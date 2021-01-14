import React, { useEffect } from "react";
import { AlignJustify } from "react-feather";
import M from "materialize-css";

export default function Navigation() {
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            var elems = document.querySelectorAll(".sidenav");
            var instances = M.Sidenav.init(elems, {});
        });
    }, []);

    return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-4">
                    <a
                        href="#"
                        data-target="slide-out"
                        className="sidenav-trigger show-on-large show-on-small show-on-medium-and-up left">
                        <AlignJustify />
                    </a>
                    <a href="#" className="brand-logo center" center>
                        Records
                    </a>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <li>
                    <a className="subheader">Subheader</a>
                </li>
                <li>
                    <a className="waves-effect" href="#!">
                        Third Link With Waves
                    </a>
                </li>
            </ul>
        </div>
    );
}
