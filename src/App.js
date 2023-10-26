import React, { useState } from "react";
import './App.css';

function App() {
  const[data,setData]=useState ( [
    {
        id:10,
        name:"Shah Rukh Khan",
        age:"57",
        image:'https://static.toiimg.com/thumb/msid-95470486,width-1280,resizemode-4/95470486.jpg'
    }
    ,
    {
        id:20,
        name:"Thalapathy Vijay",
        age:"49",
        image:'https://static.toiimg.com/thumb/msid-92726815,width-1280,resizemode-4/92726815.jpg'
    }
    ,
    {
        id:30,
        name:"Allu Arjun",
        age:"41",
        image:'https://www.bollywoodhungama.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-11-at-12.28.45-PM-1.jpeg'  
    }
    ,
    {
        id:40,
        name:"Mahesh Babu",
        age:"48",
        image:'https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/media/images/2015/Dec/topimg_29091_mahesh_babu.jpg'
    }
    ,
    {
        id:50,
        name:"Nani",
        age:"39",
        image:'https://static.toiimg.com/thumb/msid-98693677,width-1280,resizemode-4/98693677.jpg'
    }
    ,
    {
        id:60,
        name:"Vijay Sethupathi",
        age:"45",
        image:'https://img.etimg.com/thumb/width-640,height-480,imgsize-56970,resizemode-75,msid-96218309/news/new-updates/vijay-sethupathis-drastic-weight-loss-stuns-fans-see-pics.jpg'
    }
    ,
    {
        id:70,
        name:"Vijay Devarkonda",
        age:"34",
        image:'https://img.mensxp.com/media/content/2022/Sep/Vijay-Deverakonda1200_6315e9c31975f.jpeg'
    },
]);

  return (
    <div className="profile">
      <main className="card">
        <h2>Today Birthday {data.length} 😁</h2>
        {data && data.map((x)=>{
        return(
          <section className="cont" key={x}>
            <img src={x.image}></img>
            <div className="sub-cont">
              <label>{x.name}</label>
              <p>{x.age}</p>
            </div>
          </section>
        );
      })}
         <button onClick={()=>setData([])}>Clear</button>
      </main>
    </div>
  );
}
export default App