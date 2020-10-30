import React from 'react';

const ImageCard = (props) => {
    const imageBG = {
        backgroundImage: `url(${props.src})`
    };

    const toggleInactive = (e) => {
        if(e.target.classList.contains("image-overlay")){
            e.target.classList.toggle("inactive");
        }
    }

    const descriptionCheck = () => {
        if(props.description) {
            return props.description;
        }
        else {
           return "Who needs a caption with an image this good! <3";
        }
    }

    return (
    <div id={props.id} className="image" style={imageBG}>
        <div
        className="image-overlay inactive"
        onClick={toggleInactive}
        >
            <p
            id="image-1-description"
            className="image-description"
            alt={descriptionCheck()}
            >
                {descriptionCheck()}
            </p>
        </div>
    </div>
    );
}

export default ImageCard