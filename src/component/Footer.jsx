import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#363E3F"
          fill-opacity="1"
          d="M0,64L48,64C96,64,192,64,288,96C384,128,480,192,576,181.3C672,171,768,85,864,90.7C960,96,1056,192,1152,197.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <div
        style={{ bottom: 0, position: "absolute" }}
        className="text-center text-white w-100 py-3">
        <p>&copy; 2024 West Borneo</p>
      </div>
    </footer>
  );
}
