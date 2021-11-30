import * as React from 'react'
import Navigation from '../components/navigation'
import Media from "../components/media"
import PA from '../images/pa.gif'
import ZDD from '../images/zdd.png'
import EI from '../images/ei_testing.png'
import EI_pres from '../files/EI_considerations.pdf'

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
              GerryChain is a Python library that uses Markov chain Monte Carlo (MCMC) sampling to build ensembles of political districting plans. I'm an active contributor to the codebase, currently focused on adding county and municipality awareness to our chains and fine-tuning local search techniques. I've led several GerryChain trainings and am always looking for ways to make the user experience easier.
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
              In the context of racial gerrymandering, one prerequisite to legal relief under the 1965 Voting Rights Act is a demonstration of racially polarized voting. To conduct this analysis, litigators in voting rights cases often use <a href="https://gking.harvard.edu/eicamera/kinroot.html" target="_blank" rel="noopener noreferrer">ecological inference (EI)</a>, a family of Bayesian hierarchical models that use MCMC methods to turn aggregated demographic and electoral totals into precinct-level estimates of voting preferences by race. I'm interested in a) tracking how seemingly minor choices in experimental design can affect bottom-line EI results and b) determining upon what types of datasets EI is likely to fail. I'm working with other voting rights experts to turn these findings into a paper on "best practices" for ecological inference.
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