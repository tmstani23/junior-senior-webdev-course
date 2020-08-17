import React, {Component} from 'react';


class Card extends Component {
    render() {
        return (
            <div className ='bg-animate hover-bg-light-blue tc bw2 shadow5 bg-light-green dib br3 pa3 ma2 grow'>
                <img alt='robots' src={`https://robohash.org/${this.props.id}?200x200`}/>
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
                
            </div>
            
        )
    }
}

export default Card;