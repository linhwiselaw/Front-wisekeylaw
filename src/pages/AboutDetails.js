import React, { useState, useEffect } from 'react'
import '../css/About.css'
import parse from 'html-react-parser'
import { apiUrl } from '../contexts/constants';

function AboutDetails() {
  const [Loading, setLoading] = useState(false)
  const [Loading2, setLoading2] = useState(false)
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [Icon, setIcon] = useState('')
  const [Title1, setTitle1] = useState('')
  const [Title2, setTitle2] = useState('')
  const [Content, setContent] = useState('')

  const [infor, setinfor] = useState([])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const id = window.location.href.split('/')
    fetch(apiUrl + "/about/" + id[4], requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setIcon(result.data.Icon)
          setTitle1(result.data.Title1)
          setTitle2(result.data.Title2)
          setContent(result.data.Content)
          setLoading(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])

  //Infor
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/infor", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setinfor(result.data)
          setLoading2(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])

  let body
  if (Loading && Loading2) {
    body = (
      <>
        <div className='Service-Total'>
          <div className='Home-header'>
            <img className='Home-logo' src={`https://drive.google.com/uc?export=view&id=${infor[0].Logo}`} alt=''></img>
            <div className='Home-left'>
              <a className='Home-header-text' href='/'>Trang Chủ</a>
              <a className='Home-header-text' href="#contact" data-after="Contact">Liện Hệ</a>
            </div>
          </div>

          {/* Header 2 */}
          <div className='Home-header-2'>
            <div className='Home-header-2__container'>
              <a className='Home-header-2__btn Home-header-2__btn_Home' href="/">Trang Chủ</a>
              <a className='Home-header-2__btn' href="#contact" data-after="Contact">Liên Hệ</a>
            </div>
          </div>

          {/* body */}
          <div className='Body_AboutDetails'>
            <div className='Body_AboutDetails-container'>
              <div>
                <img className='Body_AboutDetails-container_Img_CT' src={`https://drive.google.com/uc?export=view&id=${Icon}`} alt=''></img>
                <p className='Body_AboutDetails-container_Title-1'>{Title1}</p>
                <p className='Body_AboutDetails-container_Title-2'>{Title2}</p>
              </div>
              <div className='Body_AboutDetails-container-text'>
                {parse(Content)}
              </div>
            </div>
          </div>

          {/* Đấy web */}
          <section id='contact'>
            <div className='Home_bottom-1'>
              <img className='Home_bottom-1-logo' src={`https://drive.google.com/uc?export=view&id=${infor[0].Logo}`} alt=''></img>
              <div className='Home_bottom-1-info'>
                <p className='Home_bottom-1-info-1'><img className='Home_bottom-1-info-img' src={`https://drive.google.com/uc?export=view&id=${infor[0].IconInfor}`} alt=''></img>{infor[0].Infor}</p>
                <div className='Home_bottom-1-info-2-3'>
                  <p className='Home_bottom-1-info-2'><img className='Home_bottom-1-info-img' src={`https://drive.google.com/uc?export=view&id=${infor[0].IconPhone}`} alt=''></img>{infor[0].PhoneNumber}</p>
                  <p className='Home_bottom-1-info-3'><img className='Home_bottom-1-info-img' src={`https://drive.google.com/uc?export=view&id=${infor[0].IconTime}`} alt=''></img>{infor[0].Time}</p>
                </div>
                <p><a href={infor[0].Facebook}>FaceBook: {infor[0].Facebook}</a></p>
                <p className='Home_bottom-1-info-4'><img className='Home_bottom-1-info-img' src={`https://drive.google.com/uc?export=view&id=${infor[0].IconEmail}`} alt=''></img>{infor[0].Email}</p>
                <p className='Home_bottom-1-info-5'><img className='Home_bottom-1-info-img' src={`https://drive.google.com/uc?export=view&id=${infor[0].IconAddress}`} alt=''></img>{infor[0].Address}</p>
              </div>
            </div>
            <div className='Home_bottom-2'>
              <p className='Home_bottom-2_text'>© 2022 All Rights Reserved</p>
            </div>
          </section>
        </div>
      </>
    )
  } else {
    body = (
      <div className='loading'>Loading...</div>
    )
  }
  return (body)
}

export default AboutDetails