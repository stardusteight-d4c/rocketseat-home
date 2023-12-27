import users from "@/public/assets/icons/users.svg"
import devices from "@/public/assets/icons/devices.svg"
import discord from "@/public/assets/icons/discord.svg"
import youtube from "@/public/assets/icons/youtube.svg"

export function useCommunity() {
  const communityData: CommunityData[] = [
    {
      icon: users.src,
      title: "+1M de devs",
      description: "Impactados por eventos e conteúdos gratuitos",
    },
    {
      icon: devices.src,
      title: "+600 mil",
      description: "Devs e parceiros na plataforma Rocketseat",
    },
    {
      icon: discord.src,
      title: "+220 mil",
      description: "Devs na comunidade aberta no Discord",
      buttonTitle: "Entrar na comunidade",
      buttonLink: "https://discord.com/invite/bacwY2gDCF",
    },
    {
      icon: youtube.src,
      title: "+320 mil",
      description: "Inscritos no canal do YouTube",
      buttonTitle: "Assistir conteúdos",
      buttonLink: "https://www.youtube.com/rocketseat",
    },
  ]

  return {
    communityData,
  }
}
