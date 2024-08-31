import React from 'react';
import Slider from './Slider';

function App() {
    const images = [
        "https://shipglobal.in/wp-content/uploads/2023/11/1689180134128.jpeg#233 ",   "https://shipglobal.in/wp-content/uploads/2023/11/Untitled-design-copy.png#237",  "https://shipglobal.in/wp-content/uploads/2023/11/Untitled-design-copy-2.png#238 ",    "https://shipglobal.in/wp-content/uploads/2023/11/Untitled-design-copy-3.png#239"
    ];

    return (
        <div className="App">
            <h1>Image Slider</h1>
            <Slider images={images} interval={3000} />
        </div>
    );
}

export default App;
