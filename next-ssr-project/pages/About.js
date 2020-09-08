import Link from "next/link";
import Image from '../components/Image';

const About = () => (
    <div style={{fontSize: '20px', color: 'lightblue'}}>
        <h1>About Us!</h1>
        <Link href='/'>
            <button>Home Page</button>
        </Link>
        <p>Channeling combustible magic.</p>
        <Image />
    </div>
)

export default About;