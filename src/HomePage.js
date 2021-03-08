import React from 'react';

const HomePage = (props) => {
    return (
        <>
            {props.name ? 
                <>
                <h3>Home Page</h3>
                <p>Hello {props.name}</p>
                <p>Age : {props.age}</p>
                </>
            : 
            <p>Hello, please add a name props</p> 
            
            }
            
        </>
    );
}

export default HomePage;