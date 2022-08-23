import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch, Redirect, BrowserRouter, Routes } from 'react-router-dom';
import Resume from "../Resume/Resume";
import Resume_builder from "../Resume_builder/Resume_Builder";
import Header from "./Header";
export default function Layout(props) {
    return (
        <Container fluid className="p-0">
            {/* <Header /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/resumebuilder" element={<Resume_builder />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/" element={<Resume_builder />} />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}