import { useState } from "react";
import "./style.css";

const jsondata = [
    { id:"1", date:"22-03-2023", description: "this is two desc", name: "test2" , amount:"300"},
    { id:"2", date: "21-03-2023", description: "this is three desc", name: "test3" , amount:"400"},
    { id:"3", date: "20-03-2023", description: "this is four desc", name: "test4" , amount:"500"},
    {  id:"4", date: "19-03-2023", description: "this is five desc", name: "test5" , amount:"600"},
    { id:"5", date: "18-03-2023", description: "this is six desc", name: "test6" , amount:"200"},
  ];

  
function App() {
  const [filterdate , setfilterdate] = useState();
  const [allvalue, setval] = useState(jsondata);

  const filterdatehandler = (selecteDate) =>{
       setfilterdate(selecteDate.target.value);
  }
  const handleamount = () =>{
    const finalsort =  jsondata.sort((a ,b )=>{
       return  b.amount - a.amount
    }).map(data => {
           return data;
     })
     setval(finalsort);
  }

  const  handlesubmitfilter = () =>{
    const finaloutput =  jsondata.filter( finaldate =>{
            const myarray = filterdate.split("-");
            let year  = myarray[0]
            let month = myarray[1]
            let day   = myarray[2]
            const finaldateformat = day+"-"+month+"-"+year;
            return finaldate.date === finaldateformat;
    });
   
     setval(finaloutput);
  }

 

  return (
    <div>
      <h1>Table</h1>
      <center>
        <input type="date" name="date" id="date" onChange={filterdatehandler} pattern="\d{1,2}/\d{1,2}/\d{4}" />
        &nbsp;
        <button name="filter" id="filter" onClick={handlesubmitfilter}>
          filter
        </button>
      </center>
      <br />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Name</th>
            <th><button onClick={handleamount}>Amount</button></th>
          </tr>
        </thead>
        <tbody>
          {
          allvalue.map((datas,index) => {
            return (
              <tr key={index}>
                <td>{datas.date}</td>
                <td>{datas.description}</td>
                <td>{datas.name}</td>
                <td>{datas.amount}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
