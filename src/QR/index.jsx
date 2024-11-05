import styles from './style.module.css'
import QRCode from 'react-qr-code'
import { useState, useRef } from 'react';
import leftArrow from '../assets/leftArrow.png'

function QR({choice}) {

    const choices = [
        {
            title: "URL",
            label: "Enter a valid URL",
        },
        {
            title: "Instagram",
            label: "Enter your username",
        },
        {
            title: "Whatsapp",
            label: "Enter an 8-digit number",
        },
        {
            title: "Github",
            label: " Enter your username",
        },
        {
            title: "Linkedin",
            label: " Enter your profile link",
        }
    ]

    const [scan, setScan] = useState("");
    const [QRValue, setQRValue] = useState("https://www.linkedin.com/in/hadyabdallahsafa/");
    const input = useRef();

    function generateCode() {
        if (input.current.value && input.current.value.trim() !== "") {
            if (choice === "URL") {
                setQRValue(input.current.value.trim());
                setScan(true);
            }
            else if (choice === "Instagram") {
                setQRValue(`https://instagram.com/${input.current.value.trim()}`);
                setScan(true);
            }
            else if (choice === "Whatsapp") {
                setQRValue(`https://wa.me/961${parseInt(input.current.value.trim())}`);
                setScan(true);
            }
            else if (choice === "Github") {
                setQRValue(`https://github.com/${input.current.value.trim()}`);
                setScan(true);
            }
            else if (choice === "Linkedin") {
                setQRValue(input.current.value.trim());
                setScan(true);
            }
        }
    }

    return (
        <section className={styles.container}>

            <div className={styles.qrContainer}>
                <QRCode value={QRValue} bgColor='#eae0d5' fgColor='#22333b' />
            </div>

            <div className={styles.inputContainer}>
                {
                    !scan
                        ?
                        <>
                            <label htmlFor='input'>{choices.map(element => element.title === choice ? element.label : null)}</label>
                            <input className={styles.input} type="text" name='input' id='input' ref={input} />
                            <button className={styles.button} onClick={generateCode}>Generate</button>
                        </>
                        : <div className={styles.scan}>
                            <img className={styles.arrow} src={leftArrow} />
                            <p>SCAN ME!</p>
                        </div>
                }
            </div>

        </section>
    )

}

export default QR