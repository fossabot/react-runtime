import React from 'react';
import ReactDom from 'react-dom';

export default function render(App, rootId = 'root') {
  ReactDom.render(<App />, document.getElementById(rootId));
}
