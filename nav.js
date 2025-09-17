import Link from 'next/link'


export default function Nav(){
return (
<nav className="container-wide flex items-center justify-between py-6">
<div className="text-white font-bold text-xl">Luke<span className="ml-1 text-neon">.</span></div>
<div className="hidden md:flex gap-6 items-center">
<Link href="#">Home</Link>
<Link href="#services">Services</Link>
<Link href="#resume">Resume</Link>
<Link href="#work">Work</Link>
<Link href="#contact">Contact</Link>
<a href="#" className="ml-4 rounded-full px-4 py-2 bg-neon text-black font-semibold">Hire me</a>
</div>
</nav>
)
}
