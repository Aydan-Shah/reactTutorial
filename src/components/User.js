import React, { Component } from 'react'

class User extends Component {
  render() {
    // Destructing

    const {name,salary, departmen} = this.props;
    return (
      <div>
        {/* <form>
            <input type='text' />
            <button>Gonder</button>
        </form> */}
        <div>
            <ul>
                <li>Isim: {name}</li>
                <li>Departman: {departmen}</li>
                <li>Maas: {salary}</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default User;