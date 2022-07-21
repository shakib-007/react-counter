import React, { Component } from 'react';

//STATELESS COMPONENT IF COMPONENT HAS NOT FUNTION ,STATE LIKE NAVBAR WE CAN USE FUNCTION INSTEAD OF CLASS and in parameter add props 

const Navbar = ({totalCounters}) => {
        console.log("navbar rendered");
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar{" "} <span className='badge badge-pill bg-secondary'>{totalCounters}</span> </a>
            </nav>
        );
}


/*
class Navbar extends Component {
    
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar <span className='badge badge-pill bg-secondary'>{this.props.totalCounters}</span> </a>
            </nav>
        );
    }
}*/
 
export default Navbar;