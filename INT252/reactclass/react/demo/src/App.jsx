import React from 'react';

import Navbar from "./components/Navbar.jsx";
import Cards from './components/Cards.jsx';
const App=()=>{ 
  let data1="hello students"
  var data2=["A","B","c"]
  const data3={
    url:"",
    title:"",
    desc:""
  } 
  const data4=[
    {url:"https://www.tasteofhome.com/wp-content/uploads/2024/03/Cheese-Pizzas_EXPS_FT23_275162_ST_1128_8.jpg",title:"pizza ",Desc:"just looking delicious"},

    {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",title:"react",Desc:"very useful"},

    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTZvLxRsDDFU7bfNDT7U4Bv_k9LShgZgV_w&s",title:"world",Desc:"world world world"}
  ]
  return (
    <>
      <div>
        
        <Navbar/>
        <Cards porps={data4}/>
        <div>
          <p>hello students</p>
          <p>${data1}</p>
          <p>${data4[0].title}</p>
        </div>


      </div>
      
    </>
  );
}

export default App;
