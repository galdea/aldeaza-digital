import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation("global");

  return (
<section id="about">
  <div className="flex justify-center">
  <video
  width="320"
  height="240"
  autoPlay
  loop
  muted
  playsInline
  className="rounded-lg shadow-lg w-full h-[calc(100vh-10px)] max-h-[100vh] object-cover"
>
  <source src="/landing-video.mp4" type="video/mp4" />
  <source src="/landing-video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>

  </div>
</section>

  );
}