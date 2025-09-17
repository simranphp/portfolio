import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import CoursesList from '../components/CoursesList'
import siteData from '../data/siteData'


export default function Home(){
return (
<div>
<Nav />
<main>
<Hero />
<Stats items={siteData.stats} />
<CoursesList />
{/* add more sections here: Projects, About, Contact */}
</main>
</div>
)
}
