// Bootstrap.js
import React from "react";

function Bootstrap(Component: React.FC) {
  return (
    <div className="px-4">
      <Component />
    </div>
  );
}

export default Bootstrap;
