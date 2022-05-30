import React from 'react'
import s from './Skills.module.css'
import style from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return <div className={s.skillsBlock}>
        <div className={`${style.container} ${s.skillsContainer}`}>
            <h2 className={s.title}>
                Skills
            </h2>
            <div className={s.skills}>
                <Skill title={"JS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                           " Voluptatum praesentium quo quasi. Sit, saepe impedit!"}/>
                <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                    " Voluptatum praesentium quo quasi. Sit, saepe impedit!"}/>
                <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                    " Voluptatum praesentium quo quasi. Sit, saepe impedit!"}/>
                <Skill title={"TS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                    " Voluptatum praesentium quo quasi. Sit, saepe impedit!"}/>
            </div>
        </div>
    </div>
}

export default Skills;