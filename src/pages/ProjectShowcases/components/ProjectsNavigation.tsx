import type { Tab } from "../ProjectShowcases";
import {
  BUSINESS_WEBSITE_IMAGES,
  LANGUAGE_PLATFORM_IMAGES,
  PHOTO_LIBRARY_IMAGES,
} from "./consts";

interface ProjectsNavigatioProps {
    tabs: Tab[];
    currentTab: Tab;
    setCurrentTab: React.Dispatch<React.SetStateAction<Tab>>;
}
export default function ProjectsNavigation({tabs, currentTab, setCurrentTab} : ProjectsNavigatioProps) {

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:grid auto-cols-fr grid-flow-col gap-4 md:gap-7 md:border-2 border-neutral-700 rounded-[100px] p-1">
                {tabs.map((tab, i) =>
                    <NavButton
                        key={i}
                        onClick={() => setCurrentTab(tab)}
                        highlighted={currentTab === tab}
                        customStyle="relative text-nowrap px-4 py-2 rounded-[100px]">
                        {tab}
                        {currentTab === tab && 
                        <div 
                            style={{animationDuration: `${
                                tab === 'Language platform'
                                 ? 3000 * LANGUAGE_PLATFORM_IMAGES.length
                                 : tab === 'Photo library'
                                  ? 3000 * PHOTO_LIBRARY_IMAGES.length
                                 : 3000 * BUSINESS_WEBSITE_IMAGES.length
                            }ms`}}
                            className={`absolute top-[calc(100%+6px)] md:top-[calc(100%+15px)] left-[5%] right-[5%] h-1 progress-timeline rounded-md bg-bronze`}>
                        </div>
                        }
                    </NavButton>
                )}
            </div>        
        </div>
    )
}

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    highlighted: boolean;
    children: React.ReactNode;
    customStyle?: string;
}
function NavButton({highlighted, children, customStyle='', ...props}: NavButtonProps) {

    return (
        <button 
            {...props}
            className={`
                ${customStyle}
                ${highlighted ? 'border-none shadow-[0px_0px_4px_2px_#D39A15]' : 'border-1 border-[#808080] shadow-[0px_0px_4px_2px_golden]'} 
                bg-transparent font-bold rounded-[9px] cursor-pointer`}
        >        
        {children}
        </button>
    )
}