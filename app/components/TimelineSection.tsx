import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { TimelineContent } from "@mui/lab";

import { timelineEvents } from "../data/data";

export default function TimelineSection() {
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="font-bold text-3xl text-center">🕓 Timeline</h1>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineOppositeContent></TimelineOppositeContent>
        {timelineEvents.reverse().map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <p className="font-bold">{event.title}</p>
              <p>{event.dateFrom}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <p className="font-bold">{event.location}</p>
              <p>{event.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
