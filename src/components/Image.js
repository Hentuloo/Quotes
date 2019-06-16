import React from 'react';
import '../style/imageComponent.css';

const Image = ({ src, description, alt }) => {
    return (
        <figure className="headerImage">
            <img src={src} alt={alt} />
            <figcaption>{description}</figcaption>
        </figure>
    );
};

export default Image;
