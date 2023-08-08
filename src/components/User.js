import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    static defaultProps = {
        name: "Bilgi yok",
        salary: "Bilgi yok",
        departmen: "Bilgi yok"
    }
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
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    departmen: PropTypes.string.isRequired
}
// User.defaultProps = {
//     name: "Bilgi yok",
//     salary: "Bilgi yok",
//     departmen: "Bilgi yok"
// }
export default User;