import './App.css'
import tetImg from './assets/tet.jpeg'
import languageImg from './assets/vn_class.jpeg'
import networkImg from './assets/networking.jpeg'
import midAutumnImg from './assets/autumn.jpeg'
import collegeImg from './assets/college.jpg'
import healthImg from './assets/health.jpeg'
import cookingImg from './assets/cooking.jpeg'
import youthImg from './assets/youth.jpeg'
import exhibitImg from './assets/exhibit.jpeg'
import volunteerImg from './assets/volunteers.jpeg'

const events = [
  {
    title: "Tet Lunar New Year Festival",
    description: "Annual celebration with traditional food, music, and cultural performances.",
    location: "Laurel Community Center",
    link: "#",
    image: tetImg
  },
  {
    title: "Vietnamese Language Class",
    description: "Weekend classes for kids and adults to learn Vietnamese.",
    location: "Local Library",
    link: "#",
    image: languageImg
  },
  {
    title: "Small Business Networking Night",
    description: "Connect with Vietnamese entrepreneurs and business owners.",
    location: "Downtown Hall",
    link: "#",
    image: networkImg
  },
  {
    title: "Mid-Autumn Festival",
    description: "Family-friendly event with lanterns, mooncakes, and lion dances.",
    location: "City Park",
    link: "#",
    image: midAutumnImg
  },
  {
    title: "College Prep Workshop",
    description: "Guidance for high school students applying to college.",
    location: "Community Center Room 204",
    link: "#",
    image: collegeImg
  },
  {
    title: "Health & Wellness Fair",
    description: "Free health screenings and wellness resources.",
    location: "Memorial Hospital",
    link: "#",
    image: healthImg
  },
  {
    title: "Vietnamese Cooking Class",
    description: "Learn to cook pho, banh mi, and spring rolls.",
    location: "Culinary Studio",
    link: "#",
    image: cookingImg
  },
  {
    title: "Youth Leadership Conference",
    description: "Leadership training for Vietnamese-American youth.",
    location: "State University",
    link: "#",
    image: youthImg
  },
  {
    title: "Cultural Heritage Exhibit",
    description: "Art, history, and storytelling from the Vietnamese diaspora.",
    location: "City Museum",
    link: "#",
    image: exhibitImg
  },
  {
    title: "Community Volunteer Day",
    description: "Give back by helping local shelters and food banks.",
    location: "Multiple Locations",
    link: "#",
    image: volunteerImg
  },
]

function App() {
  return (
    <div className="App">
      <h1>Vietnamese Community Events & Resources</h1>

      <div className="card-container">
        {events.map((event, index) => (
          <div className="card" key={index}>
            <img src={event.image} alt={event.title} className="card-image" />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Location:</strong> {event.location}</p>

            <a href={event.link} className="btn">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App