import React from 'react'
import s from './Project.module.css'

function Project(props) {
    return <div className={s.project}>
        <div className={s.image}>
            <button className={s.viewButton}>View</button>
        </div>
        <div className={s.projectInfo} >
            <h3 className={s.projectTitle} >{props.title}</h3>
            <div className={s.description}>
            <span >{props.description}</span>
            </div>
        </div>
    </div>
}

export default Project;