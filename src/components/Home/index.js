import React from 'react';
import './index.css'; // Ensure you have this CSS file

import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">Welcome to our Travel Budget Managment</h1>
        <p className="home__subtitle">Plan your trips efficiently and stay on budget.</p>
        <Link to ="/planmybudget"><button className="home__button">Plan My Travel</button></Link>
      </div>
    </section>
  );
};

export default Home;