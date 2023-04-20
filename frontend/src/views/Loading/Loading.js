import React from "react";
import { ClipLoader } from "react-spinners";
import '../../css/loading/loading.css';

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#FFFFFF",
  textAlign: "center",
};

const Loading = ({ loading }) => {
  return (
    <div className="loadingWrapper">
      <ClipLoader
        color="#E50915"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </div>
  );
};

export default Loading;