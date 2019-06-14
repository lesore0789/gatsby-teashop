import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              laborum repudiandae temporibus distinctio reprehenderit minima quo
              totam facere, inventore, tenetur dolorem, suscipit fugiat eius?
              Quidem, maxime dicta totam repudiandae laboriosam aut dolore quas
              consectetur, porro in, voluptatibus veritatis quaerat accusantium
              ex molestiae! In recusandae eum est vel aperiam eveniet eius.
            </p>
            <Link to="/about">
              <button className="btn btn-peach text-uppercase">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
