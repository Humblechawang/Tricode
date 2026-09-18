import { useRef, type MouseEvent } from "react";
import type { Person } from "../types";
import Portrait from "./Portrait";

type Props = {
  person: Person;
  className?: string;
  aspectClass?: string;
};

export default function PortraitFrame({
  person,
  className = "",
  aspectClass = "aspect-[4/5]",
}: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    const frame = frameRef.current;
    if (!stage || !frame) return;
    const bounds = stage.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    frame.style.transform = `rotateX(${-py * 12}deg) rotateY(${px * 16}deg) translateZ(18px)`;
  };

  const onLeave = () => {
    if (frameRef.current) {
      frameRef.current.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
    }
  };

  const frameClass =
    person.frame === "prism"
      ? "frame-prism"
      : person.frame === "panel"
        ? "frame-panel"
        : "frame-slab";

  return (
    <div
      ref={stageRef}
      className={`scene-perspective ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div ref={frameRef} className={`frame-3d relative ${frameClass} overflow-hidden ${aspectClass}`}>
        <Portrait person={person} className="absolute inset-0 h-full w-full" />
        <span className="frame-shine" aria-hidden="true" />
      </div>
    </div>
  );
}
