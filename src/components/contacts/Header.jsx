import React from "react";

const Header = (props) => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Contact Manager</h2>
        {props.count>0?<h5 style={{color:"green"}}>Contacts:{props.count}</h5>:<h5 style={{color:"red"}}>contacts:{props.count}</h5>}
      </div>
    </div>
  );
};

export default Header;
