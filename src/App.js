import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Drawer, Content, Navigation } from "react-mdl";
import Main from "./Components/Main";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title="Christopher Mcilwricks Portfolio"
            scroll
          >
            <Navigation>
              <Link to="/CV">Curriculum Vitae</Link>
              <Link to="/Aboutme">About Me</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Home</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
