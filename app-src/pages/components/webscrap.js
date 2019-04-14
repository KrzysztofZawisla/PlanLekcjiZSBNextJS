import axios from 'axios';
import React from "react";

export default class Webscrap extends React.Component {
  constructor(props) {
    super(props);
    this.webscrapData = null,
    this.webscrapClass = props.webscrapClass == "" || props.webscrapClass == undefined ? "error" : props.webscrapClass.toLowerCase()
  }
  componentDidMount() {
    axios.get("https://preset-october.000webhostapp.com/planlekcjizsb/api/api.php?klasa="+this.webscrapClass).then((res) => {
      this.webscrapData = res.data;
    }).then(() => {
      this.render();
    });
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
