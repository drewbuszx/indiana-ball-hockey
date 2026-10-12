export const sponsorshipEmail = "nate@indianaballhockey.com";

export const sponsorshipDeadline = "January 9, 2027";

export const sponsorshipPayment = {
  zelle: "indianaballhockey@gmail.com",
  checkPayableTo: "Indiana Ball Hockey Association",
} as const;

/** FormSubmit endpoint (static-site friendly). First live submit activates the inbox. */
export const formSubmitEndpoint = `https://formsubmit.co/ajax/${sponsorshipEmail}`;

export const sponsorshipLevels = [
  {
    id: "platinum",
    name: "Hall of Famer",
    tier: "Platinum",
    amount: "$1,000+",
    amountValue: "1000+",
    benefits: [
      "Logo prominently displayed on league jerseys",
      "Custom jersey featuring your business logo",
      "Recognition as a Platinum Sponsor on IBHA social media and at league events",
    ],
  },
  {
    id: "gold",
    name: "All-Star",
    tier: "Gold",
    amount: "$500",
    amountValue: "500",
    benefits: [
      "Logo placement on league jerseys",
      "Custom jersey featuring your business logo",
      "Recognition as a Gold Sponsor on IBHA social media and at league events",
    ],
  },
  {
    id: "silver",
    name: "Rookie",
    tier: "Silver",
    amount: "$250",
    amountValue: "250",
    benefits: [
      "Logo placement on jerseys",
      "Recognition as a Silver Sponsor on IBHA social media and at league events",
    ],
  },
] as const;

export type SponsorshipLevelId = (typeof sponsorshipLevels)[number]["id"];
