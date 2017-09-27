import html from 'innerself';

import { Navbar } from './navbar';
import { Content } from './content';
import { Footer } from './footer';

export const App = () => html`
  <div class="container">
    ${[
      Navbar(),
      Content(),
      Footer()
    ]}
  </div>
`;
