import React, { Component } from "react";
import ReactDom from "react-dom";

const Welcome = () =><h2>Welcome To Jamui</h2> 

ReactDom.render(
    <Welcome/>,
    document.getElementById('root')

);

class Hello extends Component{
    render(){
        return <h2>Shubham Kumar</h2>
    }
}






