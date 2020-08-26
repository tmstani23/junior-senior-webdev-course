import React, {Component} from 'react';

export default function asyncComponentPicker(importComponent) {
    //Import component asynchronously and return it.
    class AsyncComponent extends Component {
        state = {
            component: null
        }

        async componentDidMount() {
            //Save the default object from import as component
            const {default: component} = await importComponent();
            this.setState({
                component: component
            })
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null
        }

    }
    return AsyncComponent;
}