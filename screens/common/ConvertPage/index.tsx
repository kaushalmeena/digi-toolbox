import { H1, H3, TextArea, Button } from "@blueprintjs/core";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import { loadFile, copyData, saveFile } from "./utils";
import styled from "styled-components";
import Toast from "../toast";

type ConvertPageProps = {
  router: NextRouter;
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  convertFunc: (data: string) => string;
};

type ConvertPageState = {
  input: string;
  output: string;
};

class ConvertPage extends Component<ConvertPageProps, ConvertPageState> {
  constructor(props: ConvertPageProps) {
    super(props);
    this.state = {
      input: "",
      output: ""
    };
  }

  setInput = (value: string) => {
    this.setState({
      input: value
    });
  };

  setOutput = (value: string) => {
    this.setState({
      output: value
    });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setInput(event.target.value);
  };

  handleInputConvert = () => {
    const value = this.state.input;
    const convertedValue = this.props.convertFunc(value);
    this.setOutput(convertedValue);
  };

  handleInputClear = () => {
    this.setInput("");
  };

  handleInputUpload = () => {
    loadFile().then((result) => this.setInput(result));
  };

  handleOutputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setOutput(event.target.value);
  };

  handleOutputCopy = () => {
    copyData(this.state.output);
    Toast.show({ message: "Copied to clipboard.", intent: "primary" });
  };

  handleOutputDownload = () => {
    saveFile(this.state.output, this.props.fileExtension, this.props.fileType);
  };

  render() {
    return (
      <>
        <TopContainer>
          <H1>{this.props.heading}</H1>
          <H3>{this.props.subHeading}</H3>
        </TopContainer>
        <MainContainer>
          <BoxContainer>
            <TextArea
              fill
              rows={16}
              value={this.state.input}
              onChange={this.handleInputChange}
            />
            <ButtonContainer>
              <Button
                large
                intent="primary"
                text="Convert"
                onClick={this.handleInputConvert}
              />
              <Button large text="Upload" onClick={this.handleInputUpload} />
              <Button large text="Clear" onClick={this.handleInputClear} />
            </ButtonContainer>
          </BoxContainer>
          <BoxContainer>
            <TextArea
              fill
              rows={16}
              value={this.state.output}
              onChange={this.handleOutputChange}
            />
            <ButtonContainer>
              <Button large text="Copy" onClick={this.handleOutputCopy} />
              <Button
                large
                text="Download"
                onClick={this.handleOutputDownload}
              />
            </ButtonContainer>
          </BoxContainer>
        </MainContainer>
      </>
    );
  }
}

export const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const MainContainer = styled.div`
  padding: 20px 10px 60px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  margin: 20px;
  min-width: 300px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  & button {
    width: 100px;
  }
  & button + button {
    margin-left: 10px;
  }
`;

export default withRouter(ConvertPage);
