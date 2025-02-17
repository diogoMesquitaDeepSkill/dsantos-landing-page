import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutUs() {
  const t = useTranslations();

  const teamMembers = [
    {
      name: "Diogo Santos",
      role: "CEO & Founder",
      image: "/diogo_profile.jpg?height=250&width=250",
      description: t("descriptionDiogo"),
    },
    {
      name: "Pedro Oliveira",
      role: "Commercial Director of Portugal",
      image: "/dias.jpg?height=250&width=250",
      description: t("descriptionPedro"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-left mb-8 text-gray-800">
        {t("ourTeam")}
      </h2>
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-start">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <div className="w-48 h-48 mb-4 relative overflow-hidden rounded-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-center text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-left mb-8 text-gray-800">
          {t("ourCompany")}
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">{t("aboutUsText1")}</p>
          <p className="text-gray-700 mb-4">{t("aboutUsText2")}</p>
          <p className="text-gray-700">{t("aboutUsText3")}</p>
        </div>
      </div>
    </div>
  );
}
