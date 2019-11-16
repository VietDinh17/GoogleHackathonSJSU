import React from 'react';

const Test = (props) => {
    const value = props.location.state;  
    return(
        <div>
            <h1>{value.id}</h1>
        </div>
    )
}

export default Test;