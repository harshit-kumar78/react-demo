import { useEffect, useState } from "react";
import axios from 'axios'
const FetchData =()=>{
    //state variables
    const [id,setId] = useState('');
    const[data,setData]=useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users/'

    const fetchData = ()=>{
        axios.get(url+id).then((res)=>{
            setData(res.data);
        }).catch(err=>console.log(err))  
    }
     useEffect(() => {
        fetchData();
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault();
    fetchData();
  } 
    return (<div>
           <form onSubmit={handleSubmit}>
             <label>Enter ID:</label>
            <input className="form-control" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button type="submit">submit</button>
           </form>
            <div className="result">
                <p>name:{data.name}</p>
                <p>email:{data.email}</p>
            </div>

    </div>)
}

export default FetchData;