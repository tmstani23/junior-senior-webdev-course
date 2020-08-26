import React from 'react';
import logo from '../logo.svg';

const Page1 = ({onRouteChange}) => {
    return (
        <div>
            <header>
                <img alt='' src={logo} className='App-logo'></img>
                <h1> page 1 </h1>
            </header>
            <button className="disabled" > Page1 </button>
            <button onClick = {() => onRouteChange('page2')}> Page2 </button>
            <button onClick = {() => onRouteChange('page3')}> Page3 </button>
        </div>
        
    )
}

export default Page1;