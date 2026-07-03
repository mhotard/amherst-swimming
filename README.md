# Swimming Holes near Amherst, MA

An interactive map of local swimming holes — ponds, lake beaches, river spots, and
waterfalls — within an easy drive of Amherst, Massachusetts.

**Live site:** enable GitHub Pages on this repo (Settings → Pages → Deploy from branch →
`main` / root) and it will be served at `https://<username>.github.io/<repo>/`.

## Editing the spots

All spot data lives in [`spots.js`](spots.js) — one object per location:

```js
{
  name: "Puffer's Pond",
  town: "North Amherst",
  type: "pond",          // pond | lake | river | waterfall
  lat: 42.4168, lon: -72.5174,
  driveMin: 7,           // approx drive time from Amherst center
  fee: "Free",
  blurb: "…",
  warning: null,         // or a string, shown as a red caution box
  refs: ["advocate"]     // keys into the REFS table at the top of spots.js
}
```

Add or edit entries and the map, sidebar, and filters update automatically.
No build step — plain HTML/JS with [Leaflet](https://leafletjs.com/) and
OpenStreetMap tiles.

## Sources

- [r/westernmass — "Places to swim in western Mass"](https://www.reddit.com/r/westernmass/comments/1uk0m6i/places_to_swim_in_western_mass/) (first-hand local recommendations, July 2026)
- [Valley Advocate — "Jump In: The Valley's best swimmin' spots"](https://valleyadvocate.com/2015/06/02/jump-in/)
- [UMass Commonwealth Honors College — WMA swimming spots](https://www.umass.edu/honors/news/wma-swimming-spots)
- [New England Swimming Holes — Massachusetts](https://www.newenglandswimmingholes.com/massachusetts)
- Official land-manager pages: [Massachusetts DCR](https://www.mass.gov/orgs/department-of-conservation-recreation), [The Trustees of Reservations](https://thetrustees.org/), [CT DEEP](https://portal.ct.gov/deep)
- [isitclean.us](https://www.isitclean.us/) — weekly Connecticut River water testing

Each spot in `spots.js` carries its own `refs` list, rendered as source links in
the map popups. Spots that locals report as closed or unsafe (Becket Quarry,
Rock Dam, Lithia Springs) are deliberately excluded — see the comment at the
bottom of `spots.js`.

Coordinates verified against OpenStreetMap (Nominatim). Always check current water
quality, flow, and posted rules before swimming.
