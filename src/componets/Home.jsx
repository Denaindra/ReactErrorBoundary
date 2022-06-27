import React from 'react';

function Home(props) {

    if(props.age==='gayan')
    {
        throw new Error('Erorr');
    }

    return (
        <div>
               <h1>{props.age.toUpperCase()}</h1>
        </div>
    );
}

export default Home;


