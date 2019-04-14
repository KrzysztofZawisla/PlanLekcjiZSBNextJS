import Link from "next/link";

const Button = (props) => {
  const states = {
    buttonText: props.buttonText == "" || props.buttonText == undefined ? "Powrót na stronę główną" : props.buttonText,
    buttonLink: props.buttonLink == "" || props.buttonLink == undefined ? "/" : props.buttonLink,
    buttonLinkAs: props.buttonLinkAs == "" || props.buttonLinkAs == undefined ? null : props.buttonLinkAs,
    buttonColor: () => {
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
  };
  return(
    <Link prefetch href={ states.buttonLink } as={ states.buttonLinkAs }>
      <div className="Button">
        <style jsx>{`
          .Button {
            width: 100%;
            background: ${ states.buttonColor() };
            padding: 5px;
            text-align: center;
            border-radius: 5px;
            font-size: 24px;
            color: #fff;
            margin-bottom: 15px;
          }
          .Button:last-child {
            margin-top: 0;
          }
        `}</style>
        { states.buttonText }
      </div>
    </Link>
  );
}

export default Button;
