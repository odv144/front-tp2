import { TIMELINE } from "../data/timeline";
import TimelineEntry from "./TimelineEntry";

export default function Timeline() {
  return (
    <ol className="timeline">
      {TIMELINE.map((entry) => (
        <TimelineEntry key={entry.title} entry={entry} />
      ))}
    </ol>
  );
}
