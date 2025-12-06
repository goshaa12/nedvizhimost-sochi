import {
  DollarSign,
  Users,
  Clock,
  Camera,
  MapPin,
  Shield,
  Zap,
  Award,
  Battery,
  Wrench,
  Heart,
  GraduationCap,
  Waves,
  Plane,
  Menu,
  X,
  Map,
  Package,
  Settings,
  Globe,
  Check,
  CheckCircle,
  CheckCircle2,
  Wind,
  Coffee,
  Star,
  Gift,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconName =
  | "DollarSign"
  | "Users"
  | "Clock"
  | "Camera"
  | "MapPin"
  | "Shield"
  | "Zap"
  | "Award"
  | "Battery"
  | "Wrench"
  | "Heart"
  | "GraduationCap"
  | "Waves"
  | "Plane"
  | "Menu"
  | "X"
  | "Map"
  | "Package"
  | "Settings"
  | "Globe"
  | "Check"
  | "CheckCircle"
  | "CheckCircle2"
  | "Wind"
  | "Coffee"
  | "Star"
  | "Gift";

export const iconMap: Record<IconName, LucideIcon> = {
  DollarSign,
  Users,
  Clock,
  Camera,
  MapPin,
  Shield,
  Zap,
  Award,
  Battery,
  Wrench,
  Heart,
  GraduationCap,
  Waves,
  Plane,
  Menu,
  X,
  Map,
  Package,
  Settings,
  Globe,
  Check,
  CheckCircle,
  CheckCircle2,
  Wind,
  Coffee,
  Star,
  Gift,
};

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}

