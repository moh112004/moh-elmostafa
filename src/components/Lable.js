let Style = {
padding: "100px 0 0",
textAlign: "center",
color: "#eee",
fontSize: "50px",
fontWeight: "bold"

};
export default function Lable({children}) {
return (
<>
    <p style={Style}>{children}</p>
    
</>);}