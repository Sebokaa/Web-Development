import React from 'react';

function Header() {
    return (
        <div>
            <h2 style = {styleHeader}>Discord List</h2>
        </div>

        // <div style="background-color: grey; width: 10%; text-align: center; border-radius:10px; border: 1px black solid; border: none;">
        //     Sup
        // </div>
    );
}

const styleHeader = {
    color:  'black',
    padding: '5px',
}

export default Header

