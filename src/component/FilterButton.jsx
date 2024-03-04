import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

FilterButton.propTypes = {
    selectedTags: PropTypes.string,
    filterByTags: PropTypes.func,
    text: PropTypes.string,
    currentTags: PropTypes.string,
};

export default function FilterButton(props) {
  const { currentTags, selectedTags, filterByTags, text } = props;
  return (
    <Button
      variant={`${selectedTags === currentTags? "outline-light" : "secondary"}`}
      onClick={() => filterByTags(selectedTags.toLowerCase())}
      className="me-2 mb-2"
    >
      {text}
    </Button>
  );
}
