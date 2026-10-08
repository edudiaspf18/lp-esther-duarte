import { Clock, Dumbbell, HeartPulse, Ruler, Salad, Scale, Video } from "lucide-react";

import type { ServiceIcon as ServiceIconName } from "@/data/content";

const ICONS = {
  video: Video,
  scale: Scale,
  salad: Salad,
  dumbbell: Dumbbell,
  ruler: Ruler,
  heart: HeartPulse,
  clock: Clock,
} as const;

interface ServiceIconProps {
  name: ServiceIconName;
  className?: string;
}

/** Ícone de serviço/perfil (lucide), escolhido pelo nome do conteúdo. */
export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = ICONS[name];
  return <Icon className={className} aria-hidden="true" />;
}
