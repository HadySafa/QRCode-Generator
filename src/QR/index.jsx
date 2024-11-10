import styles from './style.module.css'
import QRCode from 'react-qr-code'
import { useState, useRef, useEffect } from 'react';
import leftArrow from '../assets/leftArrow.png'


function QR({ choice, scan, setScan }) {

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


    const [QRValue, setQRValue] = useState("https://www.linkedin.com/in/hadyabdallahsafa/");
    const [qrURL, setQrURL] = useState("");
    const input = useRef();
    const qr = useRef();

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

    useEffect(() => {
        const svgElement = qr.current;
        const svgString = new XMLSerializer().serializeToString(svgElement);
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        setQrURL(url)
    }, [scan])

    return (
        <section className={styles.container}>

            <div className={styles.qrContainer}>
                <QRCode ref={qr} value={QRValue} bgColor='#eae0d5' fgColor='#22333b' />
                {
                    scan && qrURL ? <a className={styles.button} download="qr.svg" href={qrURL}>Download</a> : null
                }
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