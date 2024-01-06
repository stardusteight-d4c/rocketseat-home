export function useFeedbacks() {
  const feedbackFirstColData: FeedbackData[] = [
    {
      type: "video",
      author: "Laura Beatris",
      role: "Software Engineer na WorkOS",
      feedback: "https://www.youtube.com/embed/td3zWqOuSpo",
      thumb: "/image/feedbacks/testimonial-laura-thumb.webp",
    },
    {
      type: "text",
      author: "Ben-Hur",
      role: "Aluno da Rocketseat",
      feedback: `“Eu não tinha conhecimento na área. Foi através do Explorer que obtive o real conhecimento e pude avançar na minha transição de carreira. Me ajudou em 100% para conquistar a minha vaga. [...] com o conhecimento que tive em JavaScript consegui competir pela vaga e ser contratado.”`,
      authorImage: "/image/feedbacks/avatar-ben.webp",
    },
    {
      type: "video",
      author: "Camila Sbrussi",
      role: "Software Engineer - Mercado Livre",
      feedback: "https://www.youtube.com/embed/QuWxxKnNPFM",
      thumb: "/image/feedbacks/testimonial-camila-thumb.webp",
    },
    {
      type: "text",
      author: "Melissa Fernandes Novais",
      role: "Desenvolvedora Front-end",
      feedback: `“Aprendi muito e de maneira bem rápida, consegui um novo emprego em uma empresa incrível e trabalho com o que eu amo nas tecnologias que eu mais gosto no momento. Só tenho a agradecer a toda a equipe por tornar isso possível!”`,
      authorImage: "/image/feedbacks/avatar-melissa.webp",
    },
    {
      type: "text",
      author: "Abner Henrique da Silva",
      role: "Aluno da Rocketseat",
      feedback: `“A Stone me encontrou, me chamou pra fazer a seleção, estou até hoje na Stone, até uma semana atrás que eu recebi uma proposta internacional com um ano e meio de carreira. Uma das coisas que nunca imaginei acontecer na minha e devo tudo a Rocketseat.”`,
      authorImage: "/image/feedbacks/avatar-abner.webp",
    },
    {
      type: "text",
      author: "Juan Pablo",
      role: "Aluno da Rocketseat",
      feedback: `“A plataforma é incrível, a didática é excelente! Sem palavras para descrever o trabalho de vcs! Thank u Rocketseat vocês são fenomenais e tem me ajudado muito a crescer como dev!”`,
      authorImage: "/image/feedbacks/avatar-juan.webp",
    },
  ]

  const feedbackSecondColData: FeedbackData[] = [
    {
      type: "text",
      author: "Grace Kelly Oliveira de Souza",
      role: "Aluna da Rocketseat",
      feedback: `“Tenho aprendido demais, eu iniciei do zero e hoje eu tô já fazendo JavaScript. É um novo mundo que se abriu pra mim, eu nunca imaginei que eu teria capacidade de codar, e hoje eu sou uma coroa que coda, me sinto um ser útil pra sociedade.”`,
      authorImage: "/image/feedbacks/avatar-grace.webp",
    },
    {
      type: "video",
      author: "Isaac Viana",
      role: "Front-end Developer - Contractor",
      feedback: "https://www.youtube.com/embed/XOXvILJsQ7Q",
      thumb: "/image/feedbacks/testimonial-isaac-thumb.webp",
    },
    {
      type: "text",
      author: "Ariadne Liranço",
      role: "Aluna da Rocketseat",
      feedback: `“O Discover em união com a maratona Discover são simplesmente incríveis, muito conteúdo, além de te guiar a como ter disciplina nos estudos, te mostrando que só você pode mudar e evoluir como dev.”`,
      authorImage: "/image/feedbacks/avatar-ariadne.webp",
    },
    {
      type: "text",
      author: "Dalton Liebl Moreira",
      role: "Aluno da Rocketseat",
      feedback: `“Pedi demissão do emprego pra aprender a desenvolver, entrei no Explorer e já aprendi HTML, CSS, JavaScript e consegui uma pre vaga, um emprego como estágio inicialmente.”`,
      authorImage: "/image/feedbacks/avatar-dalton.webp",
    },
    {
      type: "video",
      author: "Hélio Fresta",
      role: "Aluno da Rocketseat",
      feedback: "https://www.youtube.com/embed/AegF22Z1peg",
      thumb: "/image/feedbacks/testimonial-helio-thumb.webp",
    },
    {
      type: "text",
      author: "Luis Fernando",
      role: "Aluno da Rocketseat",
      feedback: `“O conteúdo do Discover é além do básico e totalmente gratuito. Quando alguém me pergunta o que aprender ou onde, a resposta é automática: Discover da Rocketseat.”`,
      authorImage: "/image/feedbacks/avatar-luis.webp",
    },
    {
      type: "text",
      author: "Paloma Andrade de Oliveira",
      role: "Engenheira de Software | Sauce Labs",
      feedback: `“O apoio da comunidade, e a estrutura do curso foram fundamentais para o meu crescimento e entender como aquelas linhas de código faziam sentido completo! No backend, frontend e mobile, é indescritível poder criar seu produto! Obrigada Rocketseat, U Rock.”`,
      authorImage: "/image/feedbacks/avatar-paloma.webp",
    },
  ]

  const feedbackThirdColData: FeedbackData[] = [
    {
      type: "text",
      author: "Henrique Weiand",
      role: "Remote TechLead/Developer",
      feedback: `“Fiz muitas conexões que me levaram a hoje me redescobrir dentro da tecnologia e atuar com algumas stacks que além de estar em alta no mercado fazem o meu dia ficar mais feliz.”`,
      authorImage: "/image/feedbacks/avatar-henrique.webp",
    },
    {
      type: "text",
      author: "Lucas Exposito Rocha",
      role: "Aluno da Rocketseat",
      feedback: `“Me sinto feliz de ter conseguido minha primeira vaga e ter realizado meu sonho, mas é apenas o começo da carreira e cada vez procurar evoluir mais. O Explorer pra mim foi uma virada de chave em minha vida e realmente me fez acreditar que eu posso aprender.”`,
      authorImage: "/image/feedbacks/avatar-lucas.webp",
    },
    {
      type: "text",
      author: "Antonio Inácio Barbosa Junior",
      role: "Aluno da Rocketseat",
      feedback: `“O curso tem sido incrível na minha vida porque, com os conhecimentos que eu tenho até agora, já consegui refazer o layout do site da empresa em que trabalho só com CSS.”`,
      authorImage: "/image/feedbacks/avatar-antonio.webp",
    },
    {
      type: "video",
      author: "Madalena Machado Rocha",
      role: "Aluna da Rocketseat",
      feedback: "https://www.youtube.com/embed/htZPDNo13mE",
      thumb: "/image/feedbacks/testimonial-madalena-thumb.webp",
    },
    {
      type: "text",
      author: "Anderson Alves",
      role: "Fundador e Negócios na Yoopih",
      feedback: `“Hoje faço trabalhos para clientes até fora do Brasil, e isso em 11 meses que comecei a aprender com a Rocketseat. Tenho orgulho de dizer que recebo no mínimo 3 contatos para entrevistas pelo LinkedIn por semana, e sou um profissional procurado.”`,
      authorImage: "/image/feedbacks/avatar-anderson.webp",
    },
    {
      type: "video",
      author: "Lucas Exposito Rocha",
      role: "Aluno da Rocketseat",
      feedback: "https://www.youtube.com/embed/RdMyr9bx2g0",
      thumb: "/image/feedbacks/testimonial-lucas-thumb.webp",
    },
  ]

  return {
    feedbackFirstColData,
    feedbackSecondColData,
    feedbackThirdColData,
  }
}
