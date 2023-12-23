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

  return {
    formationsData,
  }
}
