export function useCommunity() {
  const communityData: CommunityData[] = [
    {
      icon: "/svg/icons/users.svg",
      title: "+1M de devs",
      description: "Impactados por eventos e conteúdos gratuitos",
    },
    {
      icon: "/svg/icons/devices.svg",
      title: "+600 mil",
      description: "Devs e parceiros na plataforma Rocketseat",
    },
    {
      icon: "/svg/icons/discord.svg",
      title: "+220 mil",
      description: "Devs na comunidade aberta no Discord",
      buttonTitle: "Entrar na comunidade",
      buttonLink: "https://discord.com/invite/bacwY2gDCF",
    },
    {
      icon: "/svg/icons/youtube.svg",
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
