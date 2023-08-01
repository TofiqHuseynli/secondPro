import React from "react";
import "../style.css";
import Add from "../components/Add";
import Delete from "../components/Delete";


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

  
    async function handleDelete(id){
      await fetch(`http://localhost:8000/blogs/${id}`,
      {method: 'DELETE'});
      data()
    }
 



  return (
    <>
      <Add data={data}/>
      <Delete/>
      <table>
        <tr className="head">
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>

        {employer.map((item, key) => (
          <tr className="elements" key={item.id}>
            <td>{item.name} </td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td className="btn-data"><button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Del</button></td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Employers;
