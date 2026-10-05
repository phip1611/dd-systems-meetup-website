/* Structured data for the upcoming meetup announcement. */

export interface NextMeetup {
  date: string;
  time: string;
  startDateIso: string;
  endDateIso: string;
  location: string;
  registrationLink?: string;
  hostNote: string;
}

// export const nextMeetup: NextMeetup | null = null;
export const nextMeetup: NextMeetup | null = {
  date: "Thu., Nov 26th, 2026",
  time: "18:00 - 22:00",
  startDateIso: "2026-11-26T18:00:00+01:00",
  endDateIso: "2026-11-26T22:00:00+01:00",
  location: "Amazon AWS (Amazon Development Center Germany GmbH)",
  // registrationLink: "https://signup.ukvly.org/2026-bi/",
  hostNote: "Final meetup of 2026. Open for more 2027 hosts - please reach out!",
};
