import { ContentChildren } from "../templates/ContentChildren"
import { ExpertsChildren } from "../templates/ExpertsChildren"

export function useSolution() {
  const solutionCardData: SolutionCardData[] = [
    {
      image: "/image/lessons.webp",
      label: "Conteúdos_",
      title: "Aulas gravadas para você assistir a hora que quiser",
      description: `O acesso a plataforma é imediato e você tem todo conteúdo já disponível na plataforma pra começar a aprender a tecnologia que quiser e encaixar os estudos na sua rotina da forma que preferir.`,
      children: ContentChildren,
    },
    {
      image: "/image/educators.webp",
      label: "Time de especialistas_",
      title: "Acompanhamento personalizado e suporte ao longo da jornada",
      description: `Além de aprender com professores especialistas em diversas tecnologias, com décadas de experiência, você também vai contar com instrutores capacitados, time de sucesso do aluno, fórum e canais de suporte para dúvidas.`,
      children: ExpertsChildren,
    },
    {
      image: "/image/houston.webp",
      label: "Inteligência artificial_",
      title: "Tutor para dúvidas instantâneas",
      description: `Você já teve vergonha de tirar dúvidas quando estava estudando? Aqui você vai contar com o Houston, a IA da Rocketseat para consultar conteúdos das aulas de forma simples e fácil, fazer perguntas em tempo real enquanto assiste as aulas e aumentar a produtividade dos seus estudos.`,
    },
    {
      image: "/image/mentoring.webp",
      label: "Conteúdos além da sala de aula_",
      title: "Eventos, mentorias exclusivas e encontros ao vivo",
      description: `Aprenda sobre habilidades comportamentais, desenvolvimento e posicionamento profissional para evoluir além do código. Participe de eventos e mentoria exclusivas de empregabilidade e carreira para acelerar rumo aos seus objetivos.`,
    },
    {
      image: "/image/certificate.webp",
      label: "Certificados de conclusão_",
      title: "Colecione certificados e compartilhe suas conquistas",
      description: `A cada trilha você vai garantir um certificado que comprova seu aprendizado em cada tecnologia. Você poderá adicionar no seu currículo e compartilhar com o mundo sua conquista nas redes sociais.`,
    },
    {
      image: "/image/projects.webp",
      label: "Projetos e desafios_",
      title: "Amplie o seu portfólio com mais de 76 projetos",
      description: `Você vai aprender novas tecnologias na prática desenvolvendo projetos e cases reais para aprender a lidar com desafios do dia a dia, ganhar experiência e construir um portfólio de brilhar os olhos para se destacar no mercado.`,
    },
  ]

  return {
    solutionCardData,
  }
}
