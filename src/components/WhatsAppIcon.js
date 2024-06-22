import "../WhatsAppIcon.css"
import whatsapp from "../whatsapp.svg"
export default function WhatsAppIcon() {
    return(
        <>
        <a href="https://wa.me/+249993978784?text=مرحباً، هل يمكنني الإستفسار عن الأسعار؟" target="_blank"><div className="whatsAppIcon"><img src={whatsapp} alt=""/></div></a>
        </>
    );
}