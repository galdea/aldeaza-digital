import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("global");

  // Define highlighted texts
  const highlightedTexts = [
    "positioning brands",
    "digital ecosystem",
    "tailored content",
    "social media",
    "websites",
    "streaming platforms"
    // Add any other text you want to highlight
  ];

  // Function to wrap the highlighted texts with a span
  const renderHighlightedText = (text) => {
    return <span style={{ color: "#c3d563" }}>{text}</span>;
  };

  // Function to format the description with highlights
  const formatDescription = (description) => {
    let formattedDescription = [description];
    highlightedTexts.forEach((text) => {
      formattedDescription = formattedDescription.flatMap((segment) => {
        if (typeof segment === "string") {
          const parts = segment.split(new RegExp(`(${text})`, 'gi')); // Case insensitive matching
          return parts.flatMap((part, index) =>
            index % 2 === 1
              ? [renderHighlightedText(text)]
              : part
          );
        }
        return segment;
      });
    });
    return formattedDescription;
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-4 py-8 mx-auto text-center lg:px-20">
        <div className="flex flex-col w-full mb-12">
          <CodeIcon className="mx-auto custom-green inline-block w-10 mb-4" />
          <h1 className="text-3xl font-medium title-font mb-4 section-title">
            {t("projects.title")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {formatDescription(t("projects.description"))}
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <div className="w-full h-80 relative">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src={project.image}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-8 bg-gray-900 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="title-font text-lg text-2xl project-title custom-green mb-4">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-4">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed text-sm italic text-gray-300">
                    {formatDescription(project.description)}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
