# Crown Island

React 19 and Vite frontend for the Crown Island resort experience.

## Development

```sh
npm install
npm run dev
```

The app uses client-side navigation for `/`, `/beaches`, `/activities`, `/dining`, and `/book`. “My Booking” currently links to `/book`.

## Checks

```sh
npm run lint
npm run build
npm run preview
```

There is no automated test script yet. The production host must serve `index.html` for the client-side routes so direct links and refreshes work.

## Production integrations

Booking availability, payment, booking history, live weather, social destinations, and legal policy links are not connected in this frontend. The booking UI currently displays a local prototype confirmation.
