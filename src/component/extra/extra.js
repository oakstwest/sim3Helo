import React, { Component } from 'react';
import axios from 'axios';

import Routes from './route'
import Nav from './component/Nav/Nav';
import { updateUser } from "./ducks/reducer";
import { connect } from "react-redux";


class extra extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        user: {}
      }
    }
    async componentDidMount() {
      let userData = await axios.get('/api/user-data');
      this.props.updateUser(userData.data)
    }


  render() {
    let {user}= this.props
    return (
      <div>
        user.user_name ? (
          <div>
            <p>user_name:{user.user_name}</p>
            <p>password:{user.password}</p>
            <p>picture:{user.picture}</p>
          </div>
        )
        <div>
          <Nav />
        </div>
        <Routes />
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    user: state.user
  }
}
export default connect(mapStateToProps,{updateUser});