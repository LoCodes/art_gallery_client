import React, { Component } from 'react'
import {fetchUsers} from '../actions/UsersAction'
import { connect } from 'react-redux'
import User from './User'


class UsersContainer extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    }
    render() {
        return (
            <div>
                Logged In: 
                <User /> 
                
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer)
