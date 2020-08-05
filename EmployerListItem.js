import React from 'react';
import Baby from './TooCool.jpeg';

function EmployerListItem() {
    return (
        <div>
            <div className="container" style={styleEmployerListItem}>
                <div>
                    {" "}
                    <img src={Baby} style={imgStyle} alt="Cool Baby" />
                </div>
                <div>
                    <b><p style = {styleP}>Yaffet</p></b>
                    <p style = {styleP}>President/CEO</p>
                </div>
            </div>
        </div>
    );
}

const imgStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "10px"
}

const styleEmployerListItem = {
    display: "flex",
    alignItems: 'center',
    backgroundColor: "#ffffff",
    marginTop: '15px',
    width: '100%',
    height: '70px',
    border: 'none',
    margin: "10px 0",
    boxShadow: '0px 4px 8px rgba(0, 0, 0, .25)',
    borderRadius: '5px'
}

const styleP = {
    margin: "3px",
    padding: "3px",
}


export default EmployerListItem 