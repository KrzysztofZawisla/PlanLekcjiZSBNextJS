import { withRouter } from 'next/router'
import axios from 'axios';
import React from "react";

interface WebscrapProps<T> {
  router?: T;
};

interface WebscrapState {
  workingText: string;
  webscrapData?: string;
};

class Webscrap extends React.Component<WebscrapProps<any>, WebscrapState> {
  constructor(props: WebscrapProps<any>) {
    super(props);
    this.state = {
      workingText: "Pracuje nad tym... ⏳"
    };
  }

  componentDidMount() {
    const regex = new RegExp("class=.*&", "g");
    const adress = this.props.router.asPath;
    let classToWebscrap: string | RegExpExecArray | null = regex.exec(adress);
    if(classToWebscrap !== null) {
      classToWebscrap = classToWebscrap[0];
      classToWebscrap = classToWebscrap.substr(6, classToWebscrap.length - 1);
    } else {
      classToWebscrap = "error";
    }
    axios.get("https://preset-october.000webhostapp.com/planlekcjizsb/api/api.php?class=" + classToWebscrap).then((res) => {
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

export default withRouter((Webscrap as any));
