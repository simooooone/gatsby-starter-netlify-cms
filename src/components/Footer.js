import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-top.png'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="OkGrazie"
            style={{ maxWidth: '14em'}}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container footer has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-8">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About me
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/simooooone">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
              <div className="column is-12 credits">
                Website created by 
                <h6>Simone Foschi</h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
