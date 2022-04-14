import React, { Component } from "react";
import style from "../assets/style/style.module.css";

export default class TryGlass extends Component {
  render() {
    let { id, price, name, url, desc } = this.props.tryGlass;
    return (
      <div className="d-flex justify-content-center">
        <div className={`${style["imagesPadding"]} img-1`}>
          <img width={350} src="./img/glassesImage/model.jpg" alt="" />
          <div className="descrip position-relative">
            <div
              className='sub-image position-absolute'
              style={{ top: "-318px", left: "78px" }}
            >
              <img
                className={`${style['glassAnimation']}`}
                style={{ opacity: "0.7" }}
                width={190}
                src={url}
                alt=""
              />
            </div>
            <div
              className="sub-descrip position-absolute"
              style={{
                backgroundColor: "rgba(255, 127, 0, 0.5)",
                padding: "5px 10px 5px 10px",
                top: "-138px",
              }}
            >
              <p style={{ color: "rgb(171 130 255)", fontWeight: "bold" }}>
                {name}
              </p>
              <p>
                {desc}
              </p>
            </div>
          </div>
        </div>
        <div className="img-2">
          <img width={350} src="./img/glassesImage/model.jpg" alt="" />
        </div>
      </div>
    );
  }
}
