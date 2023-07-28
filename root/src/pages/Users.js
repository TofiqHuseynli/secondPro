import { React, useEffect, useState } from "react";

function Users() {
  const [user, setUser] = useState([]);

  const dataUser = async () => {
    const users = await fetch(" http://localhost:8000/blogs");
    const users2 = await users.json();
    setUser(users2);
  };

  useEffect(() => {
    dataUser();
  },[]);
  return (
    <div>
      <table>
        <tr>
          <th>Users</th>
        </tr>
        {user.map((item, key) => (
            <>
          <tr key={key}>
            <td>{item.username}</td>
          </tr>;
          </>
        ))}
      </table>
    </div>
  );
}

export default Users;
