import React from 'react'
import s from './Footer.module.css'
import style from '../common/styles/Container.module.css'
import Skill from "../skills/skill/Skill";


function Footer() {
    return <div className={s.footerBlock}>
        <div className={`${style.container} ${s.footerContainer}`}>
            <div className={s.title}>
                <span>
                <h2> Rustam Gadzhiev</h2>
               </span>
            </div>
            <div className={s.footer}>
                <div className={s.contacts}></div>
                <div className={s.contacts}></div>
                <div className={s.contacts}></div>
                <div className={s.contacts}></div>
            </div>
            <div>
                <p className={s.copyright}>© 2022 Все права защищены </p>
            </div>

        </div>
    </div>
}

export default Footer;