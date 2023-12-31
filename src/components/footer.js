import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <footer className="bg-dark text-center text-white">
              <div className="container p-4 pb-0">
                <section >
                  <form action="">
                    <div className="row d-flex justify-content-center">
                      <div className="col-auto">
                        <p className="pt-2">
                          <strong>Sign up for our newsletter</strong>
                        </p>
                      </div>

                      <div className="col-md-5 col-12">
                        <div className="form-outline form-white mb-4">
                          <input
                            type="email"
                            id="form5Example29"
                            className="form-control"
                          />
                          <label className="form-label" for="form5Example29">
                            Email address
                          </label>
                        </div>

                        <div className="col-auto">
                          <button
                            type="submit"
                            className="btn btn-outline-light mb-4"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </section>
              </div>

              <div className="text-center p-3 bg-dark">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">
                  MDBootstrap.com
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
