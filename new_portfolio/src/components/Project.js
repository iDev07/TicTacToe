import React from "react";
import "./Project.css";
import { Projects } from "../utils/helpers";
import Project1 from "../img/project_1.jpg";
import Project2 from "../img/project_2.jpg";
import Project3 from "../img/project_3.jpg";
import Project4 from "../img/sample.PNG";
import Project5 from "../img/project_5c.jpg";
import Project6 from "../img/project_6.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          There are projects which I have done in my career.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <Projects
            title={"For TO'PALANG HPD Holding"}
            type={"Corporative website"}
            img={Project1}
            link={"https://topalanghpdholding.uz"}
          />
          <Projects
            title={"For BUILDING MEGA SERVICE company"}
            type={"Corporative website"}
            img={Project2}
            link={"https://buildmegaservice.com"}
          />
          <Projects
            title={"Teach Uzbek Language to the other nations"}
            type={"Educational website"}
            img={Project3}
            link={"https://uzlang.navoiy-uni.uz/"}
          />
          <Projects
            title={"For Gustoso Pizza restaurant"}
            type={"E-commerce website"}
            img={Project4}
            link={"https://gustoso.uz"}
          />
          <Projects
            title={"For HERCULES SERVICE auto repair workshop"}
            type={"Auto repair service "}
            img={Project5}
            link={"https://mservis.softcity.uz/"}
          />
          <Projects
            title={"For SOFTPLUS IT company"}
            type={"My first real project"}
            img={Project6}
            link={"https://softplus.uz"}
          />
          {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
