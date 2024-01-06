import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Main from "./component/Main";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Main></Main>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);