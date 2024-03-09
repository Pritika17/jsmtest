import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen w-28">
      <UserButton />
    </div>
  )
}
