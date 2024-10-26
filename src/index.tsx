import { StrictMode } from 'react'
import ReactDOM from "react-dom";
import App from './App'
import { DictionaryProvider } from './utils/context/DictionaryContext';

ReactDOM.render(
    <App />
  ,
  document.getElementById("root")
);
