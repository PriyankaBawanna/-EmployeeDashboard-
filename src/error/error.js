import React from "react";
import pageError from "../image/pageError.jpg";
export default function Error() {
  return (
    <div className="error-page">
      <img src={pageError} className="error-image" />
    </div>
  );
}
