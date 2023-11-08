import React from 'react';
import './index.css';
import '@prj--reactjs-application-library/generic-lsg/lib/global.css';
import '@prj--reactjs-application-library/generic-lsg/lib/atoms/button.css';
import '@prj--reactjs-application-library/generic-lsg/lib/molecules/counter.css';
import { Counter } from '@prj--reactjs-application-library/generic-lib';

const App = () => {
    return (
        <div className="App">
            <Counter color="lightgray" />
        </div>
    );
};

export default App;
