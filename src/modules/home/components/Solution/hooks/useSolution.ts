import lessons from "@/public/assets/lessons.webp"
import educators from "@/public/assets/educators.webp"

import { ContentChildren } from "../templates/ContentChildren"

export function useSolution() {
  const solutionCardData: SolutionCardData[] = [
    {
      image: lessons.src,
      label: "Conteúdos_",
      title: "Aulas gravadas para você assistir a hora que quiser",
      description: `O acesso a plataforma é imediato e você tem todo conteúdo já disponível na plataforma pra começar a aprender a tecnologia que quiser e encaixar os estudos na sua rotina da forma que preferir.`,
      children: ContentChildren,
    },
    {
      image: educators.src,
      label: "Time de especialistas_",
      title: "Acompanhamento personalizado e suporte ao longo da jornada",
      description: `Além de aprender com professores especialistas em diversas tecnologias, com décadas de experiência, você também vai contar com instrutores capacitados, time de sucesso do aluno, fórum e canais de suporte para dúvidas.`,
      children: ContentChildren,
    },
  ]
  return {
    solutionCardData,
  }
}
