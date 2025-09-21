import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function HeroSection() {
  const handleViewServices = () => {
    const subject = "Service Inquiry - TRAI AI Technologies";
    const body = `Hello TRAI Team,

I am interested in learning more about your AI technology services. Please provide me with detailed information about:

- Available AI solutions
- Implementation process
- Pricing and consultation

Thank you for your time.

Best regards,`;
    
    window.open(`mailto:charmfe@yonsei.ac.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleContactUs = () => {
    const subject = "General Inquiry - TRAI";
    const body = `Hello TRAI Team,

I would like to get in touch regarding:

[Please describe your inquiry here]

Contact Information:
- Name: 
- Company: 
- Phone: 

Thank you for your time.

Best regards,`;
    
    window.open(`mailto:charmfe@yonsei.ac.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-24 px-6">
      <img src="/image.png" alt="Hero background" className="absolute inset-0 h-full w-full object-cover pointer-events-none" />
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-2">
          AI Technology Solutions
        </Badge>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          TR<span className="text-primary">AI</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Building the future with cutting-edge artificial intelligence technology. 
          We provide innovative services through diverse AI solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 py-3" onClick={handleViewServices}>
            View Services
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3" onClick={handleContactUs}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}