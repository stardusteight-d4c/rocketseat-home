export function useFormations() {
  const formationsData: FormationsData[] = [
    {
      formationImage: "/svg/formations/java.svg",
      title: "Formação em Java",
      educatorImage: "/image/educators/dani.webp",
      educatorName: "Dani Leão",
      role: "Tech Lead e Educadora",
      launching: true,
      level: 2,
    },
    {
      formationImage: "/svg/formations/ia.svg",
      title: "Formação em Inteligência Artificial",
      educatorImage: "/image/educators/fulvio.webp",
      educatorName: "Fulvio Mascara",
      role: "Cientista-Chefe na Foursys",
      launching: true,
      level: 3,
    },
    {
      formationImage: "/svg/formations/fullstack.svg",
      title: "Formação Full-Stack",
      educatorImage: "/image/educators/mayk-rodrigo.webp",
      educatorName: "Mayk & Rodrigo",
      role: "Educadores na Rocketseat",
      launching: false,
      level: 1,
    },
    {
      formationImage: "/svg/formations/react.svg",
      title: "Formação em React",
      educatorImage: "/image/educators/diego.webp",
      educatorName: "Diego Fernandes",
      role: "Co-fundador e CTO na Rocketseat",
      launching: false,
      level: 4,
    },
    {
      formationImage: "/svg/formations/react-native.svg",
      title: "Formação em React Native",
      educatorImage: "/image/educators/rodrigo.webp",
      educatorName: "Rodrigo Gonçalves",
      role: "Educador na Rocketseat",
      launching: false,
      level: 4,
    },
    {
      formationImage: "/svg/formations/nodejs.svg",
      title: "Formação em Node.JS",
      educatorImage: "/image/educators/diego.webp",
      educatorName: "Diego Fernandes",
      role: "Co-fundador e CTO na Rocketseat",
      launching: false,
      level: 4,
    },
  ]

  const infoData: InfoData[] = [
    {
      image: "/svg/icons/star.svg",
      title: "Nota 4.9 de 5",
      description: `Quem faz aprova! Essa é a média de avaliação das nossas aulas na plataforma.`,
    },
    {
      image: "/svg/icons/video.svg",
      title: "+1.000 aulas",
      description: `Acesso imediato a todo conteúdo disponível na plataforma para assistir no seu ritmo. Com atualizações inclusas na assinatura.`,
    },
    {
      image: "/svg/icons/clock.svg",
      title: "+400h de conteúdo",
      description: `Além das aulas gravadas você tem acesso a benefícios para assinantes: mentorias, masterclass ao vivo e eventos exclusivos para alunos.`,
    },
    {
      image: "/svg/icons/computer.svg",
      title: "+74 projetos práticos",
      description: `Você vai aprender na prática com diversos projetos e cases reais pra evoluir o seu portfólio, além de colecionar certificados para o seu currículo.`,
    },
  ]

  return {
    formationsData,
    infoData,
  }
}
