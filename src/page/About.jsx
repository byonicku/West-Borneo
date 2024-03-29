import { Card, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import Kalimantan from "../component/Kalimantan.jsx";

export default function About() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <div className="w3-animate-zoom about-text">
            <Card className="bg-transparent border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>Tentang Kalimantan Barat</strong>
                  </h1>
                </Card.Title>
                <Card.Text>
                  Kalimantan Barat adalah salah satu provinsi yang berada di
                  Pulau Kalimantan. Provinsi yang memiliki ciri khas yang kuat
                  karena berbatasan dengan Malaysia, menjadikan budayanya yang
                  bercampur antara Dayak dan Melayu. Selain itu, keberagaman
                  wisata yang disediakan daerah Kalimantan Barat sangat menarik.
                  Sehingga Kalimantan Barat menjadi salah satu destinasi bagi
                  penjelajah Indonesia.
                </Card.Text>
                <Card.Text>
                  Kalimantan Barat adalah provinsi di Indonesia yang disebut sebagai provinsi "Seribu Sungai". Banyak sungai yang mengalir di daerah Kalimantan Barat, baik kecil maupun besar. Sungai Kapuas, sebagai sungai terbesar di Indonesia, juga mengalir di provinsi ini. Selain itu, sebagian besar desa di Kalimantan Barat masih menggunakan sungai sebagai prasarana transportasi.
                </Card.Text>
                <Card.Text>
                  Kalimantan yang sering sebagai paru-paru dunia juga terpancar pada Kalimantan Barat. Kalimantan Barat memiliki luas hutan sekitar 8.2 juta hektar, namun mengalami deforestasi dari tahun ke tahun. Meskipun demikian, sebagian daerah hutan telah dijadikan hutan adat untuk tetap menjaga kelestariannya.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <div className="w3-animate-zoom">
      <Kalimantan />
      </div>
      <div style={{ height:'30vh' }}></div>
      
    </Container>
  );
}
