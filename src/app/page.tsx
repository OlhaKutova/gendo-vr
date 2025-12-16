import { Hero } from "@/containers/hero/Hero";
import { SocialProof } from "@/containers/socialProof/SocialProof";
import { Workflow } from "@/containers/workflow/Workflow";
import {Features} from "@/containers/features/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Workflow />
      <Features />
    </main>
  );
}
