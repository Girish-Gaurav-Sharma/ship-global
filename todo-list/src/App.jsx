import React from 'react';
import Category from './components/Category';
// import data from './data.json';

const data = [
  "Backlog", "ToDo", "On Going", "Done"
]


function App() {
    return (
        <div className="App" style={{ margin:'0 auto'}}>
         <section className="listlayout" style={{display:'flex', gap:'7px'}}>
          {data.map((title, ind) => {
          return (
            <Category key={ind} title={title} />
          )
         })} 
         </section>
        </div>
    );
}

export default App;
