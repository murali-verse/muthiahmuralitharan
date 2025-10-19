import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <Card className="p-8 md:p-12 text-center">
          <p className="text-lg text-foreground/90 mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="glow-effect"
              onClick={() => window.location.href = 'mailto:muthiah7123@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              muthiah7123@gmail.com
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://www.linkedin.com/in/muthiah-muralitharan-u-37a426314" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/murali-verse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
