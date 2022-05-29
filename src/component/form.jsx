import React from 'react';
import { useState } from 'react';

function Name() {
    const [name, setName] = useState();

    const ChangeName = (e) => {
        setName(e.target.value);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        alert(`You entered ${name}`);
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <label>Enter your name:
                    <input className='form-control' onChange={ChangeName} value={name} type="text" />
                </label>
                <button type='submit' className="btn btn-outline-dark btn-sm m-2" >Submit Name</button>
            </form>
        </div>
    );
}

function MultipleInputs() {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) =>{
        const name = e.target.value
        const age = e.target.value
        setInputs(values => ({...values, [name]:age}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='m-2'>
                    <label>Enter your name  :
                        <input onChange={handleChange}  className='form-control' type="text" />
                    </label>
                </div>
                <div className='m-2'>
                    <label>Enter your age   :
                        <input onChange={handleChange}  className='form-control' type="text" />
                    </label>
                </div>
                <button type='submit' className="btn btn-outline-dark btn-sm m-2" >Submit Name</button>
            </form>
        </div >
    )
}

function Form() {
    return (
        <>
            <h1>Forms</h1>
            <Name />
            <h4>Multiple Forms</h4>
            <MultipleInputs />
        </>
    )
}

export default Form;