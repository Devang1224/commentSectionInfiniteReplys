import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CommentsProvider from './contextapi/CommentsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CommentsProvider>
       <App />
    </CommentsProvider>
);

