import Link from "next/link"

const Index = () => (
    <div>
        <h1>Server Side Wiz0rd</h1>
        <Link href='/About'>
            <button>About Page</button>
        </Link>
    </div>
)

export default Index;