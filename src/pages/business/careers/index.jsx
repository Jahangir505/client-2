import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { formatDate, isEmpty } from "@/helpers/functions";
import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore, useCareerStore } from "@/store";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText
} from "@mui/material";
import { useEffect, useState } from "react";

const Careers = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const snackbar = useSnackbar();

  const allCareers = useCareerStore((state) => state.allCareer);
  const setCareer = useCareerStore((state) => state.setCareer);

  const [job, setJob] = useState({
    id: "",
    title: "",
    job_type: "",
    job_level: "",
    department: 0,
    details: "",
    expiration_date: "",
    status: ""
  });

  const handleGetCareers = () => {
    const res = BusinessService.careerAll().then((careers) => {
      console.log({ careers });
      if (careers.data.status === "success") {
        setCareer(careers.data.allCareer);
      }
    });
  };

  const handleJobCreate = (e) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();
    const payload = {
      ...job,
      expiration_date: formatDate(job.expiration_date, "DD-MM-YYYY")
    };

    const res = BusinessService.careerCreate(payload).then((data) => {
      console.log({ data });
      if (data.data.status === "success") {
        handleGetCareers();
        snackbar(data.data.message, { variant: "success" });
        setLoading(false);
        setOpen(false);
      } else {
        setLoading(false);
      }
    });
  };

  const handleJobUpdate = (e) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();
    const payload = {
      ...job,
      expiration_date: formatDate(job.expiration_date, "DD-MM-YYYY")
    };

    const res = BusinessService.careerUpdate(payload).then((data) => {
      console.log({ data });
      if (data.data.status === "success") {
        handleGetCareers();
        snackbar(data.data.message, { variant: "success" });
        setLoading(false);
        setOpen(false);
      } else {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      handleGetCareers();
    }
  }, [isAuthenticated]);
  console.log(job);
  
  return (
    <BusinessView title="Careers">
      <main>
        {loading && (
          <div className="preloader-api">
            <div className="preloader-item">
              <div className="spinner-grow text-primary"></div>
            </div>
          </div>
        )}
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
                <h5 className="text-danger mb-2">Careers</h5>
                <div className="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                      <li className="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li className="breadcrumb-item">Business Information</li>
                      <li className="breadcrumb-item">Careers</li>
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
                <SidebarInformation profile={userProfile} />
              </div>
              <div class="col-xl-9">
                <div class="col d-md-flex justify-content-between align-items-center mb-2">
                  <div>
                    <h5 class="mb-2 mb-sm-0 text-danger pb-0">All Careers</h5>
                  </div>
                  <div class="d-flex align-items-center mt-2 mt-md-0">
                    <span
                      onClick={() => setOpen(!open)}
                      class="btn btn-sm btn-dark mb-0"
                    >
                      Create Job
                    </span>
                  </div>
                </div>
                <div class="table-responsive border-0">
                  <table class="table table-dark-gray align-middle p-4 mb-0 table-hover border">
                    <thead>
                      <tr>
                        <th scope="col" class="border-0 rounded-start">
                          Company name
                        </th>
                        <th scope="col" class="border-0">
                          Date
                        </th>
                        <th scope="col" class="border-0">
                          Department
                        </th>
                        <th scope="col" class="border-0">
                          Deadline
                        </th>
                        <th scope="col" class="border-0">
                          <i class="fa fa-download"></i>
                        </th>
                        <th scope="col" class="border-0 rounded-end">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {/* <!-- Table body START --> */}
                    <tbody>
                      {allCareers?.length > 0 ? (
                        <>
                          {allCareers.map((career, index) => (
                            <tr key={index}>
                              <td>
                                <h6 class="table-responsive-title mt-2 mt-lg-0 mb-0">
                                  <a href={`/business/careers/${career.id}`}>
                                    {career.title}
                                  </a>
                                </h6>
                              </td>
                              <td>18/1/2023</td>
                              <td>Marketing</td>
                              <td>{formatDate(career.expiration_date, "MM/DD/YYYY")}</td>
                              <td>
                                <a
                                  href="#"
                                  class="link-underline-light text-primary"
                                >
                                  <i class="fa fa-download"></i>
                                </a>
                              </td>
                              <td>
                                <span
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    setJob({
                                      id: career.id,
                                      title: career.title,
                                      job_type: career.job_type,
                                      job_level: career.job_level,
                                      department: career.department,
                                      details: career.details,
                                      expiration_date: formatDate(career.expiration_date, "YYYY-MM-DD"),
                                      status: career.status
                                    });
                                    setOpen(true);
                                  }}
                                  class="text-black"
                                >
                                  <i class="far fa-fw fa-edit"></i>
                                </span>{" "}
                                <a href={`/business/careers/${career.slug}`} class="text-black">
                                  <i class="far fa-fw fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <tr style={{ textAlign: "center" }}>
                          <h4>Data not found!</h4>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                {/* <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                  <p class="mb-0 text-center text-sm-start">
                    Showing 1 to 8 of 20 entries
                  </p>
                  
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
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <Dialog
          class="modal fade"
          open={open}
          tabindex="-1"
          width={700}
          onClose={() => {
            setOpen(false);
            setJob({
              id: null,
              title: "",
              job_type: "",
              job_level: "",
              department: "",
              details: "",
              expiration_date: "",
              status: ""
            });
          }}
        >
          <DialogContent class="modal-content">
            <DialogContentText>
              <Box sx={{ padding: "20px !important" }}>
                <div class="modal-header">
                  <h5 class="modal-title text-dark mb-0" id="albumCreate">
                    Job Create
                  </h5>
                  <button
                    type="button"
                    class="btn btn-sm btn-light mb-0"
                    onClick={() => {
                      setOpen(false);
                      setJob({
                        id: null,
                        title: "",
                        job_type: "",
                        job_level: "",
                        department: "",
                        details: "",
                        expiration_date: "",
                        status: ""
                      });
                    }}
                  >
                    <i class="bi bi-x-lg">x</i>
                  </button>
                </div>

                <div class="modal-body">
                  <div class="row g-3 needs-validation">
                    <div class="col-md-6 col-sm-12 bg-light-input">
                      <label
                        class="form-label fw-normal text-black"
                        for="job_title"
                      >
                        Job Title <span class="star">*</span>
                      </label>
                      <input
                        class="form-control job_title"
                        type="text"
                        title="job_title"
                        id="job_title"
                        placeholder="e. g. Need Marketing Manager"
                        required
                        value={job?.title}
                        autoComplete="off"
                        onChange={(e) =>
                          setJob({
                            ...job,
                            title: e.target.value
                          })
                        }
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter job title.
                      </div>
                    </div>
                    <div class="col-md-6 bg-light-input">
                      <label
                        class="form-label fw-bold text-dark"
                        for="job_type"
                      >
                        Job Type <span class="star">*</span>
                      </label>
                      <select
                        class="form-select bg-light job_type"
                        id="job_type"
                        name="job_type"
                        value={job?.job_type}
                        required
                        onChange={(e) =>
                          setJob({
                            ...job,
                            job_type: e.target.value
                          })
                        }
                      >
                        <option value="">Please Select</option>
                        <option value="1">Full Time</option>
                        <option value="2">Half Time</option>
                        <option value="3">Contractual</option>
                        <option value="4">Hourly</option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please select a job type.
                      </div>
                    </div>
                    <div class="col-md-6 bg-light-input">
                      <label
                        class="form-label fw-bold text-dark"
                        for="job_level"
                      >
                        Job Level <span class="star">*</span>
                      </label>
                      <select
                        class="form-select bg-light job_level"
                        id="job_level"
                        name="job_level"
                        required
                        value={job?.job_level}
                        onChange={(e) =>
                          setJob({
                            ...job,
                            job_level: e.target.value
                          })
                        }
                      >
                        <option value="">Please Select</option>
                        <option value="1">Entry Level</option>
                        <option value="2">Mid Level</option>
                        <option value="3">High Level</option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please select a job level.
                      </div>
                    </div>
                    <div class="col-md-6 bg-light-input">
                      <label
                        class="form-label fw-bold text-dark"
                        for="department"
                      >
                        Department <span class="star">*</span>
                      </label>
                      <select
                        class="form-select bg-light department"
                        id="department"
                        name="department"
                        required
                        value={job?.department}
                        onChange={(e) =>
                          setJob({
                            ...job,
                            department: e.target.value
                          })
                        }
                      >
                        <option value="">Please Select</option>
                        <option value="1">Marketing</option>
                        <option value="2">Human Resource</option>
                        <option value="3">Account Officer</option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please select a department.
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-4 bg-light-input">
                      <label
                        class="form-label fw-normal text-dark"
                        for="job_details"
                      >
                        Job Details <span class="star">*</span>
                      </label>
                      <textarea
                        class="form-control job_details"
                        rows="5"
                        type="text"
                        id="job_details"
                        title="job_details"
                        name="job_details"
                        value={job?.details}
                        placeholder="E. g. Please write your job details here..."
                        required
                        onChange={(e) =>
                          setJob({
                            ...job,
                            details: e.target.value
                          })
                        }
                      ></textarea>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter your job details.
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 bg-light-input">
                      <label
                        class="form-label fw-normal text-dark"
                        for="date_time"
                      >
                        From Date <span class="star">*</span>
                      </label>
                      <input
                        class="form-control date_time"
                        id="date_time"
                        title="date_time"
                        type="date"
                        placeholder=""
                        required
                        value={job.expiration_date}
                        onChange={(e) => {
                          setJob({
                            ...job,
                            expiration_date: e.target.value
                          });
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter date & time.
                      </div>
                    </div>
                    <div class="col-md-6 bg-light-input">
                      <label class="form-label fw-bold text-dark" for="status">
                        Status <span class="star">*</span>
                      </label>
                      <select
                        class="form-select bg-light status"
                        id="status"
                        name="status"
                        required
                        value={job?.status}
                        onChange={(e) =>
                          setJob({
                            ...job,
                            status: e.target.value
                          })
                        }
                      >
                        <option value="">Please Select</option>
                        <option value="1">Active</option>
                        <option value="2">Inactive</option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please select a status.
                      </div>
                    </div>
                  </div>
                </div>
                <Box class="modal-footer mt-3">
                  <Button
                    type="button"
                    class="btn btn-danger-soft my-0"
                    onClick={() => {
                      setOpen(false);
                      setJob({
                        id: null,
                        title: "",
                        job_type: "",
                        job_level: "",
                        department: "",
                        details: "",
                        expiration_date: "",
                        status: ""
                      });
                    }}
                  >
                    Close
                  </Button>
                  {isEmpty(job.id) ? (
                    <Button
                      onClick={(event) => handleJobCreate(event)}
                      class="btn btn-success-soft my-0"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      onClick={(event) => handleJobUpdate(event)}
                      class="btn btn-success-soft my-0"
                      data-bs-dismiss="modal"
                    >
                      Update
                    </Button>
                  )}
                </Box>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </main>
    </BusinessView>
  );
};

export default Careers;
