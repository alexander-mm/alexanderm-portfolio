import React from 'react'
import job1 from "../assets/img/jobs/carrent.png"
import job2 from "../assets/img/jobs/jobit.png"

function Jobs() {
  return (
    <section className="skills experience">
      <div><img src={job1} className="job-item"/></div>
      <div><img src={job2} className="job-item"/></div>
      <div><img src={job1} className="job-item"/></div>
      <div><img src={job2} className="job-item"/></div>
  </section>
  )
}

export default Jobs