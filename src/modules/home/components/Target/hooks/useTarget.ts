export function useTarget() {
  const purposeData: PurposeData[] = [
    {
      title: "Para aprender do zero",
      subtitle: `Fundamentos da programação web HTML, CSS, Git, banco de dados, back-end e front-end.`,
    },
    {
      title: "Para se especializar",
      subtitle: `Trilhas de React, React Native e Node.js com ferramentas e tecnologias alinhadas com o mercado.`,
    },
    {
      title: "Para se manter atualizado",
      subtitle: `Masterclass exclusivas, encontros por voz com convidados e newsletter com novidades do mercado.`,
    },
  ]

  const targetData: string[] = [
    `Quer fazer transição de carreira para a programação`,
    `Quer ganhar melhores salários ou fazer um upgrade de carreira`,
    `Quer conquistar uma vaga internacional`,
    `Quer trabalhar de casa ou remoto`,
  ]

  return {
    purposeData,
    targetData,
  }
}
