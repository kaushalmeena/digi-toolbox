import Head from "next/head";
import React from "react";
import SlashEscapePage from "../screens/Tools/Text/SlashEscape";

function SlashEscape() {
  return (
    <>
      <Head>
        <title key="title">Slash-escape Text - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for slash-escaping text."
        />
      </Head>
      <SlashEscapePage />
    </>
  );
}

export default SlashEscape;
