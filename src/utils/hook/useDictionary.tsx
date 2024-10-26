import { useContext } from "react";
import { DictionaryContext } from "../context/DictionaryContext";

const useDictionary = () => useContext(DictionaryContext);

export default useDictionary;
