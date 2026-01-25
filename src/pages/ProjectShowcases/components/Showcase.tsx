import { useEffect, useState } from "react";
import type { Tab } from "../ProjectShowcases";
import {
  BUSINESS_WEBSITE_IMAGES,
  LANGUAGE_PLATFORM_IMAGES,
  PHOTO_LIBRARY_IMAGES,
} from "./consts";
import { projectsDetails } from "./consts";

// Flatten all images into one array once
const ALL_IMAGES = [
  ...LANGUAGE_PLATFORM_IMAGES,
  ...PHOTO_LIBRARY_IMAGES,
  ...BUSINESS_WEBSITE_IMAGES,
];

// Map each project to its starting index in the flat array
const PROJECT_START_INDEX: Record<Tab, number> = {
  "Language platform": 0,
  "Photo library": LANGUAGE_PLATFORM_IMAGES.length,
  "Business website":
    LANGUAGE_PLATFORM_IMAGES.length + PHOTO_LIBRARY_IMAGES.length,
};

export default function ProjectShowcase({ tab, setTab }: { tab: Tab, setTab: React.Dispatch<React.SetStateAction<Tab>> }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isUpscaled, setIsUpscaled] = useState(false);
  const currentProject = projectsDetails.find(project => project.tab === tab);

  useEffect(() => {
    // Set index to the correct start for the current tab
    setCurrentImageIndex(PROJECT_START_INDEX[tab]);

    // Rotate through all images continuously
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % ALL_IMAGES.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [tab]);

  useEffect(() => {
    if (currentImageIndex === PROJECT_START_INDEX['Photo library'])
      setTab('Photo library');
    else if (currentImageIndex === PROJECT_START_INDEX['Business website'])
      setTab('Business website'); 
    else if (currentImageIndex === 0) 
      setTab('Language platform');
  }, [currentImageIndex]);

  return (
    <div className="flex-4 flex flex-col gap-6 w-full min-w-[250px] max-w-2/3">
      <div 
        onClick={() => setIsUpscaled(prev => !prev)}
        className={`
          ${isUpscaled ? '' : 'relative'}          
          w-full aspect-video rounded-lg cursor-pointer mb-12`}
        >
        <div className="absolute z-40 inset-0">
          <div className="relative w-full h-full bg-bg-primary ">
            {ALL_IMAGES.map((img, i) => (
              <img
                key={img}
                src={`projectsImages/${img}`}
                alt="A screenshot of a project"
                className={`
                  absolute z-50 inset-0 w-full h-full aspect-video object-cover object-top rounded-lg shadow-[0px_0px_10px_0px_#FFFFFF]
                  transition-opacity duration-1500 ease-in-out
                  ${i === currentImageIndex ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}
          </div>
          <div className={`${isUpscaled ? 'right-1/2 translate-x-1/2' : 'right-0'} absolute top-full bg-bg-primary p-5 rounded-lg text-xl text-nowrap`}>
            <a href={`${currentProject?.repositoryUrl}`} className="text-accent font-semibold underline decoration-3 underline-offset-4">Github</a>
            <span className="mx-2">·</span>
            <a href={`${currentProject?.liveDemoUrl}`} className="text-accent font-semibold underline decoration-3 underline-offset-4">Live demo</a>
          </div>
        </div>        
      </div>      
    </div>
  );
}