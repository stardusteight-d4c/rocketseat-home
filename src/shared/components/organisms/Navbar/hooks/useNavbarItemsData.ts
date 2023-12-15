import javaEmblem from "@/shared/assets/emblems/java-emblem.svg"
import fullstackEmblem from "@/shared/assets/emblems/fullstack-emblem.svg"
import nodejsEmblem from "@/shared/assets/emblems/nodejs-emblem.svg"
import aiEmblem from "@/shared/assets/emblems/ai-emblem.svg"
import reactEmblem from "@/shared/assets/emblems/react-emblem.svg"
import reactnativeEmblem from "@/shared/assets/emblems/reactnative-emblem.svg"

import discoverLight from "@/shared/assets/discover-light.svg"

export function useNavbarItemsData() {
  const items = [
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
            title: "Formação Full-Stack",
            emblem: fullstackEmblem,
            new: false,
          },
          {
            title: "Formação em Node.JS",
            emblem: nodejsEmblem,
            new: false,
          },
          {
            title: "Formação em IA",
            emblem: aiEmblem,
            new: true,
          },
          {
            title: "Formação em React",
            emblem: reactEmblem,
            new: true,
          },
          {
            title: "Formação em React Native",
            emblem: reactnativeEmblem,
            new: true,
          },
        ],
      },
    },
    {
      title: "Conteúdos gratuitos",
      dropdownContent: {
        card: {
          logo: discoverLight,
          title: "Aprenda programação do zero e DE GRAÇA",
          subtitle:
            "No Discover você vai descomplicar a programação, aprender a criar seu primeiro site com a mão na massa e iniciar sua transição de carreira",
          action: {
            title: "Quero conhecer",
            link: "https://www.rocketseat.com.br/discover",
          },
        },
      },
    },
    { title: "Depoimentos" },
    {
      title: "Para empresas",
    },
  ]

  return {
    items,
  }
}
