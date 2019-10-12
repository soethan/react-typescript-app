import React from 'react';

const Hello = ({ name }) =>
  (<div>Hello {name || "Guest"}</div>);

export { Hello };
