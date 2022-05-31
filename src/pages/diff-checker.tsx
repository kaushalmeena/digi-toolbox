import Head from "next/head";
import React from "react";
import DiffCheckerPage from "../screens/Tools/Other/DiffChecker";

function DiffChecker() {
  return (
    <>
      <Head>
        <title key="title">Diff-Checker - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility to compare text to find the difference between two text files."
        />
      </Head>
      <DiffCheckerPage />
    </>
  );
}

export default DiffChecker;
