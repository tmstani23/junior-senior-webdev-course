import React from 'react';
import logo from '../logo.svg';

const Page3 = ({onRouteChange}) => {
    return (
        <div>
            <header>
                <img alt='' src={logo} className='App-logo'></img>
                <h1> page 3 </h1>
            </header>
            <button className="disabled" > Page3 </button>
            <button onClick = {() => onRouteChange('page1')}> Page1 </button>
            <button onClick = {() => onRouteChange('page2')}> Page2 </button>
        </div>
        
    )
}

export default Page3;