import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import createStore from 'store';

import { languagesAdded, messagesAdded } from 'actions/i18n';

import theme from 'constants/theme';

import { currentLanguageSelector } from 'selectors/i18n';

import { i18n } from 'services';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const currentLang = currentLanguageSelector(ctx.store.getState());
    const languages = i18n.getLanguages();
    const messages = i18n.getMessages(currentLang);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    ctx.store.dispatch(languagesAdded(await languages));
    ctx.store.dispatch(messagesAdded(currentLang, await messages));

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
