import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BodyContainer from "./components/BodyContainer";

function App() {
  const lastVisited = localStorage.getItem("page");
  const [page, setPage] = useState(lastVisited);
  useEffect(() => {
    localStorage.setItem("page", page);
  });
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
