import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react'


import 'react-dropdown/style.css';


const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", 
  "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
  "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
  "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", 
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", 
  "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", 
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", 
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", 
  "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo", "Kuwait", "Kyrgyzstan", 
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
  "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
  "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway", "Oman", 
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", 
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", 
  "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", 
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", 
  "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", 
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


const PlanMyBudget = ()=>{

  const [sCountry,setSCountry]=useState('');

  const sCountryChange = e =>{
    setSCountry(e.target.value);
  }


 return(
    <div className='main-division'>
   
    <div className='main-cont-div mt-5'>
      
       

  

     
      

    <div id="container">
    <div id="d-flex flex-column">
     
    <h2 className='mb-2 main-head'>Plan My Trip Within My Budget</h2>
      
      <div className="source-cont mt-3">
<h5>Source</h5>
      <div  className="d-flex">
       <select className="form-control m-2" value={sCountry} onChange={sCountryChange} >

       
       {countries.map(each=>(
        <option value={each}>{each}</option>
       ))}
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