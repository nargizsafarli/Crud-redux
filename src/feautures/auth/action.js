
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
  }
};


export const addUser = (userData) => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users",
     {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  dispatch({ type: "ADD_USER_SUCCESS", payload: data });
};

export const deleteUser = (id) => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  });
  dispatch({ type: "DELETE_USER_SUCCESS", payload: id });
};


export const updateUser = (user) => async (dispatch) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  );
  const data = await response.json();
  dispatch({ type: "UPDATE_USER_SUCCESS", payload: data });
};
