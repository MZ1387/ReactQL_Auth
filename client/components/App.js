import React from 'react';
import { PromiseProvider } from 'mongoose';
import Header from './Header';

const App = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};

export default App;