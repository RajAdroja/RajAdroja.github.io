import styles from './ProjectStyles.module.css'
import viberr from '../../assets/viberr.webp'
import ProjectCard from '../../common/projectcard'
import fitLift from '../../assets/fitlift.webp'
import projectphoto from '../../assets/projectphoto.webp'
import getsettravellogo from '../../assets/getsettravellogo.webp'
import golangicon from '../../assets/golangicon.png'
import dockerlogo from '../../assets/dockerlogo.png'
import crudlogo from '../../assets/CRUDlogo.png'
import restaurantfinderlogo from '../../assets/restaurantfinderlogo.webp'
import logparserlogo from '../../assets/logparserlogo.webp'
import personalizedreciperecommenderlogo from '../../assets/personalizedreciperecommenderlogo.webp'
import db2apilogo from '../../assets/db2apilogo.webp'
import verdictailogo from '../../assets/verdictailogo.webp'
import customerchurnpredictionlogo from '../../assets/customerchurnpredictionlogo.webp'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Academic Projects</h1>
        <div className={styles.projectContainer}>
          <ProjectCard src={viberr} link={"https://github.com/RajAdroja/Automatic-colorization-using-auto-encoder"} h3={"DL Project"} p={"Automatic Colorization"}/>
          <ProjectCard src={projectphoto} link={"https://github.com/RajAdroja/Sentiment-Analysis"} h3={"ML Project"} p={"Sentiment Analysis"}/>
          <ProjectCard src={fitLift} link={"https://www.vpropel.in/"} h3={"V-PROPEL portal"} p={"Coding Platform"}/>
          <ProjectCard src={getsettravellogo} link={"https://github.com/RajAdroja/GetSetTravel"} h3={"GetSetTravel"} p={"Frontend website"}/>
          <ProjectCard src={restaurantfinderlogo} link={"https://github.com/RajAdroja/RestaurantFinder"} h3={"RestaurantFinder"} p={"End2End WebApp"}/>
          <ProjectCard src={logparserlogo} link={"https://github.com/RajAdroja/LogParser"} h3={"LogParser"} p={"Java Project"}/>
          <ProjectCard src={personalizedreciperecommenderlogo} link={"https://github.com/RajAdroja/Personalized-Recipe-Recommender"} h3={"Recipe Recommender"} p={"ML Project"}/>
          <ProjectCard src={db2apilogo} link={"https://github.com/RajAdroja/db2api"} h3={"db2appi"} p={"Schema Translation"}/>
          <ProjectCard src={verdictailogo} link={"https://github.com/RajAdroja/VerdictAI"} h3={"VerdictAI"} p={"LLM Project"}/>
          <ProjectCard src={customerchurnpredictionlogo} link={"https://github.com/RajAdroja/Customer-Churn-Prediction"} h3={"Customer Churn"} p={"End to End ML pipeline"}/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="sectionTitle">Learning Projects</h1>
        <div className={styles.projectContainer}>
        <ProjectCard src={golangicon} link={"https://github.com/RajAdroja/Go"} h3={"Golang"} p={"Exporing Golang"}/>
        <ProjectCard src={dockerlogo} link={"https://github.com/RajAdroja/CMPE272-Assignment-1-Hello-Service"} h3={"Hello World "} p={"Docker Kubernetes practice"}/>
        <ProjectCard src={crudlogo} link={"https://github.com/RajAdroja/CMPE272-Assignment-2-Building-serverless-application"} h3={"Serverless App"} p={"Simple CRUD"}/>
        </div>
    </section>
    
  )
}

export default Projects