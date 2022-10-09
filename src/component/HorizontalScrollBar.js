import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from '@mui/material';
import HorizontalScroll from 'react-horizontal-scrolling';
import ExerciseCard from './ExerciseCard'

// import ExerciseCard from './ExerciseCard';
import Bodypart from './Bodypart';
import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';

// type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodypart, bodyPart, isBodyPart }) => (
  <HorizontalScroll 
  LeftArrow={LeftArrow} 
  RightArrow={RightArrow}
  >
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
     {isBodyPart ?  <Bodypart item={item} setBodypart={setBodypart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />} 
      </Box>
    ))}
  </HorizontalScroll>
);

export default HorizontalScrollbar;