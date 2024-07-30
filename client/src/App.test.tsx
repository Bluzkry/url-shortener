import React, { act } from "react";
import { render, screen, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import App from "./App";

jest.mock("axios");

describe("URL Shortener", () => {
  let app: RenderResult;
  let search: HTMLElement;
  let button: HTMLElement;

  const shortenedUrl = "http://localhost:8080/a1b2c3d4";

  beforeEach(() => {
    jest.clearAllMocks();
    (axios.post as jest.Mock).mockResolvedValue({
      data: { shortenedUrl },
    });

    app = render(<App />);
    search = screen.getByLabelText("Input your URL to shorten");
    button = screen.getByRole("button");
  });

  it("renders", () => {
    expect(app).toBeTruthy();
  });

  it("shortens the URL", async () => {
    await act(async () => {
      await userEvent.type(search, "https://www.google.com");
      await userEvent.click(button);
    });

    expect(screen.getByText("Your Shortened URL:")).toBeVisible();
    expect(screen.getByText(shortenedUrl)).toBeVisible();
  });

  it("shows a validation error with an invalid input", async () => {
    await act(async () => {
      await userEvent.type(search, "invalid input");
      await userEvent.click(button);
    });

    expect(
      screen.getByText(
        'Please provide an input in the format of a URL. Include "https://www."'
      )
    ).toBeVisible();
    expect(screen.queryByText("Your Shortened URL:")).not.toBeInTheDocument();
    expect(screen.queryByText(shortenedUrl)).not.toBeInTheDocument();
  });
});
