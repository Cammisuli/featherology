import * as React from 'react'
import Link from 'gatsby-link'

const IndexPage: React.StatelessComponent = () => (
  <div>
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
