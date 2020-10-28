import React from 'react';
import Button from './Button';

const Footer = ({stateIndex, setIndex}) => {
  return (
    <footer>
      <div className="button-container">
        <Button 
        text="Prev"
        setIndex={setIndex}
        stateIndex={stateIndex}
        />
        <a href="https://github.com/SebastienKronlund/react-css-gallery"><i className="fab fa-github-alt"></i> </a>
        <Button 
        text="Next"
        setIndex={setIndex}
        stateIndex={stateIndex}
        />
      </div>
    </footer>
  );
}

export default Footer
