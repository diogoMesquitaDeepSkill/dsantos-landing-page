"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function FileSection() {
  const params = useParams();
  const locale = params.locale as string; // Get the locale from the URL
  const t = useTranslations();

  const files = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: t("60x120Title"),
      description: t("60x120Desc"),
      downloadUrl:
        "https://ked2xyen7dfafj2f.public.blob.vercel-storage.com/60x120-xYRQqZDGWMhtQK1GERBlQ2t37Lq66c.pdf",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t("60x60Title"),
      description: t("60x60Desc"),
      downloadUrl:
        "https://ked2xyen7dfafj2f.public.blob.vercel-storage.com/60X60-XvBM7AVDw9L59BE4oL8hXKq0z8zJuu.pdf",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t("catalogue2025Title"),
      description: t("catalogue2025Desc"),
      downloadUrl:
        "https://ked2xyen7dfafj2f.public.blob.vercel-storage.com/maincollection2025.pdf",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t("highGlossCatalogueTitle"),
      description: t("highGlossCatalogueDesc"),
      downloadUrl:
        "https://ked2xyen7dfafj2f.public.blob.vercel-storage.com/highgloss2025.pdf",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t("whiteMarbleCatalogueTitle"),
      description: t("whiteMarbleCatalogueDesc"),
      downloadUrl:
        "https://ked2xyen7dfafj2f.public.blob.vercel-storage.com/whitemarble2025.pdf",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t("gezelligCatalogueTitle"),
      description: t("gezelligCatalogueDesc"),
      downloadUrl:
        "https://ked2xyen7dfafj2f.public.blob.vercel-storage.com/gezellig2025.pdf",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t("tecnicalSpecsTitle"),
      description: t("technicalSpecsDesc"),
      downloadUrl: `https://ked2xyen7dfafj2f.public.blob.vercel-storage.com/technical_specs_${locale}.pdf`,
    },
  ];

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
                  onClick={() => window.open(file.downloadUrl, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("open")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
