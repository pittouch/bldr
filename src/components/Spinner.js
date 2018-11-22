import React from "react";
import { SyncLoader } from "react-spinners";

export default props => (
  <div className="sweet-loading tc">
    <SyncLoader color={"#002c71"} className="spinner" />
  </div>
);
