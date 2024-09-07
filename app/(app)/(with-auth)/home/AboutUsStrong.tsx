import React from "react";

const AboutUsStrong = () => {
  return (
    <>
      <section className="pb-28">
        <div className="container">
          <div className="col-sm-12 col-md-12">
            <div className="row">
              <div className="title center">
                <h2>WHAT MAKES US STRONG</h2>
                <div className="heading-border-center"></div>
              </div>
              <div className="dylan-tabs mt-25 mb-50">
                <ul className="nav nav-tabs icon-tabs center-tabs cols-5">
                  <li className="active">
                    <a href="#tab-1" data-toggle="tab">
                      <i className="hc-plugin"></i>
                      <span>
                        Modernized <br />
                        technology
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#tab-2" data-toggle="tab">
                      <i className="hc-ribbon-alt"></i>
                      <span>
                        Customer focused
                        <br />
                        approach
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#tab-3" data-toggle="tab">
                      <i className="hc-server"></i>
                      <span>
                        Wide range of
                        <br />
                        products{" "}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#tab-4" data-toggle="tab">
                      <i className="hc-cash"></i>
                      <span>
                        Value for
                        <br />
                        money
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#tab-5" data-toggle="tab">
                      <i className="hc-plugin"></i>
                      <span>
                        Extraordinary
                        <br />
                        designs
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-container text-center">
                <a className="btn btn-color-out" href="about.html">
                  Read more about us
                  <span className="btn-icon btn-icon-animated">
                    <i className="hc-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsStrong;
