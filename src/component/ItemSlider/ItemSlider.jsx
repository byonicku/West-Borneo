import { useRef } from 'react';
import './ItemSlider.css';
import { Container } from 'react-bootstrap';

const ItemsSlider = ({ children }) => {
  let scrl = useRef(null);

  return (
    <Container fluid className='py-3 item-slider-container'>
      <div className='item-slider'>
        <div ref={scrl} className="item-container">
          {children}
        </div>
      </div>
    </Container>
  );
};

export default ItemsSlider;