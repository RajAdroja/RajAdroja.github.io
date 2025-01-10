AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Engineering Management & Governance Analyst",
    cardImage: "assets/images/experience-page/Accenturelogo.png",
    place: "Accenture, India",
    time: "(Jul, 2023 - Jun, 2024)",
    desp: "<li>Spearheaded migration of structured and semi-structured data from HANA to Snowflake, attaining 16% improvement in storage efficiency and 12% boost in query performance facilitating faster, cost-effective data operations.</li> <li>Designed and implemented data migration pipelines to streamline transfer of over 1,000 objects succeeding 30% increase in operational efficiency and eliminating manual errors while automating validation processes to ensure 100% data accuracy and reducing cron jobs by 40%, significantly elevating workflow reliability.</li> <li>Optimized pipeline performance and governance by integrating automation and ETL tools to ensure schema compliance and amplify data availability while collaborating with cross-functional teams to resolve discrepancies maintaining data integrity and ensuring high performance throughout migration process.</li>",
  },
  {
    title: "Advanced Application Engineering Analyst",
    cardImage: "assets/images/experience-page/Accenturelogo.png",
    place: "Accenture, India",
    time: "(Nov, 2022 - Jul, 2023)",
    desp: "<li>Created widget-based dashboards synthesized with PostgreSQL database schemas and user permission APIs, enabling content updates and customization, resulting in 60% enhancement in operations efficiency.</li><li>Refined real-time monitoring dashboards using React, WebSocket, and Redis for digital twin systems, achieving 76% performance improvement and trimming manual intervention by 10 hours weekly.</li><li>Automated infrastructure management using Terraform for Azure resource deployment, reducing deployment times by 50% and ensuring 99.9% data consistency across platforms by integrating Azure Resource Manager (ARM) templates and leveraging state management.</li>",
  },
  {
    title: "Software Engineering Intern",
    cardImage: "assets/images/experience-page/Accenturelogo.png",
    place: "Viviana, India",
    time: "(Apr, 2021 - May, 2022)",
    desp: "<li>Designed and embedded secure composable identity service module with Multi-Factor Authentication (MFA), Single Sign-On (SSO) enhancing user access security by 40% across multiple client applications.</li><li>Consolidated SSO using Django REST API and Express with JWT tokens improving user access efficiently by 30% across systems.</li><li>Refined application monitoring suite with features to start, restart and stop services, strengthening system reliability by 60%.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Red Ribbon Club",
    cardImage: "assets/images/experience-page/RRCclub.jpeg",
    description:
      "Responsible for organizing blood donation camps, AIDS awareness programs, and other social activities.",
  },
  {
    title: "graVITas 2019",
    cardImage: "assets/images/experience-page/gravitas.webp",
    description:
      "Responsible for managing hack-a-thon and workshops of the technical fest.",
  },
  {
    title: "ACM-VIT",
    cardImage: "assets/images/experience-page/ACMVIT.jpeg",
    description:
      "Volunteered in chapter events like Reverse Coding, Code2Create.",
  },
];
const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
