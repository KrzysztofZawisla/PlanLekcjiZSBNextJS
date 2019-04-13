import Link from "next/link";

const Button = (props) => {
  const states = {
    buttonText: props.buttonText == "" || props.buttonText == undefined ? "Powrót na stronę główną" : props.buttonText,
    buttonLink: props.buttonLink == "" || props.buttonLink == undefined ? "/" : props.buttonLink
  };
  return(
    <Link href={ states.buttonLink }>
    <div className="Button">
      <style jsx>{`
        .Button {
          width: 100%;
          background: #e05416;
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
