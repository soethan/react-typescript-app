import React from 'react';
import { Hello } from '../src/components/Hello';

export default {
  title: 'Hello',
};

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
