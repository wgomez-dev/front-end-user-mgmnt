import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/'+this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))

        window.location.reload();
    }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <Link onClick={this.delete} to={'/list'} className="btn btn-danger">Delete</Link>
          </td>
        </tr>
    );
  }
}

export default TableRow;