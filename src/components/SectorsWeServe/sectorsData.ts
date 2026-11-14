import type { ElementType } from "react";
import {
  PiFactoryLight,
  PiBuildingsLight,
  PiHospitalLight,
  PiPillLight,
  PiBedLight,
  PiGraduationCapLight,
  PiStorefrontLight,
  PiGearSixLight,
} from "react-icons/pi";

export interface SectorItem {
  id: string;
  emoji: string;
  title: string;
  icon: ElementType;
  tag: string;
  description?: string;
}

export const sectorsData: SectorItem[] = [
  {
    id: "industrial",
    emoji: "🏭",
    title: "Industrial & Manufacturing",
    icon: PiFactoryLight,
    tag: "Heavy Duty & Safety",
  },
  {
    id: "commercial",
    emoji: "🏢",
    title: "Commercial Buildings",
    icon: PiBuildingsLight,
    tag: "HVAC & Energy Efficiency",
  },
  {
    id: "healthcare",
    emoji: "🏥",
    title: "Healthcare",
    icon: PiHospitalLight,
    tag: "Controlled & Hygienic",
  },
  {
    id: "pharmaceutical",
    emoji: "💊",
    title: "Pharmaceutical",
    icon: PiPillLight,
    tag: "Cleanroom & Quality",
  },
  {
    id: "hospitality",
    emoji: "🏨",
    title: "Hospitality",
    icon: PiBedLight,
    tag: "Guest Comfort & Climate",
  },
  {
    id: "educational",
    emoji: "🏫",
    title: "Educational Institutions",
    icon: PiGraduationCapLight,
    tag: "Fresh Air & Learning",
  },
  {
    id: "retail",
    emoji: "🏬",
    title: "Retail & Corporate Spaces",
    icon: PiStorefrontLight,
    tag: "Custom AC & Airflow",
  },
  {
    id: "specialized",
    emoji: "⚙️",
    title: "Specialized & Technical Facilities",
    icon: PiGearSixLight,
    tag: "Precision & Technical",
  },
];
