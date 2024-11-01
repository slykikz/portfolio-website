import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = ({ projects }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <>
      {/* Loader inicial com fade-out */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-50"
          />
        )}
      </AnimatePresence>

      <div className="bg-white text-black">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="fixed top-0 left-0 right-0 z-40"
        >
          <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
            <motion.a
              href="#"
              aria-label="Home"
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEU NOME
            </motion.a>

            <motion.button
              aria-label="Toggle Menu"
              className="z-50 mix-blend-difference text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </motion.header>

        {/* Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-black z-30 flex items-center justify-center overflow-hidden"
            >
              <nav className="text-white text-center">
                {['Trabalhos', 'Sobre', 'Contato'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-5xl font-bold mb-8 hover:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={item}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              className="text-7xl md:text-9xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.8 }}
              >
                Olá, eu sou
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.8 }}
              >
                Web Developer &
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                UX Designer
              </motion.div>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 }}
            >
              Criando experiências digitais excepcionais através de design e 
              desenvolvimento de ponta.
            </motion.p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="trabalhos" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Trabalhos Selecionados
            </motion.h2>
            
            <div className="space-y-32">
              {Object.values(projects).map((project, index) => (
                <Link to={`/project/${project.id}`} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="group cursor-pointer"
                  >
                    <div className="overflow-hidden mb-8">
                      <motion.div
                        className="relative aspect-video"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                          style={{ backgroundColor: project.color }}
                        />
                      </motion.div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
                        <p className="text-xl text-gray-600">{project.category}</p>
                      </div>
                      <motion.div
                        whileHover={{ x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight size={32} />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-32 px-6 bg-black text-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-16">Sobre Mim</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <p className="text-xl mb-8">
                  Desenvolvedor web full-stack e UX designer com foco em criar 
                  experiências digitais excepcionais. Combinando código limpo com 
                  design intuitivo para entregar produtos que as pessoas adoram usar.
                </p>
                <motion.button
                  className="text-xl font-bold flex items-center gap-2"
                  whileHover={{ x: 10 }}
                >
                  Ver Mais <ArrowRight />
                </motion.button>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>React</li>
                    <li>Vue.js</li>
                    <li>TypeScript</li>
                    <li>Three.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Vamos Conversar?</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
              Estou sempre aberto para discutir novos projetos, ideias criativas ou 
              oportunidades de criar algo incrível.
            </p>
            <motion.a
              href="mailto:seu@email.com"
              className="inline-flex items-center text-2xl font-bold"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              seu@email.com <ArrowRight className="ml-2" />
            </motion.a>

            <div className="flex justify-center space-x-8 mt-16">
              {[
                { Icon: Github, link: "#" },
                { Icon: Linkedin, link: "#" },
                { Icon: Mail, link: "mailto:seu@email.com" }
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  className="text-2xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default HomePage;