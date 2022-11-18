import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BodyContainer from "./components/BodyContainer";

function App() {
  const [page, setPage] = useState("About");
  return (
    <div>
      <Header />
      <Navbar setPage={setPage} />
      <main className="container is-fluid">
        <BodyContainer source={page} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
