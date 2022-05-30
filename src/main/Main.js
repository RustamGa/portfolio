import React from 'react'
import style from '../common/styles/Container.module.css'
import s from './Main.module.css'


function Main() {
    return <div className={s.mainBlock}>
        <div className={style.container}>
       <div className={s.salutation}>
       <span>Hi There</span>
           <h1> I am Rustam Gadzhiev </h1>
           <p> Fronted Developer </p>
       </div>
       <div className={s.photo}></div>
        </div>
    </div>
}

export default Main;