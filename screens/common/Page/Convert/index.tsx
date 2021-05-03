import {
  Button,
  Card,
  FormGroup,
  H1,
  H3,
  HTMLSelect,
  InputGroup,
  TextArea
} from "@blueprintjs/core";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import styled from "styled-components";
import { IOption, ISecondaryInputs } from "../../../../types";
import Toast from "../../toast";
import { copyData, loadFile, saveFile } from "./utils";

type ConvertPageProps = {
  router: NextRouter;
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  defaultSecondaryInputsValues?: ISecondaryInputs;
  options?: IOption[];
  convertFunc: (data: string, options?: ISecondaryInputs) => string;
};

type ConvertPageState = {
  primaryInput: string;
  secondaryInputs?: ISecondaryInputs;
  output: string;
};

class ConvertPage extends Component<ConvertPageProps, ConvertPageState> {
  constructor(props: ConvertPageProps) {
    super(props);
    this.state = {
      primaryInput: "",
      secondaryInputs: props.defaultSecondaryInputsValues,
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

  handleSecondaryInputsChange = (name: string, value: string) => {
    this.setState((prevState) => ({
      secondaryInputs: {
        ...prevState.secondaryInputs,
        [name]: value
      },
      output: this.getOutput()
    }));
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

  handleInputConvert = () => {
    this.setOutput(this.getOutput());
  };

  handleSwitch = () => {
    this.props.router.push(this.props.switchURL);
  };

  getOutput = () => {
    let output = "";

    try {
      output = this.props.convertFunc(
        this.state.primaryInput,
        this.state.secondaryInputs
      );
    } catch (err) {
      console.error(err);
      output = "Invalid input detected.";
    }

    return output;
  };

  render() {
    return (
      <RootContainer>
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
              onKeyUp={this.handleInputConvert}
            />
            <ButtonContainer>
              <Button
                large
                title="Upload"
                icon="export"
                onClick={this.handleInputUpload}
              />
              <Button
                large
                title="Clear"
                icon="refresh"
                onClick={this.handleInputClear}
              />
            </ButtonContainer>
          </IOContainer>
          <MiddleContainer>
            {this.props.switchURL ? (
              <>
                <Button
                  large
                  title="Switch"
                  icon="arrows-horizontal"
                  className="show-md"
                  onClick={this.handleSwitch}
                />
                <Button
                  large
                  title="Switch"
                  icon="arrows-vertical"
                  className="hide-md"
                  onClick={this.handleSwitch}
                />
              </>
            ) : null}
          </MiddleContainer>
          <IOContainer>
            <TextArea readOnly fill rows={16} value={this.state.output} />
            <ButtonContainer>
              <Button
                large
                title="Copy"
                icon="duplicate"
                onClick={this.handleOutputCopy}
              />
              <Button
                large
                title="Download"
                icon="import"
                onClick={this.handleOutputDownload}
              />
            </ButtonContainer>
          </IOContainer>
        </MainContainer>
        {this.props.options ? (
          <SectionContainer>
            <SectionTitle>Options</SectionTitle>
            <Card>
              {this.props.options.map((item) => (
                <FormGroupContainer key={`input-${item.name}`}>
                  <FormGroup label={item.label}>
                    {item.type === "INPUT" && (
                      <InputGroup
                        fill
                        large
                        placeholder={item.placeholder}
                        value={this.state.secondaryInputs[item.name]}
                        onChange={(event) => {
                          this.handleSecondaryInputsChange(
                            item.name,
                            event.target.value
                          );
                        }}
                      />
                    )}
                    {item.type === "SELECT" && (
                      <HTMLSelect
                        fill
                        large
                        options={item.options}
                        value={this.state.secondaryInputs[item.name]}
                        onChange={(event) => {
                          this.handleSecondaryInputsChange(
                            item.name,
                            event.target.value
                          );
                        }}
                      />
                    )}
                  </FormGroup>
                </FormGroupContainer>
              ))}
            </Card>
          </SectionContainer>
        ) : null}
      </RootContainer>
    );
  }
}

const RootContainer = styled.div`
  padding: 0px 20px 60px 20px;
`;

const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const MiddleContainer = styled.div`
  padding: 20px 20px 70px 20px;
  min-width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & .show-md {
    display: inline-flex;
  }
  & .hide-md {
    display: none;
  }
  @media (max-width: 760px) {
    padding: 10px 0px 10px 0px;
    width: 100%;
    & .show-md {
      display: none;
    }
    & .hide-md {
      display: inline-flex;
    }
  }
`;

const IOContainer = styled.div`
  padding: 20px 0px 20px 0px;
  min-width: 300px;
  flex: 1;
  & > textarea {
    font-family: monospace;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  & > button {
    margin-right: 10px;
  }
`;

const SectionContainer = styled.div`
  margin-top: 10px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    flex-basis: 33.333333%;
  }
`;

export default withRouter(ConvertPage);
