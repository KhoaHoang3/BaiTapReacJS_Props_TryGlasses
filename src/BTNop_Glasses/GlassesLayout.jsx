import React, { Component } from "react";
import style from "../assets/style/style.module.css";
import ListOfGlasses from "./ListOfGlasses";
import TryGlass from "./TryGlass";

export default class GlassesLayout extends Component {
  arrGlass = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    currentGlass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    let html = this.arrGlass.map((item, index) => {
      return <ListOfGlasses changeGlass={this.changeGlass} item={item} />;
    });
    return html;
  };

  changeGlass = (item) => {
    console.log("information", item);

    this.setState({
      currentGlass: item,
    });
  };

  render() {
    return (
      <div className={`${style["bg-img"]} m-0 p-0`}>
        {/* TITLE */}
        <h3 className={`${style["title"]} text-light`}>
          TRY GLASSES APP ONLINE
        </h3>

        {/* TRY GLASSES */}
        <div className={`${style["images"]} d-flex justify-content-center`}>
          <TryGlass tryGlass={this.state.currentGlass} />
        </div>

        {/* CLICK TO GLASSES */}
        <div
          className={`${style["imagesGlasses"]} glasses container bg-white p-5 d-flex justify-content-center`}
        >
          {/* <img style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110} src="./img/glassesImage/v1.png" alt="" />
          <img style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110} src="./img/glassesImage/v2.png" alt="" />
          <img style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110} src="./img/glassesImage/v3.png" alt="" />
          <img style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110} src="./img/glassesImage/v4.png" alt="" />
          <img style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110} src="./img/glassesImage/v5.png" alt="" />
          <img style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110} src="./img/glassesImage/v6.png" alt="" />
          <img style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110} src="./img/glassesImage/v7.png" alt="" />
          <img style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110} src="./img/glassesImage/v8.png" alt="" />
          <img style={{cursor:'pointer'}} className="p-2 pr-0 border border-width-1" width={110} src="./img/glassesImage/v9.png" alt="" /> */}
          {this.renderGlassesList()}
        </div>
      </div>
    );
  }
}
