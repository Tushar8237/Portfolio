import React from "react";
import "./portfolio.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "CRUD Operation",
    github: "https://github.com/Tushar8237/Crud-Operation",
    demo: "https://crud-operation-sooty-delta.vercel.app/",
  },
  {
    id: 2,
    image: img2,
    title: "IMDB Clone",
    github: "https://github.com/Tushar8237/IMDB-clone",
    demo: "https://tushar-imdb-clone.vercel.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Ecommerce",
    github: "https://github.com/Tushar8237/Ecommerce",
    demo: "https://tushar-ecommerce.vercel.app/",
  },
  {
    id: 4,
    image: img4,
    title: "Admin Dashboard",
    github: "https://github.com/Tushar8237/Admin-Dashboard",
    demo: "https://tushar-admin-dashboard.vercel.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Real Time Chat App",
    github: "https://github.com/Tushar8237/Chat-App",
    demo: "https://chat-app-tushar.netlify.app/",
  },
  {
    id: 6,
    image: img6,
    title: "Cryptocurrency dashboard",
    github: "https://github.com/Tushar8237/Crypto-Dashboard",
    demo: "https://tushar-crypto-dashboard.vercel.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
