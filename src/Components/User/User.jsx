import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./user.css";
import { deleteUser, fetchUsers, updateUser } from "../../feautures/auth/action";
import { useNavigate } from "react-router-dom";

function User() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.form);
  
  console.log(users, "users");
  const [editingUser, setEditingUser] = useState(null);
  const [editedData, setEditedData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditedData({
      name: user.name,
      email: user.email,
      age: user.age || null,
    });
  };

  const handleUpdate = () => {
    dispatch(updateUser({ id: editingUser, ...editedData }));
    setEditingUser(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-container">
      <button className="addUser " onClick={() => navigate("/")}>
        Add User
      </button>
      <table border="1" className="table-container">
        <thead className="head">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editingUser === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editedData.name}
                      onChange={(e) =>
                        setEditedData({
                          ...editedData,
                          name: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={editedData.email}
                      onChange={(e) =>
                        setEditedData({ ...editedData, email: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedData.age}
                      onChange={(e) =>
                        setEditedData({ ...editedData, age: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button
                      onClick={handleUpdate}
                      style={{ backgroundColor: "blue", color: "white" }}
                    >
                      Update
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age ? user.age : "Null"}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(user)}
                      style={{ backgroundColor: "blue", color: "white" }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        marginLeft: "5px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
