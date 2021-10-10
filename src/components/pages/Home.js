import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home.css';
import banner from '../../components/img/iambanner3.png';


const styles = {
  image: {
    position: 'fixed',
    backgroundSize: 'cover',
    minWidth: '100%',
    minHeight: '75vh',
    zIndex: '-5'
  },
  herotext: {
    fontSize: '50px',
    color: 'white',
    padding: '200px 0 0 40px',
    
  },

  subtext: {
    fontSize: '35px',
    color: 'white',
    padding: '40px',
    
  },


};

export default function Home() {
  return (
   
    <div >
      <img className="banner" style={styles.image} src={banner}></img>
  
      <h1 className="hero-text" style={styles.herotext} >Irene Adam Manik</h1>
   
      <h2 className="hero-text" style={styles.subtext} >Full-Stack Web Developer</h2>

    </div>
   
  );
}
