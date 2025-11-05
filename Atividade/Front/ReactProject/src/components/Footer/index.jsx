import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const companyAddress = "Endereço da Empresa";

    return (
        <footer>
            <p>&copy; {currentYear} {companyAddress}</p>
        </footer>
    );
};

export default Footer;