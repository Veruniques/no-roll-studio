/* =====================================================================
   PORTFOLIO DATA — edit text, images and videos here.
   Desktop positions (x, y) are % of the screen; icons stay draggable.
   ===================================================================== */

window.NOROLL = {
  owner: {
    name: 'Veronika Dominiková',
    short: 'Veru',
    email: 'veronikadominikova@gmail.com',
    linkedin: 'https://www.linkedin.com/in/veronika-dominikova/',
    formspree: 'https://formspree.io/f/mnjrqrkj',
    wallpaper: 'assets/img/wallpaper.jpg',
    portrait: 'assets/img/portrait.jpg',
  },

  /* ---------------- CINEMATIC ---------------- */
  cinematic: [
    {
      id: 'rb-cinema',
      title: 'Raiffeisenbank Cinema Spot',
      subtitle: 'Sponsor spot for cinema · fully AI',
      vimeo: '1193051888',
      type: 'AI Production > Cinema sponsor spot',
      production: 'Fully AI',
      client: 'Raiffeisenbank',
      text: 'A sponsor spot that plays before the film, so it has to survive a fifteen-metre screen and a room full of people holding popcorn. Fully AI, from the character to the cut.',
      role: [
        'Designed the character',
        'Created the storyboard',
        'Generated the input images and video scenes',
        'Built the full version for the final editor to finish with SFX and colour grading',
        'Creative director on the client side: direct communication and planning from the first call to handover',
      ],
      tools: ['Freepik', 'Nano Banana Pro', 'Kling 2.1', 'DaVinci Resolve', 'ChatGPT', 'ElevenLabs'],
      x: 14, y: 20,
    },
    {
      id: 'monoprix',
      title: 'Monoprix',
      subtitle: 'Commercial · fully AI',
      vimeo: '1193051592',
      type: 'AI Production > Commercial',
      production: 'Fully AI',
      client: 'Monoprix',
      text: 'Concept to handover, all mine. A fully AI commercial for Monoprix: idea, storyboard, every generated frame, and the client on the other end of the line the whole way.',
      role: [
        'Came up with the concept',
        'Created the storyboard',
        'Generated the image and video scenes',
        'Creative director on the client side: direct communication and planning from the first call to handover',
      ],
      tools: ['Nano Banana Pro', 'Kling 3.0', 'DaVinci Resolve', 'ChatGPT', 'ElevenLabs'],
      x: 27, y: 12,
    },
    {
      id: 'fameplay-voice',
      title: 'Fameplay',
      subtitle: 'Commercial · fully AI',
      vimeo: '1193052091',
      type: 'AI Production > Commercial',
      production: 'Fully AI',
      client: 'Fameplay',
      text: 'A fully AI commercial for Fameplay, the studio behind the Emmy-winning #marty_is_dead. Talking heads that nobody filmed.',
      role: [
        'Co-created the concept',
        'Created the storyboard',
        'Produced the image and video scenes',
        'Lip sync',
        'Creative director on the client side: direct communication and planning from the first call to handover',
      ],
      tools: ['ChatGPT', 'Nano Banana 2', 'HeyGen', 'Kling', 'DaVinci Resolve'],
      x: 21, y: 38,
    },
    {
      id: 'kofola',
      title: 'Kofola Phteven',
      subtitle: 'Remake of an iconic commercial · fully AI',
      vimeo: '1193051595',
      type: 'AI Production > Remake',
      production: 'Fully AI',
      client: 'Kofola (asked by the original creator)',
      text: 'The original creator of an iconic Kofola commercial asked for an AI remake. Same soul, new pipeline, one very specific dog.',
      role: [
        'Trained the character',
        'Created the scenes: images and videos',
      ],
      x: 9, y: 52,
    },
    {
      id: 'rb-hybrid',
      title: 'Raiffeisenbank Hybrid',
      subtitle: 'Hybrid commercial · live action + AI',
      vimeo: '1193051591',
      type: 'Hybrid Production > Live action + AI',
      production: 'Hybrid',
      client: 'Raiffeisenbank',
      text: 'Real shoot, generated world. I directed the live-action part and built the AI backgrounds and effects around it, until nobody could tell where the set ended.',
      role: [
        'Concept and storyboard',
        'Created the AI backgrounds and “VFX” effects',
        'Directed the live-action production',
        'Creative director on the client side: direct communication and planning from the first call to handover',
        'Video edit',
      ],
      tools: ['Nano Banana', 'ChatGPT', 'Runway'],
      x: 30, y: 58,
    },
    {
      id: 'ppas',
      title: 'PPAS',
      subtitle: 'TV commercial',
      vimeo: '1193053922',
      type: 'AI Production > TV commercial',
      client: 'PPAS',
      text: 'A broadcast TV spot produced with AI, built to air next to traditionally shot ads and hold its own.',
      x: 17, y: 72,
    },
  ],

  /* ---------------- PRODUCT DESIGN ----------------
     Case studies. chapters[].images[]: {src, alt, size: full|half|third, full?}
     `full` = full-length image shown in the lightbox (tall web pages).
     ------------------------------------------------- */
  product: [
    {
      "id": "kiwi",
      "title": "Kiwi.com",
      "subtitle": "Product Design Team Lead · Ancillaries · 2022–2024",
      "type": "Product Design > Strategy, UX/UI, design leadership",
      "client": "Kiwi.com",
      "cover": "assets/img/work/cover-kiwi.jpg",
      "hero": "assets/img/work/kiwi-hero.jpg",
      "reel": "assets/video/kiwi-showreel.mp4",
      "poster": "assets/img/work/kiwi-reel-poster.jpg",
      "heroAlt": "Kiwi.com mobile screens: bundles, Guarantee, booking, insurance, seat map",
      "facts": [
        [
          "€2 → €25",
          "the goal for ancillary revenue per booking"
        ],
        [
          "2×",
          "the goal for overall revenue, with ancillaries at around 50% of the mix"
        ],
        [
          "3",
          "platforms: web, responsive, iOS + Android"
        ],
        [
          "10+",
          "products: bags, seats, insurance, Guarantee, fare types, bundles…"
        ],
        [
          "100s",
          "of screens across search, booking and post-booking"
        ]
      ],
      "problem": "Ancillaries are everything you buy on top of a flight. Bags, seats, AXA insurance, Kiwi.com Guarantee, Price Lock, fare types, service packages, bundles, Booking.com and Rentalcars. Each had its own team and its own idea of where to upsell. The business needed more revenue from it, the company was reorganising ownership mid-flight, and nobody had the full picture.",
      "text": "I took over the design team mid-reorg and co-led the domain with product and engineering. Everything below came out of design jams I ran with designers, PMs, engineers and, regularly, C-level. And a lot of it I designed with my own hands.",
      "decisions": [
        "Decisions kept changing with the evidence: we A/B tested variants and kept what performed, using revenue, CX feedback, UX research and quantitative data",
        "One upsell moment per product per stage, triggered by context (first MMB visit, before check-in when bags or seats are still available, after a schedule change), not by banner real estate",
        "Business rules live in the design, not in a spreadsheet next to it: Price Lock only shows when the fare margin clears a threshold, different for B2C and B2B2C",
        "Friction designed on purpose: the “are you sure” moments were mapped and made consistent instead of each team inventing its own"
      ],
      "quote": {
        "text": "She joined during a critical phase when the product team was under massive pressure to change its modus operandi, scale our ancillary offering, and achieve ambitious targets… Her facilitation skills enabled her to engage directly with C-level executives in frequent working sessions.",
        "who": "Vladimir Končar, VP of Design and Research, Kiwi.com"
      },
      "role": [
        "Co-led the domain with product and engineering leads",
        "Led 3 product designers, a content designer and a UX researcher",
        "Facilitated design jams and working sessions with PMs, engineering and C-level",
        "Hands-on on the key flows, with a strong focus on visual design",
        "Briefed the team’s UX researcher on what to test, then used the findings to make further feature decisions",
        "Worked directly with a quantitative researcher and planned further development around the data",
        "Hiring, feedback and growth of the team"
      ],
      "chapters": [
        {
          "id": "journey",
          "title": "The map",
          "kicker": "Ancillaries across the whole journey",
          "text": "Every ancillary touchpoint on one wall: Search → Booking → Post-booking, in two maps (desktop + responsive, and native). Each touchpoint shows the current state next to the proposal, with the conditions that change it: Tier 1 vs other markets, B2C vs B2B2C, signed in vs out. It became the reference for roadmap and ownership discussions when products moved between teams.",
          "images": [
            {
              "src": "assets/img/work/kiwi-journey-desktop.jpg",
              "w": 2000,
              "h": 166,
              "alt": "Desktop and responsive customer journey map, full width",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-journey-native.jpg",
              "w": 2000,
              "h": 250,
              "alt": "Native app customer journey map, full width",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-journey-search.jpg",
              "w": 2000,
              "h": 580,
              "alt": "Journey map detail: search and homepage touchpoints",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-journey-booking.jpg",
              "w": 2000,
              "h": 382,
              "alt": "Journey map detail: booking touchpoints",
              "size": "full"
            }
          ]
        },
        {
          "id": "booking",
          "title": "Booking flow",
          "kicker": "Search to summary",
          "text": "The core flow every ancillary lives inside: search, trip details, ticket fare, baggage, Kiwi.com services, summary. Consistent across web and native.",
          "images": [
            {
              "src": "assets/img/work/kiwi-booking-flow.jpg",
              "w": 2000,
              "h": 748,
              "alt": "Mobile booking flow: search, trip details, ticket fare, baggage, services, summary",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-desktop-home.jpg",
              "w": 1722,
              "h": 1134,
              "alt": "Desktop homepage and search results",
              "size": "full"
            }
          ]
        },
        {
          "id": "bundles",
          "title": "Bundles",
          "kicker": "Light, Comfort, All in",
          "text": "Bundles package bags, seats and flexibility into one choice and one discount. I led the iterations after the MVP: upgrades triggered by intent (pick a bag, get offered the bundle that already includes it), a “finding you discounts” moment tested in three versions, seats in bundles with a colour-coded seat map and a mandatory seat step, and the edge cases nobody wants to discover in production: removing a bundle, adding a passenger after an upgrade, infants, multi-traveller seating.",
          "images": [
            {
              "src": "assets/img/work/kiwi-bundles-mobile.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Bundle selection on mobile: Light, Comfort, All in, discount prompt",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-bundles-desktop.jpg",
              "w": 1722,
              "h": 1214,
              "alt": "Bundles on desktop with comparison modal",
              "size": "half"
            },
            {
              "src": "assets/img/work/kiwi-bundles-seatmap.jpg",
              "w": 1260,
              "h": 1158,
              "alt": "Seat map with seats included in the bundle",
              "size": "half"
            },
            {
              "src": "assets/img/work/kiwi-bundles-upgrades.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Bundle upgrade offers triggered by bag selection",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-seating-bags.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Seating and baggage screens",
              "size": "full"
            }
          ]
        },
        {
          "id": "fare-families",
          "title": "Fare Families",
          "kicker": "Airline partnerships, end-to-end ownership",
          "text": "Kiwi.com started selling airlines’ own fare families (Light, Standard, Flex…) for Air France-KLM, Lufthansa and Virgin Atlantic. Each airline has different rules for bags, seats, changes and refunds. My project from the first sketch to handoff: phase 1 desktop MVP, then responsive and native, including the parts nobody wants to design: refunds, assisted refunds, changes that can’t be done automatically, and the customer-service tool.",
          "images": [
            {
              "src": "assets/img/work/kiwi-ff-desktop.jpg",
              "w": 1722,
              "h": 1214,
              "alt": "Fare family comparison and recommended-fare modal on desktop",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-ff-mobile.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Fare families and Kiwi.com services on mobile",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-ff-desktop2.jpg",
              "w": 1722,
              "h": 1214,
              "alt": "Desktop service packages and fare details",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-ff-postbooking.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Post-booking: trip overview, changes, rebooking",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-ff-refunds.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Refunds, price breakdown and checkout",
              "size": "full"
            }
          ]
        },
        {
          "id": "decision",
          "title": "Decision story",
          "kicker": "Fare Families: one problem, the options, and why",
          "text": "The rest of this case shows breadth. This one shows how I think. One feature, from the ticket to the critique to what we took forward.",
          "steps": [
            {
              "title": "1 · The brief",
              "text": "August 2023. Ticket DAR-4534, assigned to me, priority highest: prototype the Fare Families use cases so the team understands the flow and its impact before anyone commits engineering time. Airlines were about to sell their own fares through us, and nobody had drawn what that does to a booking that already has bags, seats, Guarantee and service packages in it.",
              "images": [
                {
                  "src": "assets/img/work/ds-brief.jpg",
                  "w": 1200,
                  "h": 942,
                  "alt": "Jira ticket DAR-4534 Fare Families, assigned to Veronika Dominiková, priority highest",
                  "size": "half"
                }
              ]
            },
            {
              "title": "2 · Look outside first",
              "text": "Before touching our flow I benchmarked how airlines and other booking sites present fare families. Two patterns kept coming back: a column table with ticks, where the middle option does the selling, and a nudge to upgrade right before checkout. Cabin tabs and photo-heavy layouts looked great and explained nothing.",
              "images": [
                {
                  "src": "assets/img/work/ds-benchmark.jpg",
                  "w": 1848,
                  "h": 762,
                  "alt": "Benchmark of airline and OTA fare family screens",
                  "size": "full"
                }
              ]
            },
            {
              "title": "3 · The hard part: fare conditions",
              "text": "Fare rules are legal text, different for every airline, and people need them before they pay, not after. Three options on the table: a modal on the overview step, a dedicated conditions page, or an FAQ article with the full airline text. I prototyped the modal in several states, from a short summary to the full rules, and took all three to design critique on 23 January 2024.",
              "images": [
                {
                  "src": "assets/img/work/ds-tc-variants.jpg",
                  "w": 1540,
                  "h": 987,
                  "alt": "Fare conditions modal: summary and full-rules states",
                  "size": "full"
                },
                {
                  "src": "assets/img/work/ds-critique.jpg",
                  "w": 1712,
                  "h": 905,
                  "alt": "Design critique board with fare-conditions variants",
                  "size": "full"
                }
              ]
            },
            {
              "title": "4 · Recommending a fare",
              "text": "Two scenarios. Scenario 1: the cheapest fare, or the one that already includes bags. Scenario 2: a higher fare that includes seating. For each, a recommendation at the moment of choice (“Light fare is recommended for your trip”), shown with the same table people had just seen, so the upgrade reads as information, not a trick. Five variants of where and how it appears.",
              "images": [
                {
                  "src": "assets/img/work/ds-scenarios.jpg",
                  "w": 1860,
                  "h": 948,
                  "alt": "Recommended-fare modal in two scenarios: Light and Standard",
                  "size": "full"
                },
                {
                  "src": "assets/img/work/ds-variants.jpg",
                  "w": 1848,
                  "h": 1036,
                  "alt": "Variants of the fare selection and recommendation states",
                  "size": "full"
                }
              ]
            },
            {
              "title": "5 · What we took forward",
              "list": [
                "Baggage allowance and seat-map states come from the fare attributes, so the UI never promises what the ticket doesn’t include",
                "A short summary of conditions in the flow, the full airline text one tap away",
                "Recommendations tied to what the traveller already picked, not a blanket upsell",
                "Post-booking: “search for a new trip” kept as the main path where data showed high conversion back to search"
              ],
              "images": [
                {
                  "src": "assets/img/work/ds-critique-flows.jpg",
                  "w": 1860,
                  "h": 595,
                  "alt": "Flows reviewed in design critique",
                  "size": "full"
                }
              ]
            }
          ],
          "highlight": true,
          "teaser": "How I think: one feature, from the ticket and benchmark to design critique and the call we made."
        },
        {
          "id": "protection",
          "title": "Insurance & protection",
          "kicker": "AXA, Kiwi.com Guarantee, AirHelp",
          "text": "Hypothesis: better merchandising of AXA insurance improves product communication and attachment rates. Unbundled products, per-passenger selection, a clear “no insurance” option and policy details people can actually read. I led this stream and co-designed it with the team, together with Kiwi.com Guarantee and AirHelp placements.",
          "images": [
            {
              "src": "assets/img/work/kiwi-insurance.jpg",
              "w": 2000,
              "h": 888,
              "alt": "AXA travel insurance on mobile",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-protection.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Kiwi.com Guarantee, AirHelp and insurance in Manage My Booking",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-insurance-desktop.jpg",
              "w": 1260,
              "h": 1394,
              "alt": "Insurance step on desktop",
              "size": "full"
            }
          ]
        },
        {
          "id": "post-booking",
          "title": "Post-booking & email",
          "kicker": "Components, confirmations, boarding documents",
          "text": "The quiet half of ancillaries: Manage My Booking, transactional emails, e-tickets and boarding documents. Audited and redesigned as one component set used across web, apps and email.",
          "images": [
            {
              "src": "assets/img/work/kiwi-components.jpg",
              "w": 1800,
              "h": 1579,
              "alt": "Ancillary component set: baggage, seating, lounges, accommodation, car rental",
              "size": "half"
            },
            {
              "src": "assets/img/work/kiwi-emails.jpg",
              "w": 1800,
              "h": 1771,
              "alt": "Booking confirmation email templates",
              "size": "half"
            },
            {
              "src": "assets/img/work/kiwi-boarding.jpg",
              "w": 1800,
              "h": 1138,
              "alt": "Boarding documents email templates",
              "size": "full"
            }
          ]
        }
      ],
      "x": 66,
      "y": 16
    },
    {
      "id": "keboola",
      "title": "Keboola",
      "subtitle": "Product Design Lead · 2020–2022",
      "type": "Product Design > Data platform, B2B + B2C, web, brand",
      "client": "Keboola",
      "cover": "assets/img/work/cover-keboola.jpg",
      "hero": "assets/img/work/kbc-hero.jpg",
      "reel": "assets/video/keboola-showreel.mp4",
      "poster": "assets/img/work/kbc-reel-poster.jpg",
      "heroAlt": "Keboola UI 2.0: dashboard and jobs overview",
      "facts": [
        [
          "0 → 1",
          "research program and data tracking"
        ],
        [
          "UI 2.0",
          "dashboard, project overview, data catalog"
        ],
        [
          "30+",
          "website pages designed"
        ],
        [
          "50+",
          "illustrations and campaign visuals"
        ]
      ],
      "problem": "Keboola is a data platform built by and for data engineers. Then it launched pay-as-you-go for people who are not data engineers. No research, no tracking, no design process. And a UI where Storage, Transformations and Workspaces each behaved differently.",
      "text": "I joined as the brand and web designer and became the product design lead. I built the process first, then the product. And kept the brand and the website, because nobody else was going to.",
      "role": [
        "Built data-driven product development from scratch",
        "Set up the user research program",
        "Worked directly on the design systems for both the product and the website",
        "Championed UX against technical constraints",
        "Owned the website (Webflow), illustration system and launch campaigns"
      ],
      "chapters": [
        {"id": "testing", "title": "Testing and funnels", "kicker": "Before development, and after release", "highlight": true, "teaser": "How I test: interviews on prototypes before development, then post-release interviews and funnel reviews.", "text": "I led research interviews on prototypes. We tested features before development and tuned them before handoff to engineering. After release, I led follow-up interviews, collected the data and went through user funnels to see where people dropped off."},
        {"id": "flows", "title": "Flow Builder", "kicker": "Data pipelines, block by block", "text": "Flow Builder let non-technical stakeholders build a data pipeline themselves: drag and drop and a visual system, instead of SQL and a Windows 95 look. Tasks grouped into phases, new configurations created in place, and a jobs view for what actually ran.", "images": [{"src": "assets/img/work/kbc-flow-builder.jpg", "w": 1436, "h": 1550, "alt": "Keboola Flow Builder with a pipeline of grouped tasks", "size": "half"}, {"src": "assets/img/work/kbc-flow-config.jpg", "w": 1436, "h": 1150, "alt": "Creating a new configuration inside a flow", "size": "half"}, {"src": "assets/img/work/kbc-jobs.jpg", "w": 1436, "h": 1240, "alt": "Jobs overview with status per component", "size": "half"}, {"src": "assets/img/work/kbc-dashboard.jpg", "w": 1436, "h": 1795, "alt": "Project dashboard overview", "size": "half"}]},
        {
          "id": "ui",
          "title": "Product UI 2.0",
          "kicker": "Dashboard, jobs, transformations, workspaces",
          "text": "One pattern for columns, search and the three-dot menu across Storage, Transformations and Workspaces. Real use cases mapped (workspace from storage, transformation from workspace, and back) with warnings where users could lose work. Pay-as-you-go onboarding: a dashboard with 8 states that adapts to what the user has already done.",
          "images": [
            {
              "src": "assets/img/work/kbc-ux-17.jpg",
              "w": 1436,
              "h": 1276,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-12.jpg",
              "w": 1400,
              "h": 1244,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-0.jpg",
              "w": 1400,
              "h": 944,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-4.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-6.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-8.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-9.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-18.jpg",
              "w": 1400,
              "h": 1244,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-23.jpg",
              "w": 1400,
              "h": 1299,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-25.jpg",
              "w": 1400,
              "h": 1394,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-32.jpg",
              "w": 1400,
              "h": 957,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-33.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            }
          ]
        },
        {
          "id": "storage",
          "title": "Storage & data catalog",
          "kicker": "Earlier product work",
          "text": "Bucket and table overviews, events, data samples, schema, lineage graph, project picker. Dev/prod branches, project diff and merge requests for the engineers who live in the tool.",
          "images": [
            {
              "src": "assets/img/work/kbc-old-1.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-2.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-3.jpg",
              "w": 1400,
              "h": 1108,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-4.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-9.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-12.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            }
          ]
        },
        {
          "id": "web",
          "title": "Website",
          "kicker": "31 pages, built in Webflow",
          "text": "Homepage, product, solutions, pricing, comparison, academy, webinars, blog, careers and landing pages for every campaign. Click any page to see it in full.",
          "images": [
            {
              "src": "assets/img/work/kbc-web-0.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-0-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-6.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-6-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-9.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-9-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-15.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-15-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-17.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-17-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-19.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-19-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-24.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-24-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-32.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-32-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-33.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-33-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-34.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-34-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-35.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-35-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-37.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-37-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-38.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-38-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-42.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-42-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-43.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-43-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-44.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-44-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-45.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-45-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-46.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-46-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-47.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-47-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-49.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-49-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-50.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-50-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-54.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-54-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-56.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-56-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-57.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-57-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-63.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-63-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-66.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-66-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-67.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-67-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-70.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-70-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-71.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-71-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-72.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-72-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-73.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-73-full.jpg"
            }
          ]
        },
        {
          "id": "brand",
          "title": "Campaign & illustration",
          "kicker": "Pay-as-you-go launch",
          "text": "An illustration system and the campaign that launched pay-as-you-go: ads, social, guides.",
          "images": [
            {
              "src": "assets/img/work/kbc-campaign.jpg",
              "w": 2000,
              "h": 1237,
              "alt": "Keboola campaign visuals",
              "size": "full"
            },
            {
              "src": "assets/img/work/kbc-illustration-pack.jpg",
              "w": 2000,
              "h": 2036,
              "alt": "Keboola illustration pack",
              "size": "full"
            }
          ]
        }
      ],
      "x": 80,
      "y": 30
    },
    {"more": true, "id": "extit", "title": "EXTIT", "subtitle": "Website redesign + pricing calculator · 2026", "type": "Web design > B2B services, IT outsourcing", "client": "EXTIT by YOURWiFi", "cover": "assets/img/work/cover-extit.jpg", "hero": "assets/img/work/extit-hero.jpg", "heroAlt": "EXTIT homepage hero", "link": "https://extit.cz/", "facts": [["3", "service packages, from Basic to Premium"], ["1", "pricing calculator, driven by the client’s device count"]], "problem": "EXTIT sells outsourced IT to companies that would rather not think about IT. The site has to make a dull, invisible service feel like relief, and get a price conversation started without a sales call.", "text": "A full redesign of extit.cz: the message, the page structure and the visual system, plus a pricing calculator that estimates a monthly price from the number of computers, servers and other devices.", "chapters": [{"id": "site", "title": "The website", "kicker": "From “typical problems” to “start not dealing with it”", "text": "Problems first, then what changes, then the honest comparison with an in-house IT person, including the coffee machine.", "images": [{"src": "assets/img/work/extit-problems.jpg", "w": 1463, "h": 812, "alt": "What EXTIT solves, with client logos", "size": "half"}, {"src": "assets/img/work/extit-compare.jpg", "w": 1463, "h": 812, "alt": "In-house IT compared with EXTIT", "size": "half"}, {"src": "assets/img/work/extit-pricing.jpg", "w": 1463, "h": 812, "alt": "Service packages and the calculator entry point", "size": "full"}]}]},
    {"more": true, "id": "clash", "title": "Clash of Candles", "subtitle": "Web identity · 2026", "type": "Brand & web > Web identity", "client": "Clash of Candles", "cover": "assets/img/work/cover-clash.jpg", "hero": "assets/img/work/clash-hero.jpg", "heroAlt": "Clash of Candles homepage hero", "link": "https://www.clashofcandles.cz/en/", "text": "We’re building a skill-based game. The game itself stays under wraps for now, so here’s the part that’s already public: the web identity, from the fighting candles to the pre-launch site.", "chapters": [{"id": "web", "title": "Web identity", "kicker": "Pre-launch site", "images": [{"src": "assets/img/work/clash-cta.jpg", "w": 1440, "h": 733, "alt": "Clash of Candles early-access section", "size": "full"}, {"src": "assets/img/work/clash-mobile.jpg", "w": 1710, "h": 904, "alt": "Clash of Candles on mobile", "size": "full"}]}]},
    {"id": "fameplay", "more": true, "title": "Fameplay", "subtitle": "Metal liquid visual + website", "type": "Visual design & web", "client": "Fameplay", "cover": "assets/img/work/cover-fameplay.jpg", "hero": "assets/img/work/x-fameplay-chrome-logo.jpg", "heroAlt": "Fameplay logo in liquid metal", "text": "The metal liquid visual and the website for an AI studio. The website is no longer live, so the visual is what’s left to show.", "chapters": [{"id": "visual", "title": "Metal liquid", "kicker": "Key visual", "images": [{"src": "assets/img/work/x-fameplay-chrome-logo2.jpg", "w": 1600, "h": 826, "alt": "Fameplay wordmark in liquid metal", "size": "full"}, {"src": "assets/img/work/x-fameplay-humanoid.jpg", "w": 1525, "h": 1450, "alt": "Liquid metal humanoid", "size": "half"}]}]},
    {
  "id": "pflb",
  "title": "PFLB",
  "subtitle": "Senior Product Designer · Load-testing platform and UI kit · 2024–2025",
  "type": "Product design > B2B SaaS, developer tool",
  "client": "PFLB (boomq)",
  "production": "Contract, remote",
  "cover": "assets/img/work/cover-pflb.jpg",
  "hero": "assets/img/work/pflbp-wel-1.jpg",
  "heroAlt": "PFLB platform welcome screen with three ways to start a load test",
  "link": "https://pflb.us/",
  "facts": [
    [
      "3",
      "ways to start a test: from scratch, from imported requests, or from JMeter"
    ],
    [
      "14",
      "months on contract, working mainly on the product"
    ]
  ],
  "problem": "PFLB is a cloud platform for checking how a website or app handles load before go-live. A test can start from a low-code editor, imported requests or an existing JMeter script, and then needs a load profile, SLAs, a run and a report someone can read.",
  "text": "My co-lead from Kiwi.com was working on the project and brought me into the team. I worked mainly on the platform and the UI kit, and built prototypes. The website was a small part of the job.",
  "role": [
    "Product design across the platform, with screens that went into production",
    "Work on the PFLB UI kit and visual experiments",
    "Prototypes of new flows and iterations",
    "A smaller part of the work on the PFLB website"
  ],
  "chapters": [
    {
      "id": "test",
      "title": "Creating a test",
      "kicker": "Explorations and iterations",
      "text": "Load profile, use cases and allocation groups, with a live chart of the load shape next to its settings.",
      "images": [
        {
          "src": "assets/img/work/pflbp-test.jpg",
          "w": 900,
          "h": 704,
          "alt": "Test editor with load profile settings and chart",
          "size": "half"
        },
        {
          "src": "assets/img/work/pflbp-case.jpg",
          "w": 900,
          "h": 512,
          "alt": "Use case builder with transactions and requests",
          "size": "half"
        },
        {
          "src": "assets/img/work/pflbp-alloc.jpg",
          "w": 900,
          "h": 496,
          "alt": "Allocation groups and use cases in a test",
          "size": "full"
        }
      ]
    },
    {
      "id": "jmeter",
      "title": "Bringing your own JMeter tests",
      "kicker": "Explorations and iterations",
      "text": "For teams that already have scripts: upload a JMX file with its supporting files, then see the test as settings and containers.",
      "images": [
        {
          "src": "assets/img/work/pflbp-jmx.jpg",
          "w": 900,
          "h": 589,
          "alt": "Upload JMX files dialog",
          "size": "half"
        },
        {
          "src": "assets/img/work/pflbp-jmxov.jpg",
          "w": 900,
          "h": 576,
          "alt": "Overview of an imported JMeter test",
          "size": "half"
        }
      ]
    },
    {
      "id": "sla",
      "title": "SLAs",
      "kicker": "Explorations and iterations",
      "text": "SLAs across a test, its transactions and requests, with time ranges and a status for each one.",
      "images": [
        {
          "src": "assets/img/work/pflbp-sla.jpg",
          "w": 832,
          "h": 440,
          "alt": "Test run SLAs list with statuses",
          "size": "half"
        },
        {
          "src": "assets/img/work/pflbp-slaed.jpg",
          "w": 900,
          "h": 760,
          "alt": "SLA editor with custom time ranges",
          "size": "half"
        }
      ]
    },
    {
      "id": "anomalies",
      "title": "Anomaly detection",
      "kicker": "In production",
      "text": "Anomalies marked on the response time chart, with a detection switch and a sensitivity setting per test, and notification settings in the account.",
      "images": [
        {
          "src": "assets/img/work/pflbp-an2.jpg",
          "w": 1000,
          "h": 565,
          "alt": "Test run charts with anomalies marked on response time",
          "size": "full"
        },
        {
          "src": "assets/img/work/pflbp-an1.jpg",
          "w": 1000,
          "h": 565,
          "alt": "Anomaly detection switch and sensitivity",
          "size": "half"
        },
        {
          "src": "assets/img/work/pflbp-an3.jpg",
          "w": 1000,
          "h": 750,
          "alt": "Anomaly notification settings in the account",
          "size": "half"
        }
      ]
    },
    {
      "id": "orders",
      "title": "Ordering expert work",
      "kicker": "Prototype",
      "text": "A dashboard with credits, trend reports and assets, and a flow for ordering test maintenance or execution from PFLB’s engineers.",
      "images": [
        {
          "src": "assets/img/work/pflbp-ord1.jpg",
          "w": 900,
          "h": 1039,
          "alt": "Dashboard with credits, trend reports and assets",
          "size": "half"
        },
        {
          "src": "assets/img/work/pflbp-ord2.jpg",
          "w": 896,
          "h": 1039,
          "alt": "Place your order panel",
          "size": "half"
        },
        {
          "src": "assets/img/work/pflbp-ord3.jpg",
          "w": 900,
          "h": 512,
          "alt": "New order with credits subtotal",
          "size": "full"
        }
      ]
    },
    {
      "id": "kit",
      "title": "UI kit and visual experiments",
      "kicker": "Explorations",
      "text": "Experiments with navigation, test containers and workload charts, alongside the UI kit.",
      "images": [
        {
          "src": "assets/img/work/pflbp-exp1.jpg",
          "w": 1440,
          "h": 1050,
          "alt": "Visual experiment: test containers and workload chart by thread group",
          "size": "half"
        },
        {
          "src": "assets/img/work/pflbp-exp2.jpg",
          "w": 1440,
          "h": 1050,
          "alt": "Visual experiment: merged workload chart",
          "size": "half"
        }
      ]
    },
    {
  "id": "web",
  "title": "Website",
  "kicker": "A smaller part of the job",
  "text": "Marketing pages for the platform, in a dark and a light direction: hero, key features, how the platform works and pricing.",
  "images": [
    {
      "src": "assets/img/work/pflbw-d-hero.jpg",
      "w": 1400,
      "h": 1170,
      "alt": "PFLB website, dark direction: hero",
      "size": "half"
    },
    {
      "src": "assets/img/work/pflbw-l-hero.jpg",
      "w": 1400,
      "h": 583,
      "alt": "PFLB website, light direction: hero",
      "size": "half"
    },
    {
      "src": "assets/img/work/pflbw-d-feat.jpg",
      "w": 1400,
      "h": 1468,
      "alt": "PFLB website, dark direction: key features",
      "size": "half"
    },
    {
      "src": "assets/img/work/pflbw-l-how.jpg",
      "w": 1400,
      "h": 1127,
      "alt": "PFLB website, light direction: how to use the platform",
      "size": "half"
    },
    {
      "src": "assets/img/work/pflbw-d-how.jpg",
      "w": 1400,
      "h": 1170,
      "alt": "PFLB website, dark direction: how to use the platform",
      "size": "half"
    },
    {
      "src": "assets/img/work/pflbw-l-price.jpg",
      "w": 1400,
      "h": 1026,
      "alt": "PFLB website, light direction: pricing",
      "size": "half"
    }
  ]
}
  ]
},
    {
      "id": "extras", "draft": true,
      "title": "More visual work",
      "subtitle": "Brand, identity, campaigns",
      "type": "Brand & visual design",
      "client": "Various",
      "cover": "assets/img/work/cover-extras.jpg",
      "hero": "assets/img/work/x-kurnik-3.jpg",
      "heroAlt": "Kurník Šopa identity",
      "text": "The other half of the brain. Identities, campaign systems and posters, mostly for small teams that needed a whole brand, not just a logo.",
      "chapters": [
        {
          "id": "kurnik",
          "title": "Kurník Šopa",
          "kicker": "Café identity",
          "text": "A hand-drawn identity for a small café: the hen, the type, the menu, the merch.",
          "images": [
            {
              "src": "assets/img/work/x-kurnik-0.jpg",
              "w": 1600,
              "h": 1602,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-3.jpg",
              "w": 1600,
              "h": 900,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-4.jpg",
              "w": 1600,
              "h": 900,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-7.jpg",
              "w": 1600,
              "h": 1600,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-18.jpg",
              "w": 1600,
              "h": 2000,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-21.jpg",
              "w": 1600,
              "h": 1680,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-24.jpg",
              "w": 1600,
              "h": 1680,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-34.jpg",
              "w": 1600,
              "h": 1035,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-40.jpg",
              "w": 1600,
              "h": 2845,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-41.jpg",
              "w": 1600,
              "h": 2845,
              "alt": "Kurník Šopa identity",
              "size": "third"
            }
          ]
        },
        {
          "id": "peaq",
          "title": "Beyond PEAQ",
          "kicker": "Outdoor brand concept",
          "text": "Social and campaign visuals for an outdoor lifestyle brand.",
          "images": [
            {
              "src": "assets/img/work/x-peaq-20.jpg",
              "w": 1600,
              "h": 2134,
              "alt": "Beyond PEAQ visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-peaq-22.jpg",
              "w": 1600,
              "h": 2134,
              "alt": "Beyond PEAQ visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-peaq-26.jpg",
              "w": 1600,
              "h": 2134,
              "alt": "Beyond PEAQ visual",
              "size": "third"
            }
          ]
        }
      ],
      "x": 84,
      "y": 62
    }
  ],

  // old deep links → new case + chapter
  redirects: { 'kiwi-ancillaries': 'kiwi', 'kiwi-fare-families': 'kiwi/fare-families', 'kiwi-bundles': 'kiwi/bundles' },

  /* ---------------- ABOUT ---------------- */
  about: {
    intro: [
      'I design digital products, apps and websites. I also direct AI campaigns. Same job, different render time: make it work, then make it look like nobody struggled.',
      'I was raised in a business environment and later ran my own company, so product development, agile, client calls and leading teams aren’t things I read about. They’re things I’ve survived.',
      'In the field since 2016. Still curious. Slightly less patient.',
    ],
    canDo: [
      'Product design (UX, UI)',
      'Monetization & complex flows',
      'Design team leadership',
      'User research',
      'Design systems',
      'Prototyping',
      'Web design & development',
      'Brand design',
      'AI cinematic production',
      'Creative direction',
    ],
    cv: [
      { when: 'Mar 2026 – now', what: 'Creative Director / Founder', where: 'NO ROLL studio', text: 'Websites, digital products and AI-driven campaigns.' },
      { when: 'Oct 2024 – Mar 2026', what: 'Creative Art Director', where: 'Fameplay, Prague', text: 'AI cinematic videos combining storytelling, art direction and advanced AI workflows, with the team behind #marty_is_dead, the first Emmy Award in Czech history.' },
      { when: 'Jul – Aug 2024', what: 'Career break: teaching first aid & mountaineering', where: 'Nepal' },
      { when: 'May 2024 – Jun 2025', what: 'Senior Product Designer', where: 'PFLB, contract, remote', text: 'Product design for boomq, the load-testing platform, as my main focus. Also a smaller part of the work on the PFLB website.', link: 'pflb' },
      { when: 'Jun 2022 – May 2024', what: 'Product Design Team Lead, Ancillaries', where: 'Kiwi.com, remote', text: 'Co-led the domain with product and engineering leads. Led a team of 3 direct and 2 indirect reports, owned initiatives tied to OKRs and company strategy, and hired new designers.', link: 'kiwi' },
      { when: 'Mar 2021 – Oct 2022', what: 'Product Design Lead', where: 'Keboola', text: 'Built data-driven product development where there was no research, tracking or data collection. Launched pay-as-you-go onboarding for B2C users, while keeping the product easy to use for data engineers.', link: 'keboola' },
      { when: 'Feb 2020 – Apr 2021', what: 'Product Designer', where: 'Keboola, freelance', text: 'Product design of the SaaS product under an art director. Website design and development in Webflow.' },
      { when: 'Feb 2019 – Mar 2020', what: 'Senior Product Designer', where: 'SinnerSchrader, Frankfurt / Prague', text: 'Global design system for a pharmacy company with markets in Europe, South America and Asia, working directly with the client and with design teams across time zones.' },
      { when: 'Feb 2018 – Jan 2019', what: 'Product Design', where: 'CloseIT, Brno', text: 'Web design and development lead. Product development of a Credit Risk Management System, a digital product for the banking sector.' },
      { when: 'Oct 2016 – Dec 2018', what: 'Co-Founder', where: 'Naash.co, France', text: 'Launched an app and website matching flatmates and landlords. Business strategy, fundraising and expansion.' },
    ],
    references: [
      {
        text: 'Veronika joined our ancillary design team during a critical phase when the product team was under massive pressure to change its modus operandi, scale our ancillary offering, and achieve ambitious targets. Despite the challenges, she demonstrated remarkable resilience, effectively guiding a team of three product designers, a content designer, and a UX researcher… Her facilitation skills enabled her to collaborate with product managers and engage directly with C-level executives in frequent working sessions. Veronika also demonstrated hands-on product design skills with an emphasis on visual design.',
        who: 'Vladimir Končar',
        role: 'VP of Design and Research, Kiwi.com',
        letter: 'assets/docs/reference-vladimir-koncar.pdf',
      },
      {
        text: 'I want to highlight Veronika’s consistent display of a combination of users’ empathy and contribution to the business goals. Throughout her time in our domain, she skillfully managed to take over an existing team of product designers and participated in domain leadership with the product and engineering counterparts.',
        who: 'Michal Šindelář',
        role: 'VP of Product, Kiwi.com',
        letter: 'assets/docs/reference-michal-sindelar.pdf',
      },
    ],
    path: 'After two years leading a revenue-critical domain at Kiwi.com, I designed the PFLB load-testing platform and art-directed campaigns for cinema and TV. A different medium kept my craft sharp and changed how fast I work. Now I’m focusing on product again, full-time. AI in audiovisual stays as the hobby I speak about.',
    talks: [
      { what: 'Speaker, Hack Your Way 2026, Brno: when AI video is an ace up your sleeve, and when you pay extra for the illusion of savings', url: 'https://www.hackyourway.cz/program/veronika-dominikova' },
    ],
    fameplay: 'I joined the team awarded the first Emmy Award in Czech history for the original series #marty_is_dead. I produce and create AI cinematic videos combining storytelling, art direction and advanced AI workflows, focused on visuals that elevate products, services and ideas beyond standard AI content.',
    tools: [
      'Figma', 'Webflow', 'GitHub', 'Claude MCP', 'Photoshop',
      'ComfyUI', 'Weavy', 'Magnific', 'Higgsfield', 'Midjourney', 'LoRA', 'Topaz',
      'DaVinci Resolve', 'ElevenLabs',
    ],
  },
};
