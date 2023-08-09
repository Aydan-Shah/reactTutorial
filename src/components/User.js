import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class User extends Component {
  state = {
    isVisible : false
  }
    static defaultProps = {
        name: "Bilgi yok",
        salary: "Bilgi yok",
        departmen: "Bilgi yok"
    }
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     isVisible : false
    //   }
    // }

   //  React event

  //  bind inside constructor

  //  constructor(props) {
  //   super(props)
  //   this.onClickEvent = this.onClickEvent.bind(this)
  //  }

  // bind with arrow function
  onClickEvent = (number, e) => {
    // console.log(e.target);
    // console.log('test');
    // console.log(this)
    console.log(number)
  }
  // onClickEvent(e) {
  //   // console.log(e.target);
  //   // console.log('test');
  //   console.log(this)
  // }
  render() {
    // Destructing
    const {name,salary, departmen} = this.props;
    const {isVisible} = this.state;
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
                {/* <h4 className='d-inline' onClick={this.onClickEvent.bind(this)}>{name}</h4> */}
                {/* <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4> */}
                <h4 className='d-inline' onClick={this.onClickEvent.bind(this, 34)}>{name}</h4>
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px', color: 'red', cursor:"pointer" }} />
              </div>
              {
                isVisible ?  <div className='card-body'>
                <p className='card-text'> Maas: {salary}</p>
                <p className='card-text'> Departmen: {departmen}</p>
              
          </div> : null
              }
             
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