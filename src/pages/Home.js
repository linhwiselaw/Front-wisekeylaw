import React, { useState, useRef } from 'react'
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../img/logo.png'
import '../css/Home.css'
import top from '../img/top.png'
import serviceimg from '../img/enterprise.png'
import bossimg from '../img/lshuynhquocviet.png'
import queimg from '../img/que.png'
import question from '../img/question.png'

function Home() {

  const [Loading, setLoading] = useState(true)
  //============================
  let ref = useRef()
  //============================
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  //============================
  //HTML
  let body
  if (Loading) {
    body = (
      <>
        {/* Heder */}
        <div className='Home-header'>
          <img className='Home-logo' src={logo} alt=''></img>
          <div className='Home-left'>
            <div className='Home-header-text'>Trang Chủ</div>
            <div className='Home-header-text'>Dịch Vụ</div>
            <div className='Home-header-text'>Giới Thiệu</div>
            <div className='Home-header-text'>Hỏi Đáp</div>
            <div className='Home-header-text'>Thông Báo</div>
            <div className='Home-header-text'>Blog</div>
            <div className='Home-header-text'>Liện Hệ</div>
          </div>
        </div>

        {/* Top */}
        <div className='Home-top'>
          <div className='Home-top-left'>
            <div className='Home-top-text'>
              <p>Hay Hay</p>
            </div>
          </div>
          <img className='Home-top-right' src={top} alt=''></img>
        </div>

        {/* Body 1 */}
        <div className='Home-body-1'>
          <h4 className='title-h4-b Home-body-1-title'>Dịch Vụ</h4>
          <p className='Home-body-1-text'>Chúng tôi cung cấp một số dịch vụ tư vấn về pháp luật</p>
          <div className='Home-body-1-Container'>
            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

            <div className='Home-body-1-Card'>
              <img className='Home-body-1-Card-img' src={serviceimg} alt='' />
              <h5 className='Home-body-1-Card-title'>Thành lập doanh nghiệp</h5>
            </div>

          </div>
        </div>

        {/* body 2 */}
        <div className='Home-body-2'>
          <h4 className='title-h4-w Home-body-2-title'>Đội Ngũ Của Chúng Tôi</h4>
          <div className='Home-body-2-Container'>

            <div className='Home-body-2-Card'>
              <img src={bossimg} alt='' className='Home-body-2-Card-img' />
              <div className='Home-body-2-Card-inf'>
                <h4>Luật Sư: Hoàng Quốc Việt</h4>
                <p>Giám đốc điều hành</p>
              </div>
            </div>

            <div className='Home-body-2-Card'>
              <img src={bossimg} alt='' className='Home-body-2-Card-img' />
              <div className='Home-body-2-Card-inf'>
                <h4>Luật Sư: Hoàng Quốc Việt</h4>
                <p>Giám đốc điều hành</p>
              </div>
            </div>

            <div className='Home-body-2-Card'>
              <img src={bossimg} alt='' className='Home-body-2-Card-img' />
              <div className='Home-body-2-Card-inf'>
                <h4>Luật Sư: Hoàng Quốc Việt</h4>
                <p>Giám đốc điều hành</p>
              </div>
            </div>

            <div className='Home-body-2-Card'>
              <img src={bossimg} alt='' className='Home-body-2-Card-img' />
              <div className='Home-body-2-Card-inf'>
                <h4>Luật Sư: Hoàng Quốc Việt</h4>
                <p>Giám đốc điều hành</p>
              </div>
            </div>

            <div className='Home-body-2-Card'>
              <img src={bossimg} alt='' className='Home-body-2-Card-img' />
              <div className='Home-body-2-Card-inf'>
                <h4>Luật Sư: Hoàng Quốc Việt</h4>
                <p>Giám đốc điều hành</p>
              </div>
            </div>

            <div className='Home-body-2-Card'>
              <img src={bossimg} alt='' className='Home-body-2-Card-img' />
              <div className='Home-body-2-Card-inf'>
                <h4>Luật Sư: Hoàng Quốc Việt</h4>
                <p>Giám đốc điều hành</p>
              </div>
            </div>

          </div>
        </div>

        {/* body 3 */}
        <div className='Home-body-3'>
          <h4 className='title-h4-b Home-body-3-title'>Hỏi Đáp</h4>
          <div className='Home-body-3-Container'>
            <img src={queimg} alt='' className='Home-body-3-img' />
            <div className='Home-body-3-right'>
              <h4>ĐẶT CÂU HỎI TRỰC TUYẾN CHO LUẬT SƯ</h4>
              <div className='Home-body-3-font'>
                <div>
                  <label>Họ Và Tên</label>
                </div>
                <input></input>
                <div>
                  <label>Email để nhận tư vấn (*)</label>
                </div>
                <input></input>
                <div>
                  <label>Số điện thoại (*)</label>
                </div>
                <input></input>
                <div>
                  <label>Tiêu đề câu hỏi</label>
                </div>
                <input></input>
                <div>
                  <label>Nội dung tư vấn</label>
                </div>
                <textarea></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* body 4 */}
        <div className='Home-body-4'>
          <h4 className='title-h4-w Home-body-4-title'>Thông Báo</h4>
          <div className='Home-body-4-container'>

            <div className='Home-body-4-card'>
              <img src={question} alt='' className='Home-body-4-card-img'></img>
              <div className='Home-body-4-card-inf'>
                <h4 className='Home-body-4-card-title'>Tiêu đề Thông Báo</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className='Home-body-4-card'>
              <img src={question} alt='' className='Home-body-4-card-img'></img>
              <div className='Home-body-4-card-inf'>
                <h4 className='Home-body-4-card-title'>Tiêu đề Thông Báo</h4>
                <p>Nội dung</p>
              </div>
            </div>

            <div className='Home-body-4-card'>
              <img src={question} alt='' className='Home-body-4-card-img'></img>
              <div className='Home-body-4-card-inf'>
                <h4 className='Home-body-4-card-title'>Tiêu đề Thông Báo</h4>
                <p>Nội dung</p>
              </div>
            </div>

          </div>
        </div>

        {/* body 5 */}
        <div className='Home-body__5'>
          <h2 className='title-h4-b Home-body__5-title'>Blog</h2>
          <p className='Home-body__5-Title__chir-2'>Hoạt Động Gần Đây Của Chúng Tôi</p>
          <div className='Home-body__5_AllCard'>
            <button className='Home-body__5_AllCard-btn'><svg className="w-6 h-6 Home-body__4_AllCard-btn-l" onClick={() => scroll(-300)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg></button>
            <div className='Home-body__5_AllCard_container' ref={ref}>

              <div className='Home-Body-card-5'>
                <img className='Home-Body-card-5_Img_CT' src={`https://drive.google.com/uc?export=view&id=1ejhXmbV4x1e2HEJBCTLHPFSfyYimphU8`} alt=''></img>
                <div className='Home-Body-card-5_Title_container'>
                  <p className='Home-Body-card-5_Title-1'>Tieeu de</p>
                  <p className='Home-Body-card-5_Title-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <button className='Home-Body-card-5_btn'>
                    Tiếp Tục Đọc
                    <svg className="w-6 h-6 Home-Body-card-5_btn_Icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className='Home-Body-card-5'>
                <img className='Home-Body-card-5_Img_CT' src={`https://drive.google.com/uc?export=view&id=1ejhXmbV4x1e2HEJBCTLHPFSfyYimphU8`} alt=''></img>
                <div className='Home-Body-card-5_Title_container'>
                  <p className='Home-Body-card-5_Title-1'>Tieeu de</p>
                  <p className='Home-Body-card-5_Title-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <button className='Home-Body-card-5_btn'>
                    Tiếp Tục Đọc
                    <svg className="w-6 h-6 Home-Body-card-5_btn_Icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className='Home-Body-card-5'>
                <img className='Home-Body-card-5_Img_CT' src={`https://drive.google.com/uc?export=view&id=1ejhXmbV4x1e2HEJBCTLHPFSfyYimphU8`} alt=''></img>
                <div className='Home-Body-card-5_Title_container'>
                  <p className='Home-Body-card-5_Title-1'>Tieeu de</p>
                  <p className='Home-Body-card-5_Title-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <button className='Home-Body-card-5_btn'>
                    Tiếp Tục Đọc
                    <svg className="w-6 h-6 Home-Body-card-5_btn_Icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className='Home-Body-card-5'>
                <img className='Home-Body-card-5_Img_CT' src={`https://drive.google.com/uc?export=view&id=1ejhXmbV4x1e2HEJBCTLHPFSfyYimphU8`} alt=''></img>
                <div className='Home-Body-card-5_Title_container'>
                  <p className='Home-Body-card-5_Title-1'>Tieeu de</p>
                  <p className='Home-Body-card-5_Title-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <button className='Home-Body-card-5_btn'>
                    Tiếp Tục Đọc
                    <svg className="w-6 h-6 Home-Body-card-5_btn_Icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className='Home-Body-card-5'>
                <img className='Home-Body-card-5_Img_CT' src={`https://drive.google.com/uc?export=view&id=1ejhXmbV4x1e2HEJBCTLHPFSfyYimphU8`} alt=''></img>
                <div className='Home-Body-card-5_Title_container'>
                  <p className='Home-Body-card-5_Title-1'>Tieeu de</p>
                  <p className='Home-Body-card-5_Title-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <button className='Home-Body-card-5_btn'>
                    Tiếp Tục Đọc
                    <svg className="w-6 h-6 Home-Body-card-5_btn_Icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
            <button className='Home-body__5_AllCard-btn'><svg className="w-6 h-6 Home-body__4_AllCard-btn-r" onClick={() => scroll(300)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg></button>
          </div>
        </div>

        {/* body 6 */}
        <div className='Home-body-6'>
          <h4 className='title-h4-w Home-body-6-title'>CÂU HỎI THƯỜNG GẶP</h4>
          <div className='Home-body-6-container'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

        </div>

        {/* day web */}
        <div className='Home_bottom-1'>
          <img className='Home_bottom-1-logo' src={logo} alt=''></img>
          <div className='Home_bottom-1-info'>
            <p className='Home_bottom-1-info-1'><img className='Home_bottom-1-info-img' src='' alt=''></img>Công ty Luật TNHH Power Law - Chi nhánh Sài Gòn</p>
            <div className='Home_bottom-1-info-2-3'>
              <p className='Home_bottom-1-info-2'><img className='Home_bottom-1-info-img' src='' alt=''></img>038 5074 104</p>
              <p className='Home_bottom-1-info-3'><img className='Home_bottom-1-info-img' src='' alt=''></img>08 giờ 00 phút - 17 giờ 00 phút</p>
            </div>
            <p className='Home_bottom-1-info-4'><img className='Home_bottom-1-info-img' src='' alt=''></img>info@powerlaw.com.vn</p>
            <p className='Home_bottom-1-info-5'><img className='Home_bottom-1-info-img' src='' alt=''></img>Số 4, đường số 1, phường 5, quận 8, TP.HCM VPGD: Số 76 (Lầu 6) Cách Mạng Tháng 8, Phường Võ Thị Sáu, Quận 3, TP.HCM</p>
          </div>
        </div>
        <div className='Home_bottom-2'>
          <p className='Home_bottom-2_text'>© 2022 All Rights Reserved</p>
        </div>
      </>
    )
  } else {
    body = (
      <div>Loading...</div>
    )
  }

  return (body)
}

export default Home