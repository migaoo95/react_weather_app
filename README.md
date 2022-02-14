# About weather app
Web based application capable of displaying most up to date weather information from cities all around the world. 
# Technologies used for this project
#### React 
- Core technologies used in this project which eliminated dom manupulation and accomodated a more dynamic and better performing application.
#### Hooks i used within React
##### { useState } 
 - More cleaner and logical approach to varaible data manipulation which enhanced performance and user experience.
##### { useContext }
- Provided an encapsulation of state and app functionalities, significantly decreased need for passing props between components. 
##### { useEffect }
- Used to trigger an API call when main weather components mounts on to a page. Additionally when openWeatherAPI populates location state useEffect then trigger country flag API in order to fetch a country flag corresponding with the city searched by the user.  
#### openweather API 
- Main source of up to date weather information.
#### countryflagsAPI 
- APi used for fetching flags.
#### Tailwind Css
- Used for styling of a user interface.
#### DaisyUI
- Enhanced the look of certain app components. 
# Development process and what i have learned
Pourpouse of building this application was based around practicing syntax and concepts that react has to offer completly on my own. During the development process i have came across few minor bugs when trying to update multiple state simutaneously. This have resulted in many unwanted API calls which could potentially slow down my application. I have since found more efffective ways to state managment which im looking forward to apply in my future projects.
