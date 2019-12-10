/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";

import theme from "constants/theme.js";
import IndexPage from "pages/index.jsx";

describe("With React Testing Library", () => {
  it('Shows "My page"', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <IndexPage />
      </ThemeProvider>
    );

    expect(getByText("My page")).not.toBeNull();
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <IndexPage />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
