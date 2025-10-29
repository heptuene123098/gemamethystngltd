import PropTypes from 'prop-types';

// src/components/academy/CourseCard.jsx
const CourseCard = ({ index }) => {
  return (
    <div className="course-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Course card content */}
    </div>
  );
};

CourseCard.propTypes = {
  index: PropTypes.number.isRequired
};

export default CourseCard;