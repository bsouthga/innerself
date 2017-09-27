import html from 'innerself';

import { Usage } from './usage';
import { Background } from './background';


export const Home = () => html`
  <div class="content">
    ${[
      Background(),
      Usage()
    ]}
  </div>
`;