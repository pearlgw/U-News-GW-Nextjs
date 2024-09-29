import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <ul className="py-2 border-t border-gray-300">
                <li className="space-x-6 text-xs">
                    <Link href="/world">World</Link>
                    <Link href="/business">Business</Link>
                    <Link href="/health">Health</Link>
                    <Link href="/sports">Sports</Link>
                    <Link href="/books">Books</Link>
                    <Link href="/lifestyle">Lifestyle</Link>
                    <Link href="/food">Food</Link>
                    <Link href="/travel">Travel</Link>
                    <Link href="/bitcoin">Bitcoin</Link>
                    <Link href="/e-sport">E-Sport</Link>
                    <Link href="/indonesia">Indonesia</Link>
                </li>
            </ul>   
            <div className="w-full h-[1px] bg-black mb-1"></div>
            <div className="w-full h-[1px] bg-black"></div>
        </nav>
    )
}

export default Navbar
