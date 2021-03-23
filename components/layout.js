import React from "react";
import { Header } from "./header";
import {Footer} from "./footer"

export const Layout = ({ children }) => (
    <>
        <Header />
        { children }
        <Footer />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"></script>
    </>
)