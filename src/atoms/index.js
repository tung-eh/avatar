import React, { forwardRef } from 'react';
import styled from 'styled-components';

import Box from './Box';
import Icon from './Icon';

export { Icon, Box };

export const Flex = styled(Box)`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  ${props =>
    props.center &&
    `
		align-items:center;
		justify-content: center;
  `}
`;

export const Grid = styled(Box)`
  display: grid;
`;

export const Table = props => <Box as="table" {...props} />;

export const Button = props => (
  <Box
    as="button"
    cursor="pointer"
    fontSize="inherit"
    {...props}
  />
);
Button.defaultProps = { variant: 'primary' };

export const Input = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="input"
    fontSize="inherit"
    {...props}
  />
));
Input.defaultProps = { variant: 'primary' };

export const Textarea = forwardRef((props, ref) => (
  <Input ref={ref} as="textarea" {...props} />
));

export const Image = props => <Box as="img" {...props} />;

export const Text = props => <Box as="span" {...props} />;

export const Anchor = props => (
  <Box as="a" textDecoration="none"  {...props} />
);
