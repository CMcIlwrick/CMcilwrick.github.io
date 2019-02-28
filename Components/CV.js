import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
class CV extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "centre" }}>
              <img
                src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/36263024_1761631113912938_6688571699845136384_n.jpg?_nc_cat=102&_nc_ht=scontent-lht6-1.xx&oh=be834b40946f4adc2ce6e452b015d109&oe=5CE5366B"
                alt="avatar"
                style={{ hight: "200px" }}
                className="avatar-img"
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Christopher Mcilwrick</h2>
            <h4 style={{ color: "gray" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Good Analytic Skills Deep Logic Building & Problem Solving Skills
              Great Understanding of Data Structures & Algorithms Efficient
              coder in whatever language you are good at Sufficient knowledge
              about Computer Architecture & OS Concepts.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5> Adress</h5>
            <p>1 Hacker way menlo park</p>
            <h5> Phone </h5>
            <p>12345678910</p>
            <h5>Email</h5>
            <p>C.Mcilwrick@outlook.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="CV-right-col" col={8}>
            <h2> Education </h2>
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default CV;
