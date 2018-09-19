import React from 'react';

import Helmet from 'react-helmet';
import 'normalize.css';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import system from 'system-components';

import './index.css';
import Topbar from './topbar';

const AppWrapper = system({
  align: 'center',
  flexDirection: 'column',
  justify: 'center',
  width: '100%',
}).extend`
	display: flex;
	@media print {
		align: stretch;
		max-width: 100%;
		min-width: 100%;
		width: 100%;
	}
`;

const ContentPane = system({
  mb: '50vh',
  width: '100%',
  px: 2,
  align: 'stretch',
}).extend`
	max-width: 70rem;
	min-width: 40rem;
	@media print {
		max-width: 100%;
		min-width: 100%;
		width: 100%;
		margin-bottom: 0;
	}
`;

const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 8, 16, 24, 32],
  fontSizes: [12, 16, 18, 24, 36, 72],
  transition: '0.2s',
  colors: {
    black: '#111',
    white: '#fff',
    gray: '#666',
    lightgray: '#ddd',
  },
};

const TemplateWrapper = ({children, ...props}) => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Helmet>
        <title>Freddie Ridell</title>
      </Helmet>

      <Topbar {...props} />

      <ContentPane>{children()}</ContentPane>
    </AppWrapper>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
