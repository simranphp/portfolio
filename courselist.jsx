import { useEffect, useState } from 'react'


export default function CoursesList(){
const [courses, setCourses] = useState([])
useEffect(()=>{
fetch('/api/courses').then(r=>r.json()).then(setCourses)
},[])


return (
<section className="container-wide py-8">
<h3 className="text-2xl font-semibold mb-6">Featured Courses</h3>
<div className="grid md:grid-cols-3 gap-6">
{courses.map(c=> (
<article key={c.slug} className="p-6 bg-[#0f1115] rounded-xl border border-[#1a1c1f]">
<h4 className="font-bold text-lg">{c.title}</h4>
<p className="text-sm text-gray-400 mt-2">{c.excerpt}</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-gray-400">{c.lessons} lessons</span>
<a href={`/courses/${c.slug}`} className="text-neon text-sm">View</a>
</div>
</article>
))}
</div>
</section>
)
}
