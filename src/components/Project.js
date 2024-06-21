import me from "../me.jpg";
import "../Project.css"
let AStyle = {
textDecoration: "none",
color: "#eee",
borderBottom: "1px #eee solid",
fontWeight: "500"
};
export default function Project() {
  return (
    <>
      <div className="project">
        <img src={me} alt="" />
        <h3 style={{margin: "0", fontSize: "20px"}}>Lable</h3>
        <p>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem
        </p>
        <span>Project's link : </span><a href="https://google.com" style={AStyle}>google.com</a>
      </div>
    </>
  );
}
