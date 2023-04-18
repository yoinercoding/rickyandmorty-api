import "./App.scss"
import React, { Fragment } from "react";
import Header from "./components/header";

function App() {
    return (
        <Fragment>
            <Header 
                title="Rick and Morty API"
            />
        </Fragment>
    );
}

export default App;