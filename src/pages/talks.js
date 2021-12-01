import * as React from 'react'
import Navigation from '../components/navigation'
import Media from '../components/media'
import county_aware from '../files/county_aware_redistricting.pdf'
import psymm from '../files/psymm.pdf'
import EI_pres from '../files/EI_considerations.pdf'
import ZDD from '../files/ZDD.pdf'

const TalksPage = () => {
    return (
      <div>
        <Navigation pageTitle="papers">
        </Navigation>
        <div className="contentContainer">
          <div className="text">
            <h1>talks</h1>
              <h2>2021</h2>
              <p>
                <a href={county_aware} target="_blank" rel="noopener noreferrer">county aware redistricting</a>
                <br/>
                The University of Chicago Undergraduate Math Club, Oct. 2021
                <br/>
                <br/>
                <a href={ZDD} target="_blank" rel="noopener noreferrer">counting graph partitions</a>
                <br/>
                MGGG Graph Algorithms Meeting, Feb. 2021
              </p>
              <h2>2020</h2>
              <p>
                <a href={EI_pres} target="_blank" rel="noopener noreferrer">EI considerations</a>
                <br/>
                MGGG Lab Meeting, Nov. 2020
                <br/>
                <br/>
                <a href={psymm} target="_blank" rel="noopener noreferrer">exploring partisan symmetry</a>
                <br/>
                The University of Chicago Undergraduate Math Club, Nov. 2020
              </p>
            </div>
        </div>
        <Media>
        </Media>
      </div>
    )
}

export default TalksPage