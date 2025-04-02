import '../styles/components/Message.css';
import { useState } from 'react';

export default function Message() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [mensagem, setMensagem] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        try {
            const response = await fetch("https://email-server-cddblw.fly.dev/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("Erro ao enviar mensagem, tente novamente!");

            const data = await response.json();
            setMensagem(data.message);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            if (error instanceof Error) {
                setMensagem("Erro: " + error.message);
            } else {
                setMensagem("Erro desconhecido");
            }
        }

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

                <button type="submit">Send</button>

                {mensagem && <p>{mensagem}</p>}
            </form>


        </div>
    );
}