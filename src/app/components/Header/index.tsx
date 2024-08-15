"use client";
import { navs } from "@/app/utils/consts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const path = usePathname();
  return (
    <header className="header_area">
      <div className="top_menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="float-left">
                <p>Phone: +01 256 25 235</p>
                <p>email: info@ck.com</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="float-right">
                <ul className="right_side">
                  <li>
                    <Link href="/">gift card</Link>
                  </li>
                  <li>
                    <Link href="/">track order</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light w-100">
            <a className="navbar-brand logo_h" href="/">
              <Image src="/img/logo.jpeg" alt="" width={149} height={49} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse offset w-100"
              id="navbarSupportedContent"
            >
              <div className="row w-100 mr-0">
                <div className="col-lg-7 pr-0">
                  <ul className="nav navbar-nav center_nav pull-right">
                    {navs.map((nav, index) => {
                      // const isActive = path ===
                      return (
                        <li
                          key={index}
                          className={`nav-item active ${
                            nav.submenu.length ? "submenu dropdown" : ""
                          }`}
                        >
                          <a
                            href="#"
                            className={`nav-link ${
                              nav.submenu.length ? "dropdown-toggle" : ""
                            }`}
                            data-toggle={
                              nav.submenu.length ? "dropdown" : undefined
                            }
                            role={nav.submenu.length ? "button" : undefined}
                            aria-haspopup={
                              nav.submenu.length ? "true" : undefined
                            }
                            aria-expanded={
                              nav.submenu.length ? "false" : undefined
                            }
                          >
                            {nav.name}
                          </a>
                          {nav.submenu.length > 0 && (
                            <ul className="dropdown-menu">
                              {nav.submenu.map((submenuItem, subIndex) => (
                                <li key={subIndex} className="nav-item">
                                  <a className="nav-link" href="#">
                                    {submenuItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-lg-5 pr-0">
                  <ul className="nav navbar-nav navbar-right right_nav pull-right">
                    <li className="nav-item">
                      <a href="#" className="icons">
                        <i className="ti-search" aria-hidden="true"></i>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="icons">
                        <i className="ti-shopping-cart"></i>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="icons">
                        <i className="ti-user" aria-hidden="true"></i>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="icons">
                        <i className="ti-heart" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
