import React from 'react';
import PropTypes from 'prop-types';
import loadable from '../loadable';
import Route from './Route';

class LazilyRoute extends React.Component {
  static propTypes = {
    loader: PropTypes.func.isRequired,
    render: PropTypes.func,
  };

  static defaultProps = {
    render: null,
  };

  constructor(...args) {
    super(...args);
    const { loader, render } = this.props;
    this.LoadableComp = loadable({
      loader,
      loading: null,
      render:
        render ||
        ((loaded, props) => {
          const TargetComp = loaded.default;
          return <TargetComp {...props} />;
        }),
    });
  }

  rendeComp = props => {
    const { LoadableComp } = this;
    return <LoadableComp {...props} />;
  };

  render() {
    const { loader, render, ...props } = this.props;
    return <Route {...props} render={this.rendeComp} />;
  }
}
export default LazilyRoute;
