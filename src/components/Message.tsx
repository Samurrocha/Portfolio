import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import '../styles/components/message.css';

export default function Message() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [sentSucess, setSentSucess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false); // Reseta para voltar ao botão
            }, 8000);
            return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
        }
    }, [submitted]);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitted(true)
        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("could not send message, try again later!")

            setSentSucess(true);

            const data = await response.json();
            setMensagem(data.message);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message); setMensagem("" + error.message);
            } else {
                setMensagem("could not send message, try again later!");
            }
        }
        setLoading(false);

    };

    return (
        <div className="messageContainer">
            <h1>Let's Talk</h1>
            <form method='post' className="message" onSubmit={handleSubmit} >
                <h2>Send me a message</h2>


                <input
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required

                />

                <input
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    required
                />

                <input
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                />

                <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    id="message"
                    placeholder="Your message"
                    required
                />

                <div>
                    {submitted && !loading ? (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className={sentSucess ? "success-message" : "error-message"}
                            aria-live="polite"
                        >
                            {sentSucess ? (
                                <p>✅ Formulário enviado com sucesso!</p>
                            ) : (
                                <p>❌ Ocorreu um erro ao enviar o formulário. Tente novamente.</p>
                            )}
                        </motion.div>
                    ) : (
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: loading ? 1 : 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="submit-button"
                        >
                            {loading ? <div className="skeleton-loader"></div> : "Enviar"}
                        </motion.button>
                    )}
                </div>

            </form>


        </div>
    );
}