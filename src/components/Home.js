import React from 'react'

const Home = () => {
  return(
    <div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container2">
            <span className="home-text sectionTitle">
            </span>
            <h1 className="home-details-heading">
              Inspire Generosity
            </h1>
            <span className="home-details-sub-heading family">
            Welcome to our Charity Discovery Hub, where your generosity meets tailored impact. This isn't just a website; it's your personalized gateway to making a difference. Input your preferences, and watch as our Charity Finder unveils causes aligned with your values.
            Every click is an exploration, leading you to charities that resonate with your passion for change. Whether it's education, healthcare, or environmental conservation, discover the perfect match for your philanthropic spirit.
            Join us in this journey of purposeful giving. Your preferences become a compass, guiding you to charities where your support has maximum impact. Welcome to a space where your donations are not just contributions but a personalized pathway to creating positive change. Start your journey with us and let your generosity find its perfect destination
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDY5NTYyMXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
      <div className="home-features-container">
        <div className="home-features1">
          <div className="home-container03">
            <span className="home-text03 sectionTitle">
              <br></br>
            </span>
            <h2 className="home-features-heading family">Features</h2>
            <span className="home-features-sub-heading family">
              Why choose our charity donation website?
            </span>
          </div>
          <div className="home-container04">
            <FeatureCard
              Heading="Easy Donation Process"
              SubHeading="Donate to your favorite charities with just a few clicks. It's quick and hassle-free."
            ></FeatureCard>
            <FeatureCard
              Heading="Secure Payment System"
              SubHeading="Rest assured that your donations are processed securely using industry-standard encryption."
            ></FeatureCard>
            <FeatureCard
              Heading="Track Your Donations"
              SubHeading="Keep a record of all your donations and see the impact you're making in real-time."
            ></FeatureCard>
            <FeatureCard
              Heading="Discover New Charities"
              SubHeading="Explore a wide range of connected charities and find new causes to support."
            ></FeatureCard>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
const FeatureCard = (props) => {
  return (
    <div className="feature-card-feature-card family">
      <svg viewBox="0 0 1024 1024" className="feature-card-icon">
        <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
      </svg>
      <div className="feature-card-container">
        <h3 className="feature-card-text heading3">{props.Heading}</h3>
        <span className="feature-card-text1">{props.SubHeading}</span>
      </div>
    </div>
  )
}

export default Home