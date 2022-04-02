import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import ErrorBoundary from "../../../components/ErrorBoundary";

interface Props {
    children: React.ReactNode
}

const Layout = ({children}: Props) => (
    <ErrorBoundary>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </ErrorBoundary>
);

export default Layout;