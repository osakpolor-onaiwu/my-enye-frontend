import React, { useState } from "react";

export default function Search({ handleChange }) {
  //this component receives the handlechange method from the home component through the filter component
    return (
        <form >
            <div className="input-field ">
                <input
                    placeholder="Search"
                    type="text"
                    name='filter'
                    onChange={handleChange}
                    className="validate browser-default"
                />
            </div>
        </form>
    );
}
