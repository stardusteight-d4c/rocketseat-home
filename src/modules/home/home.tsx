import { Navbar } from "@/shared/components/organisms/Navbar"
import { Home } from "./components"

export function HomeModule() {
  return (
    <main>
      <Navbar.Root>
        <Navbar.Logo />
        <Navbar.Navigation />
        <Navbar.Login />
        <Navbar.Subscription />
      </Navbar.Root>
      <Home.Ads />
      <Home.Hero />
      <Home.Video />
      <Home.Students />
      <Home.Formations />
      <Home.Target />
      <Home.Solution />
      <Home.Feedbacks />
    </main>
  )
}
