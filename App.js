import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Searchbar from "./Components/Searchbar"
import EmployerListItem from './Components/EmployerListItem';
import EmployerListItem1 from './Components/EmployerListItem1';
import EmployerListItem2 from './Components/EmployerListItem2';
import EmployerListItem3 from './Components/EmployerListItem3';
import EmployerListItem4 from './Components/EmployerListItem4';


function App() {
  return (
    <div className="App" style = {styleApp}>
    <Header />
    <Searchbar />
    <EmployerListItem />
    <EmployerListItem1 />
    <EmployerListItem2 />
    <EmployerListItem3 />
    <EmployerListItem4 />

    </div>
  );
}

const styleApp = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "center",
  backgroundColor: '#f4f4f4',
  width: '40%',
  margin: '30px 20px',
  padding: '0 10px',
  borderRadius: '5px',

};
export default App;
