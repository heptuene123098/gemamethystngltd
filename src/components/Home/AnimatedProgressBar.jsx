import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1
  });

  useEffect(() => {
    let interval;

    if (inView) {
      setProgress(0); // reset before re-animating
      const end = parseInt(value, 10);
      const duration = 1000;
      const increment = end / (duration / 10);

      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment;
          if (next >= end) {
            clearInterval(interval);
            return end;
          }
          return next;
        });
      }, 10);
    }

    return () => clearInterval(interval); // cleanup on unmount or out of view
  }, [inView, value]);

  return (
    <progress
      ref={ref}
      className="w-full h-[5px] bg-[#E6E6E6] rounded-lg"
      value={progress}
      max="100"
    />
  );
};

AnimatedProgressBar.propTypes = {
  value: PropTypes.string.isRequired
};
export default AnimatedProgressBar;
