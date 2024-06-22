import "../Service.css"
export default function Service({image, lable, content}) {
    return (
        <>
        <div className="service" data-aos="fade-up" data-aos-duration="2000"     data-aos-once="true"
        >
        <img src={image} alt="" />
        <h3 style={{margin: "0", fontSize: "20px"}}>{lable}</h3>
        <p>
          {content}
        </p>
        </div>
        </>
    );
}