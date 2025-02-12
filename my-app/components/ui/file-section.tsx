import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, FileCode, FileSpreadsheet, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

const files = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Product Catalogue",
    description: "Complete list of our products with details",
    downloadUrl: "#",
  },
  {
    icon: <FileSpreadsheet className="h-8 w-8" />,
    title: "Specification Sheet",
    description: "Technical specifications for all products",
    downloadUrl: "#",
  },
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "API Documentation",
    description: "Guide for integrating with our systems",
    downloadUrl: "#",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "User Manual",
    description: "Detailed instructions for product usage",
    downloadUrl: "#",
  },
];

export default function FileSection() {
  const t = useTranslations();

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-8 text-gray-800">
          {t("resources")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {files.map((file, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {file.icon}
                </div>
                <CardTitle className="text-gray-800">{file.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{file.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full text-primary hover:bg-primary hover:text-white border-primary"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("download")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
