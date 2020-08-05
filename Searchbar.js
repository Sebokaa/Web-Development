import React from 'react';

function Searchbar() {
    return (
        <input style = {styleSearchbar} type='text' placeholder='Search' />
    );
}

const styleSearchbar = {
    borderRadius: '5px',
    width: '98.5%',
    height: '30px',
};

export default Searchbar
