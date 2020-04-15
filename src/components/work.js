import React, { Component } from 'react';
import Card from './card.js';
import hiltonweb from '../images/hilotn-web-600.png';
import hiltoniphone from '../images/hilotn-iphone-600.png';
import fractalweb from '../images/fractal-web-600.png';
import pep from '../images/pep-ipad-600.png';
import connectedroom from '../images/hilton-connectedroom-600.png';
import beverlyhiltonweb from '../images/beverlyhilton-web-600.png';
import stjudeweb from '../images/stjude-org-600.png';
import stjudeheroes from '../images/stjude-heroes-600.png';
import stjudedreamhome from '../images/stjude-dreamhome-600.png';
import '../styles/work.css';
import '../styles/cards.css';


class Work extends Component{
  render(){
    return (
      <React.Fragment>
      <div className="contentBody">
        <span className="timeline">Currently</span>
        <h2>I lead the Design and User Experience teams for Hilton</h2>
        <span className="deliniator">—</span>
        <p>These case studies represent the work of hundreds of people. I'll try to highlight the role I and the teams that i lead played in each</p>
        <div className="caseStudyGrid">
          <Card
            link="#"
            imagePath={hiltonweb}
            cardName={"Hilton.com"}
            description={"Hilton's flagship web presence including 18 brands and almost 6000 properties. The site features products to search, make and modify reservations, manage your loyalty account, check in and more."}
            imageAlt={"hilton website on a desktop monitor"}
          />
          <Card
            link="#"
            imagePath={hiltoniphone}
            cardName={"Hilton Honors Apps"}
            description={"Industry leading iPhone and Android applications giving users the option so select their room, check in, open their doors, and control thier televisions."}
            imageAlt={"screenshot of hilton iphone app"}
          />
          <Card
            link="#"
            imagePath={fractalweb}
            cardName={"Hilton's Design System"}
            description={"Hilton's Disign System used across multiple platforms to create cohesive branded designs and user experiences across multiple touchpoints."}
            imageAlt={"screenshot of hilton design system on laptop"}
            />
        </div>
        <div className="caseStudyGrid">
          <Card
            link="#"
            imagePath={beverlyhiltonweb}
            cardName={"Speciality Property Sites"}
            description={"Some properties have such a unique offering, they need thier own stand alone propery site."}
            imageAlt={"Beverly Hilton website on a desktop monitor"}
          />
          <Card
            link="#"
            imagePath={connectedroom}
            cardName={"Connected Room"}
            description={"Hilton's Connected Room lets guests stream content from their favorite providers, set lighting and room temperature prior to arrival, and use their mobile devices to control television programming."}
            imageAlt={"Connected Room interface on television screen"}
          />
          <Card
            link="#"
            imagePath={pep}
            cardName={"Enterprise Software"}
            description={"Some of the most important software to enable a great guest experience are the tools that hotel staff use to deliver an exceptional level of service."}
            imageAlt={"screenshot of pep application on iPad"}/>
        </div>
        </div>
        <div className="contentBody">
        <span className="timeline">From 2010 to 2016</span>
        <h2>I lead the UX Design and UI Dev teams at ALSAC/St. Jude</h2>
        <span className="deliniator">—</span>
        <span className="finePrint">*has definitely been updated since i worked on this</span>
        <div className="caseStudyGrid">
          <Card link="#" imagePath={stjudeweb} cardName={"Stjude.org"} description={"Partnering with a design team from the hospital, Stjude.org was one of the largest projects our team delivered"} imageAlt={"screenshot of St Jude website"}/>
          <Card link="#" imagePath={stjudeheroes} cardName={"St. Jude Heroes"} description={"One of my primary focuses at ALSAC was peer to peer findraising. The Memphis Marathon was the single largest of those events"} imageAlt={"screenshot of St Jude website"}/>
          <Card link="#" imagePath={stjudedreamhome} cardName={"St. Jude Dreamhome"} description={"A great challange to lead a design studio where most of our prototype validation was with our own legal depatment."} imageAlt={"screenshot of St Jude website"}/>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Work;
