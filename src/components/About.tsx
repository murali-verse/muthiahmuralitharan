const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="space-y-6 text-lg text-foreground/90">
          <p className="animate-fade-in">
            I'm a passionate AI & Data Science student currently in my 2nd year at Francis Xavier Engineering College. 
            My goal is to become an MLOps Engineer, bridging the gap between machine learning development and production deployment.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            My journey in tech combines deep learning, natural language processing, and modern DevOps practices. 
            I believe in building scalable ML systems and maintaining robust data pipelines that deliver real-world impact.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            When I'm not training models or optimizing pipelines, you'll find me exploring new ML frameworks, 
            contributing to open-source projects, and staying current with the latest developments in AI and MLOps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
