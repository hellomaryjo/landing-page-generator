import React from "react";
import reducer from "../reducers";
import { updateHTMLOutput } from "../actions";
import "../css/CodeOutput.css";

reducer.dispatch(updateHTMLOutput('One'));

console.log(reducer.getState());

class CodeOutput extends React.Component {
  render() {
    return (
      <div className="codeOutput pt-5 pb-5">
        <div className="htmlOutput">
          <h2>HTML:</h2>
          <div className="htmlOutput__code">
            <div className="toolbar bg-secondary"></div>
            <pre>{}</pre>
          </div>
        </div>
        <div className="cssOutput mt-5">
          <h2>CSS:</h2>
          <div className="cssOutput__code">
            <div className="toolbar bg-secondary"></div>
            <pre>hello there</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default CodeOutput;
