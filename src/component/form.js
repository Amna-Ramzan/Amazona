import React from 'react'
import { useState } from 'react'
export default function Form(props) {
    const [state, setstate] = useState("")


    const Uppercase = () => {
        setstate(state.toUpperCase())
    }
    const LowerCase = () => {
        setstate(state.toLowerCase())
    }
    const clear = () => {
        setstate("")
    }
    const copy = () => {
        var text=document.getElementById('box')
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const removespace = () => {
        var text2=state.split(/[ ]+/);
        setstate(text2.join(" "))
    }
    const handlechange = (event) => {
        setstate(event.target.value)

    }

    // console.log(state);
    return (
        <>
            <div className="container">


                <div className="mb-3">
                    <label className="form-label fs-1 py-3"
                     style={{color:props.mode==='black'?'white':'black'}}
                     >{props.heading}
                     </label>
                    <textarea className="form-control" value={state} onChange={handlechange} id="box" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mr-3' onClick={Uppercase}>Convert to Uppercase</button>
                <button className='btn btn-primary mr-3' onClick={LowerCase}>Convert to lowercase</button>
                <button className='btn btn-primary mr-3' onClick={clear}>clear</button>
                <button className='btn btn-primary mr-3' onClick={copy}>copy Text</button>
                <button className='btn btn-primary mr-3' onClick={removespace}>Remove Extra Spaces</button>
            </div>
            <div className='container'     style={{color:props.mode==='black'?'white':'black'}}>
                <h1 className='fs-2'>your Text Summary</h1>
                <p className='my-3'>{state.split("").length}words and {state.length} chracters </p>
                 <p>{0.008 * state.split("").length} minutes to read words</p> 
                <h2 className='fs-2 py-3'>Preview</h2>
                <p>{state}</p>

            </div>
        </>
    )
}
