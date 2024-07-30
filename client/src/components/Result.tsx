import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Result: React.FC<{ url: string }> = ({ url }) => (
  <Main>
    <Typography variant="subtitle1">Your Shortened URL:</Typography>
    <Typography variant="h6">{url}</Typography>
  </Main>
);

const Main = styled(Container)`
  position: relative;
  z-index: 1;
  max-width: 33rem;
  padding: 0.5rem 1.5rem;
  background-color: whitesmoke;
  text-align: left;
`;
