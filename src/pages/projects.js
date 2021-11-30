import * as React from 'react'
import Navigation from '../components/navigation'
import Media from "../components/media"
import PA from '../images/pa.gif'
import ZDD from '../images/zdd.png'
import EI from '../images/ei_testing.png'
import PYEI from '../images/pyei.png'
import EI_pres from '../files/EI_considerations.pdf'
import county_aware from '../files/county_aware_redistricting.pdf'

const ProjectsPage = () => {
    return (
      <div>
        <Navigation pageTitle="projects">
        </Navigation>
        <div className="contentContainer">
          <h1>projects</h1>
          <div>
            <p>
              <h2><a href="https://www.github.com/mggg/GerryChain" target="_blank" rel="noopener noreferrer">gerrychain</a></h2>
              <img src={PA} style={{float: "left", marginRight: 10, borderWidth: 1, borderStyle: "solid"}} alt="GerryChain" width="220"/>
              GerryChain is a Python library that uses Markov chain Monte Carlo (MCMC) sampling to build ensembles of political districting plans. I'm an active contributor to the codebase, currently focused on adding <a href={county_aware} target="_blank" rel="noopener noreferrer">county and municipality awareness</a> to our chains and fine-tuning local search techniques. I've led several GerryChain trainings and am always looking for ways to make the user experience more smooth.
            </p>
            <br/>
            <p>
              <h2><a href="https://www.mggg.org/table.html" target="_blank" rel="noopener noreferrer">enumerating graph partitions</a></h2>
              <img src={ZDD} style={{float: "left", marginRight: 10}} alt="ZDD" width="220"/>
              I'm deeply interested in the <a href="https://www.tandfonline.com/doi/full/10.1080/2330443X.2020.1791773" target="_blank" rel="noopener noreferrer">empirical validation study</a> from Fifield et al., which uses the ZDD data structure given in <a href="https://link.springer.com/chapter/10.1007%2F978-3-319-53925-6_10" target="_blank" rel="noopener noreferrer">Kawahara et al.</a> to compactly express all connected, population-balanced partitions of a given map graph. I've worked with Dr. Amy Becker and Bhushan Suwal on a Julia implementation of the "enumpart" algorithm, which can help us better understand the districting state space for "toy" redistricting problems and help us benchmark modifications to our Markov chains.
            </p>
            <br/>
            <p>
              <h2><a href={EI_pres} target="_blank" rel="noopener noreferrer">ecological inference: stability and correctness</a></h2>
              <img src={EI} style={{float: "left", marginRight: 10, borderWidth: 1, borderStyle: "solid"}} alt="EI" width="220"/>
              In the context of racial gerrymandering, one prerequisite to legal relief under the 1965 Voting Rights Act is a demonstration of racially polarized voting (RPV). To conduct this analysis, litigators in voting rights cases often use <a href="https://gking.harvard.edu/eicamera/kinroot.html" target="_blank" rel="noopener noreferrer">ecological inference (EI)</a>, a family of Bayesian hierarchical models that use MCMC methods to turn aggregated demographic and electoral totals into precinct-level estimates of voting preferences by race. I'm interested in a) tracking how seemingly minor choices in experimental design can affect bottom-line EI results and b) determining upon what types of datasets EI is likely to fail. I'm working with other voting rights experts to turn these findings into a paper on "best practices" for ecological inference.
            </p>
            <br/>
            <p>
              <h2><a href="https://github.com/mggg/ecological-inference" target="_blank" rel="noopener noreferrer">PyEI</a></h2>
              <img src={PYEI} style={{float: "left", marginRight: 10, borderWidth: 1, borderStyle: "solid"}} alt="PyEI" width="220"/>
              Developed in collaboration with <a href="https://karinknudson.com/" target="_blank" rel="noopener noreferrer">Dr. Karin C. Knudson</a> (<a href="https://disc.tufts.edu/" target="_blank" rel="noopener noreferrer">DISC</a>) and Dr. Amy Becker (<a href="https://mggg.org/team-expanded#amy-becker" target="_blank" rel="noopener noreferrer">MGGG</a>), PyEI is a Python package for ecological inference and ecological regression. We developed this tool with two goals in mind: to improve the sophistication with which legal experts can discuss evidence of RPV in voting rights cases and to make it easier for researchers to explore the sometimes-murky behavior of EI models.
            </p>
            <br/>
          </div>
        </div>
        {/* <Media>
        </Media> */}
      </div>
    )
}

export default ProjectsPage