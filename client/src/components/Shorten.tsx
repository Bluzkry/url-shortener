import React, { useState } from "react";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

type Props = {
  shortenUrl: (url: string) => void;
};

export const Shorten: React.FC<Props> = ({ shortenUrl }) => {
  const [url, setUrl] = useState<string>("");

  return (
    <Main maxWidth="md">
      <SearchField
        variant="outlined"
        label="Input your URL to shorten"
        value={url}
        onChange={({ target }) => setUrl(target.value)}
      />
      <Button variant="contained" onClick={() => shortenUrl(url)}>
        Shorten!
      </Button>
    </Main>
  );
};

const Main = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  gap: 2em;
  background-color: seashell;
  border-radius: 25px;
`;

const SearchField = styled(TextField)`
  width: 75%;
`;
