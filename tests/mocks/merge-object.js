import { merge } from 'lodash';

export let mergeObject = (obj1, obj2) => {
  return merge({}, obj1, obj2);
};
