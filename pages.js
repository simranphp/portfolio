import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function CoursePage(){
const { query } = useRouter()
const [course, setCourse] = useState(null)


useEffect(()=>{
if(!query.slug) return
fetch('/api/courses').then(r=>r.json()).then(list=>{
const found = list.find(c=>c.slug === query.slug)
setCourse(found)
})
},[query.slug])


if(!course) return <
