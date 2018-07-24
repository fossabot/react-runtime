import React from 'react';
import PropTypes from 'prop-types';

class LoadingComponent extends React.Component {
  static propTypes = {
    loading: PropTypes.func.isRequired,
    delay: PropTypes.number,
  };

  static defaultProps = {
    delay: 200,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      pastDelay: false,
    };
    this.data = { unmount: false };
  }

  componentDidMount() {
    this.setPastDelay();
  }

  componentWillUnmount() {
    this.data.unmount = true;
  }

  setPastDelay() {
    const { delay } = this.props;
    setTimeout(() => {
      if (this.data.unmount) return;
      this.setState({ pastDelay: true });
    }, delay);
  }

  render() {
    const { loading: LoadingComp, ...props } = this.props;
    const { pastDelay } = this.state;
    return React.Children.only(<LoadingComp {...props} key="loading" pastDelay={pastDelay} />);
  }
}

export default LoadingComponent;
