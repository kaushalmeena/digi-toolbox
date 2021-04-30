import {
  Button,
  ControlGroup,
  H1,
  H3,
  HTMLSelect,
  TextArea
} from "@blueprintjs/core";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import styled from "styled-components";
import { IOption } from "../../../../types";
import Toast from "../../toast";
import { copyData, loadFile, saveFile } from "./utils";

type ConvertPageProps = {
  router: NextRouter;
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  options?: IOption[];
  convertFunc: (data: string, options?: string) => string;
};

type ConvertPageState = {
  primaryInput: string;
  secondaryInput?: string;
  output: string;
};

class ConvertPage extends Component<ConvertPageProps, ConvertPageState> {
  constructor(props: ConvertPageProps) {
    super(props);
    this.state = {
      primaryInput: "",
      secondaryInput: props.options ? props.options[0].value : null,
      output: ""
    };
  }

  setInput = (value: string) => {
    this.setState({
      primaryInput: value
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

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      secondaryInput: event.target.value
    });
  };

  handleInputConvert = () => {
    let output = "";

    try {
      output = this.props.convertFunc(
        this.state.primaryInput,
        this.state.secondaryInput
      );
    } catch (err) {
      console.error(err);
      output = "Invalid input detected.";
    }

    this.setOutput(output);
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
          <IOContainer>
            <TextArea
              fill
              rows={16}
              value={this.state.primaryInput}
              onChange={this.handleInputChange}
            />
            <ButtonContainer>
              <ControlGroup>
                <Button
                  large
                  intent="primary"
                  text="Convert"
                  onClick={this.handleInputConvert}
                />
                {this.props.options ? (
                  <HTMLSelect
                    large
                    options={this.props.options}
                    value={this.state.secondaryInput}
                    onChange={this.handleSelectChange}
                  />
                ) : null}
              </ControlGroup>
              <Button
                large
                text="Upload"
                className="button-left-margin"
                onClick={this.handleInputUpload}
              />
              <Button
                large
                text="Clear"
                className="button-left-margin"
                onClick={this.handleInputClear}
              />
            </ButtonContainer>
          </IOContainer>
          <IOContainer>
            <TextArea readOnly fill rows={16} value={this.state.output} />
            <ButtonContainer>
              <Button large text="Copy" onClick={this.handleOutputCopy} />
              <Button
                large
                text="Download"
                className="button-left-margin"
                onClick={this.handleOutputDownload}
              />
            </ButtonContainer>
          </IOContainer>
        </MainContainer>
      </>
    );
  }
}

const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MainContainer = styled.div`
  padding: 20px 10px 60px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const IOContainer = styled.div`
  margin: 20px;
  min-width: 300px;
  flex: 1;
  & textarea {
    font-family: monospace;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  & .button-left-margin {
    margin-left: 10px;
  }
  & .button-right-margin {
    margin-right: 10px;
  }
`;

export default withRouter(ConvertPage);
