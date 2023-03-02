import React from 'react'
import {Context} from './component/context'
import  'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Context><App/></Context>)



