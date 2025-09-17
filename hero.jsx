import React from 'react'
import siteData from '../data/siteData'
import { FaDownload, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'


export default function Hero(){
return (
<header className="container-wide grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12">
{/* left */}
<div>
<div className="text-sm uppercase tracking-wider text-gray-400">{siteData.role}</div>
<h1 className="mt-4 font-mono text-5xl md:text-6xl leading-tight">
<span className="block">Hello I’m</span>
<span className="block text-neon font-extrabold text-6xl md:text-7xl">{siteData.name}</span>
</h1>


<p className="mt-6 max-w-xl text-gray-300">{siteData.tagline}</p>


<div className="mt-8 flex items-center gap-4">
<a href="/resume.pdf" download className="inline-flex items-center gap-3 border border-neon text-neon px-4 py-2 rounded-full">
<FaDownload /> <span>Download CV</span>
</a>
<div className="flex gap-3 items-center ml-3 text-gray-400">
<a aria-label="github"><FaGithub size={18} /></a>
<a aria-label="linkedin"><FaLinkedin size={18} /></a>
<a aria-label="twitter"><FaTwitter size={18} /></a>
</div>
</div>
</div>


{/* right — circular avatar + segmented SVG ring */}
<div className="flex justify-center md:justify-end">
<div className="avatar-wrap">
{/* segmented ring SVG */}
<svg width="320" height="320" viewBox="0 0 320 320" className="absolute">
<defs>
<linearGradient id="g1" x1="0%" x2="100%">
<stop offset="0%" stopColor="#00F5A0" />
<stop offset="100%" stopColor="#00D9A0" />
</linearGradient>
</defs>
<g transform="translate(160,160)">
<circle r="140" fill="none" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" strokeDasharray="18 28" transform="rotate(-20)" />
</g>
</svg>


<img src="/profile.jpg" alt="profile" className="avatar-img" />
</div>
</div>
</header>
)
}
