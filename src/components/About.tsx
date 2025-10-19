const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="space-y-6 text-lg text-foreground/90">
          <p className="animate-fade-in">
            I'm a passionate developer with a love for creating beautiful, functional web applications. 
            With expertise in modern frameworks and a keen eye for design, I transform ideas into reality.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            My journey in tech started with curiosity and has evolved into a career dedicated to 
            crafting exceptional user experiences. I believe in writing clean, maintainable code 
            and staying current with the latest industry trends.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
