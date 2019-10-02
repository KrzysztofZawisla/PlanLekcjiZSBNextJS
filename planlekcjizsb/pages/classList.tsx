import Layout from "./components/layout";
import Button from "./components/button";
import React from "react";
import axios from 'axios';

interface ClassListProps<T> {
  url: T;
};

interface ClassListState {
  buttons: JSX.Element[];
};

export default class ClassList extends React.Component<ClassListProps<any>, ClassListState> {
  constructor(props: ClassListProps<any>) {
    super(props);
    this.state = {
      buttons: []
    }
  }
  componentDidMount() {
    let classListStorage;
    axios.get("https://preset-october.000webhostapp.com/planlekcjizsb/api/sendClasses.php").then((res) => {
      classListStorage = res.data.classes;
      const order: number = parseInt(this.props.url.query.order);
      let key: number = 0;
      for (let i = 0; i < classListStorage.length; i++) {
        if (i === order) {
          for (let j = 0; j < classListStorage[i].length; j++) {
            this.state.buttons.push(<Button key={key} buttonText={classListStorage[i][j]} buttonLink={"class?class=" + classListStorage[i][j].toLowerCase() + "&title=" + classListStorage[i][j]} />);
            key++;
          }
        }
      }
      this.setState({
        buttons: this.state.buttons
      })
    });
  }
  render() {
    return (
      <Layout>
        {this.state.buttons}
      </Layout>
    );
  }
}
