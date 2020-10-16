import React from 'react';

import { Box } from './';

const files = require.context(
  '!svg-sprite-loader!../assets/icons',
  false,
  /.*\.svg$/
);
files.keys().forEach(files);

const Svg = props => <Box as="svg" {...props} />;

const Icon = ({ name, size = '1em', ...props }) => (
  <Svg
    height={size}
    width={size}
    flexBasis={size}
    flexGrow={0}
    flexShrink={0}
    {...props}
  >
    <use xlinkHref={`#${name}`}></use>
  </Svg>
);

export default Icon;

