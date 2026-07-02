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
  date: "Wed., Sep 2nd, 2026",
  time: "18:00 - 22:00",
  startDateIso: "2026-09-02T18:00:00+02:00",
  endDateIso: "2026-09-02T22:00:00+02:00",
  location: "Barkhausen Institut",
  // registrationLink: "https://signup.ukvly.org/2026-genode-labs/",
  hostNote: "Open for more 2026/2027 hosts - please reach out!",
};
