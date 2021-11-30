import * as React from 'react'
import Navigation from '../components/navigation'
import Media from "../components/media"
import { StaticImage } from 'gatsby-plugin-image'
import {
  contentContainer,
  contentWrap,
} from './style.css' // not sure why this is necessary

const IndexPage = () => {
  return (
    <div>
      <Navigation pageTitle="about">
      </Navigation>
      <div className="contentContainer">
        <h1><strong>Gabe</strong> Schoenbach</h1>
        <div className="introContainer">
          <div className="intro">
            <p>I am a research associate at the <a href="https://www.mggg.org"><strong>MGGG Redistricting Lab</strong></a>, a research group at Tufts University's <a href="https://tischcollege.tufts.edu">Tisch College of Civic Life</a> led by <a href="https://mggg.org/people/mduchin">Dr. Moon Duchin</a>. I graduated in 2020 from the University of Chicago with a bachelor's degree in mathematics, and my current work involves a wide range of voting and election-related questions. Recently, I've been working on:</p>
            <div>
              <ul>
                <li><a href="https://github.com/mggg/ecological-inference">pyEI</a>, a Python package for ecological inference, a popular statistical inference technique to determine racial polarization in elections.</li>
                <li>Understanding the <a href="https://mggg.org/table.html"><i>metagraph</i> </a>— the space of all possible districting plans over a given region. Our Julia code uses the <a href="https://link.springer.com/chapter/10.1007%2F978-3-319-53925-6_10">ZDD data structure</a> to enumerate all possible districtings of square grids up to size nine.</li>
                <li>An <a href="https://arxiv.org/abs/2008.06930">investigation into popular partisan symmetry metrics used to analyze gerrymandering</a>. Our paper shows how and why these metrics can be gamed by partisan actors.</li>
              </ul>
            </div>
          </div>
          <StaticImage
          alt="profile"
          src="../images/brick.jpeg"
          width={1500}
          />
        </div>
      </div>
      <Media>
      </Media>
    </div>
  )
}

export default IndexPage