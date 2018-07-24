import React from 'react';
import PropTypes from 'prop-types';
import loadable from '../loadable';
import Route from './Route';
import RouteLoading from './components/RouteLoading';

class LazilyRoute extends React.Component {
  static propTypes = {
    loader: PropTypes.func.isRequired,
    render: PropTypes.func,
    loading: PropTypes.func,
  };

  static defaultProps = {
    render: null,
    loading: null,
  };

  constructor(...args) {
    super(...args);
    const { loader, render, loading: CustomLoading } = this.props;
    this.LoadableComp = loadable(loader, {
      loading: CustomLoading
        ? p => (
            <>
              <CustomLoading {...p} />
              <RouteLoading {...p} />
            </>
          )
        : RouteLoading,
      render,
    });
  }

  rendeComp = props => {
    const { LoadableComp } = this;
    return <LoadableComp {...props} />;
  };

  render() {
    const { loader, render, loading, ...props } = this.props;
    return <Route {...props} render={this.rendeComp} />;
  }
}
export default LazilyRoute;
