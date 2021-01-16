import React, { Component } from "react";
import { connect } from "react-redux";
import GetRecord from "../redux/getRecord";
import { Row, Col } from "react-materialize";
import Filter from "./filter";
import Search from "./search";
import Navbar from "./navbar";
import Pagination from "./pagination";

export class Home extends Component {
    state = {
        filter: "",
        search: "",
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
        //this helps in pagination
        const { record } = this.props;
        const indexOfLastPost =
            this.state.currentPage * this.state.recordPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.recordPerPage;
        const currentPosts = record.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <main>
                <Row>
                    <Col s={12} l={7} className="rightSide">
                        <Row>
                            <Navbar />
                        </Row>

                        <Row id="search">
                            <Col s={12}>
                                <Search handleChange={this.handleChange} />
                            </Col>

                            {/* filter by gender */}

                            <Col s={6} m={6}>
                                <label className="white-text">
                                    Filter by gender
                                </label>

                                <select
                                    default={this.state.filter}
                                    name="filter"
                                    onChange={this.handleChange}
                                    className="browser-default">
                                    <option value="all">All</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Prefer to skip">
                                        Others
                                    </option>
                                </select>
                            </Col>

                            {/* filter by payment */}
                            <Col s={6} m={6}>
                                <label className="white-text">
                                    Filter by Payment Method
                                </label>

                                <select
                                    default={this.state.filter}
                                    name="filter"
                                    onChange={this.handleChange}
                                    className="browser-default">
                                    <option value="all">All</option>
                                    <option value="money order">
                                        Money Order
                                    </option>
                                    <option value="check">Check</option>
                                    <option value="cc">CreditCard</option>
                                    <option value="paypal">Paypal</option>
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Pagination
                                recordPerPage={this.state.recordPerPage}
                                TotalRecord={this.props.record.length}
                                paginate={this.paginate}
                            />
                        </Row>
                    </Col>

                    {/* right side on desktop */}
                    <Col
                        s={12}
                        l={4}
                        id="leftside"
                        className="  hide-on-med-and-down">
                        <h4 className="center black-text">Get Your Records</h4>
                        <p className="black-text">
                            Search through our list of record to get the what
                            you are looking for. you can use the filter or
                            search bar to make it easier and faster
                        </p>
                    </Col>
                </Row>

                {/* card section */}
                <Row className="contain">
                    <Filter
                        recordPerPage={this.state.recordPerPage}
                        TotalRecord={this.props.record.length}
                        paginate={this.paginate}
                        handleChange={this.handleChange}
                        records={currentPosts}
                        filter={this.state.filter}
                        search={this.state.search}
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
