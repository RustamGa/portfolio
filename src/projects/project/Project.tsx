import React from 'react'
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string,
    style?: {
        backgroundImage: string
    }
    description: string
}

function Project(props: ProjectPropsType) {
    return <div className={s.project}>
        <div className={s.image} style={props.style}>
            <button className={s.viewButton}>View</button>
        </div>
        <div className={s.projectInfo}>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    </div>
}

export default Project;