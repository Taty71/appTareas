import React from 'react';

const footerStyle = {
    marginTop: '5px',
    marginLeft: '5px',
    backgroundColor: '#c0c2c3',
    color: '#0A3D62',
    textAlign: 'center',
    padding: '5px',
    position: 'relative',
    bottom: '0',
    width: '100vw',
    height: '30px',
    
};
const Footer = () => {
    return (
        <footer style={footerStyle}>
            <h5>TyDevApp</h5>
        </footer>
    );
};

export default Footer;