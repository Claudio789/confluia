/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ClientSolutions from './components/ClientSolutions';
import Solution from './components/Solution';
import Methodology from './components/Methodology';
import WorkTimeline from './components/WorkTimeline';
import LeadForm from './components/LeadForm';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ClientSolutions />
        <Solution />
        <Methodology />
        <WorkTimeline />
      </main>
      <LeadForm />
    </div>
  );
}

