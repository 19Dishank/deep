import LiquidEther from './component/LiquidEther'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'
import TextType from './component/TextType'
import SkillsSection from './component/SkillsSection'
import ContactAndQualifications from './component/ContactAndQualifications'
import Footer from './component/Footer'
import ScrollToTop from "./component/ScrollToTop";
import ProjectsSection from './component/ProjectsSection'
import './App.css'


function App() {
  return (
    <div className="app-container">
      <LiquidEther>
        <Navbar />
        <div className="landing-content">
          <HeroSection 
            greeting={<TextType 
            text={["Hi, my name is", "And I'm a"]}
            typingSpeed={80}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
          />}
            nameComponent={
              <TextType 
                text={["Deep Patel", "Flutter Developer"]}
                typingSpeed={100}
                pauseDuration={2200}
                showCursor={true}
                cursorCharacter="|"
              />
            }
            tagline="I build elegant UI & fast apps for mobile"
            description="I'm currently pursuing my MCA and learning to design and build clean, responsive user interfaces that feel fast and enjoyable to use."
            photoSrc="/hero-photo1.jpeg"
            
          />
        </div>
      </LiquidEther>
       {/* SKILLS */}
       <section id="skills">
        <SkillsSection />
      </section>
          <section id="projects">
             <ProjectsSection />
          </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactAndQualifications />
      </section>
      <Footer />
      <ScrollToTop />

    </div>
  )
}

export default App