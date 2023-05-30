import React, {useState} from 'react'

export default function TextForm(props) {

    // function invoking by clicking the convert to uppercase button
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        // converting to uppercase
        let newText = text.toUpperCase();
        setText(newText);
    }

    // function invoking by clicking the convert to lowercase button
    const handleLowClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    // function for clearing text
    const handleClear = () =>{
        let newText='';
        setText(newText);
    }

    // function for copying text
    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // removing extra spaces
    const handleExtraSpaces = () =>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
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
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-3" onClick={handleExtraSpaces}>Remove extra space</button>
        </div>
        <div className="container my-2">
            <h3>Your text summary</h3>
            {/* counting number of words and characters */}
            <p>{text.split(" ").length} words and {text.length} characters</p>  

            {/* Time to read */}
            <p>{0.008 * text.split(" ").length} Minutes read</p>

            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
