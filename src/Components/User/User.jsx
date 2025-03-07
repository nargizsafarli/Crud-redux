import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchUsers, updateUser } from '../../Store/action';

function User() {
  const dispatch=useDispatch();
  const {users,loading,error}=useSelector((state)=>state.form)
   const [editingUser, setEditingUser] = useState(null);
    const [editedData, setEditedData] = useState({ name: "", email: "", age: "" });

  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])

  const handleDelete=(id)=>{
    dispatch(deleteUser(id))
  }

   const handleEdit = (user) => {
      setEditingUser(user.id);
      setEditedData({ name: user.name, email: user.email, age: user.age });
    };
  
    const handleUpdate = () => {
      dispatch(updateUser({ id: editingUser, ...editedData }));
      setEditingUser(null);
    };

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div>
    <h2>İstifadəçilər</h2>
    {users.length === 0 ? (
      <p>İstifadəçi yoxdur.</p>
    ) : (
      users.map((user) => (
        <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          {editingUser === user.id ? (
            <>
              <input
                type="text"
                value={editedData.name}
                onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
              />
              <input
                type="email"
                value={editedData.email}
                onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
              />
              <button onClick={handleUpdate}>Yenilə</button>
            </>
          ) : (
            <>
              <p>{user.name} - {user.email}</p>
              <button onClick={() => handleEdit(user)}>Redaktə</button>
              <button onClick={() => handleDelete(user.id)}>Sil</button>
            </>
          )}
        </div>
      ))
    )}
  </div>
  )
}

export default User