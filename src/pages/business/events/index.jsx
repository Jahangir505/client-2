import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { IMAGE_URL } from "@/helpers/apiUrl";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore, useEventStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const Events = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();

  const allEvent = useEventStore((state) => state.allEvent);
  const setEvent = useEventStore((state) => state.setEvent);
  const [viewEvent, setViewEvent] = useState(null);

  const getAllEvents = async () => {
    const res = await BusinessService.eventAll().then((data) => {
      console.log(data);
      setEvent(data.data.allEvent);
    });
  };

  const handleDeleteEvent = (id) => {
    const payload = {
      id: id
    };

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await BusinessService.eventDelete(payload);

          if (response.data.actionStatus == 1) {
            swal("Poof! Your item has been deleted!", {
              icon: "success"
            });

            getAllEvents();
            // Optionally, you can refresh the list of items or update the UI
          } else {
            swal("Error! There was a problem deleting your item.", {
              icon: "error"
            });
          }
        } catch (error) {
          swal("Error! There was a problem deleting your item.", {
            icon: "error"
          });
        }
      } else {
        swal("Your item is safe!");
      }
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllEvents();
    }
  }, [isAuthenticated]);
  return (
    <BusinessView title="Events">
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
                <h5 className="text-danger mb-2">Events</h5>
                <div className="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                      <li className="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li className="breadcrumb-item">Business Information</li>
                      <li className="breadcrumb-item">Events</li>
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
              <div className="col-xl-9 col-md-9">
                <div class="col d-md-flex justify-content-between align-items-center mt-4">
                  <div>
                    <h5 class="mb-2 mb-sm-0 text-danger pb-0">All Events</h5>
                  </div>
                  <div class="d-flex align-items-center mt-2 mt-md-0">
                    <Link
                      href="/business/events/new"
                      class="btn btn-sm btn-dark mb-2"
                    >
                      Create Event
                    </Link>
                  </div>
                </div>

                <div class="table-responsive">
                  <table class="table align-middle p-4 mb-0 table-hover border">
                    <thead class="bg-light border-bottom text-black">
                      <tr>
                        <th scope="col" class="border-0 rounded-start">
                          Event Title
                        </th>
                        <th scope="col" class="border-0">
                          Date
                        </th>
                        <th scope="col" class="border-0">
                          Status
                        </th>
                        <th scope="col" class="border-0 rounded-end">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {allEvent?.length > 0 ? (
                      <tbody>
                        {allEvent.map((event, index) => (
                          <tr key={index}>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="w-60px">
                                  <img
                                    src={`${IMAGE_URL}/uploads/business-event/${event.image}`}
                                    class="rounded-1"
                                    alt=""
                                  />
                                </div>
                                <div class="mb-0 ms-2">
                                  <h6>
                                    <a href="event-detail">{event.title}</a>
                                  </h6>
                                  <div class="d-sm-flex">
                                    <p class="h6 fw-light mb-0 small me-2">
                                      <i class="far fa-map text-dark me-1 mb-1"></i>{" "}
                                      {event.address}
                                    </p>
                                    <p class="h6 fw-gray mb-0 small">
                                      <i class="fas fa-certificate text-gray me-2"></i>
                                      {event.venue_name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="text-center text-sm-start">
                              {event.start_date_time}
                            </td>
                            <td>
                              <div class="badge bg-success bg-opacity-10 text-success">
                                Upcoming
                              </div>
                            </td>
                            <td>
                              {/* <a
                                href="#"
                                class="btn btn-sm btn-dark-soft btn-round me-1 mb-0"
                              >
                                <i class="far fa-fw fa-edit"></i>
                              </a> */}
                              <a
                                href={`/business/events/${event.id}`}
                                class="btn btn-sm btn-round btn-success-soft "
                              >
                                <i class="far fa-fw fa-eye"></i>
                              </a>
                              <button
                                onClick={() => handleDeleteEvent(event.id)}
                                class="btn btn-sm btn-danger-soft btn-round mb-0"
                              >
                                <i class="fas fa-fw fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ) : (
                      <tr>
                        <p>Event not found! Please create one!</p>
                      </tr>
                    )}

                    {/* <!-- Table body END --> */}
                  </table>
                </div>

                {/* <!-- Pagination START --> */}
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
                {/* <!-- Pagination END --> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </BusinessView>
  );
};

export default Events;
