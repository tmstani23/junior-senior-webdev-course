import Card from './Card'
import React from 'react';


const CardList = ({robots}) => {
    if(true) {
        throw new Error('ERRORRRR!!');
    }

    return !robots.length > 0 
        ? <h1 className = 'tc'> Loading...</h1>
        : (
            <div>
                {   
                    robots.map((robot, i) => {
                        console.log(robot)
                        return (
                            <Card 
                                key = {i} 
                                id={robot.id} 
                                name={robot.name} 
                                email={robot.email} 
                            />
                        )
            
                    })
                   
                } 
                    
            </div>
            
        )
    
}

export default CardList;