import discord from "@/public/assets/icons/discord.svg"
import instagram from "@/public/assets/icons/instagram.svg"
import linkedIn from "@/public/assets/icons/linkedin.svg"
import youtube from "@/public/assets/icons/youtube.svg"
import facebook from "@/public/assets/icons/facebook.svg"
import x from "@/public/assets/icons/x.svg"

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
    { title: "Discord", icon: discord.src },
    { title: "Instagram", icon: instagram.src },
    { title: "LinkedIn", icon: linkedIn.src },
    { title: "Youtube", icon: youtube.src },
    { title: "Facebook", icon: facebook.src },
    { title: "X", icon: x.src },
  ]

  return {
    footerData,
    socialLinks
  }
}
