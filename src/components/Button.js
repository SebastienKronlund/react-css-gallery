import React from 'react';

const Button = ({text, setIndex, stateIndex}) => {

    const changeImages = () => {

        if(text === "Next") {
            if(stateIndex < 30 ){
                setIndex(stateIndex + 6);
            }
        }
        else if(text === "Prev"){
            if(stateIndex > 6){
                setIndex(stateIndex - 6);
            }
        }
        else {
            console.log("There are no more images to load");
        }
    }

    return (
    <button className="button-alexHouse" onClick={changeImages}>{text}</button>
    );
}

export default Button;