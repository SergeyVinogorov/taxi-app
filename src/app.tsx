import React from 'react';
import ReactDom from 'react-dom';
	 
	 import './styles/index.css'

   const App = () => <div className="taxi-app">hello world</div>;

   ReactDom.render(<App />, document.getElementById('root') as HTMLElement);
