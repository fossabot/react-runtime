import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

const RouteWithKey = ({ path, ...props }) => <Route key={path || '-/-'} path={path} {...props} />;

RouteWithKey.propTypes = {
  path: PropTypes.string,
};
RouteWithKey.defaultProps = {
  path: undefined,
};

export default RouteWithKey;
