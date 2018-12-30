import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../../actions/message';
import {Link} from 'react-router-dom';
import { Player } from 'video-react';


class Home extends Component {

	

    render () {

      


        return (
            <div >
            	 <nav className="navbar navbar-default" role="navigation">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                      <a className="navbar-brand title_logo" href="#"><img src="../../img/logo.png" alt="logo" /></a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav header_links">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">My List</a></li>
                        <li><a href="#">Movies</a></li>
                        {/*<li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret" /></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider" />
                            <li><a href="#">Separated link</a></li>
                            <li className="divider" />
                          </ul>
                        </li>*/}
                      </ul>
                      <div className="col-sm-3 col-md-3">
                        <form className="navbar-form" role="search">
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" name="q" />
                            <div className="input-group-btn">
                              <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search" /></button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Login</a></li>
                        {/*<li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret" /></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Logout</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider" />
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </li>*/}
                      </ul>
                    </div>{/* /.navbar-collapse */}
                </nav>
                <div className="background_img">
                  <Player
                      playsInline
                      poster="../../img/maxresdefault.jpg"
                      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
                <div className="container">
                      <div className="video_show">
                          <div className="">
                            <div className="video_title"><h5>My list</h5></div>
                          </div>

                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide list_videos"><img src="../../img/tv13.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv2.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv3.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv4.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv5.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv6.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv8.jpg" alt="video"/></div>
                            </div>
                            {/* Add Pagination */}
                            <div className="swiper-pagination" />
                            {/* Add Arrows */}
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                          </div>
                    </div>

                    <div className="video_show">
                          <div className="">
                            <div className="video_title"><h5>Trending Now</h5></div>
                          </div>

                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide list_videos"><img src="../../img/tv5.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv2.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv3.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv4.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv5.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv6.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv8.jpg" alt="video"/></div>
                            </div>
                            {/* Add Pagination */}
                            <div className="swiper-pagination" />
                            {/* Add Arrows */}
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                          </div>
                    </div>

                    <div className="video_show">
                          <div className="">
                            <div className="video_title"><h5>Action & Adventure</h5></div>
                          </div>

                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide list_videos"><img src="../../img/tv4.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv2.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv3.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv4.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv5.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv6.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv8.jpg" alt="video"/></div>
                            </div>
                            {/* Add Pagination */}
                            <div className="swiper-pagination" />
                            {/* Add Arrows */}
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                          </div>
                    </div>

                    <div className="video_show">
                          <div className="">
                            <div className="video_title"><h5>Comedies</h5></div>
                          </div>

                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide list_videos"><img src="../../img/tv8.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv2.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv6.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv4.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv5.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv3.jpg" alt="video"/></div>
                              <div className="swiper-slide list_videos"><img src="../../img/tv8.jpg" alt="video"/></div>
                            </div>
                            {/* Add Pagination */}
                            <div className="swiper-pagination" />
                            {/* Add Arrows */}
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                          </div>
                    </div>

                </div>

                 <footer>
                    <div className="bar">
                      <div className="bar-wrap">
                        <ul className="links">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">License</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Advertise</a></li>
                          <li><a href="#">About</a></li>
                        </ul>
                        <div className="social">
                          <a href="#" className="fb">
                           <span className="info">
                             <img src="../../img/facebook.png" alt="facebook" />
                            </span> 
                          </a>
                          <a href="#" className="tw">
                            <span className="info">
                              <img src="../../img/youtube.png" alt="facebook" />
                            </span>
                          </a>
                          <a href="#" className="rss">
                            <span className="info">
                               <img src="../../img/insta.png" alt="facebook" />
                            </span>
                          </a>
                        </div>
                        <div className="clear" />
                        <div className="copyright">©  2018 All Rights Reserved Design By Bavn Softs</div>
                      </div>
                    </div>
                  </footer>


            </div>

        )
    }
}

export default connect(state => state)(Home);