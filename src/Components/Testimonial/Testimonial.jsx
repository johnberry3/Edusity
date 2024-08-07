import React, { useRef } from "react";
import "./Testimonial.css";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const moveForward = () => {
    if (tx > -50) {
         tx -=25;
    };
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const moveBackWard = ()=> {
     if(tx < 0 ){
          tx += 25;
     };
     slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className="Testimonials">
      <img src={next_icon} className="next-btn" onClick={moveForward} alt="" />
      <img src={back_icon} className="back-btn"  onClick={moveBackWard} alt="" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info flex gap-5 items-center">
                <img src={user_1} alt="" />
                <div className="">
                  <h3>Nate Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to Pursue my degree at edusity was on the best decision
                have ever made. The supportive community, state of the
                facilities, and commitment to academic excellence have truly
                exceeded my expectations{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info flex gap-5 items-center">
                <img src={user_2} alt="" />
                <div className="">
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to Pursue my degree at edusity was on the best decision
                have ever made. The supportive community, state of the
                facilities, and commitment to academic excellence have truly
                exceeded my expectations{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info flex gap-5 items-center">
                <img src={user_3} alt="" />
                <div className="">
                  <h3>Hitler Adnerson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to Pursue my degree at edusity was on the best decision
                have ever made. The supportive community, state of the
                facilities, and commitment to academic excellence have truly
                exceeded my expectations{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info flex gap-5 items-center">
                <img src={user_4} alt="" />
                <div className="">
                  <h3>john Jake</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to Pursue my degree at edusity was on the best decision
                have ever made. The supportive community, state of the
                facilities, and commitment to academic excellence have truly
                exceeded my expectations{" "}
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
