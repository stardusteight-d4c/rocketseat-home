import { useState } from "react"

import javaEmblem from "@/public/assets/emblems/java-emblem.svg"
import fullstackEmblem from "@/public/assets/emblems/fullstack-emblem.svg"
import nodejsEmblem from "@/public/assets/emblems/nodejs-emblem.svg"
import aiEmblem from "@/public/assets/emblems/ai-emblem.svg"
import reactEmblem from "@/public/assets/emblems/react-emblem.svg"
import reactnativeEmblem from "@/public/assets/emblems/reactnative-emblem.svg"


export function useNavigation() {
  const [hover, setHover] = useState(false)
  const items: NavbarItems = [
    {
      title: "Formações",
      dropdownContent: {
        formations: [
          {
            title: "Formação em Java",
            emblem: javaEmblem,
            new: true,
          },
          {
            title: "Formação em IA",
            emblem: aiEmblem,
            new: true,
          },
          {
            title: "Formação Full-Stack",
            emblem: fullstackEmblem,
            new: false,
          },
          {
            title: "Formação em React",
            emblem: reactEmblem,
            new: false,
          },
          {
            title: "Formação em Node.JS",
            emblem: nodejsEmblem,
            new: false,
          },
          {
            title: "Formação em React Native",
            emblem: reactnativeEmblem,
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
    items,
  }
}
