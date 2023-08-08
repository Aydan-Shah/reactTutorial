import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
        {/* <div>
            <ul>
                <li>Isim: {name}</li>
                <li>Departman: {departmen}</li>
                <li>Maas: {salary}</li>
            </ul>
        </div> */}
        <div className='col-md-8 mb-4'>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4 className='d-inline'>{name}</h4>
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px', color: 'red', cursor:"pointer" }} />
              </div>
              <div className='card-body'>
                    <p className='card-text'> Maas: {salary}</p>
                    <p className='card-text'> Departmen: {departmen}</p>
              </div>
            </div>
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