import React from 'react';

function Keypad (){
    return (
        <form>
          <input
            type="password"
            onChange={ ()=> console.log('Entering password...') }
          />
        </form>
    )
}

export default Keypad;
