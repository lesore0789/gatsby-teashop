import React from "react"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-white text-center">
            <h6>Follow us on:</h6>
            <FaFacebookF className="fa-icon mr-3" />
            <FaInstagram className="fa-icon mr-3" />
            <FaTwitter className="fa-icon" />
            <h6 className="pt-2">
              <small>
                all rights reserved &copy;{new Date().getFullYear().toString()}
              </small>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}
