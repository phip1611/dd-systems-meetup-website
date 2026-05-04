/* Structured data for the upcoming meetup announcement. */

export interface NextMeetup {
  date: string;
  time: string;
  location: string;
  registrationNote: string;
  hostNote: string;
}

export const nextMeetup: NextMeetup = {
  date: "Thu., May 21st, 2026",
  time: "18:00 - 22:00",
  location: "Genode Labs",
  registrationNote: "Registration opens end of April.",
  hostNote: "Open for more 2026 hosts - please reach out!",
};
