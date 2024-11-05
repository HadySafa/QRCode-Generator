import styles from './style.module.css'
import { FiLink2 } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";


function Choice({choice,setChoice,setScan}){

    function handleClick(title){
        setChoice(title)
        setScan(false)
    }


    const choices = [
        {
            title:"URL",
            icon: <FiLink2 />
        },
        {
            title:"Instagram",
            icon: <FaInstagram />
        },
        {
            title:"Whatsapp",
            icon: <FaWhatsapp />
        },
        {
            title:"Github",
            icon: <FaGithub />
        },
        {
            title:"Linkedin",
            icon: <RiLinkedinBoxFill />
        }
    ]


    return(
        <section className={styles.container}>
            {
                choices.map( (element,index) => {
                    return <div className={`${styles.choice} ${choice === element.title ? styles.active : null}`} key={index} onClick={() => handleClick(element.title)}>
                        <span className={styles.icon}>{element.icon}</span>
                        <span className={styles.text}>{element.title}</span>
                    </div>
                })
            }
        </section>
    )


}

export default Choice