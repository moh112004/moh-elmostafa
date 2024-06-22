import Service from "./Service";
import "../Services.css";
import mobile from "../mobile.jfif";
import web from "../web.jfif";
export default function Services() {
  return (
    <>
      <div className="services">
        <Service
          image={mobile}
          lable="Mobile Development"
          content="I specialize in creating high-quality mobile applications for both Android and iOS platforms. I ensure seamless performance, user-friendly interfaces, and advanced functionalities to provide a top-notch mobile experience."
        />
        <Service
          image={web}
          lable="Web Development"
          content="I offer web development services, including building responsive, dynamic, and interactive websites. My focus is on delivering robust web solutions that cater to your business needs, ensuring a smooth user experience and high performance across all devices."
        />
      </div>
    </>
  );
}
