import Head from "next/head";
import React from "react";
import SlashUnescapePage from "../screens/Tools/Text/SlashUnescape";

function SlashUnescape() {
  return (
    <>
      <Head>
        <title key="title">Slash-unescape Text - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for slash-unescaping text."
        />
      </Head>
      <SlashUnescapePage />
    </>
  );
}

export default SlashUnescape;
