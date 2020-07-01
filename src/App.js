import React from "react";
import "./style.css";

function App() {
  return (
    <div>
      {/* <!--Header--> */}
      <header class="nav-bg">
        <div class="logo">
          <img src="assets/tracker-logo.png" />
        </div>
        <div class="title">
          <h2>Pallative Tracker</h2>
          <span>Presidential Task Force Covid-19</span>
        </div>
      </header>
      {/* <!--Title Bar--> */}
      <div class="pageTitle-bg">
        <h3>Administrator Login</h3>
      </div>
      <div class="row">
        <div class="col left">
          <div class="uk-inline mobile">
            <img src="assets/coa.jpg" alt="" class="coa" />
            <div class="uk-overlay-default uk-position-cover"></div>
            <div class="uk-overlay uk-position-top-left uk-dark">
              <div class="welcome">Welcome Back!</div>
              <div class="login">Login to your account</div>
              <form>
                <div class="uk-margin">
                  <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" type="email" placeholder="Email" />
                  </div>
                </div>
                <div class="uk-margin">
                  <div class="uk-inline">
                    <span
                      class="uk-form-icon uk-form-icon"
                      uk-icon="icon: lock"
                    ></span>
                    <input
                      class="uk-input"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="form-btn">
                  <a class="uk-button uk-button-default uk-width-1-1" href="#">
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
          <form class="web">
            <div class="uk-margin">
              <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input class="uk-input" type="email" placeholder="Email" />
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline">
                <span
                  class="uk-form-icon uk-form-icon"
                  uk-icon="icon: lock"
                ></span>
                <input
                  class="uk-input"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-btn">
              <a class="uk-button uk-button-default uk-width-1-1" href="#">
                Login
              </a>
            </div>
          </form>
        </div>
        <div class="col right web">
          <div class="uk-inline">
            <img src="assets/coa.jpg" alt="" class="coa" />
            <div class="uk-overlay-default uk-position-cover"></div>
            <div class="uk-overlay uk-position-top-left uk-dark">
              <div class="welcome">Welcome Back!</div>
              <div class="login">Login to your account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
