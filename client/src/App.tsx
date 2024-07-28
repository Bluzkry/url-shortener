import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import styled from "styled-components";

import { Result } from "./components/Result";
import { Shorten } from "./components/Shorten";
import "./App.css";

function App() {
  const mockShortenedUrl = "http://localhost:8080/a1b2c3d4";
  const [shortenedUrl, setShortenedUrl] = useState<string>("");

  const shortenUrl = (url: string) => {
    setShortenedUrl(mockShortenedUrl);
  };

  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">URL Shortener</header>
      <Body>
        <Shorten shortenUrl={shortenUrl} />
        {shortenedUrl && <Result url={shortenedUrl} />}
      </Body>
    </div>
  );
}

const Body = styled.body`
  div + div {
    margin-top: 2em;
  }
`;

export default App;
