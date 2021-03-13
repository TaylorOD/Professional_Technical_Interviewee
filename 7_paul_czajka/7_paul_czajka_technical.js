// Interview Question:

// We’re starting up a restaurant reservations business for exclusive dining events featuring famous chefs at unique pop-up venues:
// 	•	Each dining event is for a single night and features one chef.  The is no more than one event per night.
// 	•	Flight-style reservation: diners are provided a visual floor plan and choose their specific table and mealtime
// 	•	Auction-style: diners bid for their seats and times.  It is not a blind auction.
// 	•	Diners:
// 	•	Can bid on an event seat and time
// 	•	Can bid on as many different events as they want, but only one bid per event.
// 	•	Can see bids from all diners who are bidding on the same events/seat/table
// 	•	Can change a bid - no more than once every 15m, per event
// 	•	Can delete a bid
// 	•	Are automatically notified when they win a bid.
// 	•	Must pay their winning bid via credit card within 2hrs of winning, or the next winning bid can claim it.

// Assume we have a list of chefs, venues, events, and potential diners in an excel spreadsheet.

// We don’t have anything built to support the first event yet: bidding needs to open 2 months from now.
// 	•	Ignore user creation/authentication flows for now: let’s get the core application features working with dummy data.

// You are not expected to be able to solve this entire problem: we’ll move through it interactively to gauge where your strengths are and to better understand how you work through a problem. Take some time to digest the problem, and ask any clarifying questions.

// When you’re ready: How would you like to start?