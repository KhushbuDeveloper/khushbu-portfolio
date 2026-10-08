import { useEffect } from 'react'
import { About } from './About'
import { Certifications } from './Certifications'
import { Contact } from './Contact'
import { Education } from './Education'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Section } from './Section'
import { Skills } from './Skills'

// Everything below the hero, loaded as a separate chunk so the first paint stays light
export default function BelowFold() {
  // A deep link like /#projects arrives before this chunk renders; scroll once it exists
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Section id="education" labelledBy="education-title">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Education />
          <Certifications />
        </div>
      </Section>
      <Contact />
    </>
  )
}
