import html from 'innerself';

const links = [
  'Background',
  'Usage'
];

export const Navbar = () => html`
  <div class="navbar">
    <div class="navbar-logo">
      <img src="logo.png"/>
      <span> innerself </span>
    </div>
    <div class="navbar-links">
      ${links.map(link => `
        <a href="#${link.toLowerCase()}">
          ${link}
        </a>
      `)}
      <a href="https://github.com/stasm/innerself">
        Github
      </a>
    </div>
  </div>
`;