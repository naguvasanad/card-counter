import {  useState } from 'react';
import './App.css';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { BiSolidQuoteRight } from 'react-icons/bi';


function App() {
  const list = [
    {
      img: "https://course-api.com/images/people/person-1.jpeg",
      name: "susan smith",
      about: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    
    },
    {
      img: "https://course-api.com/images/people/person-2.jpeg",
      name: "Anna Johnson",
      about: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
      img: "https://course-api.com/images/people/person-4.jpeg",
      name: "peter Jones",
      about: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
      img: "https://course-api.com/images/people/person-1.jpeg",
      name: "susan smith",
      about: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    
    },
    {
      img: "https://course-api.com/images/people/person-2.jpeg",
      name: "Anna Johnson",
      about: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
      img: "https://course-api.com/images/people/person-4.jpeg",
      name: "peter Jones",
      about: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    }
  ];
  const [currentItem,setcurrentItem] = useState(list[0]);
  const [counter,setCounter] = useState(1);
  
  // useEffect(() =>{
  //   console.log(list[0]);
  //   SetcurrentItem(list[0]);
  // })

const HandleLeft =() =>{   
  if(counter >= list.length-1)
  {
    setCounter(list.length-1);
  }
  if(counter<=1)
  {
    setCounter(counter=1);
  }
  setcurrentItem(list[counter-1]);
  setCounter(counter-1); 
 
}

const HandleRight =() =>{
 if(counter<list.length) 
 {   
  setcurrentItem(list[counter]);
  setCounter(counter+1); 
 }else{
  setCounter(list.length-1); 
 }
}

 
  
  return (
   
      <div className='container'>
     <div className='card_ele'>
      <div className='head'>
        <BiSolidQuoteRight className='icon'/>
          <img  src = {currentItem.img} alt="image of a person"/>
          <h1>{currentItem.name}</h1>
          <br></br>
          <h3>Web Developer</h3>
          </div>
          <br></br>
          <p>{currentItem.about}</p> <br></br>

      <div className='btn'>
       &nbsp;&nbsp;&nbsp;&nbsp; <span><button className='angle' onClick={HandleLeft}><AiOutlineLeft/> </button >  <button className='angle' onClick={HandleRight}><AiOutlineRight/></button> </span>
      <br></br>
      <br></br>
          <button className='btn_surprise'>Surprise Me</button>
          </div>
          </div>
    </div>
  );
}

 

export default App;
