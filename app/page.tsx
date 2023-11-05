import { Hero, ImageCard } from "@components";

export default async function Home() {
  return (
    <main className="overflow-hidden bg-[#000000]">
      <Hero />

      <ImageCard />
    </main>
  );
}
