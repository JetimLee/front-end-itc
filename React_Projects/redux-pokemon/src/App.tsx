import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Layout } from "./interface/Layout";

import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <SearchBar />
      </Layout>
    </div>
  );
}

export default App;
