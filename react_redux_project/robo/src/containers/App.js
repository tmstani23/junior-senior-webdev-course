import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

class App extends React.Component {
    state = {
        robots: [],
        searchField: ''
    }

    componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                this.setState({robots: json})
            })

        

    }

    onSearchChange = (event) => {
        // Update state with input field data
        this.setState({searchField: event.target.value});
    }

    render() {
        // Filter the robots and return an array containing only robots that match the searchbox field
        let filteredRobots = this.state.robots.filter(robots => {   
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
            
        )
    }
    
}

export default App;