import Head from "next/head";
import {
  About,
  Footer,
  HeroSection,
  Navbar,
  Skills,
  Works,
  Testimonials,
} from "../components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Ibrahim Sani - Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="gradient-bg-hero">
          <Navbar />
          <HeroSection />
        </div>
        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}