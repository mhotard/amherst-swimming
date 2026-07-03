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
  warning: null          // or a string, shown as a red caution box
}
```

Add or edit entries and the map, sidebar, and filters update automatically.
No build step — plain HTML/JS with [Leaflet](https://leafletjs.com/) and
OpenStreetMap tiles.

## Sources

- [Valley Advocate — "Jump In: The Valley's best swimmin' spots"](https://valleyadvocate.com/2015/06/02/jump-in/)
- [UMass Commonwealth Honors College — WMA swimming spots](https://www.umass.edu/honors/news/wma-swimming-spots)
- [New England Swimming Holes — Massachusetts](https://www.newenglandswimmingholes.com/massachusetts)

Coordinates verified against OpenStreetMap (Nominatim). Always check current water
quality, flow, and posted rules before swimming.
