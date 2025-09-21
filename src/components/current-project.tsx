import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Train, Zap, Shield, Eye } from "lucide-react";

export function CurrentProject() {
  const handleProjectInquiry = () => {
    const subject = "Railway CCTV Project Inquiry - TRAI";
    const body = `Hello TRAI Team,

I am interested in learning more about your Railway CCTV Intelligent Monitoring System project. 

Specifically, I would like to know more about:
- NVIDIA THOR-based embedded World LLM technology
- Implementation timeline and requirements
- Customization possibilities for our use case
- Pricing and partnership opportunities

Project Requirements:
- Industry: 
- Scale: 
- Timeline: 
- Budget Range: 

Contact Information:
- Name: 
- Company: 
- Position: 
- Phone: 

Thank you for your time and I look forward to hearing from you.

Best regards,`;
    
    window.open(`mailto:charmfe@yonsei.ac.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Current Project
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Railway CCTV Intelligent Monitoring System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Next-generation railway security solution utilizing NVIDIA THOR-based embedded World LLM
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Train className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Project Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  An AI-powered CCTV monitoring system designed to enhance safety and efficiency in railway operations. 
                  Detects dangerous situations early through real-time video analysis and responds automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-1">NVIDIA THOR</h4>
                <p className="text-sm text-muted-foreground">High-performance AI Processing</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-1">Real-time Analysis</h4>
                <p className="text-sm text-muted-foreground">Instant Threat Detection</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-1">Embedded LLM</h4>
                <p className="text-sm text-muted-foreground">Intelligent Decision Making</p>
              </div>
            </div>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
              <CardDescription>
                Core AI capabilities of the railway CCTV system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-medium">Real-time Object & Anomaly Detection</h5>
                  <p className="text-sm text-muted-foreground">Instantly detects dangerous objects or abnormal behavior patterns on platforms</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-medium">Crowd Density & Pose Analysis</h5>
                  <p className="text-sm text-muted-foreground">Monitors passenger density and detects dangerous postures for safety</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-medium">World LLM-based Situational Understanding</h5>
                  <p className="text-sm text-muted-foreground">Accurate risk assessment through contextual situation understanding</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-medium">Automated Alert & Response System</h5>
                  <p className="text-sm text-muted-foreground">Immediate notification to control center when dangerous situations occur</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-3" onClick={handleProjectInquiry}>
            Inquire About Project
          </Button>
        </div>
      </div>
    </section>
  );
}