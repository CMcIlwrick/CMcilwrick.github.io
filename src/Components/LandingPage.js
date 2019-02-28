import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/36263024_1761631113912938_6688571699845136384_n.jpg?_nc_cat=102&_nc_ht=scontent-lht6-1.xx&oh=be834b40946f4adc2ce6e452b015d109&oe=5CE5366B"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>My Website Portfilo </h1>
              <hr />
              <p> ⋯ HTML/CSS ⋯ Javascript ⋯ React ⋯ Node.JS ⋯ </p>

              <div className="social-links">
                {/* SoloLearn*/}
                <a
                  href="https://www.sololearn.com/Profile/12403044#_="
                  rel="noopemer moreferrer"
                  target="_blink"
                >
                  <i className="fa fa-cog" aria-hidden="ture" />
                </a>
                {/* github*/}
                <a
                  href="https://github.com/Spoopy1123"
                  rel="noopemer moreferrer"
                  target="_blink"
                >
                  <i className="fa fa-github-square" aria-hidden="ture" />
                </a>
                {/* facebook*/}
                <a
                  href="https://www.facebook.com/christopher.hehee"
                  rel="noopemer moreferrer"
                  target="_blink"
                >
                  <i className="fa fa-facebook-square" aria-hidden="ture" />
                </a>
                {/* linkin*/}
                <a
                  href="https://www.linkedin.com/in/christopher-mcilwrick-782179180"
                  rel="noopemer moreferrer"
                  target="_blink"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="ture" />
                </a>
              </div>
            </div>
            <div />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
