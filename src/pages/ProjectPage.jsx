import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe, ArrowRight } from 'lucide-react';

const ProjectPage = ({ project }) => {
  const defaultProject = {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Plataforma de e-commerce completa com sistema de pagamentos.",
    image: "/api/placeholder/800/600",
    github: "https://github.com/seu-usuario/ecommerce",
    live: "https://ecommerce-demo.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    challenges: [
      {
        title: "Sistema de Pagamentos",
        solution: "Implementação de gateway Stripe com processamento assíncrono"
      }
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    nextProject: {
      slug: "dashboard",
      title: "Analytics Dashboard",
      category: "Web Application"
    }
  };

  project = project || defaultProject;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <motion.a
            href="/"
            className="flex items-center gap-2 text-lg font-medium"
            whileHover={{ x: -10 }}
          >
            <ArrowLeft size={20} />
            Voltar
          </motion.a>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                className="text-lg text-gray-600 mb-4 block"
              >
                {project.category}
              </motion.span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 mb-8"
              >
                {project.description}
              </motion.p>
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    GitHub
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe size={20} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Tecnologias</h2>
              <ul className="space-y-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-blue-600" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6">Desafios & Soluções</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Mais Imagens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-video"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      {project.nextProject && (
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-4"
            >
              Próximo Projeto
            </motion.p>
            <motion.a
              href={`/project/${project.nextProject.slug}`}
              className="group inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                {project.nextProject.title}
              </h3>
              <p className="text-xl text-gray-600">{project.nextProject.category}</p>
            </motion.a>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;