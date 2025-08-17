import type { IconType } from "react-icons";
import {
  SiAccenture,
  SiInfosys,
  SiWipro,
  SiSwiggy,
  SiNetflix,
  SiPaytm,
  SiAdidas,
  SiFlipkart,
  SiZomato,
} from "react-icons/si";
import {
  FaAtlassian,
  FaSpotify,
  FaMicrosoft,
  FaUber,
  FaGoogle,
} from "react-icons/fa";
import { FaAmazon } from "react-icons/fa6";

// components
import {
  BookmarkFilledIcon,
  BriefcaseIcon,
  CloudUploadIcon,
  FilterIcon,
  PaperPlaneIcon,
  SearchIcon,
  TimerIcon,
  OfficeIcon,
  LocationIcon,
} from "@/components/shared/icons";

export const faqs: FAQ[] = [
  {
    question: "What is the purpose of this portal?",
    answer:
      "This job portal connects job seekers with employers, allowing users to discover job opportunities and apply for them easily.",
  },
  {
    question: "How can I create an account?",
    answer: (
      <>
        You can create an account by signing in with your
        <span className="text-primary"> Google</span> or
        <span className="text-primary"> GitHub</span> account. Just click on the
        respective button to get started.
      </>
    ),
  },
  {
    question: "Is there a fee to use the portal?",
    answer: "With the free plan, you can apply for one job per day at no cost.",
  },
  {
    question: "Can I save my favorite jobs?",
    answer:
      "Yes, you can save your favorite jobs and also view your applied jobs.",
  },
  {
    question: "Can I apply for multiple jobs?",
    answer:
      "Currently, you can apply for one job per day. Premium access for unlimited applications is coming soon!",
  },
];

export const features = [
  {
    icon: <FilterIcon />,
    title: "Smart Filters",
    desc: "Filter jobs by location, type, and mode.",
  },
  {
    icon: <SearchIcon />,
    title: "Advanced Search",
    desc: "Search by company, skills, or designation.",
  },
  {
    icon: <BookmarkFilledIcon />,
    title: "Bookmark Jobs",
    desc: "Save jobs to view and apply later.",
  },
  {
    icon: <CloudUploadIcon />,
    title: "Upload Resume",
    desc: "Attach your resume to stand out.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Flexible Job Modes",
    desc: "Explore remote, hybrid, or onsite roles.",
  },
  {
    icon: <PaperPlaneIcon />,
    title: "Easy Apply",
    desc: "Apply directly with one click.",
  },
];

export const companyIcons: IconType[] = [
  SiAccenture,
  SiInfosys,
  SiWipro,
  SiSwiggy,
  FaAtlassian,
  FaGoogle,
  SiNetflix,
  FaSpotify,
  FaMicrosoft,
  FaUber,
  SiPaytm,
  SiAdidas,
  FaAmazon,
  SiFlipkart,
  SiZomato,
];

export const tabs = [
  {
    id: "jobType",
    label: "Job type",
    icon: <TimerIcon aria-hidden="true" />,
  },
  {
    id: "jobMode",
    label: "Job mode",
    icon: <OfficeIcon aria-hidden="true" />,
  },
  {
    id: "location",
    label: "Location",
    icon: <LocationIcon aria-hidden="true" />,
  },
];

export const NAV_LINKS = [
  {
    href: "/jobs?page=1",
    matchPath: "/jobs",
    text: "Jobs",
    icon: <BriefcaseIcon />,
  },
  {
    href: "/jobs/saved",
    matchPath: "/jobs/saved",
    text: "Saved",
    icon: <BookmarkFilledIcon />,
  },
  {
    href: "/jobs/applied",
    matchPath: "/jobs/applied",
    text: "Applied",
    icon: <PaperPlaneIcon />,
  },
] as const;
