import React from 'react';
import Category from './components/Category';
import data from './data.json';




function App() {
    return (
        <div className="App" style={{ margin:'0 auto'}}>
         <section className="listlayout" style={{display:'flex', gap:'7px'}}>
          {data.map((content, ind) => {
          return (
            <Category key={ind} content={content} />
          )
         })} 
         </section>
        </div>
    );
}

export default App;
