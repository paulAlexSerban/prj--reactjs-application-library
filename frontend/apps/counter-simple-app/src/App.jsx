import React from 'react';
import './index.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/global.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/button.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/molecules/counter.css';

import { Counter } from '@prj--reactjs-component-lib/generic-lib';

const App = () => {
    return (
        <div className="App">
            <Counter color="lightgray" />
        </div>
    );
};

export default App;
