import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { TimelineContent } from "@mui/lab";

import { EventCategory, timelineEvents } from "../data/data";

export default function TimelineSection() {
  return (
    // <div className="relative">
    // <div className="absolute bg-gradient-to-tr from-[#ACC196] to-[#E9EB9E] w-screen h-full translate-x-0 rounded-lg -z-50 fz-shadow opacity-70 blur-xl"></div>
    <div className="flex flex-col space-y-10 py-20">
      <h1 className="font-bold text-3xl text-center">🕓 Timeline</h1>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.4,
          },
        }}
      >
        <TimelineOppositeContent></TimelineOppositeContent>
        <h1 className="font-bold text-2xl text-center mb-4">
          💼 Work Experience
        </h1>
        {timelineEvents
          .reverse()
          .filter((e) => EventCategory.WORK === e.category)
          .map((event, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <p className="font-bold">{event.title}</p>
                <p>
                  {event.dateFrom} - {event.dateTo}
                </p>
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

      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.4,
          },
        }}
      >
        <TimelineOppositeContent></TimelineOppositeContent>
        <h1 className="font-bold text-2xl text-center mb-4">🎓 Education</h1>
        {timelineEvents
          .filter((e) => EventCategory.EDUCATION === e.category)
          .map((event, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <p className="font-bold">{event.title}</p>
                <p>
                  {event.dateFrom} - {event.dateTo}
                </p>
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
    //</div>
  );
}
