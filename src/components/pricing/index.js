import React, { Component } from "react";
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Standing", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    ],
    linkto: ["http://sales/bal", "http://sales/stand", "http://sales/star"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>

            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton text="Purchase" bck="#faa800" color="#fffff" link={this.state.linkto[i]} />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
