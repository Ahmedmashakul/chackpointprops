import React from 'react';
import Players from "./Players"; 
import Player from "./Player";

const Playerslist = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {Players.map((el, index) => (
        <Player key={index} el={el} /> 
      ))}
    </div>
  );
};

export default Playerslist; 
