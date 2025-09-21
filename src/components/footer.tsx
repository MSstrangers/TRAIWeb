import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold">
                TR<span className="text-primary">AI</span>
              </h3>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                AI Technology
              </Badge>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating a better future with cutting-edge artificial intelligence technology. 
              Leading digital transformation across industries through innovative AI solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 charmfe@yonsei.ac.kr</p>
              <p>📞 010-2676-2337</p>
              <p>🏢 2F, S-Cube Store 1, 61 Yonsei-ro 2na-gil, Seodaemun-gu, Seoul, Korea</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">AI Technologies</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>TTS / STT</li>
              <li>Computer Vision</li>
              <li>Anomaly Detection</li>
              <li>VLM & Agent</li>
              <li>Generative AI</li>
              <li>Robot AI</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Careers</li>
              <li>News</li>
              <li>Partnership</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 TRAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}