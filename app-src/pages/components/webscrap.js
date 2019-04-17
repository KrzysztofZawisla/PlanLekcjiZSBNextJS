import axios from 'axios';
import React from "react";

export default class Webscrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workingText: "Pracuje nad tym... ⏳",
      webscrapData: null,
      webscrapClass: props.webscrapClass == "" || props.webscrapClass == undefined ? "error" : props.webscrapClass.toLowerCase()
    }
  }
  componentDidMount() {
    axios.get("https://preset-october.000webhostapp.com/planlekcjizsb/api/api.php?klasa="+this.state.webscrapClass).then((res) => {
      this.setState({
        webscrapData: res.data,
        workingText: ""
      });
    }).catch((err) => {
      this.setState({
        workingText: "Coś poszło nie tak 🙁"
      });
    });
  }
  render() {
    return(
      <div id="resDiv">
        <div>{ this.state.workingText }</div>
        <div dangerouslySetInnerHTML={{ __html: this.state.webscrapData }}></div>
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
