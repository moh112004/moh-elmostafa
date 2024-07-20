import "../Service.css";
export default function Service({ image, lable, content }) {
  return (
    <>
      <div
        className="service"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="50"
      >
        <img src={image} alt="" />
        <h3 style={{ margin: "0", fontSize: "20px" }}>{lable}</h3>
        <p>{content}</p>
      </div>
    </>
  );
}
