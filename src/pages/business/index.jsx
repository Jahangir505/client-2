import BusinessView from "@/components/HOC/BusinessView";
import { formatDate } from "@/helpers/functions";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessStore } from "@/store";
import React, { useEffect, useState } from "react";

const Business = () => {
  const dashboard = useBusinessStore((store) => store.dashboard);
  const setDashboard = useBusinessStore((store) => store.setDashboard);
  const isAuthenticated = useToken();
  const handleGetDashboardData = () => {
    const res = BusinessService.businessDashboard().then((data) => {
      // console.log(data);
      setDashboard(data.data);
    });
  };

  console.log("dashboard", dashboard);

  useEffect(() => {
    if (isAuthenticated) {
      handleGetDashboardData();
    }
  }, [isAuthenticated]);
  return (
    <BusinessView title="Business">
      <main>
        <section class="pt-4 pb-2">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                    <li class="breadcrumb-item">
                      <a href="/">
                        <i class="bi bi-house me-1"></i> Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active">Dashboard</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section class="pt-1 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-xl-8">
                <div class="row g-4">
                  <div class="col-sm-6 col-lg-4">
                    <div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
                      <span class="display-6 text-warning mb-0">
                        <i class="fas fa-tv fa-fw"></i>
                      </span>
                      <div class="ms-4">
                        <div class="d-flex">
                          <h5
                            class="purecounter mb-0 fw-bold"
                            data-purecounter-start="0"
                            data-purecounter-end="25"
                            data-purecounter-delay="200"
                          >
                            {dashboard?.allTicket?.length ?? 0}
                          </h5>
                        </div>
                        <span class="mb-0 h6 fw-light">Support Tickets</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
                      <span class="display-6 text-purple mb-0">
                        <i class="fas fa-envelope fa-fw"></i>
                      </span>
                      <div class="ms-4">
                        <div class="d-flex">
                          <h5
                            class="purecounter mb-0 fw-bold"
                            data-purecounter-start="0"
                            data-purecounter-end="25"
                            data-purecounter-delay="200"
                          >
                            0
                          </h5>
                          <span class="mb-0 h5">+</span>
                        </div>
                        <span class="mb-0 h6 fw-light">Total Payment</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
                      <span class="display-6 text-info mb-0">
                        <i class="fas fa-gem fa-fw"></i>
                      </span>
                      <div class="ms-4">
                        <div class="d-flex">
                          <h5
                            class="purecounter mb-0 fw-bold"
                            data-purecounter-start="0"
                            data-purecounter-end="12"
                            data-purecounter-delay="300"
                          >
                            0
                          </h5>
                          <span class="mb-0 h5">+</span>
                        </div>
                        <span class="mb-0 h6 fw-light">Wish List</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="header mt-5">
                  <h5 class="mb-2 mb-sm-0 text-danger pb-2">
                    Recent 5 Support Ticket(s)
                  </h5>
                </div>
                <div class="table-responsive border-0">
                  <table class="table align-middle p-4 mb-0 table-hover border">
                    <thead class="border-bottom bg-light">
                      <tr>
                        <th scope="col" class="border-0 text-dark">
                          Created at
                        </th>
                        <th
                          scope="col"
                          class="border-0 rounded-start text-dark"
                        >
                          Subject
                        </th>
                        <th scope="col" class="border-0 text-dark">
                          Ticket
                        </th>
                        <th scope="col" class="border-0 text-black">
                          Status
                        </th>
                        <th scope="col" class="border-0 text-black">
                          Updated at
                        </th>
                        <th scope="col" class="border-0 rounded-end text-dark">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboard?.allTicket?.length > 0 &&
                        dashboard?.allTicket.map((ticket, i) => (
                          <tr key={i}>
                            <td>
                              {formatDate(ticket.createdAt, "MMMM DD, YYYY")}
                            </td>
                            <td>
                              <h6 class="mt-2 mt-lg-0 mb-0">
                                <a href="support-detail">{ticket.title}</a>
                              </h6>
                            </td>
                            <td>#10235{i + 1}</td>
                            <td class="text-center text-sm-start">
                              <span class="badge bg-success bg-opacity-10 text-success">
                                {ticket?.status ? "Open" : "Closed"}
                              </span>
                            </td>
                            <td>
                              {formatDate(ticket.updatedAt, "MMMM DD, YYYY")}
                            </td>
                            <td>
                              <a href="support-detail.php" class="text-black">
                                <i class="far fa-fw fa-eye"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div class="header mt-5">
                  <h5 class="mb-2 mb-sm-0 text-danger pb-2">
                    Recent 5 Message(s)
                  </h5>
                </div>
                <div class="table-responsive border-0">
                  <table class="table border align-middle p-4 mb-0 table-hover">
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Title & Message</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboard?.allMessage?.length > 0 &&
                        dashboard?.allMessage.map((message, i) => (
                          <tr key={i}>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="w-60px">
                                  <img
                                    src="../assets/img/company-logo/1.svg"
                                    class="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div class="mb-0 ms-2">
                                  <h6>
                                    <a
                                      href={`/listing-details/${message?.businessProfile?.slug}`}
                                      target="_blank"
                                    >
                                      Serenade Spiritsand
                                    </a>
                                  </h6>
                                  <div class="d-sm-flex">
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="text-center text-sm-start">
                              <span class="fw-normal text-black">
                                Relax & Rejuvenate: Unwind with our Signature
                              </span>
                            </td>
                            <td>
                              <div class="badge bg-success bg-opacity-10 text-success fw-normal">
                                Awaiting
                              </div>
                            </td>
                            <td>{formatDate(message.updatedAt, "MMMM DD, YYYY")}</td>
                            <td>
                              <a href="message-detail.php" class="text-black">
                                <i class="far fa-fw fa-eye"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="header">
                  <h5 class="mb-2 mb-sm-0 text-danger pb-2">Wish List</h5>
                </div>
                <div class="card rounded-1 border p-3 mb-4">
                  <div class="row gx-2 mb-0 pb-0">
                    <div class="col-2">
                      <img
                        class="rounded-circle"
                        width="100%"
                        height="100%"
                        src="../assets/img/company-logo/1.svg"
                        alt=""
                      />
                    </div>
                    <div class="col-10">
                      <h6 class="mb-0">
                        <a href="../listing-detail.php" target="_blank">
                          Elite Home Maintenance Services USA
                        </a>
                      </h6>
                      <p class="small mb-0 mb-sm-0 pb-0">
                        <i class="fas fa-star fa-sm text-warning"></i>
                        <i class="fas fa-star fa-sm text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star fa-sm text-warning"></i>
                        <i class="fas fa-star fa-sm text-warning"></i>{" "}
                        <strong>5.0</strong> (1.5k Reviews)
                      </p>
                      <h6 class="text-black-50 mb-0 fw-light pb-0 mt-1">
                        <small>
                          <span class="fw-bold text-success">Open</span> until
                          8:00 PM
                        </small>
                      </h6>
                    </div>
                  </div>
                  <hr />
                  <div class="row gx-2 mb-0 pb-0">
                    <div class="col-2">
                      <img
                        class="rounded-circle"
                        width="100%"
                        height="100%"
                        src="../assets/img/company-logo/2.svg"
                        alt=""
                      />
                    </div>
                    <div class="col-10">
                      <h6 class="mb-0">
                        <a href="../listing-detail.php" target="_blank">
                          Gastroesophageal Reflux Disease (GERD)
                        </a>
                      </h6>
                      <p class="small mb-0 mb-sm-0 pb-0">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>{" "}
                        <strong>5.0</strong> (1.5k Reviews)
                      </p>
                      <h6 class="text-black-50 mb-0 fw-light pb-0 mt-1">
                        <small>
                          <span class="fw-bold text-danger">Closed</span> until
                          8:00 PM
                        </small>
                      </h6>
                    </div>
                  </div>
                  <hr />
                  <div class="row gx-2 mb-0 pb-0">
                    <div class="col-2">
                      <img
                        class="rounded-circle"
                        width="100%"
                        height="100%"
                        src="../assets/img/company-logo/3.svg"
                        alt=""
                      />
                    </div>
                    <div class="col-10">
                      <h6 class="mb-0">
                        <a href="../listing-detail.php" target="_blank">
                          Supreme Auto Masters
                        </a>
                      </h6>
                      <p class="small mb-0 mb-sm-0 pb-0">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>{" "}
                        <strong>5.0</strong> (1.5k Reviews)
                      </p>
                      <h6 class="text-black-50 mb-0 fw-light pb-0 mt-1">
                        <small>
                          <span class="fw-bold text-success">Open</span> until
                          8:00 PM
                        </small>
                      </h6>
                    </div>
                  </div>
                  <hr />
                  <div class="row gx-2 mb-0 pb-0">
                    <div class="col-2">
                      <img
                        class="rounded-circle"
                        width="100%"
                        height="100%"
                        src="../assets/img/company-logo/4.svg"
                        alt=""
                      />
                    </div>
                    <div class="col-10">
                      <h6 class="mb-0">
                        <a href="../listing-detail.php" target="_blank">
                          Fundamentals of Business Analysis
                        </a>
                      </h6>
                      <p class="small mb-0 mb-sm-0 pb-0">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>{" "}
                        <strong>5.0</strong> (1.5k Reviews)
                      </p>
                      <h6 class="text-black-50 mb-0 fw-light pb-0 mt-1">
                        <small>
                          <span class="fw-bold text-danger">Closed</span> until
                          8:00 PM
                        </small>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BusinessView>
  );
};

export default Business;
