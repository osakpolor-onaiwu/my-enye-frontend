import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ recordPerPage, TotalRecord,paginate }) => {
    const pageNumbers = [];


    // this effects the pagination. the for loop divides
    // the total records by the amount of records we want per page then adds
    // the amount of record gotten to the page number array
    //the onclick event calls the pagination function in home component and passes the number argument to it
    
    for (let i = 1; i <= Math.ceil(TotalRecord / recordPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="transparent">
            <ul className="pagination">
                {pageNumbers.map((number) => {
                    return (
                        <li key={number}>
                            <NavLink 
                            onClick={()=>paginate(number)} 
                            to="!#">
                                {number}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
