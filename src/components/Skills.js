import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation("global");

  const description = t("skills.description");
  const highlightedTexts = [
    "Build & Design Websites",
    "Social Media Campaigns",
    "Diseñamos Sitios Web",
    "Campañas en Redes Sociales",
    "Website Building", // Add your highlighted skills here
    "Skill2"  // Add your highlighted skills here
  ];

  // Function to wrap the highlighted texts with a span
  const renderHighlightedText = (text) => {
    return <span style={{ color: "#c3d563" }}>{text}</span>;
  };

  // Function to format the description with highlights
  const formatDescription = () => {
    let formattedDescription = [description];
    highlightedTexts.forEach((text) => {
      formattedDescription = formattedDescription.flatMap((segment) => {
        if (typeof segment === "string") {
          const parts = segment.split(text);
          return parts.flatMap((part, index) =>
            index < parts.length - 1
              ? [part, renderHighlightedText(text)]
              : part
          );
        }
        return segment;
      });
    });
    return formattedDescription;
  };

  // Function to highlight skills
  const highlightSkill = (skill) => {
    return highlightedTexts.includes(skill)
      ? renderHighlightedText(skill)
      : skill;
  };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block custom-green mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills & Technologies
          </h1>
          <h2 className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {formatDescription()}
          </h2>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="custom-green w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {highlightSkill(skill)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
