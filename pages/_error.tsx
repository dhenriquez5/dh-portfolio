import React from 'react'
import { Layout } from '../components/Layout'

const _error = () => {
  return (
    <Layout title='Error WebSite David Henriquez' description='Error WebSite David Henriquez' footer={false}>
         <p className='text-center'>Could not load your page</p>
    </Layout>
  )
}

export default _error