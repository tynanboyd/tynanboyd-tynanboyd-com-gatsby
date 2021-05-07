import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/work-sans';
import '@fontsource/work-sans/900.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
