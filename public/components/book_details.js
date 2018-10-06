import React, {Component} from 'react'
import {connect} from 'react-redux'

class BoookDetails extends Component{
    render(){
        if(!this.props.bk){
            return <div>SELECT THE BOOK TO GET STARTED</div>
        }
        return(
            <div>
                <h2>Details of Book are-:</h2>
                <div>Title: {this.props.bk.title}</div>
                <div>Pages:{this.props.bk.pages}</div>
                <div>Author:{this.props.bk.Author}</div>  
                <div>Author:{this.props.bk.Language}</div>  
                <div>Author:{this.props.bk.Publisher}</div>       
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        bk:state.activeBook
    }
}

export default connect(mapStateToProps)(BoookDetails)