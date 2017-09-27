import html from 'innerself';

import { Usage } from './usage';
import { Background } from './background';
import { HowItWorks } from './how-it-works';

export const Home = () => html`
  <div class="content">
    ${[
      Background(),
      Usage(),
      HowItWorks()
    ]}
  </div>
`;