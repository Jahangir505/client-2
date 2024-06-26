import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import React from "react";

const Message = () => {
  return (
    <main>
      <section className="p-0 m-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSidebar"
                  aria-controls="offcanvasSidebar"
                >
                  <i className="fas fa-sliders-h"></i> Business Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3 bg-light mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-danger mb-2">Message</h5>
              <div className="d-flex justify-content-left">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                    <li className="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li className="breadcrumb-item">Business Information</li>
                    <li className="breadcrumb-item">Message</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-1 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-3">
              <SidebarInformation />
            </div>
            <div className="col-xl-9 col-md-9">
              <div class="header pb-2">
                <h5 class="mb-1 mb-sm-0 text-danger">All Messages</h5>
              </div>
              <div class="table-responsive border-0">
                <table class="table border align-middle p-4 mb-0 table-hover">
                  <thead class="bg-light">
                    <tr>
                      <th class="text-dark">Customer</th>
                      <th class="text-dark">Title & Message</th>
                      <th class="text-dark">Status</th>
                      <th class="text-dark">Date</th>
                      <th class="text-dark">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                          <div class="avatar avatar-md flex-shrink-0">
                            <img
                              class="avatar-img rounded-circle"
                              src="../assets/img/user/user-1.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h6 class="mb-1">Arielle Norheim </h6>
                            <ul class="list-inline mb-0 small">
                              <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                arinorheim@hotmail.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td class="text-center text-sm-start">
                        <span class="fw-normal text-black">
                          Lorem Ipsum is simply dummy text...
                        </span>
                        <br /> It is a long established fact that a reader...
                      </td>
                      <td>
                        <div class="badge bg-success bg-opacity-10 text-success fw-normal">
                          Awaiting
                        </div>
                      </td>
                      <td>April 1, 2024</td>
                      <td>
                        <a href="message-detail.php" class="text-black">
                          <i class="bi bi-eye"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                          <div class="avatar avatar-md flex-shrink-0">
                            <img
                              class="avatar-img rounded-circle"
                              src="../assets/img/user/user-2.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h6 class="mb-1">Arielle Norheim </h6>
                            <ul class="list-inline mb-0 small">
                              <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                arinorheim@hotmail.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td class="text-center text-sm-start">
                        <span class="fw-normal text-black">
                          Lorem Ipsum is simply dummy text...
                        </span>
                        <br /> It is a long established fact that a reader...
                      </td>
                      <td>
                        <div class="badge bg-secondary bg-opacity-10 text-secondary">
                          Replied
                        </div>
                      </td>
                      <td>April 1, 2024</td>
                      <td>
                        <a href="message-detail.php" class="text-black">
                          <i class="bi bi-eye"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                          <div class="avatar avatar-md flex-shrink-0">
                            <img
                              class="avatar-img rounded-circle"
                              src="../assets/img/user/user-3.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h6 class="mb-1">Arielle Norheim </h6>
                            <ul class="list-inline mb-0 small">
                              <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                arinorheim@hotmail.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td class="text-center text-sm-start">
                        <span class="fw-normal text-black">
                          Lorem Ipsum is simply dummy text...
                        </span>
                        <br /> It is a long established fact that a reader...
                      </td>
                      <td>
                        <div class="badge bg-success bg-opacity-10 text-success fw-normal">
                          Awaiting
                        </div>
                      </td>
                      <td>April 1, 2024</td>
                      <td>
                        <a href="message-detail.php" class="text-black">
                          <i class="bi bi-eye"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                          <div class="avatar avatar-md flex-shrink-0">
                            <img
                              class="avatar-img rounded-circle"
                              src="../assets/img/user/user-4.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h6 class="mb-1">Arielle Norheim </h6>
                            <ul class="list-inline mb-0 small">
                              <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                arinorheim@hotmail.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td class="text-center text-sm-start">
                        <span class="fw-normal text-black">
                          Lorem Ipsum is simply dummy text...
                        </span>
                        <br /> It is a long established fact that a reader...
                      </td>
                      <td>
                        <div class="badge bg-success bg-opacity-10 text-success fw-normal">
                          Awaiting
                        </div>
                      </td>
                      <td>April 1, 2024</td>
                      <td>
                        <a href="message-detail.php" class="text-black">
                          <i class="bi bi-eye"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                          <div class="avatar avatar-md flex-shrink-0">
                            <img
                              class="avatar-img rounded-circle"
                              src="../assets/img/user/user-5.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h6 class="mb-1">Arielle Norheim </h6>
                            <ul class="list-inline mb-0 small">
                              <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                arinorheim@hotmail.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td class="text-center text-sm-start">
                        <span class="fw-normal text-black">
                          Lorem Ipsum is simply dummy text...
                        </span>
                        <br /> It is a long established fact that a reader...
                      </td>
                      <td>
                        <div class="badge bg-secondary bg-opacity-10 text-secondary">
                          Replied
                        </div>
                      </td>
                      <td>April 1, 2024</td>
                      <td>
                        <a href="message-detail.php" class="text-black">
                          <i class="bi bi-eye"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                          <div class="avatar avatar-md flex-shrink-0">
                            <img
                              class="avatar-img rounded-circle"
                              src="../assets/img/user/user-7.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h6 class="mb-1">Arielle Norheim </h6>
                            <ul class="list-inline mb-0 small">
                              <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                arinorheim@hotmail.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td class="text-center text-sm-start">
                        <span class="fw-normal text-black">
                          Lorem Ipsum is simply dummy text...
                        </span>
                        <br /> It is a long established fact that a reader...
                      </td>
                      <td>
                        <div class="badge bg-success bg-opacity-10 text-success fw-normal">
                          Awaiting
                        </div>
                      </td>
                      <td>April 1, 2024</td>
                      <td>
                        <a href="message-detail.php" class="text-black">
                          <i class="bi bi-eye"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                          <div class="avatar avatar-md flex-shrink-0">
                            <img
                              class="avatar-img rounded-circle"
                              src="../assets/img/user/user-8.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h6 class="mb-1">Arielle Norheim </h6>
                            <ul class="list-inline mb-0 small">
                              <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                arinorheim@hotmail.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td class="text-center text-sm-start">
                        <span class="fw-normal text-black">
                          Lorem Ipsum is simply dummy text...
                        </span>
                        <br /> It is a long established fact that a reader...
                      </td>
                      <td>
                        <div class="badge bg-secondary bg-opacity-10 text-secondary">
                          Replied
                        </div>
                      </td>
                      <td>April 1, 2024</td>
                      <td>
                        <a href="message-detail.php" class="text-black">
                          <i class="bi bi-eye"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                          <div class="avatar avatar-md flex-shrink-0">
                            <img
                              class="avatar-img rounded-circle"
                              src="../assets/img/user/user-8.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h6 class="mb-1">Arielle Norheim </h6>
                            <ul class="list-inline mb-0 small">
                              <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                arinorheim@hotmail.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td class="text-center text-sm-start">
                        <span class="fw-normal text-black">
                          Lorem Ipsum is simply dummy text...
                        </span>
                        <br /> It is a long established fact that a reader...
                      </td>
                      <td>
                        <div class="badge bg-success bg-opacity-10 text-success fw-normal">
                          Awaiting
                        </div>
                      </td>
                      <td>April 1, 2024</td>
                      <td>
                        <a href="message-detail.php" class="text-black">
                          <i class="bi bi-eye"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination START --> */}
              <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                <p class="mb-0 text-center text-sm-start">
                  Showing 1 to 8 of 20 entries
                </p>
                {/* <!-- Pagination --> */}
                <nav
                  class="d-flex justify-content-center mb-0"
                  aria-label="navigation"
                >
                  <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li class="page-item mb-0">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item mb-0 active">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        <i class="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessView(Message, "Message");
