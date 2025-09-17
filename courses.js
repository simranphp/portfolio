export default function handler(req, res){
const courses = [
{ slug: 'monitoring-kids-online', title: 'Monitoring Children\'s Online Activities', excerpt: 'Three step course for parents on safe monitoring', lessons: 6 },
{ slug: 'cyberbullying-awareness', title: 'Cyberbullying Awareness', excerpt: 'How to detect and respond to cyberbullying', lessons: 5 },
{ slug: 'parental-controls', title: 'Parental Controls 101', excerpt: 'Set up effective parental control on major platforms', lessons: 4 }
]
res.status(200).json(courses)
}
