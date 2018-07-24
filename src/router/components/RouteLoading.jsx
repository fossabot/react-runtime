import React from 'react';
import PropTypes from 'prop-types';
import nprogress from '../../nprogress';

let idx = 0;

class RouteLoading extends React.Component {
  static propTypes = {
    error: PropTypes.object, // eslint-disable-line
    retry: PropTypes.func,
    timeout: PropTypes.bool,
    pastDelay: PropTypes.bool,
  };

  static defaultProps = {
    error: null,
    retry: null,
    timeout: false,
    pastDelay: false,
  };

  constructor(...args) {
    super(...args);
    const { pastDelay } = this.props;
    idx += 1;
    const id = idx;
    this.state = { id, pastDelay };
    if (pastDelay) {
      nprogress.start(id);
    }
  }

  componentWillUnmount() {
    const { id } = this.state;
    nprogress.done(id);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.pastDelay !== prevState.pastDelay) {
      nprogress.start(prevState.id);
      return { pastDelay: nextProps.pastDelay };
    }
    return null;
  }

  render() {
    const { error, retry, timeout } = this.props;
    if (error || timeout) {
      if (typeof retry === 'function') {
        retry();
      }
    }
    return null;
  }
}

export default RouteLoading;
