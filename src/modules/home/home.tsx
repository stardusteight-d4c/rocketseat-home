import { Navbar } from "@/shared/components/organisms/Navbar"

export function HomeModule() {
  return (
    <main className="w-screen">
      <Navbar.Root>
        <Navbar.Logo />
        <Navbar.Navigation />
        <Navbar.Login />
        <Navbar.Subscription />
      </Navbar.Root>
    </main>
  )
}
