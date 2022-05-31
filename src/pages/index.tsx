import Head from "next/head";
import React from "react";
import HomePage from "../screens/Home";

function Home() {
  return (
    <>
      <Head>
        <title key="title">
          GetThatTool - One place for all the tool you could want
        </title>
        <meta
          key="description"
          name="description"
          content="GetThatTool is app that lets you have all common JSON, CSV, YAML, XML, Text and other tools and converters at one place."
        />
      </Head>
      <HomePage />
    </>
  );
}

export default Home;
