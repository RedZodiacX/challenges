import React, { useState, useEffect } from 'react';
import GifItem from './GifItem';
import { getGifs } from './getGifs'; // Asegúrate de tener esta función lista

const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        const fetchGifs = async () => {
            const gifs = await getGifs(category);
            setGifs(gifs);
        };

        fetchGifs();
    }, [category]);

    return (
        <div>
            <h3>{category}</h3>
            <div className="gif-grid">
                {gifs.map(gif => (
                    <GifItem key={gif.id} {...gif} />
                ))}
            </div>
        </div>
    );
};

export default GifGrid;
