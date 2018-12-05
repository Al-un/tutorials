import React from 'react';
import Loading from './Loading';

/**
 * HOC for loading
 *
 * @param {*} Component Wrapped component
 * @param {*} loaderMessage dynamic or static loading message to display below
 * loading icon
 */
export const WithLoading = (Component, loaderMessage) => props => {
  return !props.isLoading ? (
    <Component {...props} />
  ) : (
    <Loading value={loaderMessage} />
  );
};
