/**
 * @license
 * Copyright (c) 2026 Ahnaf Shahriar Abir. All rights reserved.
 * Licensed under the MIT License.
 * Project: Portfolio
 * Author: Ahnaf Shahriar Abir (codewarrior303)
 * Website: https://codewarrior303.github.io/abir/
 */

import HomeBanner from '@/components/sections/HomeBanner';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import CurvedSectionDivider from '@/components/ui/CurvedSectionDivider';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import HomeScrollOrchestrator from '@/components/home/HomeScrollOrchestrator';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeScrollOrchestrator
        banner={<HomeBanner />}
        about={<About />}
      >
        <CurvedSectionDivider curveColor="#0A0F0D" bottomColor="#E2E8E4" />
        <section className="relative z-20 bg-cream">
          <Projects />
        </section>
        <MarqueeStrip />
        <CurvedSectionDivider curveColor="#E2E8E4" bottomColor="#0A0F0D" />
        <div className="relative z-25 bg-ink overflow-hidden">
          <Contact />
          <Footer />
        </div>
      </HomeScrollOrchestrator>
    </>
  );
}
