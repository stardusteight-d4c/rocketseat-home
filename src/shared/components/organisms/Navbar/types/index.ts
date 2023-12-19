interface NavbarDefaultItem {
  title: string
  dropdownContent: undefined
}

interface NavbarFormationsItem {
  title: string
  dropdownContent: {
    formations: {
      title: string
      emblem: any
      new: boolean
    }[]
    card?: undefined
  }
}

interface NavbarFreeContentItem {
  title: string
  dropdownContent: {
    card: {
      title: string
      subtitle: string
      action: {
        title: string
        link: string
      }
    }
    contentList: string[]
    formations?: undefined
  }
}

type NavbarItems = Array<
  NavbarDefaultItem | NavbarFormationsItem | NavbarFreeContentItem
>

type NavbarItem =
  | NavbarDefaultItem
  | NavbarFormationsItem
  | NavbarFreeContentItem
