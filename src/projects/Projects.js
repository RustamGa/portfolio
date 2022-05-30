import React from 'react'
import s from './Projects.module.css'
import style from '../common/styles/Container.module.css'
import Project from "./project/Project";


function Projects() {
    return <div className={s.projectsBlock}>
        <div className={`${style.container} ${s.projectsContainer}`}>
            <h2 className={s.title}>
                Projects
            </h2>
            <div className={s.projects}>
                <Project title={'Social network'}
                         description={' project, where you can assess my skills to learn something new. Every time ' +
                             'I\'ve learned new feature or technology I try to implement it here. So it\'s a kind of' +
                             'playground of my own. Deployed on gh pagesa'}/>
                <Project title={'Todolist'}
                         description={'a project, where you can assess my skills to learn something new. Every time ' +
                             'I\'ve learned new feature or technology I try to implement it here. So it\'s a kind of' +
                             'playground of my own. Deployed on gh pages'}/>
                <Project title={'Counter'}
                         description={'a project, where you can assess my skills to learn something new. Every time ' +
                             'I\'ve learned new feature or technology I try to implement it here. So it\'s a kind of' +
                             'playground of my own. Deployed on gh pages'}/>
            </div>
        </div>
    </div>
}

export default Projects;