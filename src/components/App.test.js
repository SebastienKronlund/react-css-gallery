import { render } from '@testing-library/react';
import App from './App';
import Main from './Main';
import Splash from './Splash';

test('Checks for header and logo in header', () => {
  render(<App />);
  const header = document.querySelector("header");
  const logo = document.querySelector("header").querySelector("img");
  expect(header).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});

test('Check for main-body', () => {
  render(<Main/>);
  const main = document.querySelector("main");

  expect(main).toBeInTheDocument();
});
test('Check for a Search Bar in main', () => {
  render(<Main />);
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

test('Check for SearchBar in Splash', () => {
  render(<Splash />);
  const search = document
    .getElementById('search-form')
    .querySelector('input');

  expect(search).toBeInTheDocument();
});
