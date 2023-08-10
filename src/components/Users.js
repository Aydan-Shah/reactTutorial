import React, { Component } from 'react'
import User from './User'

class Users extends Component {
  render() {
    const {users} = this.props
    return (
      <div>
        {
        // console.log(users)
            users.map(user => {
                return (
                    <User 
                    key = {user.id}
                    name = {user.name}
                    salary = {user.salary}
                    departmen = {user.departmen}
                    />
                )
            })
        }
      </div>
    )
  }
}
export default Users;