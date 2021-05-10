import Head from "next/head";
import React, { FunctionComponent } from "react";
import ImageColorPickerPage from "../screens/Tools/Other/ImageColorPicker";

const ImageColorPicker: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Image Color Picker - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for picking color from image."
      />
    </Head>
    <ImageColorPickerPage />
  </>
);

export default ImageColorPicker;
