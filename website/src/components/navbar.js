import html from 'innerself';

const kebab = str => str.split(' ').map(s => s.toLowerCase()).join('-');

const links = [
  'Background',
  'Usage',
  'How it works'
];

export const Navbar = () => html`
  <div class="navbar">
    <div class="navbar-logo">
      <img src="logo.png"/>
      <span> innerself </span>
    </div>
    <div class="navbar-links">
      ${links.map(link => `
        <a href="#${kebab(link)}">
          ${link}
        </a>
      `)}
      <a href="https://github.com/stasm/innerself">
        Github
      </a>
    </div>
  </div>
`;