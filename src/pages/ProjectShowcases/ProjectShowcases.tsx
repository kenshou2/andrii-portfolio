import AboutProject from "./components/AboutProject";
import Showcase from "./components/Showcase";
import ProjectsNavigation from "./components/ProjectsNavigation";
import { useState } from "react";

export type Tab = 'Language platform' | 'Photo library' | 'Business website';
const tabs: Tab[] = ['Language platform', 'Photo library', 'Business website'];

export default function ProjectShowcases() {
    const [currentTab, setCurrentTab] = useState<Tab>('Language platform');

    return (  
        <div className="flex-1 flex flex-col w-full max-w-[1200px] gap-10 md:gap-20">      
            <nav>
                <ProjectsNavigation tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </nav>
            <main className="relative flex-1">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-[calc(5%+20px)]">
                    <Showcase tab={currentTab} setTab={setCurrentTab}/>
                    <AboutProject tab={currentTab} />
                </div>
            </main>        
        </div>
    )
}