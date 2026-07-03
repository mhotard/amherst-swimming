// Swimming holes near Amherst, MA
// Coordinates verified against OpenStreetMap (Nominatim), July 2026, except
// where a spot's warning says the location is approximate.
// Each spot lists its references; see index.html footer for general citations.
// Drive times are approximate from Amherst town center.

const REFS = {
  reddit:   { label: "r/westernmass thread", url: "https://www.reddit.com/r/westernmass/comments/1uk0m6i/places_to_swim_in_western_mass/" },
  advocate: { label: "Valley Advocate", url: "https://valleyadvocate.com/2015/06/02/jump-in/" },
  umass:    { label: "UMass CHC guide", url: "https://www.umass.edu/honors/news/wma-swimming-spots" },
  nesh:     { label: "New England Swimming Holes", url: "https://www.newenglandswimmingholes.com/massachusetts" },
  newf:     { label: "New England Waterfalls", url: "https://www.newenglandwaterfalls.com/ma-buffamfalls.html" },
  isitclean:{ label: "isitclean.us water testing", url: "https://www.isitclean.us/" },
  dcrWyola:    { label: "DCR: Lake Wyola SP", url: "https://www.mass.gov/locations/lake-wyola-state-park" },
  dcrDar:      { label: "DCR: DAR State Forest", url: "https://www.mass.gov/locations/dar-state-forest" },
  dcrChicopee: { label: "DCR: Chicopee Memorial SP", url: "https://www.mass.gov/locations/chicopee-memorial-state-park" },
  dcrRobinson: { label: "DCR: Robinson SP", url: "https://www.mass.gov/locations/robinson-state-park" },
  dcrHampton:  { label: "DCR: Hampton Ponds SP", url: "https://www.mass.gov/locations/hampton-ponds-state-park" },
  dcrTolland:  { label: "DCR: Tolland State Forest", url: "https://www.mass.gov/locations/tolland-state-forest" },
  dcrWahconah: { label: "DCR: Wahconah Falls SP", url: "https://www.mass.gov/locations/wahconah-falls-state-park" },
  dcrBashBish: { label: "DCR: Bash Bish Falls SP", url: "https://www.mass.gov/locations/bash-bish-falls-state-park" },
  dcrMohawk:   { label: "DCR: Mohawk Trail SF", url: "https://www.mass.gov/locations/mohawk-trail-state-forest" },
  dcrErving:   { label: "DCR: Erving State Forest", url: "https://www.mass.gov/locations/erving-state-forest" },
  ttChapel:       { label: "Trustees: Chapel Brook", url: "https://thetrustees.org/place/chapel-brook/" },
  ttGlendale:     { label: "Trustees: Glendale Falls", url: "https://thetrustees.org/place/glendale-falls/" },
  ttChesterfield: { label: "Trustees: Chesterfield Gorge", url: "https://thetrustees.org/place/chesterfield-gorge/" },
  ttTully:        { label: "Trustees: Tully Lake Campground", url: "https://thetrustees.org/place/tully-lake-campground/" },
  ctEnders: { label: "CT DEEP: Enders State Forest", url: "https://portal.ct.gov/deep/state-parks/forests/enders-state-forest" }
};

