/* Structured data for the upcoming meetup announcement. */

export interface NextMeetup {
  date: string;
  time: string;
  location: string;
  registrationLink?: string;
  hostNote: string;
}

export const nextMeetup: NextMeetup = {
  date: "Thu., May 21st, 2026",
  time: "18:00 - 22:00",
  location: "Genode Labs",
  registrationLink: "https://signup.ukvly.org/2026-genode-labs/",
  hostNote: "Open for more 2026 hosts - please reach out!",
};
