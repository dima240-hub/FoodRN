import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (seatchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: seatchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };
  // call searchApi when
  //componenent it s first rendered
  // BAD CODE
  //   searchApi('pasta')
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessage];
};
