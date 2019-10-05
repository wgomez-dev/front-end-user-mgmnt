import React from 'react'

const Users = ({ users }) => {
    return (
        <div>
          <center><h1>User List</h1></center>
          {users.map((user) => (
            <div className="card">
              <div className="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{user.id}</h6>
                <p class="card-text">{user.name}</p>
              </div>
            </div>
          ))}
        </div>
      )
};

export default Users