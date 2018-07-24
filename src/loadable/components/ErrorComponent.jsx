import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = ({ loading: LoadingComp, retryImport, error, ...props }) =>
  React.children.only(<LoadingComp {...props} error={error} retry={retryImport} />);

ErrorComponent.propTypes = {
  loading: PropTypes.func.isRequired,
  retryImport: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired, // eslint-disable-line
};

export default ErrorComponent;
