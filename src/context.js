import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider Consumer

export class UserProvider extends Component {
    state = {
        users: [
           {
            id: 1,
            name: "Aydan",
            salary: "5000",
            departmen: "Bilisim"
           },
           {
            id: 2,
            name: "Gozel",
            salary: "3000",
            departmen: "Pazarlik"
           },
           {
            id: 3,
            name: "Kimse",
            salary: "6000",
            departmen: "Uretim"
           },
        ]
      }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
