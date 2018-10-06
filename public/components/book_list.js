import {connect} from 'react-redux'
import React, {Component} from 'react'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class BoookList extends Component{

    renderList(){
        return this.props.bk.map((book)=>{
            return(
                <li
                key={book.title}
                onClick={()=> this.props.sb(book)}
                className="list-group-item list-group-item-dark">
                {book.title}
                </li>
            )

        })
    }

    render(){
        return(
            <div>
              {this.renderList()}
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
    bk:state.books
    }
    
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({sb:selectBook},dispatch)

}


export default  connect(mapStateToProps,mapDispatchToProps)(BoookList)