import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="d-flex flex-column align-items-center my-5">
      <h1>Halaman Utama</h1>
      <p>
        Selamat datang di Pesona Indonesia. Kami akan membantu Anda untuk
        menemukan tempat-tempat wisata yang menarik di Indonesia.
      </p>

      <h2>Daftar Tempat Wisata</h2>
      <ul>
        <li>
          <a href="/tempat/1">Borobudur</a>
        </li>
        <li>
          <a href="/tempat/2">Pulau Komodo</a>
        </li>
        <li>
          <a href="/tempat/3">Taman Mini Indonesia Indah</a>
        </li>
        <li>
          <a href="/tempat/4">Pulau Bali</a>
        </li>
      </ul>

      <h2>Daftar Makanan Khas</h2>
      <ul>
        <li>
          <a href="/makanan/1">Rendang</a>
        </li>
        <li>
          <a href="/makanan/2">Sate</a>
        </li>
        <li>
          <a href="/makanan/3">Nasi Goreng</a>
        </li>
        <li>
          <a href="/makanan/4">Gudeg</a>
        </li>
      </ul>

      <h2>Daftar Event</h2>
      <ul>
        <li>
          <a href="/event/1">Pekan Raya Jakarta</a>
        </li>
        <li>
          <a href="/event/2">Festival Kebudayaan Bali</a>
        </li>
        <li>
          <a href="/event/3">Pawai Budaya Jawa Tengah</a>
        </li>
        <li>
          <a href="/event/4">Festival Seni Papua</a>
        </li>
      </ul>
    </Container>
  );
}
