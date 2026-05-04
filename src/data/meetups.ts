export interface MeetupLink {
  href: string;
  label: string;
  title?: string;
}

export interface MeetupTalk {
  title: string;
  speakerHtml: string;
  link?: MeetupLink;
}

export interface MeetupImage {
  src: string;
  alt: string;
  title: string;
  credit?: string;
}

export interface PastMeetup {
  id: string;
  label: string;
  introHtml: string;
  talks: MeetupTalk[];
  outroHtml?: string;
  images?: MeetupImage[];
}

/**
 * All past meetups in descending order (top is latest).
 */
export const pastMeetups: PastMeetup[] = [
  {
    id: "2026_02_24",
    label: "2026-02-24 @ TU Dresden, Andreas-Pfitzmann-Bau",
    introHtml: `Prof. Dr. Horst Schirmeier from the chair of Operating
      Systems at TU Dresden hosted our 8th meetup in total and first &amp;
      meetup of 2026. The meetup brought together <strong>40
      attendees</strong> from 18 affiliations to the Andreas-Pfitzmann-Bau
      where we started with interesting talks and concluded the evening in an
      open setting with drinks and pizza. Special thanks to
      <a href="https://www.kernkonzept.com/" title="Kernkonzept">Kernkonzept</a>
      for sponsoring!`,
    talks: [
      {
        title: "SOSP 2026 Prague Pitch",
        speakerHtml: "Martin Decky, Kernkonzept",
      },
      {
        title:
          "Confidential Computing Revisited: Usability, Market, Standpoints and Trends",
        speakerHtml: "Matthias Gries, Cyberus Technology",
        link: {
          href: "https://hal.science/hal-05504115v1",
          label: "paper",
          title:
            "Confidential Computing Revisited: Usability, Market, Standpoints and Trends",
        },
      },
      {
        title:
          "Codevyr - Experimental Platform for Understanding code bases by Querying them",
        speakerHtml: "Maksym Planeta, Exostellar",
        link: {
          href: "https://www.codevyr.com/",
          label: "link",
          title: "Codevyr",
        },
      },
    ],
    outroHtml:
      "Thanks to all attendees, speakers, our host, and of course also our sponsor!",
    images: [
      {
        src: "/images/meetups/2026-02-24-tu-dresden/20260224_184748.webp",
        alt: "Matthias Gries presenting his talk",
        title: "Matthias Gries presenting his talk",
      },
      {
        src: "/images/meetups/2026-02-24-tu-dresden/20260224_191123.webp",
        alt: "Maksym Planeta presenting his talk",
        title: "Maksym Planeta presenting his talk",
      },
    ],
  },
  {
    id: "2025_12_04",
    label: "2025-12-04 @ Cyberus Technology",
    introHtml: `Our 7th meetup in total and fifth &amp; final meetup of 2025
      brought over <strong>40 attendees</strong> from over 20 affiliations to
      the office of Cyberus Technology. The evening featured an interesting
      tech talk on confidential computing, which was a follow-up on a talk
      given in January of the same year. The meetup was concluded with a Year
      in Review presentation of the Systems Meetup. This was the first
      Christmas edition, featuring Gl&uuml;hwein. Thanks to everyone who showed
      up in a nice Christmas sweater! 😉`,
    talks: [
      {
        title: "Rust Dresden Meetup Pitch",
        speakerHtml: "Alex Senier, Amazon AWS",
      },
      {
        title: "Exploring the Memory-Safety Design Space",
        speakerHtml:
          '<span class="text-decoration-line-through">Prof. Dr. Michael Engel</span> (sick and replaced by) Werner Haas, Universit&auml;t Bamberg',
      },
      {
        title: "Identity Crisis in Attested TLS for Confidential Computing",
        speakerHtml: "Muhammad Usama Sardar, TU Dresden",
      },
      {
        title: "Year in Review: (Almost) Two Years of System Meetup",
        speakerHtml: "Philipp Schuster, Cyberus Technology",
      },
    ],
    outroHtml:
      "After that, we had tasty food and drinks including Gl&uuml;hwein with lively discussions until 22:30.",
    images: [
      {
        src: "/images/meetups/2025-12-04-cyberus/20251204_200936.webp",
        alt: "Systems Meetup at Cyberus Technology (Christmas Edition)",
        title: "Systems Meetup at Cyberus Technology (Christmas Edition)",
      },
    ],
  },
  {
    id: "2025_10_02",
    label: "2025-10-02 @ Huawei (Dresden Research Center)",
    introHtml: `For the first time, with <strong>45</strong> attendees, we
      crossed the 40 people boundary! <small>To be fair, from the 45 people
      that showed up 15 were from Huawei</small>, but nevertheless we gathered
      30 folks from <strong>18</strong> distinct affiliations, including people
      from Berlin. The evening featured two lightning talks, and two
      presentations with demos.`,
    talks: [
      {
        title: "Welcome",
        speakerHtml: "Yutao Liu, Huawei",
      },
      {
        title: "Live Migration Insights",
        speakerHtml: "Philipp Schuster, Cyberus Technology",
      },
      {
        title: "Overview of Spectrum OS",
        speakerHtml: "Alyssa Ross, Spectrum OS",
      },
      {
        title: "Debugging Multicore Concurrency",
        speakerHtml: "Diogo Behrens, Huawei; Martin Beck, Huawei",
      },
      {
        title:
          "Debug, Execute, Verify! - Development-Verification Co-Design Made Practical",
        speakerHtml: "Franti&scaron;ek Farka, Barkhausen Institut",
      },
    ],
    outroHtml: `After that, we had the by far best buffet so far, thanks Huawei
      for sponsoring! This is not a matter of course, and we are very thankful
      for that! Further, this is <strong>not a requirement</strong> for future
      hosts!`,
    images: [
      {
        src: "/images/meetups/2025-10-02-huawei/meetup.webp",
        alt: "Systems Meetup at Huawei: Many Discussions",
        title: "Systems Meetup at Huawei: Many Discussions",
      },
      {
        src: "/images/meetups/2025-10-02-huawei/food.webp",
        alt: "Systems Meetup at Huawei: Tasty Food",
        title: "Systems Meetup at Huawei: Tasty Food",
      },
    ],
  },
  {
    id: "2025_08_07",
    label: "2025-08-07 @ Amazon AWS",
    introHtml: `Our summer meetup brought together <strong>35
      attendees</strong> from over 12 affiliations. The evening featured two
      insightful talks and one pitch:`,
    talks: [
      {
        title:
          "<code>git-llm-pick</code> -- extending git-cherry-pick with an LLM",
        speakerHtml: "Norbert Manthey, Amazon AWS",
      },
      {
        title: "Pitch for the Euromicro Conference on Real-Time Systems",
        speakerHtml: "Michael Roitzsch, Barkhausen Institut",
      },
      {
        title:
          "Package-Validation-Tool: Validating the origins of OS distro packages",
        speakerHtml: "Dmitrii Kuvaiskii, Amazon AWS",
      },
    ],
    outroHtml:
      "After that, we had tasty food and drinks with lively discussions until 22:00 o'clock.",
    images: [
      {
        src: "/images/meetups/2025-08-07-amazon-aws/20250807_183031.jpg.webp",
        alt: "Systems Meetup at Amazon AWS",
        title: "Systems Meetup at Amazon AWS",
      },
      {
        src: "/images/meetups/2025-08-07-amazon-aws/20250807_183043.jpg.webp",
        alt: "Systems Meetup at Amazon AWS",
        title: "Systems Meetup at Amazon AWS",
      },
    ],
  },
  {
    id: "2025_05_08",
    label: "2025-05-08 @ Genode Labs",
    introHtml: `Our spring meetup brought together over <strong>30
      attendees</strong> from over 10 affiliations. The evening featured three
      engaging talks:`,
    talks: [
      {
        title: "Container-Infrastructure for FaaS on L4Re",
        speakerHtml: "Michael Roitzsch, Barkhausen Institut",
      },
      {
        title: "Fuzzing with AFL++ on Genode",
        speakerHtml: "Silas Meier, Gapfruit",
      },
      {
        title:
          "MxKernel: A Novel System Software Architecture for Adaptive Resource-Centric Computing (ARCC)",
        speakerHtml: "Michael M&uuml;ller, Uni Osnabr&uuml;ck",
      },
    ],
    outroHtml:
      "After that, we had snacks and drinks with lively discussions until 22:30 o'clock.",
    images: [
      {
        src: "/images/meetups/2025-05-08-genode-labs/DSC00140_cropped.jpg.webp",
        alt: "Systems Meetup at Genode Labs",
        title: "Systems Meetup at Genode Labs",
        credit: "📷 Martin Decky",
      },
      {
        src: "/images/meetups/2025-05-08-genode-labs/DSC00147_cropped.jpg.webp",
        alt: "Systems Meetup at Genode Labs",
        title: "Systems Meetup at Genode Labs",
        credit: "📷 Martin Decky",
      },
    ],
  },
  {
    id: "2025_01_21",
    label: "2025-01-21 @ TU Dresden, Andreas-Pfitzmann-Bau",
    introHtml: `Our third and largest meetup to date brought together
      <strong>32 attendees</strong> at the APB building, hosted by Prof. Horst
      Schirmeier. The evening featured four engaging lightning talks:`,
    talks: [
      {
        title: "Latest Updates on Open Source Contributions",
        speakerHtml: "Alexander B&ouml;ttcher, Genode Labs",
      },
      {
        title: "2024 in Microkernels",
        speakerHtml: "Martin Decky, Kernkonzept",
      },
      {
        title: "Attestation in Confidential Computing",
        speakerHtml:
          "Muhammad Usama Sardar, TU Dresden, Chair of Systems Engineering",
      },
      {
        title: "The Troubles of Inserting VMI Breakpoints into User Space",
        speakerHtml: "Lukas Beierlieb, Cyberus Technology",
      },
    ],
    outroHtml:
      "After that, we had drinks and pizza with lively technical discussions until 22:15 o'clock.",
    images: [
      {
        src: "/images/meetups/2025-01-21-tu-dresden-inf/20250121_181108_cropped.jpg.webp",
        alt: "Systems Meetup at TU Dresden",
        title: "Systems Meetup at TU Dresden",
      },
      {
        src: "/images/meetups/2025-01-21-tu-dresden-inf/20250121_190440.jpg.webp",
        alt: "Lukas Beierlieb presenting his work on SmartVMI",
        title: "Lukas Beierlieb presenting his work on SmartVMI",
      },
    ],
  },
  {
    id: "2024_07_18",
    label: "2024-07-18 @ Barkhausen Institut",
    introHtml: `We had our second meetup at the Barkhausen Institute near
      Postplatz. Although it was summer vacation time, we gathered 15 people
      from various companies and educational/research institutions. After an
      interesting lightning talk by Michael Roitzsch (BI), a lively discussion
      about the M3 research project followed.`,
    talks: [],
    images: [
      {
        src: "/images/meetups/2024-07-18-barkhausen-institut/20240718_181010.jpg.webp",
        alt: "Snacks and Drinks",
        title: "Snacks and Drinks",
      },
      {
        src: "/images/meetups/2024-07-18-barkhausen-institut/20240718_182022.jpg.webp",
        alt: "Demonstrator of the M3 Architecture",
        title: "Demonstrator of the M3 Architecture",
      },
    ],
  },
  {
    id: "2024_05_16",
    label: "2024-05-16 @ Cyberus Technology",
    introHtml: `This was the first meetup after the long Corona break.
      Previously, the meetup was called Mikrokernstammtisch. Now, it is called
      systems meetup. We had 28 attendees from multiple local companies and the
      TU dresden. It was a great kick-off! The event had pizza and drinks
      sponsored by Wirtschaftsf&ouml;rderung Sachsen GmbH.`,
    talks: [],
  },
];
