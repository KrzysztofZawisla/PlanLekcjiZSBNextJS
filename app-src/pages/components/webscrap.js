import axios from 'axios';
import React from "react";

export default class Webscrap extends React.Component {
  constructor(props) {
    super(props);
    this.webscrapData = null,
    this.webscrapClass = props.webscrapClass == "" || props.webscrapClass == undefined ? "error" : props.webscrapClass.toLowerCase()
  }
  async componentDidMount() {
    const res = await axios.get("https://preset-october.000webhostapp.com/index.php?klasa="+this.webscrapClass);
    this.webscrapData = await res.data;
  }
  render() {
    return(
      <div id="resDiv">
        <div dangerouslySetInnerHTML={{ __html: this.webscrapData }}></div>
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
