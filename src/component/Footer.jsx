import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="text-center text-white py-3">
                    <p>&copy; 2024 West Borneo</p>
                </div>
            </Container>
        </footer>
    );
}