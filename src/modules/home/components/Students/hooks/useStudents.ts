import ifood from "@/public/assets/ifood.svg"
import globo from "@/public/assets/globo.svg"
import c6bank from "@/public/assets/c6bank.svg"
import nubank from "@/public/assets/nubank.svg"
import mercadolivre from "@/public/assets/mercadolivre.svg"

export function useStudents() {
  const companies = [
    {
      src: ifood,
      name: "iFood",
    },
    {
      src: globo,
      name: "Globo",
    },
    {
      src: c6bank,
      name: "C6 Bank",
    },
    {
      src: nubank,
      name: "Nubank",
    },

    {
      src: mercadolivre,
      name: "Mercado Livre",
    },
  ]
  
  return {
    companies,
  }
}
