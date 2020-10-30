import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Footer = ({stateIndex, setIndex}) => {
  const location = useLocation();

  const GenerateButtons = () => {
    
    if(location.pathname === "/search") {
      return (
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
      );
    }
    return (
      <div className="button-container">
        <a href="https://github.com/SebastienKronlund/react-css-gallery"><i className="fab fa-github-alt"></i> </a>
      </div>
    );
  }

  return (
    <footer>
      <GenerateButtons />
    </footer>
  );
}

export default Footer

{/*
  const location = useLocation();

  const GenerateButtons = () => {
    
    if(location.pathname === "/search") {
      return (
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
      );
    }
    return (
      <div className="button-container">
        <a href="https://github.com/SebastienKronlund/react-css-gallery"><i className="fab fa-github-alt"></i> </a>
      </div>
    );
  }

  return (
    <footer>
      <GenerateButtons />
    </footer>
  );
*/}
