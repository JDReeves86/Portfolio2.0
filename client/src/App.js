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
  }, [page]);
  // let visits = localStorage.getItem("visits");
  // if (visits == null || undefined) {
  //   visits = 0;
  // }
  // let [hits, setHits] = useState(visits);
  // useEffect(() => {
  //   setHits((parseInt(hits) + 1));
  //   localStorage.setItem("visits", hits)
  // }, []);
  return (
    <div>
      <Header />
      <Navbar setPage={setPage} /> {/* add hits when ready to get visit counter working again */}
      <main className="container is-fluid">
        <BodyContainer source={page} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
