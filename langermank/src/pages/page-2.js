import React from "react"
import { Link } from "gatsby"
import styles from "../styles/devcanvas.module.scss"
import classnames from "clsx"
import SEO from "../components/seo"
import JobTitle from "../components/jobtitle"
import Button from "../components/button"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    return (
      <div className={styles.pageWrap}>
        <SEO title="Page two" />
        <section>
          <p>Turn on your dev tools inspector in firefox to see the magic</p>
        </section>
        <section>
          <h3>Katie as: the space-between</h3>
          <div className={styles.sec1}>
            <div>
              <h2>Designer</h2>
            </div>
            <div>
              <h2>Developer</h2>
            </div>
          </div>
        </section>
        <section>
          <h3>Zoraida as: the space-between</h3>
          <div className={styles.sec2}>
            <span className={styles.skillz}>
              <div>
                <h2>Designer</h2>
              </div>
              <div>
                <h2>Researcher</h2>
              </div>
            </span>
            <div>
              <h2>Developer</h2>
            </div>
          </div>
        </section>
        <section>
          <h3>I need some room to breathe!</h3>
          <Button funStyles onClick={this.handleClick.bind(this)}>Click me</Button>
          <div
            className={classnames(
              styles.sec3,
              this.state.active ? styles.mynewclass : ""
            )}
          >
            <div className={styles.solidBox}></div>
            <div className={styles.solidBox}></div>
            <div className={styles.solidBox}></div>
            <div className={styles.solidBox}></div>
            <div className={styles.solidBox}></div>
          </div>
        </section>
        <section>{/* <JobTitle /> */}</section>
        <section>
          <Link to="/">Go back to the homepage</Link>
        </section>
      </div>
    )
  }
}

export default SecondPage
