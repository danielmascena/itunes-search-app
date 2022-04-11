import * as React from "react";
import Box from "@mui/material/Box";

import Header from "../Header";
import Footer from "../Footer";
import ErrorBoundary from "../../../components/ErrorBoundary";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <ErrorBoundary>
    <Header />
    <Box component="main">{children}</Box>
    <Footer />
  </ErrorBoundary>
);

export default Layout;
