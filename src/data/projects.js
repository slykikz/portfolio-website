export const projects = {
    ecommerce: {
      id: "ecommerce",
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Plataforma de e-commerce completa com sistema de pagamentos",
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
    }
    // Adicione seus outros projetos aqui
  };