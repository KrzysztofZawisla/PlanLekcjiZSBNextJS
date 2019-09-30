import React from "react";
import Link from "next/link";

interface ButtonValues {
  buttonText: string;
  buttonLink: string;
  buttonLinkAs: string | null;
}

interface ButtonFunctions {
  buttonColor: Function;
}

interface ButtonProps {
  buttonText: string;
  buttonLink: string;
  buttonLinkAs?: string | null;
  buttonColor?: string;
}

interface ButtonState {
  buttonPrefetch: boolean;
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  private values: ButtonValues;
  private functions: ButtonFunctions;
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      buttonPrefetch: false
    }
    this.values = {
      buttonText: (props.buttonText == "" || props.buttonText == undefined) ? "Powrót na stronę główną" : props.buttonText,
      buttonLink: (props.buttonLink == "" || props.buttonLink == undefined) ? "/" : props.buttonLink,
      buttonLinkAs: (props.buttonLinkAs == "" || props.buttonLinkAs == undefined) ? null : props.buttonLinkAs
    }
    this.functions = {
      buttonColor: () => {
        if (props.buttonColor == "" || props.buttonColor == undefined) {
          return "#e05416"
        }
        switch (props.buttonColor.toLowerCase()) {
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
    }
  }
  componentDidMount() {
    this.setState({
      buttonPrefetch: true
    });
  }
  render() {
    return (
      <Link prefetch={this.state.buttonPrefetch} href={this.values.buttonLink} as={(this.values.buttonLinkAs as string)}>
        <div className="Button">
          <style jsx>{`
            .Button {
              width: 100%;
              margin 0 auto 15px auto;
              background: ${this.functions.buttonColor()};
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
          {this.values.buttonText}
        </div>
      </Link>
    );
  }
}
