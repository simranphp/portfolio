export default function Stats({ items }){
return (
<section className="container-wide grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
{items.map((s, i) => (
<div key={i} className="text-center">
<div className="text-4xl md:text-5xl font-bold">{s.num}</div>
<div className="text-xs text-gray-400 mt-1">{s.label}</div>
</div>
))}
</section>
)
}
