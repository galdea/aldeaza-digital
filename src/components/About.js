import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation("global");

  return (
<section id="about">
<div className="flex justify-center">
  <div style={{ padding: "56.25% 0 0 0", position: "relative", width: "100%" }}>
    <iframe
      src="https://player.vimeo.com/video/1004247087?badge=0&autopause=0&autoplay=1&background=1&player_id=0&app_id=58479"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
      allowFullScreen
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      title="landing-video"
    ></iframe>
  </div>
  <script src="https://player.vimeo.com/api/player.js"></script>
</div>


</section>

  );
}