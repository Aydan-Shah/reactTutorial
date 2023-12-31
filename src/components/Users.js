import React, { Component } from 'react'
import User from './User'
import UserConsumer from '../context'

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {
          value => {
            const {users} = value;
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
      </UserConsumer>
    )
   
  }
}
export default Users;