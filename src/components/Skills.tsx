import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "ML & AI",
    skills: ["Python", "Machine Learning", "Deep Learning", "Natural Language Processing", "Data Science"],
  },
  {
    title: "MLOps Tools",
    skills: ["Docker", "DVC", "MLflow", "Git"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card 
              key={category.title} 
              className="p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground/90">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
