
import React from "react";

const Footer: React.FC = ({ ...props }) => (
    <footer className="main-footer">
    <strong>Copyright © 2020</strong>
    All rights reserved.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.0.0
    </div>
  </footer>
);

export default Footer;
