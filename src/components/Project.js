import "../Project.css"
let AStyle = {
textDecoration: "none",
color: "#eee",
borderBottom: "1px #eee solid",
fontWeight: "500"
};
export default function Project({image, lable, content, link}) {
  return (
    <>
      <div className="project">
        <img src={image} alt="" />
        <h3 style={{margin: "0", fontSize: "20px"}}>{lable}</h3>
        <p>
          {content}
        </p>
        <span>Project's link : </span><a href={"https://"+link} style={AStyle}>{link}</a>
      </div>
    </>
  );
}
