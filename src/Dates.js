import { useEffect, useState } from "react"
import { Fieldset } from 'primereact/fieldset';

const Dates=()=>{
const [start,setStart]=useState();
const [end,setEnd]=useState();
const [res,setRes]=useState([]);
const [flag,setFlag]=useState(false)

async function getDates() {
    try {
      const response = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`);
      const data = await response.json();    
      console.log(data);
      setRes(data);
      console.log("res " + res)
    } catch (error) {
      alert("failed to fetch");
    }
  }

  async function getDatesP() {
    try {
      const response = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}&className"parashat"`);
      const data = await response.json();    
      console.log(data);
      setRes(data);
      console.log("res " + res)
    } catch (error) {
      alert("failed to fetch");
    }
  }


useEffect(()=>{
    func()
},[res,flag])


function func(){
    console.log("from func")
    console.log("from func res"+res)
    return(<>
        {res.length>0 && res.map((i)=>                     
            <div key={i.title}>
                <h1>{i.title}</h1>
                <div>description {i.description}</div>
                <div>date {i.start}</div>
            </div>        
    )}
    </>) 
}



const handleChange = event => {
    if (event.target.checked) {
      setFlag(true)
      getDatesP()
  };
}


return(
    <div>
        <h1>enter two dates</h1>
        <input type="date" onBlur={(e) => setStart(e.target.value)} placeholder="Start Date"></input>
        <br/>
        <input type="date" onBlur={(e) => setEnd(e.target.value)} placeholder="End Date"></input>
        <br/>
        <br/>
        <div>display all</div>
        <button onClick={()=>{getDates()}}>click</button>
        <div>display "Parashot Shavua" only</div>
        <input type="checkbox" onChange={handleChange}></input>
    </div>
)

}

export default Dates

