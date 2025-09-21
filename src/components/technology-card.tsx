import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { LucideIcon } from "lucide-react";

interface TechnologyCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export function TechnologyCard({ title, description, icon: Icon, category }: TechnologyCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}