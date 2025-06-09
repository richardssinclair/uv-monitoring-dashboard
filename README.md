##UV Monitoring Dashboard

![Final image](public/final.png)

Technology used: - Next.js - React - Recharts - Javascript - React Test Library - Jest.

To run the application use: ```yarn dev``` or ```npm run dev```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Dashboard.

To run the tests use: ```yarn test``` or ```npm run test```

Here are some initial sketches for the application with the idea of having a Graph, Location Picker, Product Images and UV level.

![Sketch image](public/sketches.jpeg)

I ended up mocking it in Figma for Clarity:

![Mock design](public/design.png)

I used Next.js the framework for this application as I am quite comfortable using it and have built a few things with it in the past.

In terms of API I tried using [OpenWeatherMap](https://openweathermap.org) as I noticed it had quite a vast amount of information. After a few attempts I realised that you have to pay for the oneCall service. 

Having tried various things I ended up using their Geocoding API to decifer lat, lng and used [OpenUV](https://www.openuv.io/) to gather the UV Data.

For Recharts I watched a bit of a tutorial from Web Dev Simplified as I hadn't used this library before. I was amazed at how little it took to get it running. Here is a link to the video if you are interested: [Recharts video](https://www.youtube.com/watch?v=15qMh8C1Wzo)

For development purposes I set up some mock data which I copied from openuv as I was worried about hitting the 50 api call limit during development.

I also added a basic feature switch ```MOCK_DATA``` for the api so you can choose whether to use the mock data or use the openuv api.

I also left in a mock uv value ```testVal``` so you can manually change the images to see what happens when theres a higher UV. You will need to uncomment the following in: pages/index.js:

```
{/* <UVCurrent value={testVal} /> */}
{/* <UVImage value={testVal} /> */}
```
Make sure to comment out the others so it doesn't affect the layout.

For the initial design I had two components in mind which was the main graph and the drop down country selector.

I ended up adding two more, one for the current uv raiting text under the graph and one for the two images one on the side.

Other Feature Ideas:

- App background colour changing based on UV level.
- Sun animation changes based on UV level
- Adding a UV level indiscation Bar from low to extreme