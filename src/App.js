import React, {Component} from 'react';
import Users from './components/users';

import './bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import List from './components/list.component';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/')
    .then(res => res.json())
    .then((data) => {
      console.log("data "+data)
      this.setState({ users: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">User Managment</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/list'} className="nav-link">List</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to User Managment</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/list' component={ List } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
