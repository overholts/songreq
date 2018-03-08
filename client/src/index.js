import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import history from './history';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import SongSearch from './SongSearch';

const routes = [
  { path: '/',          action: () => <Welcome /> },
  { path: '/dashboard', action: () => <Dashboard /> },
  { path: '/party/:id', action: (context) => <SongSearch partyId={context.params.id}/> },
  { path: '(.*)',       action: () => <h1>Not Found</h1> }
]

const router = new UniversalRouter(routes)

const container = document.getElementById('root');

function renderComponent(component) {
  ReactDOM.render(component, container);
}

function render(location) {
  router.resolve(location)
    .then(renderComponent)
    .catch(error => router.resolve({ ...location, error })
    .then(renderComponent));
}

render(history.location); // render the current URL
history.listen(render);   // render subsequent URLs

registerServiceWorker();