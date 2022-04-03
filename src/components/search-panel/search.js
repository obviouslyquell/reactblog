import React, { Component } from "react";

export default class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(e){
        const term = e.target.value;
        this.setState({term})       // === this.setState({term: term}) look ES6
        this.props.onUpdateSearch(term)
    }

    render(props){
        return (
            <input
            className="search-input form-control"
            type="text"
            placeholder="Поиск"
            onChange={this.onUpdateSearch}/>  
        )
    }
}
