import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonId = this.onChangePersonId.bind(this);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            person_id: '',
            person_name: '',
        }
    }


    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  person_id: response.data.id, 
                  person_name: response.data.name});
            })
            .catch(function (error) {
                console.log(error);
            })
      }

    onChangePersonId(e) {
      this.setState({
        person_id: e.target.value
      });
    }
    onChangePersonName(e) {
      this.setState({
        person_name: e.target.value
      })  
    }
  
    onSubmit(e) {
      e.preventDefault();
      const obj = {
        id: this.state.person_id,
        name: this.state.person_name,
      };
      axios.post('http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/', obj)
        .then(res => console.log(res.data));
      console.log(obj);
      console.log(`The values are ${this.state.person_id}, ${this.state.person_name}`)
      this.setState({
        person_id: '',
        person_name: ''
      })
    }
   
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Id:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.person_id}
                          onChange={this.onChangePersonId}
                          />
                    </div>
                    <div className="form-group">
                        <label>Business Name: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.person_name}
                          onChange={this.onChangePersonName}
                          />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
