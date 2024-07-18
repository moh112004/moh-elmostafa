import { useTranslation } from 'react-i18next'
import '../Contact.css'
import whatsapp from "../whatsapp.svg"
import phone from "../phone-solid.svg"
import envelope from "../envelope-regular.svg"
import location from "../location-dot-solid.svg"
let AStyle = {
 textDecoration: "none",
 color: "#eee",
};
export default function Contact() {
    const { t } = useTranslation();
    return (
        <>
        <div className="contact">
            <div className='contactRow'><img alt='' src={location}/>&nbsp;&nbsp;&nbsp;<p>{t('location')}</p></div>
            <a href='tel:+966510220904' style={AStyle}><div className='contactRow'><img alt='' src={phone}/>&nbsp;&nbsp;&nbsp;<p>+966 510 22 0904</p></div></a>
            <a href='https://wa.me/+249993978784?text=مرحباً، هل يمكنني الإستفسار عن الأسعار؟' style={AStyle}><div className='contactRow'><img alt='' src={whatsapp}/>&nbsp;&nbsp;&nbsp;<p>+249 9939 7878 4</p></div></a>
            <a href='mailto:mohammed.elmostafa.bussinese@gmail.com' style={AStyle}><div className='contactRow'><img alt='' src={envelope}/>&nbsp;&nbsp;&nbsp;<p>contact@moh-elmostafa.dev</p></div></a>
        </div>
        </>
    );
}