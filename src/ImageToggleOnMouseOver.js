import React, {useRef} from 'react';

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {

    const  imageRef = useRef(null);

    return (
        <img
            width='300'
            src={primaryImg}
            ref={imageRef}
            onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }}
         alt=''/>
    );
};

export default ImageToggleOnMouseOver;
