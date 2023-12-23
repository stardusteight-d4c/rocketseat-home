import java from "@/public/assets/formations/java.svg"
import ia from "@/public/assets/formations/ia.svg"
import fullstack from "@/public/assets/formations/fullstack.svg"
import react from "@/public/assets/formations/react.svg"
import reactNative from "@/public/assets/formations/react-native.svg"
import nodejs from "@/public/assets/formations/nodejs.svg"

import dani from "@/public/assets/educators/dani.webp"
import fulvio from "@/public/assets/educators/fulvio.webp"
import maykRodrigo from "@/public/assets/educators/mayk-rodrigo.webp"
import diego from "@/public/assets/educators/diego.webp"
import rodrigo from "@/public/assets/educators/rodrigo.webp"

import star from "@/public/assets/icons/star.svg"
import video from "@/public/assets/icons/video.svg"
import clock from "@/public/assets/icons/clock.svg"
import computer from "@/public/assets/icons/computer.svg"

export function useFormations() {
  const formationsData: FormationsData[] = [
    {
      formationImage: java.src,
      title: "Formação em Java",
      educatorImage: dani.src,
      educatorName: "Dani Leão",
      role: "Tech Lead e Educadora",
      launching: true,
      level: 2,
    },
    {
      formationImage: ia.src,
      title: "Formação em Inteligência Artificial",
      educatorImage: fulvio.src,
      educatorName: "Fulvio Mascara",
      role: "Cientista-Chefe na Foursys",
      launching: true,
      level: 3,
    },
    {
      formationImage: fullstack.src,
      title: "Formação Full-Stack",
      educatorImage: maykRodrigo.src,
      educatorName: "Mayk & Rodrigo",
      role: "Educadores na Rocketseat",
      launching: false,
      level: 1,
    },
    {
      formationImage: react.src,
      title: "Formação em React",
      educatorImage: diego.src,
      educatorName: "Diego Fernandes",
      role: "Co-fundador e CTO na Rocketseat",
      launching: false,
      level: 4,
    },
    {
      formationImage: reactNative.src,
      title: "Formação em React Native",
      educatorImage: rodrigo.src,
      educatorName: "Rodrigo Gonçalves",
      role: "Educador na Rocketseat",
      launching: false,
      level: 4,
    },
    {
      formationImage: nodejs.src,
      title: "Formação em Node.JS",
      educatorImage: diego.src,
      educatorName: "Diego Fernandes",
      role: "Co-fundador e CTO na Rocketseat",
      launching: false,
      level: 4,
    },
  ]

  const infoData: InfoData[] = [
    {
      image: star.src,
      title: "Nota 4.9 de 5",
      description: `Quem faz aprova! Essa é a média de avaliação das nossas aulas na plataforma.`,
    },
    {
      image: video.src,
      title: "+1.000 aulas",
      description: `Acesso imediato a todo conteúdo disponível na plataforma para assistir no seu ritmo. Com atualizações inclusas na assinatura.`,
    },
    {
      image: clock.src,
      title: "+400h de conteúdo",
      description: `Além das aulas gravadas você tem acesso a benefícios para assinantes: mentorias, masterclass ao vivo e eventos exclusivos para alunos.`,
    },
    {
      image: computer.src,
      title: "+74 projetos práticos",
      description: `Você vai aprender na prática com diversos projetos e cases reais pra evoluir o seu portfólio, além de colecionar certificados para o seu currículo.`,
    },
  ]

  return {
    formationsData,
    infoData
  }
}
