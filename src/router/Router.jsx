import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { createHashHistory } from 'history';

const RouterWithHistory = ({ history, ...props }) => <Router history={history} {...props} />;

RouterWithHistory.propTypes = {
  history: PropTypes.object, // eslint-disable-line
};
RouterWithHistory.defaultProps = {
  history: createHashHistory({ hashType: 'hashbang' }),
};

export default RouterWithHistory;
