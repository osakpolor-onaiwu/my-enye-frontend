import React from 'react'
import Record from "./loopingVariable";
import Search from "./search";
import { Row, Col } from "react-materialize";

const Filter = ({records,filter,handleChange}) => {

    //returns values based on the state of the home component
    //it controls the search and filters
    const output = () => {
        console.log(filter);
      
        switch (filter) {
            case "":
                {
                    const all = records ? (
                        records.map((record) => {
                            return <Record record={record} key={record.id} />;
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return all;
                }
                break;

                //returns all the data
            case "all":
                {
                    const all = records ? (
                        records.map((record) => {
                            return <Record record={record} key={record.id} />;
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return all;
                }
                break;

                //checks the search and filter value, converts them to sentence case and returns the records
                //based on the filter and search box
            default:
                {
                    const Search = records.filter((record) => {
                        const searchValue=filter.toLowerCase().split().map(word=>{
                            return  word.charAt(0).toUpperCase()+word.slice(1);
                        }).join()

                        return (
                            record.FirstName == searchValue ||
                            record.LastName == searchValue
                        );
                    });
                    const SearchResult = Search ? (
                        Search.map((record) => {
                            return <Record record={record} key={record.id} />;
                        })
                    ) : (
                        <h2>No Record Matches {filter}</h2>
                    );
                    return SearchResult;
                }
                break;
        }
    };

    return (
        <div>
            <Row>
                <Col s={12} l={6}>
                    <Search handleChange={handleChange} />
                </Col>
            </Row>
            {output()}
        </div>
    )
}


export default Filter