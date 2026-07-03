// Swimming holes near Amherst, MA
// Coordinates verified against OpenStreetMap (Nominatim), July 2026.
// Sources: Valley Advocate "Jump In" guide, UMass Commonwealth Honors College
// swimming guide, newenglandswimmingholes.com. Drive times are approximate
// from Amherst town center.
const SPOTS = [
  {
    name: "Puffer's Pond",
    town: "North Amherst",
    type: "pond",
    lat: 42.4168, lon: -72.5174,
    driveMin: 7,
    fee: "Free (parking permit rules in summer — check town site)",
    blurb: "The Amherst classic and the only open swimming water in town. Sandy beach at the south end, a waterfall and stone-wall jumps on the Mill River side. Gets busy on hot weekends; no lifeguards.",
    warning: null
  },
  {
    name: "Buffam Falls",
    town: "Pelham",
    type: "waterfall",
    lat: 42.3824, lon: -72.4552,
    driveMin: 12,
    fee: "Free",
    blurb: "Small cascades and wading pools in a quiet conservation area minutes from town. More of a cool-off-and-splash spot than a swim — great with kids. Roadside parking on North Valley Rd.",
    warning: null
  },
  {
    name: "Lake Arcadia",
    town: "Belchertown",
    type: "lake",
    lat: 42.3132, lon: -72.4277,
    driveMin: 17,
    fee: "$8 non-residents (cash only)",
    blurb: "Town beach with grills, picnic tables, restrooms, changing stalls, outdoor showers, and pedal-boat rentals. An easy family outing.",
    warning: null
  },
  {
    name: "Lake Wyola State Park",
    town: "Shutesbury",
    type: "lake",
    lat: 42.5059, lon: -72.4375,
    driveMin: 22,
    fee: "DCR day-use parking fee",
    blurb: "Clear, quiet water with a sandy beach, a designated lap-swimming lane, lifeguards in season, and daily water-quality checks. One of the most reliable proper-swim options near Amherst.",
    warning: null
  },
  {
    name: "Mill River rope swing (Smith College)",
    town: "Northampton",
    type: "river",
    lat: 42.3179, lon: -72.6420,
    driveMin: 25,
    fee: "Free",
    blurb: "The famous rope swing on the Mill River behind Smith College, reached by a dirt path. Tree roots to lounge on.",
    warning: "The pool gets small and shallow in dry spells — check depth before swinging."
  },
  {
    name: "Musante Beach",
    town: "Leeds (Northampton)",
    type: "lake",
    lat: 42.3533, lon: -72.7080,
    driveMin: 27,
    fee: "$7 entry",
    blurb: "Sandy beach on the Northampton reservoir, five minutes from downtown Noho. Lifeguards on duty and weekly water testing — check the city site for current status before going.",
    warning: null
  },
  {
    name: "Green River Swimming & Recreation Area",
    town: "Greenfield",
    type: "river",
    lat: 42.6053, lon: -72.6185,
    driveMin: 30,
    fee: "Small fee for non-residents",
    blurb: "A dammed stretch of the Green River with a sandy beach, lifeguards, playground, courts, and concessions. Cold, clean river water with town-beach amenities.",
    warning: null
  },
  {
    name: "Chapel Brook Falls",
    town: "Ashfield",
    type: "waterfall",
    lat: 42.4799, lon: -72.7678,
    driveMin: 35,
    fee: "Free (Trustees of Reservations)",
    blurb: "Waterfall over three bedrock ledges at the foot of Pony Mountain — locals say the water is 'clean enough to drink.' Pair it with the 15-minute hike to the summit ledges.",
    warning: "Flow gets powerful after rain; use caution on the ledges."
  },
  {
    name: "DAR State Forest (Upper Highland Lake)",
    town: "Goshen",
    type: "lake",
    lat: 42.4610, lon: -72.7983,
    driveMin: 35,
    fee: "DCR day-use parking fee",
    blurb: "Sandy beach on Upper Highland Lake in the Hilltowns, with camping, paddling, and hiking trails. A good full-day trip.",
    warning: null
  },
  {
    name: "The Bend",
    town: "West Chesterfield",
    type: "river",
    lat: 42.4029, lon: -72.8759,
    driveMin: 38,
    fee: "Free",
    blurb: "A local-favorite swimming hole on the Westfield River — deep bend in the river with rocks to sun on. Low-key and worth the hilltown drive.",
    warning: null
  },
  {
    name: "Chicopee Memorial State Park",
    town: "Chicopee",
    type: "pond",
    lat: 42.1741, lon: -72.5430,
    driveMin: 35,
    fee: "DCR day-use parking fee",
    blurb: "25-acre Cooley Brook Reservoir with a buoyed swim area, sandy beach, restrooms, and picnic areas. Very family-friendly.",
    warning: null
  },
  {
    name: "Whirley Baths",
    town: "Charlemont",
    type: "river",
    lat: 42.6293, lon: -72.8850,
    driveMin: 45,
    fee: "Free (Route 2 pull-offs)",
    blurb: "Swirling, jacuzzi-like potholes carved into the Deerfield River bedrock just west of Charlemont. Also a popular tubing stretch.",
    warning: "Water level changes with upstream dam releases — keep an eye on the flow. Location is approximate; look for the Rt 2 pull-offs."
  },
  {
    name: "Hampton Ponds State Park",
    town: "Westfield",
    type: "lake",
    lat: 42.1796, lon: -72.6900,
    driveMin: 40,
    fee: "DCR day-use parking fee",
    blurb: "Lake swimming with a beach and picnic area in a small state park.",
    warning: null
  },
  {
    name: "Robinson State Park",
    town: "Feeding Hills (Agawam)",
    type: "pond",
    lat: 42.0933, lon: -72.6511,
    driveMin: 45,
    fee: "DCR day-use parking fee",
    blurb: "Robinson Pond, reached by a pleasant 20-minute hike through the park (closer parking exists too). Quieter than the big beaches.",
    warning: null
  },
  {
    name: "Glendale Falls",
    town: "Middlefield",
    type: "waterfall",
    lat: 42.3457, lon: -72.9647,
    driveMin: 55,
    fee: "Free (Trustees of Reservations)",
    blurb: "One of the longest cascades in Massachusetts, with pools among the rocks. Remote and beautiful — a proper hilltown adventure.",
    warning: "Wet rock is slick; watch footing near the drops."
  },
  {
    name: "Wahconah Falls State Park",
    town: "Dalton",
    type: "waterfall",
    lat: 42.4876, lon: -73.1145,
    driveMin: 60,
    fee: "Free",
    blurb: "A short walk to a 40-foot falls with a wading pool at the base. Good Berkshires add-on if you're headed west.",
    warning: null
  },
  {
    name: "Otis Reservoir (Tolland State Forest)",
    town: "Otis",
    type: "lake",
    lat: 42.1505, lon: -73.0487,
    driveMin: 70,
    fee: "DCR day-use parking fee",
    blurb: "A 1,200-acre reservoir in the Berkshires — the biggest swimmable water on this map. Beach and camping at Tolland State Forest.",
    warning: null
  },
  {
    name: "Bash Bish Falls",
    town: "Mount Washington",
    type: "waterfall",
    lat: 42.1097, lon: -73.4913,
    driveMin: 90,
    fee: "Free",
    blurb: "The tallest single-drop waterfall in Massachusetts, in the far southwest corner of the state. Spectacular — but look, don't swim.",
    warning: "Swimming is prohibited at Bash Bish Falls. Included for the view only."
  }
];
