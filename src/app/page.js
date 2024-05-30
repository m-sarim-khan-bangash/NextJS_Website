import React from "react";
import Herosection from "./components/Herosection";

const Home = ({ title, imageUrl }) => {
  return (
    <>
      <Herosection
        title={"LET'S WATCH NETFLIX TOGETHER "}
        imageUrl={"/home.svg"}
      />
    </>
  );
};

export default Home;
