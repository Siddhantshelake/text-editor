import React, { useState } from 'react';



export default function Textform(props) {
 const [text, setText] = useState('Enter Text Here');
 function handleUpClick() {
     console.log("convert to upper case is clicked");
     let temp=text.toUpperCase();

     setText(temp);
     
 }
 function handleOnChange(event) {
    setText(event.target.value);
    
}

  return (
    <><div>

          <form action="">
              <div className="form-group">
                  <h1>{props.heading}</h1>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
              </div>
          </form>



      </div>
      <button type="button" className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
      <button type="button" className="btn btn-secondary">Lowercase</button></>
  );
}
