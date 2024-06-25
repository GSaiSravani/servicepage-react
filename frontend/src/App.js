import React from 'react';
import './App.css';
import ServiceCard from './components/ServiceCard';
import { FaCloud, FaShieldAlt, FaSyncAlt, FaLaptopCode, FaProjectDiagram, FaChartLine, FaTasks, FaRegCheckCircle } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'IT Consultancy',
    description: 'Astonished set expression solicitude way admiration'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Computing',
    description: 'Astonished set expression solicitude way admiration'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cyber Security',
    description: 'Astonished set expression solicitude way admiration'
  },
  {
    icon: <FaSyncAlt />,
    title: 'Backup Recovery',
    description: 'Astonished set expression solicitude way admiration'
  }
];


const howWeWorkSteps = [
  {
    icon: <FaProjectDiagram />,
    title: 'Select a Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    number: 1
  },
  {
    icon: <FaChartLine />,
    title: 'Project Analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    number: 2
  },
  {
    icon: <FaTasks />,
    title: 'Plan & Execute',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    number: 3
  },
  {
    icon: <FaRegCheckCircle />,
    title: 'Deliver Result',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    number: 4
  }
];


const clientTestimonials = [
  {
    image: 'data:image/jpeg;base64,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',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    author: 'John Doe',
    rating: 5
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoINNdxOwnrwSTAXq16TNlFgfGXvHUSyy86A&usqp=CAU',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    author: 'Jane Smith',
    rating: 4
  },
  {
    image: 'data:image/jpeg;base64,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',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    author: 'Mike Johnson',
    rating: 4.5
  }
];

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="overlay">
          <h1>Services</h1>
        </div>
      </header>

      {/* Service Cards */}
      <div className="card-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* How We Work Section */}
      <section className="how-we-work">
        <h2>How We Work</h2>
        <div className="card-container">
          {howWeWorkSteps.map((step, index) => (
            <div className="card how-we-work-card" key={index}>
              <div className="step-number-container">
                <div className="step-number">{step.number}</div>
              </div>
              <div className="icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="client-testimonials">
        <h2>What Happy Clients Say About Us</h2>
        <div className="testimonial-container">
          {clientTestimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img src={testimonial.image} alt={`Client ${index + 1}`} />
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
                <strong>{testimonial.author}</strong>
                <div className="rating">
                  {[...Array(5)].map((star, i) => (
                    <span key={i} className={i < testimonial.rating ? 'filled' : ''}>&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
