import React ,{useState} from "react";
import data from "./datas.json";

export default function Data() {
  const [ndata, nset] = useState(data);
   const handleclick=()=>{
    nset([]);
   }

   const Handleremove =(nameId)  =>{
    nset(ndata.filter( name=>name.id!==nameId)) 
   }


   
   const Handleupdate =(nameId)  =>{
    nset(ndata.map(items =>{
      if(items.id ===nameId)
      {
        return {name :"new name "}
      }
      else{
        return items ;
      }
    })) 
   }

  return (
    <>
      <ul>
      {
         ndata.map(abc=> (
          <li key={abc.id}>{abc.name}
          
          <br/>
          <button onClick={()=>Handleremove(abc.id)}> Remove </button>
          <button onClick={()=>Handleupdate(abc.id)}> Update </button>
          
          </li>
         
          ) )
          
          }
      </ul>

      <button onClick={handleclick}>Clear </button>
    </>
  );
}
