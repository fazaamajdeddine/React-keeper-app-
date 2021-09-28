import React from "react";
import ReactDOM from "react-dom";


function Note(props){
    return(    
    <div className="note">
        <h1>{props.title}</h1>
            <p>{props.description}</p>
    </div>

    );
}


export default Note;