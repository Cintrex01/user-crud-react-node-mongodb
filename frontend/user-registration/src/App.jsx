import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './App.css'
import { MdDelete } from "react-icons/md";
import api from '../services/api';

function App() {

  const [users,setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/users')
    setUsers(usersFromApi.data)
    console.log(users)
  }

  async function createUsers(){
    await api.post('users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
      
    })
    getUsers();
  }

  async function deleteUsers(id){
    await api.delete('/users/'+id, {
    })
    getUsers()
  }

  useEffect(() => {
    getUsers()
    
  }, [])
  

  return (
    <>
      <div className='container'>
        <div className='form'>
          <form>
            <h1>User Registration</h1>
            <div className='inputs'>
              <input type="text" placeholder='Name' name='name' ref={inputName}/>
              <input type="number" placeholder='Age' name='age' ref={inputAge}/>
              <input type="email" placeholder='Email' name='email' ref={inputEmail}/>
            </div>
            <div className='register-btn'>
              <button type='button' onClick={createUsers}>Register</button>
            </div>
          </form>
        </div>

        {users.map(user => (
        <div key={user.id} className="user-info">
          <div className="user-data">
            <h3>Name: <span>{user.name}</span></h3>
            <h3>Age: <span>{user.age}</span></h3>
            <h3>Email: <span>{user.email}</span></h3>
          </div>
          <div className="delete-btn">
            <button onClick={() => deleteUsers(user.id)}><i><MdDelete /></i></button>
          </div>
        </div>
      ))}
        
      </div>
    </>
  )
}

export default App
