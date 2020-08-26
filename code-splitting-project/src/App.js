import React, { Suspense } from 'react';
import './App.css';
import Page1 from './components/page1';
//Part1: no code splitting
//import Page2 from './components/page2';
//import Page3 from './components/page3';
// Part 3: Cleaner code splitting using async HoC component
//import AsyncComponent from './components/AsyncComponent'
// Part 4: React.lazy
const Page2Lazy = React.lazy(() => import('./components/page2'));
const Page3Lazy = React.lazy(() => import('./components/page3'));

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
    //Part 2: Dynamic rendering with conditional imports
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
    
    //Part 3: Async HOC component 
    //Dynamically load each component based on current route  
    // if (route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } 
    // else if (route === 'page2') {
    //   //AsyncPage2 is a higher order component that returns the imported component.
    //   const AsyncPage2 = AsyncComponent(() => import('./components/page2'))
    //   return <AsyncPage2 onRouteChange={this.onRouteChange} />
    // } 
    // else if (route === 'page3') {
    //   const AsyncPage3 = AsyncComponent(() => import('./components/page3'))
    //   return <AsyncPage3 onRouteChange={this.onRouteChange} />
    // }
    
    
    // if(route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } 
    // else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }

    // Part 4: using React lazy to render
   
    if (route === 'page1') {
      // Suspense is a react component used for handling preload rendering and providing loading message
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page1 onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    } 
    else if (route === 'page2') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      )
      
    } 
    else if (route === 'page3') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      )
       
    }
  } 
}

export default App;
