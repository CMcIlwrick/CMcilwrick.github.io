import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Contact extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="contact-grid">
          <Cell col={12}>
            <div className="card-cotainer" shadow={5}>
              <div className="cardflip">
                <div className="front">
                  <div className="inner">
                    <span class="blue">alert</span>
                    <span>
                      (<span class="green">'Hello World!'</span>)
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="backfont">
                      <p>
                        <span class="purple">const</span> Contact{" "}
                        <span class="cyan">=</span>
                        <br />
                        <span class="space red">name</span>
                        <span class="cyan">:</span>{" "}
                        <span class="green">'Christopher Mcilwrick'</span>,
                        <br />
                        <span class="space red">email</span>
                        <span class="cyan">:</span>{" "}
                        <span class="green">'C.mcilwrick@outlook.com</span>',
                        <br />
                        <span class="space red">phone number</span>
                        <span class="cyan">:</span>{" "}
                        <span class="green">'07568740492'</span>,
                        <br />
                        <span class="space red">website</span>
                        <span class="cyan">:</span>{" "}
                        <span class="green">
                          'https://www.linkedin.com/in/christopher-mcilwrick-782179180/'
                        </span>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
