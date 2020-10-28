import { render } from '@testing-library/react';
import App from './App';

test('Checks for header and logo in header', () => {
  render(<App />);
  const header = document.querySelector("header");
  const logo = document.querySelector("header").querySelector("img");
  expect(header).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});

test('Check for main-body', () => {
  render(<App/>);
  const main = document.querySelector("main");

  expect(main).toBeInTheDocument();
});
test('Check for a Search Bar in main', () => {
  render(<App/>);
  const search = document
    .querySelector(".search-container")
    .querySelector("#search-form")
    .querySelector("#search-input");

  expect(search).toBeInTheDocument();
});

test('Check for Footer', () => {
  render(<App/>);
  const footer = document
    .querySelector("footer")
    .querySelector(".button-container")
    .querySelector("button");
  

  expect(footer).toBeInTheDocument();
});
