# Customs
Customs is a Seattle based group of electronic music-promoters who bring music to Seattle's nightlife

A private live version of the site can be found at http://fmnguyen.github.io/CustomsWebsite/

## Adding Shows
All of the background images/posters for shows should be placed in
```
images/events/
``` 
You must then edit the json/events.json file to include the event.
```json
  {
    "id": "[unique-identifier]",
    "img": "images/events/[filename]",
    "title": "[title]",
    "venue": "[venue-name]",
    "ticket": {
    	"url": "[ticket-url]"
    },
    "date": {
      "year": "[year]",
      "month": "[month]",
      "day": "[day]"
    }
  },
```