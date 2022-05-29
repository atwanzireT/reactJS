import React from 'react';

function Welcome(props){
    return <h1>Welcome, {props.name}</h1>;
}
function Props() {
    return ( 
        <div>
            <div>
                <h1>Props</h1>
            </div>
            <div>
               <Welcome {name = "Fedora"}/> 
            </div>
        </div>
     );
}

export default Props;