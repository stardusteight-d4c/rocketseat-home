import { useState } from "react"

export function useNavigation() {
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)

  const items: NavbarItems = [
    {
      title: "Formações",
      dropdownContent: {
        formations: [
          {
            title: "Formação em Java",
            emblem: "/svg/emblems/java-emblem.svg",
            new: true,
          },
          {
            title: "Formação em IA",
            emblem: "/svg/emblems/ai-emblem.svg",
            new: true,
          },
          {
            title: "Formação Full-Stack",
            emblem: "/svg/emblems/fullstack-emblem.svg",
            new: false,
          },
          {
            title: "Formação em React",
            emblem: "/svg/emblems/react-emblem.svg",
            new: false,
          },
          {
            title: "Formação em Node.JS",
            emblem: "/svg/emblems/nodejs-emblem.svg",
            new: false,
          },
          {
            title: "Formação em React Native",
            emblem: "/svg/emblems/reactnative-emblem.svg",
            new: false,
          },
        ],
      },
    },
    {
      title: "Conteúdos gratuitos",
      dropdownContent: {
        card: {
          title: "Aprenda programação do zero e DE GRAÇA",
          subtitle:
            "No Discover você vai descomplicar a programação, aprender a criar seu primeiro site com a mão na massa e iniciar sua transição de carreira",
          action: {
            title: "Quero conhecer",
            link: "https://www.rocketseat.com.br/discover",
          },
        },
        contentList: [
          "Blog",
          "Teste seus conhecimentos em React",
          "Teste seus conhecimentos em Node",
          "Teste seus conhecimentos em JavaScript",
        ],
      },
    },
    { title: "Depoimentos", dropdownContent: undefined },
    {
      title: "Para empresas",
      dropdownContent: undefined,
    },
  ]

  function handleMouseEnter() {
    setHover(true)
  }

  function handleMouseLeave() {
    setHover(false)
  }

  return {
    hover: {
      handleMouseEnter,
      handleMouseLeave,
      isHover: hover,
    },
    click: {
      isClicked: click,
      setClick,
    },
    items,
  }
}
