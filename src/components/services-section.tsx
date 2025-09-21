import { TechnologyCard } from "./technology-card";
import { 
  Mic, 
  Volume2, 
  AlertTriangle, 
  Eye, 
  Users, 
  Camera, 
  Palette, 
  Brain, 
  Bot,
  Shield
} from "lucide-react";

const technologies = [
  {
    title: "TTS (Text-to-Speech)",
    description: "High-quality voice synthesis technology that generates natural-sounding speech. Supports multiple languages and voice styles.",
    icon: Volume2,
    category: "Audio AI"
  },
  {
    title: "STT (Speech-to-Text)",
    description: "Accurate speech recognition technology providing real-time text conversion. Ensures high accuracy even in noisy environments.",
    icon: Mic,
    category: "Audio AI"
  },
  {
    title: "Anomaly Detection",
    description: "Real-time detection and alerting of unusual situations that deviate from normal patterns using machine learning algorithms.",
    icon: AlertTriangle,
    category: "Detection"
  },
  {
    title: "Object Detection",
    description: "High-performance computer vision technology that accurately recognizes and classifies various objects in images and videos.",
    icon: Eye,
    category: "Computer Vision"
  },
  {
    title: "Pose Detection",
    description: "Real-time analysis of human joints and postures providing motion recognition and behavior analysis services.",
    icon: Users,
    category: "Computer Vision"
  },
  {
    title: "Density Detection",
    description: "Real-time monitoring of crowd density in spaces to support safety management and operational optimization.",
    icon: Camera,
    category: "Analytics"
  },
  {
    title: "Image Generation & Synthesis",
    description: "High-quality image generation using generative AI and natural synthesis technology with existing images.",
    icon: Palette,
    category: "Generative AI"
  },
  {
    title: "VLM (Vision Language Model)",
    description: "Multimodal AI that simultaneously understands images and text, providing complex understanding and reasoning capabilities.",
    icon: Brain,
    category: "Multimodal AI"
  },
  {
    title: "AI Agent",
    description: "Intelligent agents that autonomously perform tasks, automating complex business processes.",
    icon: Bot,
    category: "Automation"
  },
  {
    title: "RAI (Robot AI)",
    description: "Advanced robotic AI systems that enable autonomous robots to perceive, learn, and interact with their environment intelligently and safely.",
    icon: Shield,
    category: "Robotics"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our AI Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide innovative solutions through cutting-edge AI technologies across various domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              title={tech.title}
              description={tech.description}
              icon={tech.icon}
              category={tech.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}