const SPOTS = [
  {
    name: "Puffer's Pond",
    town: "North Amherst",
    type: "pond",
    lat: 42.4168, lon: -72.5174,
    driveMin: 7,
    fee: "Free (parking permit rules in summer — check town site)",
    blurb: "The Amherst classic and the only open swimming water in town. Sandy beach at the south end, a waterfall and stone-wall jumps on the Mill River side. Gets busy on hot weekends; no lifeguards. A Redditor's \"go-to spot for a chill dip.\"",
    warning: null,
    refs: ["advocate", "umass", "reddit"]
  },
  {
    name: "Bay Road spot (across from Hampshire College)",
    town: "Amherst",
    type: "pond",
    lat: 42.3220, lon: -72.5320,
    driveMin: 8,
    fee: "Free",
    blurb: "The word-of-mouth swimming spot off Bay Road across from Hampshire College — locals confirm it's still in use. Exact spot is word-of-mouth; marker shows the general area.",
    warning: "Cars parked on the tree line get towed regularly — park at Hampshire College or Atkins and walk. Location approximate.",
    refs: ["reddit"]
  },
  {
    name: "Connecticut River — UMass boat launch",
    town: "Hadley",
    type: "river",
    lat: 42.3570, lon: -72.6200,
    driveMin: 10,
    fee: "Free",
    blurb: "The big river itself. The stretch by the UMass boat launch near the Route 9 bridge tests clean nearly every week unless there's been major rain. Water is tested Thursdays with results posted Fridays at isitclean.us.",
    warning: "Skip it within 48 hours of rain, avoid the busy Oxbow boat launch (boat traffic and fishing trash), and wear water shoes — glass happens. Location approximate.",
    refs: ["reddit", "isitclean"]
  },
  {
    name: "Buffam Falls",
    town: "Pelham",
    type: "waterfall",
    lat: 42.3824, lon: -72.4552,
    driveMin: 12,
    fee: "Free",
    blurb: "Small cascades and wading pools in a quiet conservation area minutes from town. More of a cool-off-and-splash spot than a swim — great with kids. Roadside parking on North Valley Rd.",
    warning: null,
    refs: ["newf"]
  },
  {
    name: "Lake Arcadia",
    town: "Belchertown",
    type: "lake",
    lat: 42.3132, lon: -72.4277,
    driveMin: 17,
    fee: "$8 non-residents (cash only)",
    blurb: "Town beach with grills, picnic tables, restrooms, changing stalls, outdoor showers, and pedal-boat rentals. An easy family outing.",
    warning: null,
    refs: ["umass"]
  },
  {
    name: "Lake Wyola State Park",
    town: "Shutesbury",
    type: "lake",
    lat: 42.5059, lon: -72.4375,
    driveMin: 22,
    fee: "DCR day-use parking fee",
    blurb: "Clear, quiet water with a sandy beach, a designated lap-swimming lane, lifeguards in season, and daily water-quality checks. One of the most reliable proper-swim options near Amherst.",
    warning: "DCR has delayed beach openings during dam repairs — check the DCR page before you go.",
    refs: ["umass", "reddit", "dcrWyola"]
  },
  {
    name: "Swift River (Route 9 launch area)",
    town: "Belchertown / Ware",
    type: "river",
    lat: 42.2765, lon: -72.3315,
    driveMin: 25,
    fee: "Free",
    blurb: "Genuinely cold water year-round (it drains the bottom of Quabbin) and a renowned fly-fishing river — be cool with sharing the water with anglers and trout. A small beach lies a short paddle or walk downstream of the kayak launch, via East St.",
    warning: "Locals jump from the bridge by the boat ramp, but depth varies — check before you leap. Location approximate.",
    refs: ["reddit"]
  },
  {
    name: "Stillwater (Deerfield River)",
    town: "Deerfield",
    type: "river",
    lat: 42.5241, lon: -72.6305,
    driveMin: 25,
    fee: "Free",
    blurb: "Low-key river spot at the Stillwater Bridge area — a rope swing (upstream, where it's deeper) and some fun jumps. A bit silty, nothing fancy, and no kayak needed.",
    warning: "Jumping from the bridge itself hasn't been safe for years — too shallow, and police enforce it. Use the upstream rope-swing hole.",
    refs: ["reddit"]
  },
  {
    name: "Mill River rope swing (Smith College)",
    town: "Northampton",
    type: "river",
    lat: 42.3179, lon: -72.6420,
    driveMin: 25,
    fee: "Free",
    blurb: "The famous rope swing on the Mill River behind Smith College, reached by a dirt path. Tree roots to lounge on.",
    warning: "The pool gets small and shallow in dry spells — check depth before swinging.",
    refs: ["advocate"]
  },
  {
    name: "Musante Beach",
    town: "Leeds (Northampton)",
    type: "lake",
    lat: 42.3533, lon: -72.7080,
    driveMin: 27,
    fee: "$7 entry",
    blurb: "Sandy beach on the Northampton reservoir, five minutes from downtown Noho. Lifeguards on duty and weekly water testing — check the city site for current status before going.",
    warning: null,
    refs: ["advocate", "umass", "reddit"]
  },
  {
    name: "Green River Swimming & Recreation Area",
    town: "Greenfield",
    type: "river",
    lat: 42.6053, lon: -72.6185,
    driveMin: 30,
    fee: "Small fee for non-residents",
    blurb: "A dammed stretch of the Green River with a sandy beach, lifeguards, playground, courts, and concessions. Cold, clean river water with town-beach amenities.",
    warning: "Stick to this town-run area: the once-popular private-land swimming holes upstream on the Green have been closed by landowners after years of crowds and trash.",
    refs: ["advocate", "reddit"]
  },
  {
    name: "Laurel Lake (Erving State Forest)",
    town: "Erving",
    type: "lake",
    lat: 42.6220, lon: -72.3731,
    driveMin: 35,
    fee: "Free to swim & park (per locals, summer 2026)",
    blurb: "A repeat favorite in the Reddit thread — \"Laurel Lake is the best, that is my go-to.\" Beach, picnic area, and camping in Erving State Forest.",
    warning: null,
    refs: ["reddit", "dcrErving"]
  },
  {
    name: "Chapel Brook Falls",
    town: "Ashfield",
    type: "waterfall",
    lat: 42.4799, lon: -72.7678,
    driveMin: 35,
    fee: "Free (Trustees of Reservations)",
    blurb: "Waterfall over three bedrock ledges at the foot of Pony Mountain — locals say the water is 'clean enough to drink.' Pair it with the 15-minute hike to the summit ledges.",
    warning: "Flow gets powerful after rain; use caution on the ledges.",
    refs: ["advocate", "umass", "reddit", "ttChapel"]
  },
  {
    name: "DAR State Forest (Upper Highland Lake)",
    town: "Goshen",
    type: "lake",
    lat: 42.4610, lon: -72.7983,
    driveMin: 35,
    fee: "DCR day-use parking fee",
    blurb: "Sandy beach on Upper Highland Lake in the Hilltowns, with a lifeguarded swim area, camping, paddling, and hiking trails. A good full-day trip.",
    warning: null,
    refs: ["advocate", "reddit", "dcrDar"]
  },
  {
    name: "The Bend",
    town: "West Chesterfield",
    type: "river",
    lat: 42.4029, lon: -72.8759,
    driveMin: 38,
    fee: "Free",
    blurb: "A local-favorite swimming hole on the Westfield River — a deep bend with rocks to sun on. Redditors' advice: \"swim at the bend, not the actual gorge.\" No signs mark it, but directions are easy to find online.",
    warning: null,
    refs: ["advocate", "reddit"]
  },
  {
    name: "Chesterfield Gorge → downstream holes",
    town: "West Chesterfield",
    type: "river",
    lat: 42.3923, lon: -72.8708,
    driveMin: 40,
    fee: "Free (Trustees of Reservations)",
    blurb: "Don't swim in the roped-off gorge itself — but starting about a hundred yards below it, the East Branch of the Westfield River offers \"decent swimming holes for literally miles\" along the River Rd trail. A short walk down, a sandy shallow bend opens up.",
    warning: "Stay out of the gorge proper and away from the parking-lot/falls area; swim downstream where it opens up.",
    refs: ["reddit", "ttChesterfield"]
  },
  {
    name: "Ashfield Lake House beach",
    town: "Ashfield",
    type: "lake",
    lat: 42.5220, lon: -72.7890,
    driveMin: 40,
    fee: "~$5 beach access",
    blurb: "The Lake House bar & grill on Ashfield Lake has its own small beach and boat rentals — food, drinks, and live music included. Locals rave: \"awesome spot to spend a day.\" The adjacent town beach's rules have flip-flopped between residents-only and open-to-all, so the Lake House is the safe bet.",
    warning: "Location approximate — look for the Ashfield Lake House on Rt 116 at the lake.",
    refs: ["reddit"]
  },
  {
    name: "Chicopee Memorial State Park",
    town: "Chicopee",
    type: "pond",
    lat: 42.1741, lon: -72.5430,
    driveMin: 35,
    fee: "DCR day-use parking fee",
    blurb: "25-acre Cooley Brook Reservoir with a buoyed swim area, sandy beach, restrooms, and picnic areas. Very family-friendly.",
    warning: null,
    refs: ["advocate", "dcrChicopee"]
  },
  {
    name: "Hampton Ponds State Park",
    town: "Westfield",
    type: "lake",
    lat: 42.1796, lon: -72.6900,
    driveMin: 40,
    fee: "DCR day-use parking fee",
    blurb: "Lake swimming with a beach and picnic area in a small state park.",
    warning: null,
    refs: ["advocate", "dcrHampton"]
  },
  {
    name: "Whirley Baths & Zoar Gap tubing",
    town: "Charlemont",
    type: "river",
    lat: 42.6293, lon: -72.8850,
    driveMin: 45,
    fee: "Free (Route 2 pull-offs)",
    blurb: "Swirling, jacuzzi-like potholes carved into the Deerfield River bedrock just west of Charlemont. For a lazier day, grab an inner tube anywhere along River Rd and float the Zoar Gap stretch — the Zoar picnic area makes a good base. Park a second car downstream if you can.",
    warning: "Water level changes with upstream dam releases — keep an eye on the flow. Location approximate; look for the Rt 2 pull-offs.",
    refs: ["advocate", "reddit"]
  },
  {
    name: "Tully Lake",
    town: "Royalston",
    type: "lake",
    lat: 42.6451, lon: -72.2188,
    driveMin: 45,
    fee: "Free day use",
    blurb: "\"Lovely\" per the thread — a quiet Army Corps lake with a Trustees-run paddle-in campground, disc golf, and swimming coves. Doane's Falls is a short walk away (viewing only).",
    warning: null,
    refs: ["reddit", "ttTully"]
  },
  {
    name: "Robinson State Park",
    town: "Feeding Hills (Agawam)",
    type: "pond",
    lat: 42.0933, lon: -72.6511,
    driveMin: 45,
    fee: "DCR day-use parking fee",
    blurb: "Robinson Pond, reached by a pleasant 20-minute hike through the park (closer parking exists too). Quieter than the big beaches.",
    warning: null,
    refs: ["advocate", "dcrRobinson"]
  },
  {
    name: "Cold River (Mohawk Trail State Forest)",
    town: "Charlemont / Savoy",
    type: "river",
    lat: 42.6395, lon: -72.9500,
    driveMin: 50,
    fee: "Free (DCR camping available)",
    blurb: "Clear, cold pockets along Route 2 where it winds through the Mohawk Trail gorge — \"so many good spots\" per the thread, and the state forest campground is a beloved base camp.",
    warning: "Roadside access along a busy highway — park only in real pull-offs. Location approximate.",
    refs: ["reddit", "dcrMohawk"]
  },
  {
    name: "Glendale Falls",
    town: "Middlefield",
    type: "waterfall",
    lat: 42.3457, lon: -72.9647,
    driveMin: 55,
    fee: "Free (Trustees of Reservations)",
    blurb: "One of the longest cascades in Massachusetts, with pools among the rocks. Remote and beautiful — a proper hilltown adventure.",
    warning: "Wet rock is slick; watch footing near the drops.",
    refs: ["advocate", "nesh", "ttGlendale"]
  },
  {
    name: "Enders Falls (Enders State Forest)",
    town: "Granby, CT",
    type: "waterfall",
    lat: 41.9463, lon: -72.8786,
    driveMin: 55,
    fee: "Free",
    blurb: "A string of five waterfalls and pools in a hemlock ravine just over the Connecticut line — \"a really fun spot\" for swimming and hiking per the thread.",
    warning: "The climb back up is steep and hot; wear real shoes.",
    refs: ["reddit", "ctEnders"]
  },
  {
    name: "Wahconah Falls State Park",
    town: "Dalton",
    type: "waterfall",
    lat: 42.4876, lon: -73.1145,
    driveMin: 60,
    fee: "Free",
    blurb: "A short walk to a 40-foot falls with a wading pool at the base. Good Berkshires add-on if you're headed west.",
    warning: null,
    refs: ["nesh", "dcrWahconah"]
  },
  {
    name: "Otis Reservoir (Tolland State Forest)",
    town: "Otis",
    type: "lake",
    lat: 42.1505, lon: -73.0487,
    driveMin: 70,
    fee: "DCR day-use parking fee",
    blurb: "A 1,200-acre reservoir in the Berkshires — the biggest swimmable water on this map. Beach and camping at Tolland State Forest.",
    warning: null,
    refs: ["umass", "dcrTolland"]
  },
  {
    name: "Bash Bish Falls",
    town: "Mount Washington",
    type: "waterfall",
    lat: 42.1097, lon: -73.4913,
    driveMin: 90,
    fee: "Free",
    blurb: "The tallest single-drop waterfall in Massachusetts, in the far southwest corner of the state. Spectacular — but look, don't swim.",
    warning: "Swimming is prohibited at Bash Bish Falls. Included for the view only.",
    refs: ["nesh", "dcrBashBish"]
  }
];

// Spots that come up in local discussions but are closed, prohibited, or
// unsafe — kept here so they don't get re-added by accident:
//  - Becket Quarry: closed indefinitely after a 2025 drowning; submerged
//    equipment, slow emergency access.
//  - Rock Dam (Turners Falls): posted and patrolled; drownings are common.
//  - Lithia Springs (Ashfield): swimming prohibited.
//  - Onota & Pontoosuc Lakes (Pittsfield): treated with Diquat herbicide
//    June 2026; locals were avoiding them during the 30-day active window.
//  - Schell Bridge (Northfield): no trespassing.
