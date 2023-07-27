import React from 'react'
import '../style.css'

function Employers() {

    const [employer,setEmployers]=React.useState([]);
    const array = [{name:"to",age:22},{name:"to",age:22}]
  
    console.log(employer)
    

    const data = async ()=>{
        const eployers = await fetch("https://jsonplaceholder.typicode.com/users")
        const eployers2 = await eployers.json()

        if(eployers.status==200 && eployers.ok){
            setEmployers(eployers2)
        }else{

        }
    }

    React.useEffect(()=>{
        data()
    },[])
  return (
    
       
        <table>
            <tr className='head'>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            
         
   
   {employer.map((item)=>(

    
        <tr className='elements'>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
        </tr>
        
       
   )
       
    )}

</table>
    
  )
}

export default Employers
