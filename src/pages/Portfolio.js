import React from "react";
import ProjectCard from "../components/ProjectCard";
function Portfolio (){
    const projects = [
        {
            id: 1,
            title: "Project 1",
            img: '',
        },
        {
            id: 2,
            title: "Project 2",
            img: '',
        },
        {
            id: 3,
            title: "Project 3",
            img: '',
        },
        {
            id: 4,
            title: "Project 4",
            img: '',
        },
        {
            id: 5,
            title: "Project 5",
            img: '',
        },
        {
            id: 6,
            title: "Project 6",
            img: '',
        },
    ]
    return (
        <div>
            {projects.map(project => {
                return <ProjectCard key = {project.id} title = {project.title}/>
            })}
        </div>
    )
}
export default Portfolio

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to 
// both the deployed applications and the corresponding GitHub repositories