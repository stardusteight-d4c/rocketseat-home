import { Navbar } from "@/shared/components/organisms/Navbar"
import { Hero } from "./components/Hero"
import { BlackMonthAds } from "@/shared/components/organisms/ads/BlackMonthAds/BlackMonthAds"

export function HomeModule() {
  return (
    <main className="w-screen overflow-x-hidden bg-dark-str">
      <Navbar.Root>
        <Navbar.Logo />
        <Navbar.Navigation />
        <Navbar.Login />
        <Navbar.Subscription />
      </Navbar.Root>
      <BlackMonthAds />
      <Hero />
    </main>
  )
}
