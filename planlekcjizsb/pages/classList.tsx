import Layout from "./components/layout";
import Button from "./components/button";
import React from "react";

const classListStorage = [
  [
    "1bA",
    "1wA",
    "1gA",
    "1iA",
    "1kA",
    "1ba8",
    "1aw8",
    "1ga8",
    "1ia8",
    "1w8"
  ],
  [
    "2w",
    "2wA",
    "2iB",
    "2iA",
    "2gA",
    "2bA"
  ],
  [
    "3gI",
    "3iB",
    "3iA",
    "3bA",
  ],
  [
    "4gI",
    "4iB",
    "4iA",
    "4bB",
    "4bA"
  ]
];

interface ClassListProps<T> {
  url: T;
};

interface ClassListState {
  buttons: JSX.Element[];
};

class ClassList extends React.Component<ClassListProps<any>, ClassListState> {
  constructor(props: ClassListProps<any>) {
    super(props);
    this.state = {
      buttons: []
    }
  }

  render() {
    const order: number = parseInt(this.props.url.query.order);
    let key: number = 0;
    for(let i = 0; i < classListStorage.length; i++) {
      if(i === order) {
        for(let j = 0; j < classListStorage[i].length; j++) {
          this.state.buttons.push(<Button key={key} buttonText={classListStorage[i][j]} buttonLink={"class?class=" + classListStorage[i][j].toLowerCase() + "&title=" + classListStorage[i][j]} />);
          key++;
        }
      }
    }
    return (
      <Layout>
        {this.state.buttons}
      </Layout>
    );
  }
}

export default ClassList;
