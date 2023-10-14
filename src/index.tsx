/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root!);

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash && window.location.hash.startsWith("#linksuccess")) {
      const [ _, phone, ign, username, id ] = window.location.hash.split(":");
      window.location.hash = "";

      alert(`Linking successful! ${ign} (${phone}) is now linked to ${username} (${id})`)
  }
})