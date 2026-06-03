import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

const queryClient = new QueryClient();

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </BrowserRouter>,
);
