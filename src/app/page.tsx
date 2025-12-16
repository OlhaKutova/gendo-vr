import { Hero } from "@/containers/hero/Hero";
import { SocialProof } from "@/containers/socialProof/SocialProof";
import { Workflow } from "@/containers/workflow/Workflow";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Workflow />
    </main>
  );
}
