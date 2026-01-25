import type { Tab } from "../ProjectShowcases";
import { projectsDetails } from './consts';

type TechName = 'HTML' | 'CSS' | 'JS' | 'TypeScript' | 'React' | 'Tailwind' | 'React Router' | 'TanStack Query' | 'Angular' | 'SCSS';
type ToolName = 'Git' | 'GitHub' | 'Figma';

export interface ProjectDetails {    
    tab: Tab;
    usedTeck: TechName[];
    usedTools: ToolName[];
    about: {
        paragraph: string;
        list: string[]
    };
    repositoryUrl: string;
    liveDemoUrl: string;
}

const teckIconMap: Record<TechName, string> = {
    "HTML": 'html.svg',
    "CSS": 'css.svg',
    "JS": 'js.svg',
    "TypeScript": 'typescript.svg',
    "React": 'react.svg',
    "Tailwind": 'tailwind.svg',
    "React Router": 'react-router.svg',
    "TanStack Query": 'tanstack-query.svg',
    "Angular": 'angular.svg',
    "SCSS": 'scss.svg',
}

export default function AboutProject({tab}: {tab: Tab}) { 

    return (
        <div className="flex-3 w-full min-w-[250px]">
            <div className="relative w-full h-full">
                {projectsDetails.map((details, i) =>
                <div 
                    key={i} 
                    className={`
                        ${details.tab === tab ? "opacity-100" : "opacity-0"}
                        transition-opacity duration-1000
                        absolute inset-0 flex flex-col gap-5`
                    }>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl text-txt-secondary font-semibold">Tech Stack</h2>
                        <div className="flex gap-3">                    
                            {details.usedTeck.map((teck, i) =>
                                <img key={i} src={`logotypes/${teckIconMap[teck]}`} alt="An icon of a tech used in a project" />
                            )}
                        </div>
                        <ul className="ml-5 list-disc">
                            <li>
                                <span className="text-[#818181]">Primary: </span>
                                {details.usedTeck.join(" | ")}
                            </li>
                            <li>
                                <span className="text-[#818181]">Tools: </span>
                                {details.usedTools.join(" | ")}
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 pb-10">
                        <h2 className="text-3xl text-txt-secondary font-semibold">Features</h2>                        
                        <ul className="ml-3 list-disc">
                            {details.about.list.map((item, i) =>
                                <li key={i}>{item}</li>
                            )}
                        </ul>
                    </div>                
                </div>
                )}            
            </div>
        </div>
    )
}