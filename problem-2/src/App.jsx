import React from 'react';
import Slider from './Slider';

function App() {
    const images = [
        'https://via.placeholder.com/600x300?text=Slide+1',
        'https://via.placeholder.com/600x300?txt=Slide+2',
        'https://via.placeholder.com/600x300?text=Slide+3',
    ];

    return (
        <div className="App">
            <h1>Image Slider</h1>
            <Slider images={images} interval={3000} />
        </div>
    );
}

export default App;
