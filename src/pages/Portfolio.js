import React from "react";
import ProjectCard from "../components/ProjectCard";
function Portfolio (){
    const projects = [
        {
            id: 1,
            title: "First Portfolio",
            desc: "can you see me?",
            img: "/assets/images/Avatar1.png",
        },
        {
            id: 2,
            title: "Movie Time",
            img: '',
        },
        {
            id: 3,
            title: "JavaScript Quiz",
            img: '',
        },
        {
            id: 4,
            title: "Note Taker",
            img: '',
        },
        {
            id: 5,
            title: "READme Generator",
            img: '',
        },
        {
            id: 6,
            title: "Travel Forum",
            img: '',
        },
    ]
    return (
        <div>
            {projects.map(project => {
                return <ProjectCard key = {project.id} title = {project.title} img = {project.img} desc = {project.desc}/>
            })}
        </div>
    )
}
export default Portfolio

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to 
// both the deployed applications and the corresponding GitHub repositories