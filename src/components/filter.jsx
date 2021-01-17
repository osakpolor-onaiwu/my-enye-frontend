import React from "react";
import { Row, Col } from "react-materialize";
import Pagination from "./pagination";
import RecordView from "./recordview";

const Output = ({ records, filter }) => {
    //returns values based on the state of the home component
    //it controls the search and filters
    const filters = () => {
        switch (filter) {
            //if the state is empty
            case "": {
                const all = records ? (
                    records.map((record) => {
                        return (
                            <div key={record.UserName}>
                                <RecordView
                                   
                                    record={record}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>loading Records ....</div>
                );
                return all;
            }

            case "Male":
                {
                    const male = records.filter((record) => {
                        return record.Gender === "Male";
                    });
                    const Males = male ? (
                        male.map((record) => {
                            return (
                                <div key={record.UserName}>
                                    <RecordView record={record} />
                                </div>
                            );
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return Males;
                }
                break;

            case "Female":
                {
                    const female = records.filter((record) => {
                        return record.Gender == "Female";
                    });
                    const Females = female ? (
                        female.map((record) => {
                            return (
                                <div key={record.UserName}>
                                    <RecordView record={record} />
                                </div>
                            );
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return Females;
                }
                break;

            case "Prefer to skip":
                {
                    const other = records.filter((record) => {
                        return record.Gender == "Prefer to skip";
                    });
                    const Others = other ? (
                        other.map((record) => {
                            return (
                                <div key={record.UserName}>
                                    <RecordView record={record} />
                                </div>
                            );
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return Others;
                }
                break;

            case "money order":
                {
                    const money = records.filter((record) => {
                        return record.PaymentMethod == "money order";
                    });
                    const MoneyOrder = money ? (
                        money.map((record) => {
                            return (
                                <div key={record.UserName}>
                                    <RecordView record={record} />
                                </div>
                            );
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return MoneyOrder;
                }
                break;

            case "check":
                {
                    const check = records.filter((record) => {
                        return record.PaymentMethod == "check";
                    });
                    const Checks = check ? (
                        check.map((record) => {
                            return (
                                <div key={record.UserName}>
                                    <RecordView record={record} />
                                </div>
                            );
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return Checks;
                }
                break;

            case "cc":
                {
                    const Cards = records.filter((record) => {
                        return record.PaymentMethod == "cc";
                    });
                    const CreditCard = Cards ? (
                        Cards.map((record) => {
                            return (
                                <div key={record.UserName}>
                                    <RecordView record={record} />
                                </div>
                            );
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return CreditCard;
                }
                break;

            case "paypal":
                {
                    const Paypal = records.filter((record) => {
                        return record.PaymentMethod == "paypal";
                    });
                    const Paypals = Paypal ? (
                        Paypal.map((record) => {
                            return (
                                <div key={record.UserName}>
                                    <RecordView record={record} />
                                </div>
                            );
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return Paypals;
                }
                break;

            //returns all the data
            case "all":
                {
                    const all = records ? (
                        records.map((record) => {
                            return (
                                <div key={record.UserName}>
                                    <RecordView record={record} />
                                </div>
                            );
                        })
                    ) : (
                        <div>loading Records ....</div>
                    );
                    return all;
                }
                break;

            //checks the search value , converts them to sentence case and returns the records
            //forms a full name by adding first and last name,
            //then check value of  the search and check if it matches the fullName
            //value of the search box
            default:
                {
                    if (filter.length > 0) {
                        const Search = records.filter((record) => {
                            const searchValue = filter
                                .toLowerCase()
                                .split()
                                .map((word) => {
                                    return (
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                    );
                                })
                                .join();

                            const fullName = record.FirstName + record.LastName;

                            return fullName.match(searchValue);
                        });
                        const SearchResult = Search ? (
                            Search.map((record) => {
                                return (
                                    <div key={record.UserName}>
                                        <RecordView record={record} />
                                    </div>
                                );
                            })
                        ) : (
                            <h2 className="black-text">
                                No Record Matches {filter}
                            </h2>
                        );
                        return (
                            <div>
                                <h5 className="black-text">
                                    found {Search.length} results
                                </h5>
                                {SearchResult}
                            </div>
                        );
                    }
                }
                break;
        }
    };

    return <div>{filters()}</div>;
};

export default Output;
