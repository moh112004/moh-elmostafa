import "../Project.css";
export default function Arctict({ image, lable, content, page }) {
  return (
    <>
      <div
        className="project"
        onClick={() => {
          window.location.href = page;
        }}
      ><div style={{height: "250px", width: "100%"}}>
        <img src={image} alt="" />
      </div>
        <h3 style={{ margin: "0", fontSize: "20px" }}>{lable}</h3>
        <p>{content}</p>
      </div>
    </>
  );
}
