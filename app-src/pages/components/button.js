import React from "react";
import Link from "next/link";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.buttonText = props.buttonText == "" || props.buttonText == undefined ? "Powrót na stronę główną" : props.buttonText;
    this.buttonLink = props.buttonLink == "" || props.buttonLink == undefined ? "/" : props.buttonLink;
    this.buttonLinkAs = props.buttonLinkAs == "" || props.buttonLinkAs == undefined ? null : props.buttonLinkAs;
    this.buttonColor = () => {
      if(props.buttonColor == "" || props.buttonColor == undefined) {
        return "#e05416"
      }
      switch(props.buttonColor.toLowerCase()) {
        case "black":
          return "#000";
        case "red":
          return "#d50000";
        case "green":
          return "#00c853";
        default:
          return "#e05416";
      }
    }
    this.buttonPrefetch = false;
  }
  componentDidMount() {
    this.buttonPrefetch = true;
    this.forceUpdate();
  }
  render() {
    return(
      <Link prefetch={ this.buttonPrefetch } href={ this.buttonLink } as={ this.buttonLinkAs }>
        <div className="Button">
          <style jsx>{`
            .Button {
              width: 100%;
              margin 0 auto 15px auto;
              background: ${ this.buttonColor() };
              padding: 5px;
              text-align: center;
              border-radius: 5px;
              font-size: 24px;
              color: #fff;
            }
            .Button:last-child {
              margin-top: 0;
            }
          `}</style>
          { this.buttonText }
        </div>
      </Link>
    );
  }
}
