import { Header, Main } from "@/Layouts";
import React from "react";

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
  return <>
    <Header />
    <Main />
  </>
}

export default Home;
