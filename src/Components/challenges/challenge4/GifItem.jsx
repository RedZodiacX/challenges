import React from 'react';

const GifItem = ({ title, url }) => {
    return (
        <div>
            <h4>{title}</h4>
            <img src={url} alt={title} />
        </div>
    );
};

export default GifItem;
