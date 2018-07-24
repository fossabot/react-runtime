import React from 'react';
import PropTypes from 'prop-types';
import importedComponent from 'react-imported-component';
import LoadingComponent from './components/LoadingComponent';
import ErrorComponent from './components/ErrorComponent';

const defaultRender = (loaded, props) => {
  const Comp = loaded.default;
  return <Comp {...props} />;
};
function loadable(loader, { delay, loading, render } = {}) {
  if (!loader) {
    console.error('[ox]react-runtime:`loader` is required for loadable');
    return null;
  }
  return importedComponent(
    async () => {
      const loaded = await loader();
      return props => (render || defaultRender)(loaded, props);
    },
    {
      async: false,
      LoadingComponent: loading
        ? props => <LoadingComponent {...props} delay={delay} loading={loading} />
        : null,
      ErrorComponent: loading ? props => <ErrorComponent {...props} loading={loading} /> : null,
    },
  );
}

const LazilyComponent = ({ loader, delay, loading, render, ...props }) => {
  const Comp = loadable(loader, { delay, loading, render });
  return <Comp {...props} />;
};
LazilyComponent.propTypes = {
  loader: PropTypes.func.isRequired,
  delay: PropTypes.number,
  loading: PropTypes.func,
  render: PropTypes.func,
};
LazilyComponent.defaultProps = {
  delay: 200,
  loading: null,
  render: null,
};

Object.assign(loadable, { LazilyComponent });

export default loadable;
export { LazilyComponent };
