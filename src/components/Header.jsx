import React from "react";

export default function Header(props) {
  return (
    <React.Fragment>
      <div id="mobile-menu-open" className="shadow-large">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header>
        <div id="mobile-menu-close">
          <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          {props.sections.map((inst) => (
            <li>
              <a href={"#" + inst.toLowerCase()}>{inst}</a>
            </li>
          ))}
        </ul>
      </header>
    </React.Fragment>
  );
}
