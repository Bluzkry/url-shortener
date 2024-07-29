import React, { useState } from "react";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { isUri } from "valid-url";

type Props = {
  shortenUrl: (url: string) => void;
};

export const Shorten: React.FC<Props> = ({ shortenUrl }) => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleShorten = () => {
    const formattedUrl = isUri(url);
    if (formattedUrl) {
      shortenUrl(formattedUrl);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Main maxWidth="md">
      <SearchField
        variant="outlined"
        label="Input your URL to shorten"
        value={url}
        onChange={({ target }) => setUrl(target.value)}
        error={error}
        helperText={
          error &&
          'Please provide an input in the format of a URL. Include "https://www."'
        }
      />
      <Button
        variant="contained"
        onClick={() => handleShorten()}
        style={{ height: "3.5rem" }}
      >
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
