import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ recordPerPage, TotalRecord, paginate }) => {
    const pageNumbers = [];


    // this effects the pagination. the for loop divides
    // the total records by the amount of records we want per page then adds
    // the amount of record gotten to the page number array
    //the onclick event calls the pagination function in home component and passes the number argument to it

    for (let i = 1; i <= Math.ceil(TotalRecord / recordPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="transparent ">
           
            <h6 className='center white-text'> pages</h6>

            <ul className="white-text ">

                {pageNumbers.map((number) => {
                    return (
                        <li key={number} className="white-text " >
                            <NavLink
                                className="white-text page "
                                onClick={() => paginate(number)}
                                to="#">
                                {number}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Pagination;
