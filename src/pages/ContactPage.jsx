// ContactPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSending(false);
      alert("Mensagem enviada com sucesso!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {isSending && <Loading />}

      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full relative">
        <h1 className="text-3xl font-bold mb-6 text-center">Contacte-me</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-blue-500"
              rows="4"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar Mensagem
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
