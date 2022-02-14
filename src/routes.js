const UserController = require('./controllers/UserController');

module.exports = [
  {  
    // GET /users
    method: 'GET',
    path: '/users',
    handler: UserController.listUsers,
  },
  {  
    // GET /users/:id
    method: 'GET',
    path: '/users/:id',
    handler: UserController.getUserById,
  },
  {  
    // POST /users
    method: 'POST',
    path: '/users',
    handler: UserController.createUser,
  },
  {  
    // PUT /users
    method: 'PUT',
    path: '/users/:id',
    handler: UserController.updateUser,
  },
  {  
    // DELETE /users
    method: 'DELETE',
    path: '/users/:id',
    handler: UserController.deleteUser,
  }
]