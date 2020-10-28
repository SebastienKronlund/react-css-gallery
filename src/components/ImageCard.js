import React from 'react';

const ImageCard = (props) => {
    const imageBG = {
        backgroundImage: `url(${props.src})`
    };
    return (
    <div id="image-1" className="image" style={imageBG}>
        <div className="image-overlay inactive">
            <p id="image-1-description" className="image-description"></p>
        </div>
    </div>
    );
}

export default ImageCard