import React from 'react';
import { Route, Link } from 'react-router-dom'
import Typeform from './containers'

const App = () => (
    <main>
      <Route exact path="/" component={Typeform} />
    </main>
)

export default App;
