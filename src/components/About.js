import React, { Component } from "react";


class About extends Component {


  render() {
    return (
      <div className="text-gray" 
      style={{
      margin: "auto",
      textAlign: "center",
      display: "block",
      paddingTop: "5%",
      paddingLeft: "5%"}}>
        <div style={{position: "relative", paddingBottom: "56.25%"}}>
            <iframe title="myFrame" src="https://www.loom.com/embed/6240e41228a9461686e55d67fef82af8" webkitallowfullscreen mozallowfullscreen allowfullscreen 
              style={{position: "absolute", width: "80%", height: "80%"}}>
            </iframe>
          </div>

      </div>
    );
  }
}

export default About;
