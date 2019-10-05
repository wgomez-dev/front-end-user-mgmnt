import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';

export default class List extends Component {

  constructor(props) {
      super(props);
      this.state = {user: []};
    }
    componentDidMount(){
      axios.get('http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/')
        .then(response => {
          this.setState({ user: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.user.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">User List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }