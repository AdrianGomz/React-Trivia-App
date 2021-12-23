import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
function App() {
  const [data, setData] = useState();

  // const randomInt = (min, max) => {
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // Function for fetching the data
  const fetchAPI = async () => {
    const response = await fetch("https://triviaapi.azurewebsites.net/");
    setData(await response.json());
  };

  // fetching data only once
  useEffect(() => {
    fetchAPI();
  }, []);

  // rendering application only once we get the data
  if (!data) {
    return <h1 style={{ color: "white" }}>Loading ...</h1>;
  }

  return (
    <div className="container">
      <Quiz data={data} />
    </div>
  );
}

export default App;
