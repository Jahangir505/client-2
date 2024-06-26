import React from 'react'
import aboutImg from "@/assets/img/about/06.jpg"
import PublicView from '@/components/HOC/PublicView'
import Head from 'next/head'
import { teams } from '@/components/dummy_data/data'
import Person from '@/components/Person/Person'
import Slider from 'react-slick'

const AboutUs = () => {
    const team_list = teams;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 2,
            },
          },
        ],
      };
  return (
    <main>
        <Head>
            <title>About US</title>
        </Head>
    <section class="pt-4 pb-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                            <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li class="breadcrumb-item">Company</li>
                            <li class="breadcrumb-item">About Us</li>
                        </ol>
                    </nav>
                    <h4 class="fw-normal mt-3">About Us</h4>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-0">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img src={aboutImg.src} class="rounded" alt=""/>
                </div>
                <div class="col-lg-7 mt-4 mt-lg-0">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    {/* <!-- Info --> */}
                    <ul class="list-group list-group-borderless mt-4">
                        <li class="list-group-item d-flex">
                            <i class="bi bi-patch-check-fill text-success me-2"></i>Setup and installation takes less time
                        </li>
                        <li class="list-group-item d-flex">
                            <i class="bi bi-patch-check-fill text-success me-2"></i>Professional and easy to use software
                        </li>
                        <li class="list-group-item d-flex">
                            <i class="bi bi-patch-check-fill text-success me-2"></i>Perfect for any device with pixel-perfect design
                        </li>
                        <li class="list-group-item d-flex">
                            <i class="bi bi-patch-check-fill text-success me-2"></i>Setup and installation too fast
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- =======================
       About founder END -->
    <!-- =======================
       Client START --> */}
    <section class="bg-light">
        <div class="container">
            <div class="row d-flex justify-content-center">
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/microsoft.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/linkedin.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/netflix.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/coca-cola.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/envato.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/android.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/coca-cola.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/shippable.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/algolia.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/importio.svg" alt=""/>
                    </div>
                </div>
                {/* <!-- Logo item --> */}
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="p-4 grayscale text-center">
                        <img src="assets/img/client/yamaha.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- =======================
       Client END -->
    <!-- =======================
       Award and Team START --> */}
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                    {/* <!-- Title --> */}
                    <h2>Awards'N Stuff</h2>
                    {/* <!-- Content --> */}
                    <ul class="list-group list-group-borderless mt-4">
                        {/* <!-- Award item --> */}
                        <li class="list-group-item d-flex align-items-center px-0">
                            <h6 class="mb-0">2015</h6>
                            <span class="fs-6 ms-3">Heroes for Children award</span>
                        </li>
                        {/* <!-- Award item --> */}
                        <li class="list-group-item d-flex align-items-center px-0">
                            <h6 class="mb-0">2016</h6>
                            <span class="fs-6 ms-3">Education Agency of the Year</span>
                        </li>
                        {/* <!-- Award item --> */}
                        <li class="list-group-item d-flex align-items-center px-0">
                            <h6 class="mb-0">2017</h6>
                            <span class="fs-6 ms-3">National Teacher of the Year</span>
                        </li>
                        {/* <!-- Award item --> */}
                        <li class="list-group-item d-flex align-items-center px-0">
                            <h6 class="mb-0">2018</h6>
                            <span class="fs-6 ms-3">Best education agency 2018</span>
                        </li>
                        {/* <!-- Award item --> */}
                        <li class="list-group-item d-flex align-items-center px-0">
                            <h6 class="mb-0">2019</h6>
                            <span class="fs-6 ms-3">Teacher of the nation (2nd place)</span>
                        </li>
                        {/* <!-- Award item --> */}
                        <li class="list-group-item d-flex align-items-center px-0">
                            <h6 class="mb-0">2020</h6>
                            <span class="fs-6 ms-3">Best Independent Education Agency</span>
                        </li>
                    </ul>
                </div>
                {/* <!-- Our team START --> */}
                <div class="col-md-8">
                    {/* <!-- Title and button --> */}
                    <div class="d-sm-flex justify-content-sm-between">
                        <h4 class="mb-0">Meet Our Team</h4>
                        <a href="#" class="btn btn-light mt-2">Join Team</a>
                    </div>
                    {/* <!-- Slider START --> */}
                    <div class="arrow-round arrow-creative arrow-blur arrow-hover mt-2 mt-sm-5">
                        <Slider {...settings}>
                            {/* <!-- Avatar item --> */}
                            {team_list.length > 0 && team_list.map((item) => (
                                <Person person={item} />
                            ))}
                            
                            {/* <!-- Avatar item --> */}
                           
                        </Slider>
                    </div>
                    {/* <!-- Slider END --> */}
                </div>
                {/* <!-- Our team END --> */}
            </div>
        </div>
    </section>
</main>
  )
}

export default PublicView(AboutUs)