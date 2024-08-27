
import React,{useState,useEffect} from "react";
import './../styles/App.css';



const App = () => {

  const [data,setData] = useState([]);
  const [fetchUser,setFetchUser]=useState(false);

  const handleClick = () =>{
    setFetchUser(true);
  }


  useEffect(() =>{
    if(fetchUser){
      const fetchData = () => {
        fetch("https://reqres.in/api/users")
          .then(response => response.json())
          .then(json => {
            setData(json.data);
          })
          .catch(error => console.error('Error fetching data:', error));
      };
      fetchData();
    }
  },[fetchUser])

console.log(data);
console.log("ram")

  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
          <h3 style={{textDecoration:"underLine",marginTop:"0px"}}>OUTPUT</h3>
          <p style={{marginTop:"0px"}}>Blue Whales</p>
        </div>
        <button style={{backgroundColor:"teal",width:"120px",height:"30px" ,}}><p style={{margin:"auto"}} onClick={handleClick}>Get User List</p></button>
      </div>

      <table  style={{width:"100%"}}>
        <thead >
          <tr style={{textAlign:"center",backgroundColor:"black",color:"white",display:"flex",justifyContent:"space-around",height:"30px"}}>
          <th style={{marginTop:"5px"}}>First Name</th>
          <th style={{marginTop:"5px"}}>Last Name</th>
          <th style={{marginTop:"5px"}}>Email</th>
          <th style={{marginTop:"5px"}}>Avatar</th>
          </tr>
        </thead>
        <tbody>
        {data.map((user) => (
            <tr key={user.id} style={{ textAlign: "center", display: "flex", justifyContent: "space-around" }}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ width: "50px", borderRadius: "50%" }} />
              </td>
            </tr>
          ))}

        </tbody>

      </table>

     
    </div>
  )
}

export default App
