import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";



import 'react-dropdown/style.css';

const PlanMyBudget = ()=>{



 return(
    <div className='main-div'>
   
    <div className='main-cont-div mt-5'>
      
       

  

     
      

    <div id="container">
    <div id="d-flex flex-column">
     
    <h2 className='mb-2 main-head'>Plan My Trip Within My Budget</h2>
      
      <div className="source-cont mt-3">
<h5>Source</h5>
      <div  className="d-flex">
       <select className="form-control m-2" value="" >

       <option>--Country--</option>
       </select>

       <br />

       <select className="form-control  m-2" value="">

       <option>--State--</option>

       </select>

       <br />

       <select className="form-control m-2" value="">

       <option>--City--</option>

       </select>
       </div>
       </div>
       <div className="dest-cont mt-3">
<h5>Destination</h5>
<div className="d-flex">
<select className="form-control m-2" value="" >
<option>--State--</option>

</select>

<br />

<select className="form-control m-2" value="">

<option>--State--</option>

</select>

<br />

<select className="form-control m-2" value="">

<option>--City--</option>

</select>

</div>
</div>

<div className='dest-cont mt-3'>
    <h5>Budget</h5>
    <div  className="d-flex">
       <select className="form-control m-2" value="" >

       <option>--Country--</option>
       </select>

       <br />

       <select className="form-control  m-2" value="">

       <option>--State--</option>

       </select>

       <br />

       <select className="form-control m-2" value="">

       <option>--City--</option>

       </select>
       </div>
</div>

<button className='search-btn mt-3'>Serach</button>

    </div>

    <div className="grid">
     <img  id="item1"src="https://res.cloudinary.com/drzlum1yv/image/upload/v1723369875/jumbo-jet-flying-sky_ihcwgv.jpg" alt="Item 1" />
     <img  id="item2" src="https://res.cloudinary.com/drzlum1yv/image/upload/v1723370659/budget_ejq0gn.jpg" alt="Item 2" />
     <img  id="item3" src="https://res.cloudinary.com/drzlum1yv/image/upload/v1723370777/TBM_zr9ldz.png" alt="Item 3" />
      <img  id="item4" src="https://res.cloudinary.com/drzlum1yv/image/upload/v1723370689/train_odrx45.jpg" alt="Item 4" />
    <img  id="item5" src="https://res.cloudinary.com/drzlum1yv/image/upload/v1723370701/bus_uobus9.jpg" alt="Item 5" />
    </div>
  </div>
</div>
</div>
 )
}

export default PlanMyBudget