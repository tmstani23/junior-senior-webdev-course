import React, {Component} from 'react';

class ErrorBoundry extends Component {
    
    state = {
        hasError: false
    }

    //Lifecycle method runs if there is an error
    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        
        return this.state.hasError 
            ? <h1>It looks like there was an error.</h1>
            : this.props.children
    }
}

export default ErrorBoundry;