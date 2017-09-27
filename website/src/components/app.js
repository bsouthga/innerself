import html from 'innerself';

import { Navbar } from './navbar';
import { Footer } from './footer';

import { Home } from './home';

export const App = () => html`
  <div class="container">
    ${[
      Navbar(),
      Home(),
      Footer()
    ]}
  </div>
`;
