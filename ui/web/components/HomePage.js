import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './homePage.css';

export default function HomePage() {
    const [data,setData]=useState([]);

   const  logout=()=>{
    //    window.sessionStorage.removeItem("isLoggin");
       sessionStorage.setItem( "isLoggin"," ");
       sessionStorage.clear();
        window.location.href="/";
    }

    useEffect(() => {
        //some  cors errors in my pc
  
      axios.get("http://localhost/Trainee-Associate-Assignment/bizlogic/datalist.php")
      .then((response)=>{
          console.log(response.data);
        setData(response.data);
      })
      .catch((e)=>{
        console.log(e);
      });
  
     
    }, [])
    return (
       
            <div className="container">

                <button class="btn-primary" onClick={logout}>logout</button>
                <div className="headerishan" >
                    <h1>User Details</h1>
                   
                </div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>

  
            {
        data.map((item)=>(
        <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
        </tr>
        ))
        }

        </tbody>
        </table>          
        </div>
    )
}
