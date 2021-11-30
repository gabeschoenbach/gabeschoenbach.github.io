import * as React from 'react'
import Navigation from '../components/navigation'
import Media from '../components/media'

const PapersPage = () => {
    return (
      <div>
        <Navigation pageTitle="papers">
        </Navigation>
        <div className="contentContainer">
          <h1>papers</h1>
            <h2>journal publications</h2>
            <p>
              "<a href="https://joss.theoj.org/papers/10.21105/joss.03397" target="_blank" rel="noopener noreferrer">PyEI: A Python package for ecological inference</a>," Karin C. Knudson, <b>Gabe Schoenbach</b>, Amariah Becker. <i>Journal of Open Source Software</i>, 6(64), 2021.
            </p>
            <h2>preprints</h2>
            <p>
              "<a href="https://arxiv.org/abs/2008.06930" target="_blank" rel="noopener noreferrer">Implementing partisan symmetry: Problems and paradoxes</a>," Daryl Deford, Natasha Dhamankar, Moon Duchin, Varun Gupta, Mackenzie McPike, <b>Gabe Schoenbach</b>, Ki Wan Sim. <i>Political Analysis</i> (forthcoming), 2021.
            </p>
            <h2>research support</h2>
            <p>
              "<a href="https://www.yalelawjournal.org/forum/models-race-and-the-law" target="_blank" rel="noopener noreferrer">Models, Race, and the Law</a>," Moon Duchin and Douglas M. Spencer. <i>The Yale Law Journal Forum</i>, 2021.
            </p>
        </div>
        <Media>
        </Media>
      </div>
    )
}

export default PapersPage