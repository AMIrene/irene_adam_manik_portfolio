import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    footer: {
        position: 'fixed',
        padding: '10px 10px 0px 10px',
        bottom: '0',
        background: "#03071E",
        width: '100%',
       
        /* Height of the footer*/ 
        minHeight: 40,
       

    },
           
}

function Footer() {
    return (
        <section style={styles.footer}>
            <h1>Footer</h1>
        </section>
    )
}

export default Footer;