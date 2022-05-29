import React from 'react';

function Intro() {
    const student = {
        name: 'Fedora',
        age: 20,
        avatar:""
    }
    return ( 
        <div>
            <h1>Hello {student.name}</h1>
            <p>Age: {student.age}</p>
        </div>
     );
}

export default Intro;