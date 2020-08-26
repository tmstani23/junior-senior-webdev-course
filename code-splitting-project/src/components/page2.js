import React from 'react';
import logo from '../logo.svg';

const Page2 = ({onRouteChange}) => {
    return (
        <div>
            <header>
                <img alt='' src={logo} className='App-logo'></img>
                <h1> page 2 </h1>
            </header>
            <button className="disabled" > Page2 </button>
            <button onClick = {() => onRouteChange('page1')}> Page1 </button>
            <button onClick = {() => onRouteChange('page3')}> Page3 </button>
        </div>
        
    )
}

export default Page2;