export function useFaq() {
  const faqData: FaqItem[] = [
    {
      question: "O que é a Rocketseat?",
      response: `A coding school que reúne a maior comunidade de devs da América Latina e oferece uma plataforma completa de aprendizado contínuo em programação com diversas formações para profissionais de todos os níveis e momentos de carreira. Mais de 55 mil pessoas já passaram pela nossa escola e transformaram suas carreiras.`,
    },
    {
      question: "Para quem é?",
      response: `Para devs de todos os níveis e pessoas que desejam iniciar sua carreira em tecnologia, se especializar e evoluir em programação. Se você quer começar a estudar programação, o Rocketseat ONE é pra você. Se você já é dev e quer se especializar e dar um upgrade na sua carreira, o Rocketseat ONE também é pra você.`,
    },
    {
      question: "O que você encontra na plataforma?",
      response: `Acesso imediato a diversas formações, com o conteúdo mais atualizado do mercado pra aprender programação do zero, se tornar um dev full stack e se especializar em Front-end, Back-end e Mobile. Você estuda no seu ritmo através de aulas gravadas e aprende as tecnologias e ferramentas mais relevantes do mercado na prática, criando diversos projetos para o seu portfólio. Confira todas as formações aqui.

      Além disso você tem acesso a diversos benefícios exclusivos para assinantes, como acompanhamento do time, masterclass ao vivo e eventos exclusivos para alunos, fórum, tutor para dúvidas, comunidade e muito mais!`,
    },
    {
      question: "Como funciona a assinatura?",
      response: `Com um investimento único você garante a assinatura anual, recebe acesso a plataforma das aulas da Rocketseat e pode começar a estudar imediatamente. Todo o conteúdo já estará liberado na plataforma, mas você também poderá acessar novas aulas e terá acesso a lançamentos e atualizações enquanto seu acesso estiver ativo.`,
    },
    {
      question: "Por onde começo a estudar?",
      response: `Nosso time vai te orientar! Após você realizar sua assinatura, você vai ter acesso a um onboarding na plataforma onde vamos direcionar o melhor caminho para você evoluir de forma rápida, mas sem pular etapas. Além disso, você vai participar de um evento de boas vindas e receber instruções por email sobre a sua jornada em nossa plataforma e em qualquer momento poderá contar com o nosso time para tirar dúvidas através do nosso canal de suporte (por e-mail ou botão de chat na plataforma). Se preferir, você também pode ficar a vontade para escolher por onde começar a estudar conforme os seus objetivos e necessidades.`,
    },
    {
      question: "Qual a duração?",
      response: `Você tem um ano de acesso a plataforma para aproveitar os conteúdos. Ao final desse período, você pode renovar sua assinatura pelo mesmo valor inicial de assinatura para garantir mais um ano de acesso, novos conteúdos, atualizações e nosso suporte por mais tempo.`,
    },
    {
      question: "Qual o valor?",
      response: `Antes, para estudar na Rocketseat você precisaria adquirir separadamente nossas formações e investir um total de R$ 6.283,80.

      Mas agora, todas as formações estão inclusas em um investimento único.
      
      Em um só lugar e com uma única assinatura você garante tudo que precisa para aprender programação do zero ao avançado, se especializar e evoluir profissionalmente.
      
      Com TUDO incluso, a assinatura atual sai por apenas R$ 1.997 ou em até 12x de R$ 166,41 por ano (uma economia de R$4.286,80). Invista na sua carreira pagando muito menos!`,
    },
    {
      question: "Tem certificado?",
      response: `Sim, você receberá um certificado para cada formação que concluir para comprovar seus conhecimentos em cada tecnologia e poderá adicionar no seu currículo e compartilhar nas redes sociais e além de colecionar certificados, você também vai criar ou ampliar o seu portfólio com diversos projetos que vai desenvolver nas aulas.`,
    },
    {
      question: "E se eu não gostar?",
      response: `Oferecemos uma garantia incondicional de 15 dias. Sendo assim, você pode entrar, acessar o conteúdo e, se não se adaptar, entender que não é para você naquele momento ou até mesmo se arrepender nos primeiros quinze dias, pode solicitar o reembolso dentro desse prazo e nós devolveremos 100% do valor investido. Simples assim, sem complicação ou letras miúdas.`,
    },
    {
      question: "Ainda estou com dúvidas…",
      response: `Estamos sempre por aqui. Então se precisar falar com a gente basta enviar um email para oi@rocketseat.com.br, ou falar com a gente pelo WhatsApp no botão abaixo.`,
    },
  ]

  return {
    faqData,
  }
}
