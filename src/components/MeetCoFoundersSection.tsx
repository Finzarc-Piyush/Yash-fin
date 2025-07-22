import React from "react";
import ProfileCard from "../../y/ProfileCard/ProfileCard.jsx";
import "../../y/ProfileCard/ProfileCard.css";
import abhinavImg from "../assets/images/abhinav.png";
import piyushImg from "../assets/images/piyush.png";

const coFounders = [
  {
    name: "Abhinav Tripathi",
    title: "Co-Founder & CTO",
    image: abhinavImg,
    linkedin: "https://www.linkedin.com/in/thetripathi/",
  },
  {
    name: "Piyush Kumar",
    title: "Co-Founder & CEO",
    image: piyushImg,
    linkedin: "https://www.linkedin.com/in/piyush-finzarc/",
  },
];

export const MeetCoFoundersSection: React.FC = () => (
  <section className="w-full min-h-screen flex flex-col justify-center items-center bg-skin-beige dark:bg-gray-900">
    <div className="w-full flex flex-col justify-center items-center flex-1">
      <h2 className="font-manrope text-5xl md:text-7xl font-extrabold text-foreground mb-4 text-center">
        Meet Our Co-Founders
      </h2>
      <p className="font-manrope text-xl text-muted-foreground mb-10 text-center">
        Visionaries leading Finzarc’s journey of innovation and impact
      </p>
      <div className="flex flex-col md:flex-row gap-12 md:gap-32 justify-center items-center w-full">
        {coFounders.map((founder) => (
          <div key={founder.name} className="relative w-[320px] h-[420px] flex flex-col items-center">
            <ProfileCard
              avatarUrl={founder.image}
              name={founder.name}
              title={founder.title}
              showUserInfo={false}
              enableTilt={true}
              className="w-full h-full"
            />
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 -mb-6 z-30 bg-white/80 rounded-full p-2 shadow-lg hover:bg-blue-100 transition"
              style={{ width: 44, height: 44 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0A66C2" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.599v5.597z"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
); 