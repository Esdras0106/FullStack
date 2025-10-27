// src\Components\Footer\index.js

import './styles.css';

function Footer() {
  return (
	<footer className="footer">
	  <p>
		&copy; {new Date().getFullYear()} - Todos os direitos reservados.
		<br /> Desenvolvido por Senai
	  </p>
	</footer>
  )
}

export default Footer;