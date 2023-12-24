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

  return {
    purposeData,
  }
}
