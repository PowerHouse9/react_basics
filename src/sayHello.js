import React from 'react';

function Hello() {

    //adding logic before return()
    const sayHello = () => {
        console.log('Hello');
    };

    return(
        <div>
            {/* having curly braces in onClick means it is JS if not its gonna be plain HTML */}
            <button onClick = {sayHello}>Say Hello</button>
        </div>
    )
}

export default Hello;