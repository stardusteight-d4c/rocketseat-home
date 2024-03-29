export function useFooter() {
  const footerData: FooterData[] = [
    {
      category: "Comece a estudar",
      items: [
        {
          title: "Assinar agora",
        },
        { title: "Fale conosco" },
      ],
    },
    {
      category: "Formações em programação",
      items: [
        { title: "Formação em Java" },
        { title: "Formação em IA" },
        { title: "Formação Full-Stack" },
        { title: "Formação em React" },
        { title: "Formação em Node.JS" },
        { title: "Formação em React Native" },
      ],
    },
    {
      category: "Recursos",
      items: [
        { title: "Curso Discover" },
        { title: "Quiz React" },
        { title: "Quiz Node" },
        { title: "Quiz JavaScript" },
        { title: "Blog" },
      ],
    },
    {
      category: "Sobre",
      items: [
        { title: "Políticas de privacidade" },
        { title: "Direitos autorais" },
        { title: "Termos de uso" },
      ],
    },
    {
      category: "Suporte",
      items: [
        { title: "Central de ajuda" },
        { title: "Comunidade Discord" },
        { title: "oi@rocketseat.com.br" },
      ],
    },
    {
      category: "Para empresas",
      items: [{ title: "Plataforma para empresas" }],
    },
  ]

  const socialLinks: SocialLinks[] = [
    { title: "Discord", icon: "/svg/icons/discord.svg" },
    { title: "Instagram", icon: "/svg/icons/instagram.svg" },
    { title: "LinkedIn", icon: "/svg/icons/linkedin.svg" },
    { title: "Youtube", icon: "/svg/icons/youtube.svg" },
    { title: "Facebook", icon: "/svg/icons/facebook.svg" },
    { title: "X", icon: "/svg/icons/x.svg" },
  ]

  return {
    footerData,
    socialLinks,
  }
}
