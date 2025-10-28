// src\Components\Footer\index.js

import './styles.css';

function Footer() {
  return (
	<footer className="footer-container">
	  <p>
		&copy; {new Date().getFullYear()} - Todos os direitos reservados.
		<p>
			Desenvolvido por Senai
		</p>
	  </p>
	</footer>
  )
}

export default Footer;