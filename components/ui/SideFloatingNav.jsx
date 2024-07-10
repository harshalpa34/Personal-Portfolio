import { cn } from "@/utils/cn";
import Link from "next/link";
import ActionTooltip from "./tooltip/ActionTooltip";

const SideFloatingNav = ({ navItems }) => {
  return (
    <div className="max-w-fit fixed left-auto right-[1%] md:right-[2%] top-[50%] -translate-y-half inset-x-0 border  border-white/[0.2] rounded-md bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-4 ">
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative text-neutral-50 items-center flex space-x-1   hover:text-neutral-500 my-6"
          )}
          download={navItem?.isDownload}
          target={navItem?.target}
        >
          <ActionTooltip label={navItem.name} side="left">
            <span>{navItem.icon}</span>
          </ActionTooltip>
        </Link>
      ))}
    </div>
  );
};

export default SideFloatingNav;
