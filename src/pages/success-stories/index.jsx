import React from 'react'
import img1 from "@/assets/img/pattern/02.png"
import avatar1 from "@/assets/img/avatar/01.jpg"
import avatar2 from "@/assets/img/avatar/02.jpg"
import avatar3 from "@/assets/img/avatar/03.jpg"
import avatar4 from "@/assets/img/avatar/04.jpg"
import avatar5 from "@/assets/img/avatar/05.jpg"
import avatar6 from "@/assets/img/avatar/06.jpg"
import PublicView from '@/components/HOC/PublicView'

const Success = () => {
  return (
    <main>
    <section className="pt-4 pb-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li className="breadcrumb-item">For Business</li>
                            <li className="breadcrumb-item">Success Stories</li>
                        </ol>
                    </nav>
                    <h4 className="fw-normal mt-3">Success Stories</h4>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white">
        <div className="container">
            <div className="row g-4 g-lg-5 align-items-center">
                <div className="col-xl-7 order-2 order-xl-1">
                    <div className="row mt-0 mt-xl-5">
                        {/* <!-- Review --> */}
                        <div className="col-md-7 position-relative mb-0 mt-0 mt-md-5">
                            {/* <!-- SVG --> */}
                            <figure className="fill-danger opacity-2 position-absolute top-0 start-0 translate-middle mb-3">
                                <svg width="211px" height="211px">
                                    <path d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"></path>
                                </svg>
                            </figure>

                            <div className="bg-body shadow text-center p-4 rounded-3 position-relative mb-5 mb-md-0">
                                {/* <!-- Avatar --> */}
                                <div className="avatar avatar-xl mb-3">
                                    <img className="avatar-img rounded-circle" src={avatar1.src} alt="avatar"/>
                                </div>
                                {/* <!-- Content --> */}
                                <blockquote>
                                    <p>
                                        <span className="me-1 small"><i className="fas fa-quote-left"></i></span>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The pointtop
                                        <span className="ms-1 small"><i className="fas fa-quote-right"></i></span>
                                    </p>
                                </blockquote>
                                {/* <!-- Rating --> */}
                                <ul className="list-inline mb-2">
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                </ul>
                                {/* <!-- Info --> */}
                                <h6 className="mb-0">Carolyn Ortiz</h6>
                            </div>
                        </div>

                        {/* <!-- Mentor list --> */}
                        <div className="col-md-5 mt-5 mt-md-0 d-none d-md-block">
                            <div className="bg-body shadow p-4 rounded-3 d-inline-block position-relative">
                                {/* <!-- Icon --> */}
                                <div className="icon-lg bg-warning rounded-circle position-absolute top-0 start-100 translate-middle">
                                    <i className="bi bi-shield-fill-check text-dark"></i>
                                </div>
                                {/* <!-- Title --> */}
                                <h6 className="mb-3">100+ Verified Mentors</h6>
                                {/* <!-- Mentor Item --> */}
                                <div className="d-flex align-items-center mb-3">
                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img className="avatar-img rounded-1" src={avatar2.src} alt="avatar"/>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-2">
                                        <h6 className="mb-0">Lori Stevens</h6>
                                        <p className="mb-0 small">Tutor of physic</p>
                                    </div>
                                </div>

                                {/* <!-- Mentor Item --> */}
                                <div className="d-flex align-items-center mb-3">
                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img className="avatar-img rounded-1" src={avatar4.src} alt="avatar"/>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-2">
                                        <h6 className="mb-0">Billy Vasquez</h6>
                                        <p className="mb-0 small">Tutor of chemistry</p>
                                    </div>
                                </div>

                                {/* <!-- Mentor Item --> */}
                                <div className="d-flex align-items-center">
                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img className="avatar-img rounded-1" src={avatar5.src} alt="avatar"/>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-2">
                                        <h6 className="mb-0">Larry Lawson</h6>
                                        <p className="mb-0 small">Tutor of technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="row mt-5 mt-xl-0">
                        {/* <!-- Rating --> */}
                        <div className="col-7 mt-0 mt-xl-5 text-end position-relative z-index-1 d-none d-md-block">
                            {/* <!-- SVG --> */}
                            <figure	className="fill-danger position-absolute top-0 start-50 mt-n7 ms-6 ps-3 pt-2 z-index-n1 d-none d-lg-block">
                                <svg enable-background="new 0 0 160.7 159.8" height="180px">
                                    <path d="m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <path d="m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <path d="m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <ellipse cx="116.7" cy="99.1" rx="2.1" ry="2.2" />
                                    <path d="m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z" />
                                    <path d="m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z" />
                                    <path d="m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z" />
                                    <path d="m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
                                    <path d="m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <ellipse cx="98.9" cy="63.9" rx="2.1" ry="2.2" />
                                    <path d="m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <ellipse cx="62.2" cy="63.9" rx="2.1" ry="2.2" />
                                    <ellipse cx="154.1" cy="63.9" rx="2.1" ry="2.2" />
                                    <path d="m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <path d="m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <path d="m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
                                    <ellipse cx="117.6" cy="46.3" rx="2.1" ry="2.2" />
                                    <path d="m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <path d="m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <path d="m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <ellipse cx="136.3" cy="28.6" rx="2.1" ry="2.2" />
                                    <path d="m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <path d="m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
                                    <path d="m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                                    <path d="m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                                    <ellipse cx="44.4" cy="28.6" rx="2.1" ry="2.2" />
                                    <path d="m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
                                    <path d="m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
                                    <path d="m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
                                    <path d="m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
                                    <path d="m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
                                    <path d="m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
                                    <path d="m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
                                    <path d="m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
                                    <path d="m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z" />
                                </svg>
                            </figure>

                            <div className="p-3 bg-primary d-inline-block rounded-4 shadow-lg text-center" style={{background:`url(${img1.src})`, noRepeat: "center center", backgroundSize:'cover'}}>
                                {/* <!-- Info --> */}
                                <h5 className="text-white mb-0">4.5/5.0</h5>
                                {/* <!-- Rating --> */}
                                <ul className="list-inline mb-2">
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                </ul>
                                <p className="text-white mb-0">Based on 3265 ratings</p>
                            </div>
                        </div>

                        {/* <!-- Review --> */}
                        <div className="col-md-5 mt-n6 mb-0 mb-md-5">
                            <div className="bg-body shadow text-center p-4 rounded-3">
                                {/* <!-- Avatar --> */}
                                <div className="avatar avatar-xl mb-3">
                                    <img className="avatar-img rounded-circle" src={avatar3.src} alt="avatar"/>
                                </div>
                                {/* <!-- Content --> */}
                                <blockquote>
                                    <p>
                                        <span className="me-1 small"><i className="fas fa-quote-left"></i></span>
                                        At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending.
                                        <span className="ms-1 small"><i className="fas fa-quote-right"></i></span>
                                    </p>
                                </blockquote>
                                {/* <!-- Rating --> */}
                                <ul className="list-inline mb-2">
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                </ul>
                                {/* <!-- Info --> */}
                                <h6 className="mb-0">Dennis Barrett</h6>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-xl-5 order-1 text-center text-xl-start">
                    {/* <!-- Title --> */}
                    <h2 className="fs-1">Some valuable feedback from our users and business owners</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div> 
        </div>
    </section>
    </main>
  )
}

export default PublicView(Success)