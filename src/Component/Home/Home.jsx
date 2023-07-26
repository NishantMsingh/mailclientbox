import React, { useState } from "react";
import "./Home.css";
import { FcUpLeft } from "react-icons/fc";
import { RiSpam2Line, RiMessage2Fill } from "react-icons/ri";
import { BiArchiveIn } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { GoMoveToEnd } from "react-icons/go";
import { MdOutlineAddTask } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { AiFillDelete, AiOutlineClockCircle } from "react-icons/ai";
import folder from "../../Assets/folder.png";
import photos from "../../Assets/photos.png";
import docs from "../../Assets/document.png";
import travel from "../../Assets/travel.png";
import subs from "../../Assets/subs.png";
import deals from "../../Assets/deals.png";
import view from "../../Assets/view.png";
import ComposeMail from "./ComposeMail/ComposeMail";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeListItem, setActiveListItem] = useState("Inbox");
  const [isStarred, setIsStarred] = useState(false);
  const [iscompose, setCompose] = useState(false);
  const [readmoode, setReadMode] = useState(false);
  const currentDate = new Date();
  const composehandle = (value) => {
    setCompose(value);
  };
  // Function to format the time (hh:mm AM/PM)
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  // Function to format the date (yyyy-mm-dd)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  // Get the formatted time and date
  const formattedTime = formatTime(currentDate);
  const formattedDate = formatDate(currentDate);
  const toggleStar = () => {
    setIsStarred((prevIsStarred) => !prevIsStarred);
  };

  const handleItemClick = (item) => {
    setActiveListItem(item);
  };

  const toggleAccordion = () => {
    setIsActive((prevState) => !prevState);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const readmodeHandler=()=>{
    setReadMode(false);
  }
  const readModeActivehandler=()=>{
    setReadMode(true);
  }
  return (
    <div>
      {/* Header  */}
      <div className="container-fluid home-header-bg">
        <header className="container pt-2 pb-2 row">
          <div className="col-lg-3">
            <div className="text-light font-weight d-flex flex-row align-items-center">
              <div
                className={isMenuOpen ? "change  ms-s me-3" : "disp ms-s me-3"}
                onClick={handleMenuClick}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>{" "}
              <h1> Yahoo!!</h1>{" "}
            </div>{" "}
          </div>
          <div class="search-container col-lg-9">
            <input
              type="text"
              class="search-input font-weight"
              placeholder="Find messages, documents, photos or people.."
            />
            <button class="search-button font-weight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M8.195 0c4.527 0 8.196 3.62 8.196 8.084a7.989 7.989 0 0 1-1.977 5.267l5.388 5.473a.686.686 0 0 1-.015.98a.71.71 0 0 1-.993-.014l-5.383-5.47a8.23 8.23 0 0 1-5.216 1.849C3.67 16.169 0 12.549 0 8.084C0 3.62 3.67 0 8.195 0Zm0 1.386c-3.75 0-6.79 2.999-6.79 6.698c0 3.7 3.04 6.699 6.79 6.699s6.791-3 6.791-6.699c0-3.7-3.04-6.698-6.79-6.698Z"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>
      {/* Header  */}
      <div className="container-fluid mail-main">
        <div className="row">
          <section className="menu col-lg-2  col-md-12 p-3">
            <button
              className="compose font-weight text-light"
              onClick={() => {
                composehandle(true);
              }}
            >
              Compose mail
            </button>
            <div class="inbox-list">
              <ul className="menu-list font-weight mt-1">
                <li
                  className={activeListItem === "Inbox" ? "list-active" : ""}
                  onClick={() => handleItemClick("Inbox")}
                >
                  Inbox
                </li>
                <li
                  className={activeListItem === "Unread" ? "list-active" : ""}
                  onClick={() => handleItemClick("Unread")}
                >
                  Unread
                </li>
                <li
                  className={activeListItem === "Starred" ? "list-active" : ""}
                  onClick={() => handleItemClick("Starred")}
                >
                  Starred
                </li>
                <li
                  className={activeListItem === "Drafts" ? "list-active" : ""}
                  onClick={() => handleItemClick("Drafts")}
                >
                  Drafts
                </li>
                <li
                  className={activeListItem === "Sent" ? "list-active" : ""}
                  onClick={() => handleItemClick("Sent")}
                >
                  Sent
                </li>
                <li
                  className={activeListItem === "Spam" ? "list-active" : ""}
                  onClick={() => handleItemClick("Spam")}
                >
                  Spam
                </li>
                <li
                  className={
                    activeListItem === "Deleted Items" ? "list-active" : ""
                  }
                  onClick={() => handleItemClick("Deleted Items")}
                >
                  Deleted Items
                </li>
              </ul>
            </div>
            {/* Accordian  */}
            <div
              className={`accordion ${isActive ? "active" : ""}`}
              onClick={toggleAccordion}
            >
              <button className="accor-button mt-2 font-weight">
                <img src={view} alt="xyz-damaged" className="img-style" />
                Views
              </button>
              <div
                className="panel"
                style={{ display: isActive ? "block" : "none" }}
              >
                <ul className="menu-list font-weight mt-1">
                  <li class="">
                    {" "}
                    <img src={photos} alt="xyz-damaged" className="img-style" />
                    Photos
                  </li>
                  <li>
                    {" "}
                    <img src={docs} alt="xyz-damaged" className="img-style" />
                    Documents
                  </li>
                  <li>
                    <img src={subs} alt="xyz-damaged" className="img-style" />
                    Subscription
                  </li>
                  <li>
                    {" "}
                    <img src={deals} alt="xyz-damaged" className="img-style" />
                    Deals
                  </li>
                  <li>
                    {" "}
                    <img src={travel} alt="xyz-damaged" className="img-style" />
                    Travels
                  </li>
                </ul>
              </div>
            </div>

            {/* 2nd accordian  */}
            <div
              className={`accordion ${isActive ? "active" : ""}`}
              onClick={toggleAccordion}
            >
              <button className="accor-button mt-2 font-weight">
                <img src={folder} alt="xyz-damaged" className="img-style" />{" "}
                Folder
              </button>
              <div
                className="panel"
                style={{ display: isActive ? "block" : "none" }}
              >
                <ul className="menu-list font-weight mt-1">
                  <li class="">+New Folder</li>
                </ul>
              </div>
            </div>
          </section>
          {!readmoode && (
            <section className="list col-lg-10 col-md-12">
              <div className="mail-list-header d-flex align-items-center justify-content-between p-2 border-bottom">
                <div>
                  <input
                    type="checkbox"
                    name="SelectAll"
                    id="SelectAll"
                    className="font-weight checkbox"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between shortcut">
                  <span>Archive</span>
                  <span>Move</span>
                  <span>Delete</span>
                  <span>Spam</span>
                  <span>...</span>
                </div>
                <div>
                  <select name="sort" id="sort" className="font-weight">
                    <option value="sort">Sort By Date</option>
                    <option value="sort">Sort By Sender</option>
                  </select>
                </div>
              </div>
              {/* Mail Listes   the main mail */}
              <div className="mail-lists">
                <ul>
                  <li className="font-weight d-flex align-items-center justify-content-between" onClick={readModeActivehandler}>
                    <input type="checkbox" name="Select" id="Select" />
                    <span className="bullet"></span>
                    <span> Mark Jukerburg</span>
                    <span
                      className={isStarred ? "starred" : "star"}
                      title="Mark as starred"
                      onClick={toggleStar}
                    ></span>
                    <span className="title-mail-list">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus, impedit!
                    </span>
                    <span className="description-mail-list">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus, impedit!
                    </span>
                    <span className="mail-time">
                      <span> {formattedTime}</span>
                      <span> {formattedDate}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          )}
          {readmoode &&<section className="list col-lg-10 col-md-12">
            <div className="mail-list-header d-flex align-items-center justify-content-between p-2 border-bottom">
              <div className="mail-readmode-header">
                <span onClick={readmodeHandler}>
                  <FcUpLeft />
                </span>
                <span>
                  <BiArchiveIn />
                </span>
                <span>
                  <RiSpam2Line />
                </span>
                <span>
                  <AiFillDelete />
                </span>
                <span>
                  <RiMessage2Fill />
                </span>
                <span>
                  <AiOutlineClockCircle />
                </span>
                <span>
                  <MdOutlineAddTask />
                </span>
                <span>
                  <GoMoveToEnd />
                </span>
                <span>
                  <FiMoreVertical />
                </span>
              </div>

              <div className="mail-readmode-header">
                <span>&#60;</span>
                <span>&#62;</span>
                <span> 1 0f 255 </span>
              </div>
            </div>
            {/* Mail Listes   the main mail */}
            <div className="mail-readMod-container">
              <div className="mail-list-header d-flex align-items-center justify-content-between p-2 border-bottom">
                <div className="mail-readmode-header">
                  <span title="Subject of mail">Subject of the mail</span>
                  <span className="important-mail">important</span>
                  <span>inbox</span>
                </div>

                <div className="mail-readmode-header">
                  <span title="Print">Print</span>
                  <span title="open in new window"><FaOpencart/></span>
                </div>
              </div>

              <div className="mail-list-header p-3 font-weight d-flex flex-row justify-content-start">
                <span className="user-circle">User</span>
                <span className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Google Accounts Team </span>
                    <span> 4:28 PM </span>
                  </div>
                  <span>to me</span>
                </span>
              </div>

              <div className="message-container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, quibusdam, laborum quas error voluptates sit vero
                nulla laudantium doloribus velit, ab accusantium optio tempora.
                Ducimus itaque sit deserunt dignissimos alias id eveniet, ipsam
                consequatur debitis recusandae nemo sapiente ab voluptatibus,
                sed culpa, officiis incidunt quaerat? Ad, at doloribus ab
                deserunt error dolorem fugit tenetur veniam nam maxime eum rerum
                totam, obcaecati placeat odit, accusamus velit aliquam
                voluptatibus nobis eaque saepe tempore optio sunt! Aliquam,
                minus. Beatae quo aperiam, rerum ipsa illum aliquid ea
                voluptatum odit tenetur aspernatur deserunt inventore odio
                animi? Laboriosam repudiandae nisi fuga quas alias sint est
                repellendus quaerat delectus praesentium nesciunt sit tenetur
                nam, fugit necessitatibus officiis ipsum dolore voluptatum? Fuga
                quasi amet quisquam natus, maiores sint. Alias voluptas
                adipisci, magnam mollitia quidem at impedit blanditiis inventore
                sint velit necessitatibus recusandae aliquid tempora itaque,
                est, fugiat ullam ut delectus quasi nesciunt atque fuga ipsum!
                Ratione, quas veritatis? Molestias exercitationem iure
                voluptate! Iste, vel vitae dolores neque nulla ipsam voluptate
                perspiciatis corporis accusamus, magni maiores maxime quam fuga
                ad quidem praesentium laboriosam voluptatem. Repellendus,
                incidunt. Veniam maiores quisquam, praesentium, earum itaque
                amet optio numquam deleniti adipisci quas aut, alias eveniet?
                Officiis, ad ex minima voluptates dolorem sed aut nemo rerum
                laborum exercitationem at dolore ratione facere aperiam eos
                harum nam quos quod! Saepe cumque corporis placeat, architecto
                veniam adipisci illum? Deleniti nulla, unde et repellat
                repudiandae a hic doloribus corrupti? Ipsam, ad praesentium
                culpa sunt enim saepe reiciendis laudantium eaque, quo
                doloremque perspiciatis labore. Illum animi tempore, perferendis
                itaque, vitae velit illo doloribus distinctio maiores ipsum,
                ducimus consequuntur pariatur deserunt harum alias ad. Provident
                quaerat praesentium rerum beatae sed ab eius sunt, veniam culpa
                magni corporis incidunt quisquam nesciunt. Laudantium quam
                repellat assumenda quaerat saepe incidunt quibusdam voluptate
                impedit. Iusto illo libero doloremque autem animi rem, facere
                nobis!
              </div>
            </div>
            <div className="reply-btn p-3">
            <button className="btn btn-primary ms-3">Reply</button>
            <button className="btn btn-primary ms-3">Forward</button>
            </div>
          </section>}
        </div>
      </div>
      {iscompose && (
        <ComposeMail
          onClick={composehandle}
          time={formattedDate + " " + formattedTime}
        />
      )}
    </div>
  );
};

export default Home;
