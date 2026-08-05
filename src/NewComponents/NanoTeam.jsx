import React from "react";

// Reusable team member card styled for cutout images over colored blocks
function TeamCard({ name, role, image, accent, linkedin }) {
  return (
    <div className="group flex flex-col cursor-pointer mt-8">
      {/* Image Container */}
      <div className="relative w-full mb-4">
        {/* Colored Background Square */}
        <div
          className="w-full aspect-square transition-colors duration-300"
          style={{ backgroundColor: accent }}
        ></div>

        {/* Cutout Image (Transparent PNG recommended for the overlap effect) */}
        <img
          src={image}
          alt={name}
          className="absolute bottom-0 left-0 w-full h-auto"
        />
      </div>

      {/* Info panel */}
      <div className="flex flex-col mt-2">
        <h3 className="text-[21px] font-medium tracking-tight text-[#141B33]">
          {name}
        </h3>
        <div className="flex items-center justify-between mt-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
            {role}
          </p>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0077b5] transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const TEAM = [
  {
    name: "Amara Chen",
    role: "Co-Founder & CEO",
    image: "/image.png",
    accent: "#F5A524",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Daniel Osei",
    role: "Co-Founder & CTO",
    image: "/image.png",
    accent: "#4FC3B0",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Kapoor",
    role: "Head of Design",
    image: "/image.png",
    accent: "#EF6F6C",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Marcus Lindqvist",
    role: "Head of Engineering",
    image: "/image.png",
    accent: "#6C63FF",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Aditya Kumar",
    role: "Founder & Visionary",
    image: "/image.png",
    accent: "#E11D48",
    linkedin: "https://linkedin.com",
  },
];

export default function NanoTeam() {
  return (
    <section className="min-h-screen bg-[#FAF9F6] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Our Team
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#141B33]">
            The people behind the product
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
