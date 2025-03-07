import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchUsers } from '../../Store/action';

function User() {
  const dispatch=useDispatch();
  const {users,loading,error}=useSelector((state)=>state.form)
  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])

  const handleDelete=(id)=>{
    dispatch(deleteUser(id))
  }
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((el)=>(
          <li key={el.id}>
            {el.userName}-{el.email}-{el.password}
            <button onClick={()=>handleDelete(el.id)}>sil</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User