import React, { useState } from "react";
import './index.css';

function Searchcontent(){
    const [search, setSearch] = useState("")

    function handleSubmit(event) {
        console.log(search);
        event.preventDefault();
    }
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
 return(
     <form onSubmit={handleSubmit}>
         <label>
             Busca:
          <input type="text" onChange={handleChangeSearch} value={search}/>
         </label>
         <input type="submit" value="Enviar" />
     </form>
 );   
};

export default Searchcontent;