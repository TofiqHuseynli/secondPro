import React from "react";
import "../style.css";
import Add from "../components/Add";


function Employers() {
  const [employer, setEmployers] = React.useState([]);

  const data = async () => {
    const eployers = await fetch(" http://localhost:8000/blogs");
    const eployers2 = await eployers.json();

    if (eployers.status == 200 && eployers.ok) {
      setEmployers(eployers2);
    } else {
    }
  };

  React.useEffect(() => {
    data();
  }, []);
  return (
    <>
      <Add/>
      <table>
        <tr className="head">
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>

        {employer.map((item, key) => (
          <tr className="elements" key={key}>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Employers;
