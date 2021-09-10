import Spinner from "react-spinner-material";
import React, { Component } from "react";

function Loading() {
  return (
    <div>
      <center
        style={{ display: "grid", placeItems: "center", height: "100vh" }}
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            alt=""
            style={{ marginBottom: 10 }}
            height={200}
          />
          <Spinner
            radius={50}
            color="#3C4043"
            size={60}
            stroke={3}
            visible={true}
          />
        </div>
      </center>
    </div>
  );
}

export default Loading;
