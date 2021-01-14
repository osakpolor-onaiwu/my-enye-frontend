import React, { Component } from "react";
import { connect } from "react-redux";
import GetRecord from "../redux/getRecord";
import { Row, Col } from "react-materialize";
import Filter from "./filter";
import Pagination from "./pagination";
export class Home extends Component {
    state = {
        filter: "all",
        currentPage: 1,
        recordPerPage: 20,
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
        console.log(this.state.filter);
    };

    paginate = (pageNumber) => {
        this.setState({
            ...this.state,
            currentPage: pageNumber,
        });
    };
    componentDidMount() {
        this.props.GetRecord();
    }

    render() {
        const { record } = this.props;
        const indexOfLastPost =
            this.state.currentPage * this.state.recordPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.recordPerPage;
        const currentPosts = record.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <main>
                <Row>
                    <section className="col s6 m4">
                        <label>Filter by gender</label>
                        <select
                            default={this.state.filter}
                            name="filter"
                            onChange={this.handleChange}
                            className="browser-default">
                            <option value="all">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer to skip">Others</option>
                        </select>
                    </section>

                    <section className="col s6 m4">
                        <label>Filter by Payment Method</label>
                        <select
                            default={this.state.filter}
                            name="filter"
                            onChange={this.handleChange}
                            className="browser-default">
                            <option value="all">All</option>
                            <option value="money order">Money Order</option>
                            <option value="check">Check</option>
                            <option value="cc">CreditCard</option>
                            <option value="paypal">Paypal</option>
                        </select>
                    </section>
                </Row>
                <Row>
                    <Pagination
                        recordPerPage={this.state.recordPerPage}
                        TotalRecord={this.props.record.length}
                        paginate={this.paginate}
                    />
                </Row>
                <Row>
                    <Filter
                        handleChange={this.handleChange}
                        records={currentPosts}
                        filter={this.state.filter}
                    />
                </Row>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        record: state.records,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetRecord: () => {
            dispatch(GetRecord());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// case searchQuery: {
//                 {
//                     const Search = records.filter((record) => {
//                         return (
//                             record.Firstname === searchQuery ||
//                             record.LastName === searchQuery
//                         );
//                     });
//                     const SearchResult = Search ? (
//                         Search.map((record) => {
//                             return <Record record={record} key={record.id} />;
//                         })
//                     ) : (
//                         <div>Loading records</div>
//                     );
//                     return SearchResult;
//                 }
//             }
