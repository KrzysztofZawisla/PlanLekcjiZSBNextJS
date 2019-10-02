import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import React from "react";

interface ClassProps<T> {
  url: T;
};

interface ClassState {};

class Class extends React.Component<ClassProps<any>, ClassState> {
  constructor(props: ClassProps<any>) {
    super(props);
  }
  render() {
    const title = this.props.url.query.title;
    return (
      <Layout pageTitle={title}>
        <Webscrap/>
      </Layout>
    );
  }
  
}

export default Class;
