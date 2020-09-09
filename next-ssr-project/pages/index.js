import Link from "next/link"

const Index = () => (
    <div>
        <h1>Server Side Wiz0rd</h1>
        <Link href='/about'>
            <button>About Page</button>
        </Link>
        <Link href='/robots'>
            <button>Robots Page</button>
        </Link>
    </div>
)

export default Index;