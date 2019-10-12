import React from 'react';
import { Hello } from '../src/components/Hello';

const HelloWithName = () => (
  <Hello name={"Soe Than"} />
);

HelloWithName.story = {
  name: 'Hello with name',
};

const HelloWithoutName = () => (
  <Hello />
);

HelloWithoutName.story = {
  name: 'Hello without name',
};

export { HelloWithName, HelloWithoutName };
export default {
  title: 'Custom | Components/Hello'
};
