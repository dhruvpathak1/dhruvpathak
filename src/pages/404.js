import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

export default function Error404() {
  return (
    <div>
      <Layout>
        <Helmet title=" Page Not Found " defer={false} />
        <br />
        <br />
        <center>
        <h1>Sorry Page Not Found</h1>
        <h2><Link to='/'>Retrun Home :)</Link></h2>
        </center>
        <br />
        <br />
      </Layout>
    </div>
  )
}
