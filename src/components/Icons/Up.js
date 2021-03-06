import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const upIcons = {
  small: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M16 0H0v16h16z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M8 4.869l-6.678 6.678a.774.774 0 0 1-1.095-1.094l7.226-7.226a.774.774 0 0 1 1.094 0l7.226 7.226a.774.774 0 0 1-1.095 1.094L8 4.87z"
        />
      </g>
    </svg>
  ),
  large: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M24 0H0v24h24z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M22.692 17.542a.766.766 0 1 0 1.084-1.084L12.542 5.224c-.3-.299-.785-.299-1.084 0L.224 16.458a.766.766 0 1 0 1.084 1.084L12 6.85l10.692 10.692z"
        />
      </g>
    </svg>
  )
};

const UpIcon = ({ size, color, children, ...props }) =>
  upIcons[size](color, children, props);

UpIcon.displayName = "UpIcon";

UpIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};

UpIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default UpIcon;
