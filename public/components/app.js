import React, {Component} from 'react'

import BookList from './book_list'

import BookDetails from './book_details'

export default class App extends Component{
    render() {
        return(
        <div>  
        <div className="jumbotron jumbotron-fluid">
         <div className="container">
         <h1><center>Welcome to Book Store App</center></h1>
        </div> 
        </div>
        <div className="row">
        <div className="list-group col-sm-4">
        <BookList/>
        </div>
        <div className="list-group col-sm-8">
        <BookDetails/>
        </div>
        </div>
        </div>
        )
    }
}