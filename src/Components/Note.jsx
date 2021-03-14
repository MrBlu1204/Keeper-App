import React from "react";

const customStyle={
    textAlign:"right",
    color: "#80ccff",
    fontSize: "0.8em",
    marginTop: "8px",
};

function Note(){
    return (
        <div className="note">
            <h1>This is a Note Title</h1>
            <p>This is a Note Content</p>
            <p style={customStyle}>-Mr. Blu</p>
        </div>
    )
}

export default Note;