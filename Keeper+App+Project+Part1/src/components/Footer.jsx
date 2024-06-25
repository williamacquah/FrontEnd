import React from "react";

const year = new Date().getFullYear();

function Foooter() {
  return <footer className="footer">Copyright © {year}</footer>;
}

export default Foooter;
