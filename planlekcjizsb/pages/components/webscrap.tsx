import axios from 'axios';
import React from "react";

interface WebscrapValues {
  webscrapClass: string;
};

interface WebscrapProps {
  webscrapClass: string;
};

interface WebscrapState {
  workingText: string;
  webscrapData?: string;
};

export default class Webscrap extends React.Component<WebscrapProps, WebscrapState> {
  private values: WebscrapValues
  constructor(props: WebscrapProps) {
    super(props);
    this.state = {
      workingText: "Pracuje nad tym... ⏳"
    };
    this.values = {
      webscrapClass: props.webscrapClass == "" || props.webscrapClass == undefined ? "error" : props.webscrapClass.toLowerCase()
    };
  }
  componentDidMount() {
    axios.get("https://preset-october.000webhostapp.com/planlekcjizsb/api/api.php?class=" + this.values.webscrapClass).then((res) => {
      this.setState({
        webscrapData: res.data,
        workingText: ""
      });
    }).catch(() => {
      this.setState({
        workingText: "Coś poszło nie tak 🙁"
      });
    });
  }
  render() {
    return (
      <div id="resDiv">
        <div>{this.state.workingText}</div>
        <div dangerouslySetInnerHTML={{ __html: (this.state.webscrapData as string) }}></div>
        <style jsx>{`
          #resDiv {
            width: 100%;
            height: auto;
            margin: 0 auto;
            text-align: center;
          }
          .tabela {
            background: black;
          }
        `}</style>
      </div>
    );
  }
}
