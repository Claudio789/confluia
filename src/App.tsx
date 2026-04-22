/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Methodology from './components/Methodology';
import LeadForm from './components/LeadForm';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Methodology />
      </main>
      <LeadForm />
    </div>
  );
}

