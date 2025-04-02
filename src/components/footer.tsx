import '../styles/components/footer.css'; // Importando o arquivo CSS

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-text">&copy; {new Date().getFullYear()} - Todos os direitos reservados</span>
                <span className="footer-page">Página atual: {document.title}</span>
            </div>
            <div className="footer-links">
                <a href="https://www.facebook.com" className="footer-link">Facebook</a>
                <a href="https://www.twitter.com" className="footer-link">Twitter</a>
                <a href="https://www.instagram.com" className="footer-link">Instagram</a>
            </div>
        </footer>
    );
};