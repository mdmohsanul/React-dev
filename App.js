import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'},

//if we have two heading tag then we have to create an array and pass into it
[React.createElement('h1',{id:'header'},'Hi There'),React.createElement('h2',{id:'header'},' There')]

)
);

const jsx = <h1>Hey JSX</h1>
console.log(jsx)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);