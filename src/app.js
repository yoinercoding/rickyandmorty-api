import "./App.scss"
import React, { Fragment } from "react";
import Header from "./components/header";
import Characters from "./components/characters";
import './main.sass'
import './components/header.css'

function App() {
    return (
        <Fragment>
            <Header title="Rick and Morty API"/>
            <Characters/>
        </Fragment>
    );
}

export default App;