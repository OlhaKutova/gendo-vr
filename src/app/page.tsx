import { Hero } from "@/containers/hero/Hero";
import { RolesSection } from "@/containers/roles/RolesSection";
import { SocialProof } from "@/containers/socialProof/SocialProof";
import { Workflow } from "@/containers/workflow/Workflow";
import { Features } from "@/containers/features/Features";
import { Faq } from "@/containers/faq/FAQ";
import { Footer } from "@/containers/footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <RolesSection />
        <SocialProof/>
        <Workflow/>
        <Features/>
        <Faq/>
      </main>
      <Footer/>
    </>
  );
}
