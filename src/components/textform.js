import React from 'react'

export default function textform(props) {
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="form-group">
                <textarea className="form-control" id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary my-3">Convert to Uppercase</button>
        </div>
    )
}
