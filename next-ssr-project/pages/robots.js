import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => (
    <div style={{fontSize: '20px', color: 'dark-grey'}}>
        <h1>Robots!</h1>
        <Link href='/'>
            <button>Home Page</button>
        </Link>
        <div>
            {
                props.robots.map((robot) => (
                    <li key = {robot.id}>
                        
                        <Link href={`robots/${robot.id}`}>
                            <a>{robot.name}</a>
                        </Link>
                    </li>
                ))
            }   
        </div>
    </div>
)

Robots.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        robots: data
    };
}

export default Robots;