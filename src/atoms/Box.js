import {
  layout,
  background,
  border,
  color,
  flexbox,
  grid,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop'
import styled from 'styled-components';

const Box = styled.div.withConfig({shouldForwardProp})`
  ${system({
    backgroundImage: { property: 'backgroundImage', scale: 'gradientColors' },
    borderImage: { property: 'borderImage', scale: 'gradientColors' },
    borderImageSlice: { property: 'borderImageSlice' },
    boxSizing: { property: 'boxSizing' },
    textDecoration: { property: 'textDecoration' },
    textTransform: { property: 'textTransform' },
    cursor: { property: 'cursor' },
    clipPath: { property: 'clipPath' },
    objectFit: { property: 'objectFit' },
    transform: { property: 'transform' },
    transformOrigin: { property: 'transformOrigin' },
    whiteSpace: { property: 'whiteSpace' },
    resize: { property: 'resize' },
    filter: { property: 'filter' },
    visibility: { property: 'visibility' },
    pointerEvents: { property: 'pointerEvents' },
    imageRendering: { property: 'imageRendering' },
  })}
	${layout}
	${color}
	${space}
	${flexbox}
	${grid}
	${border}
	${position}
	${background}
	${shadow}
	${typography}
	${props => props.css}
`;

Box.defaultProps = {
  boxSizing: 'border-box',
};

export default Box;

