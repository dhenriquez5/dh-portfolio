import Link from 'next/link'
import React from 'react'
import { projects } from '../utils/data'
import { PortfolioItem } from './PortfolioItem'

export const PortfolioSection = () => {
  return (
    <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-primary" style={{ borderRadius: "8px" }}>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="text-center text-light">Projects</h3>
                </div>
              {
                projects && projects.map(project =>(
                    <PortfolioItem key={project.id} {...project} />
                ))
              }
              </div>
            </div>
          </div>
        </div>
  )
}
