import React from 'react';

interface HelloProps {
    name: string;
}

const Hello = ({ name }: HelloProps) =>
  (<div>Hello {name || "Guest"}</div>);

export { Hello, HelloProps };
