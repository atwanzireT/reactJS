import React from 'react';


function Welcome(props){
    return (
    <p>Welcome Big, {props.name}</p>
    );
};

function Props() {
    return ( 
        <div>
            <div>
                <h1>Props</h1>
            </div>
            <div>
               <Welcome name="Fedora"/> 
            </div>
        </div>
     );
}

export default Props;