import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";

import { Result } from "./components/Result";
import { Shorten } from "./components/Shorten";
import "./App.css";

type ShortenUrlResponse = {
  shortenedUrl: string;
};

function App() {
  const [shortenedUrl, setShortenedUrl] = useState<string>("");

  const shortenUrl = async (url: string) => {
    try {
      const { data }: AxiosResponse<ShortenUrlResponse> = await axios.post(
        "/shorten",
        { url }
      );
      setShortenedUrl(data.shortenedUrl);
    } catch (e) {
      console.error(e);
      alert(
        "Sorry, we failed to shorten the URL. It's our fault! Please try again later as we fix this issue."
      );
    }
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
