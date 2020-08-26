import React from 'react';
import './App.css';
import Page1 from './components/page1';
//import Page2 from './components/page2';
//import Page3 from './components/page3';
import AsyncComponent from './components/AsyncComponent'

class App extends React.Component {
  
  state = {
    route: 'page1',
    component: null
  }

  onRouteChange = (route) => {
    //No code splitting
    this.setState({
      route: route
    })
    //With code splitting
    // if (route === 'page1') {
    //   this.setState({route: route})
    // }
    // else if(route === 'page2') {
    //   import('./components/page2').then((Page2) => {
    //     this.setState({route: route, component: Page2.default})
    //   })
      
    // }
    // else if(route === 'page3') {
    //   import('./components/page3').then((Page3) => {
    //     this.setState({route: route, component: Page3.default})
    //   })
      
    // }
  }

  render() {
    const route = this.state.route;
    //Dynamically load each component based on current route  
    if (route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } 
    else if (route === 'page2') {
      //AsyncPage2 is a higher order component that returns the imported component.
      const AsyncPage2 = AsyncComponent(() => import('./components/page2'))
      return <AsyncPage2 onRouteChange={this.onRouteChange} />
    } 
    else if (route === 'page3') {
      const AsyncPage3 = AsyncComponent(() => import('./components/page3'))
      return <AsyncPage3 onRouteChange={this.onRouteChange} />
    }
    
    
    // if(route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } 
    // else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }
        
    
  }
  
}

export default App;
