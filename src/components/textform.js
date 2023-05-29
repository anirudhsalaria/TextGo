import React, {useState} from 'react'

export default function TextForm(props) {

    // function invoking by clicking the convert to uppercase button
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        // converting to uppercase
        let newText = text.toUpperCase();
        setText(newText);
    }

    // function invoking when we change the value in textarea (required for changing the value)
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    // creating state
    const [text, setText] = useState('Enter text here');
    // setText("new text"); correct way to change the state

    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
