import React, { useState, useRef, useEffect } from 'react'
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"
import parse from 'html-react-parser'
import { apiUrl } from '../contexts/constants';
import '../css/Home.css'

function Home() {
  const navigate = useNavigate()
  const [Loading, setLoading] = useState(false)
  const [Loading2, setLoading2] = useState(false)
  const [Loading3, setLoading3] = useState(false)
  const [Loading4, setLoading4] = useState(false)
  const [Loading5, setLoading5] = useState(false)
  const [Loading6, setLoading6] = useState(false)
  const [Loading7, setLoading7] = useState(false)
  const [Loading8, setLoading8] = useState(false)
  //============================
  let ref = useRef()
  //============================
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  //===============================================
  const [infor, setinfor] = useState([])
  const [service, setservice] = useState([])
  const [about, setabout] = useState([])
  const [blog, setblog] = useState([])
  const [question, setquestion] = useState([])
  const [nof, setnof] = useState([])
  const [email, setemail] = useState('')
  const [Top, setTop] = useState([])
  //===============================================
  const [Name, setName] = useState('')
  const [EmailNhan, setEmailNhan] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [Title, setTitle] = useState('')
  const [ContentEmail, setContentEmail] = useState('')
  //===============================================
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
          setLoading(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])

  //Service
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/service", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setservice(result.data)
          setLoading2(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])
  //About
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/about", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setabout(result.data)
          setLoading3(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])
  //Blog
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/blog", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setblog(result.data)
          setLoading4(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])

  //question
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/question", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setquestion(result.data)
          setLoading5(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])
  //nof
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/nof", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setnof(result.data)
          setLoading6(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])
  //Email
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/email", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setemail(result.data[0].Icon)
          setLoading7(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])

  //Top
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/top", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setTop(result.data)
          setLoading8(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [])
  //Click++++++++++++++++++++++++++++++++++++++++++
  //Click Service
  const ClickService = (data) => {
    return (event) => {
      navigate('/details-service/' + data._id)
    }
  }

  //ClickAbout
  const ClickAbout = (data) => {
    return (event) => {
      navigate('/details-about/' + data._id)
    }
  }

  //ClickBlog
  const ClickBlog = (data) => {
    return (event) => {
      navigate('/details-blog/' + data._id)
    }
  }

  //ClickNof
  const ClickNof = (data) => {
    return (event) => {
      navigate('/details-nof/' + data._id)
    }
  }

  //ClickSendEmail
  const sendEmail = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("Name", Name);
    urlencoded.append("emailNhan", EmailNhan);
    urlencoded.append("PhoneNumber", PhoneNumber);
    urlencoded.append("Title", Title);
    urlencoded.append("Content", ContentEmail);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(apiUrl + "/send-email", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          alert(result.message)
          setName('')
          setEmailNhan('')
          setPhoneNumber('')
          setTitle('')
          setContentEmail('')
        } else {
          alert(result.message)
        }
      })
      .catch(error => console.log('error', error));
  }
  //============================
  //HTML
  let body
  if (Loading && Loading2 && Loading3 && Loading4 && Loading5 && Loading6 && Loading7 && Loading8) {
    //body 1
    const listService = service.map(data => (
      <div key={data._id} className='Home-body-1-Card' onClick={ClickService(data)}>
        <img className='Home-body-1-Card-img' src={`https://drive.google.com/uc?export=view&id=${data.Icon}`} alt='' />
        <h5 className='Home-body-1-Card-title'>{data.Title}</h5>
      </div>
    ))
    //body 2
    const listAbout = about.map(data => (
      <div key={data._id} className='Home-body-2-Card' onClick={ClickAbout(data)}>
        <img src={`https://drive.google.com/uc?export=view&id=${data.Icon}`} alt='' className='Home-body-2-Card-img' />
        <div className='Home-body-2-Card-inf'>
          <h4>{data.Title1}</h4>
          <p>{data.Title2}</p>
        </div>
      </div>
    ))
    //body 4
    const listNof = nof.map(data => (
      <div key={data._id} className='Home-body-4-card' onClick={ClickNof(data)}>
        <img src={question} alt='' className='Home-body-4-card-img'></img>
        <div className='Home-body-4-card-inf'>
          <h4 className='Home-body-4-card-title'>{data.Title1}</h4>
          {parse(data.Title2)}
        </div>
      </div>
    ))
    //body 5
    const listBlog = blog.map(data => (
      <div key={data._id} className='Home-Body-card-5' onClick={ClickBlog(data)}>
        <img className='Home-Body-card-5_Img_CT' src={`https://drive.google.com/uc?export=view&id=${data.Icon}`} alt=''></img>
        <div className='Home-Body-card-5_Title_container'>
          <p className='Home-Body-card-5_Title-1'>{data.Title1}</p>
          <p className='Home-Body-card-5_Title-2'>{data.Title2}</p>
          <button className='Home-Body-card-5_btn'>
            Ti???p T???c ?????c
            <svg className="w-6 h-6 Home-Body-card-5_btn_Icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    ))
    //body 6
    const listQuestion = question.map(data => (
      <Accordion key={data._id}>
        <Accordion.Item eventKey={data._id}>
          <Accordion.Header>{data.Title}</Accordion.Header>
          <Accordion.Body>
            {parse(data.Content)}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ))
    body = (
      <>
        {/* Heder */}
        <div className='Home-header'>
          <img className='Home-logo' src={`https://drive.google.com/uc?export=view&id=${infor[0].Logo}`} alt=''></img>
          <div className='Home-left'>
            <a className='Home-header-text' href="#services" data-after="Service">D???ch V???</a>
            <a className='Home-header-text' href="#abunt" data-after="About">Gi???i Thi???u</a>
            <a className='Home-header-text' href="#question" data-after="Question">H???i ????p</a>
            <a className='Home-header-text' href="#notify" data-after="Notify">Th??ng B??o</a>
            <a className='Home-header-text' href="#blog" data-after="Blog">Blog</a>
            <a className='Home-header-text' href="#question-a" data-after="Question-a">Gi???i ????p</a>
            <a className='Home-header-text' href="#contact" data-after="Contact">Li???n H???</a>
          </div>
        </div>

        {/* Top */}
        <div className='Home-top'>
          <div className='Home-top-left'>
            <div className='Home-top-text'>
              {parse(Top[0].Content)}
            </div>
          </div>
          <img className='Home-top-right' src={`https://drive.google.com/uc?export=view&id=${Top[0].Icon}`} alt=''></img>
        </div>

        {/* Body 1 */}
        <section id="services">
          <div className='Home-body-1'>
            <h4 className='title-h4-b Home-body-1-title'>D???ch V???</h4>
            <p className='Home-body-1-text'>Ch??ng t??i cung c???p m???t s??? d???ch v??? t?? v???n v??? ph??p lu???t</p>
            <div className='Home-body-1-Container'>

              {listService}

            </div>
          </div>
        </section>
        {/* body 2 */}
        <section id="abunt">
          <div className='Home-body-2'>
            <h4 className='title-h4-w Home-body-2-title'>?????i Ng?? C???a Ch??ng T??i</h4>
            <div className='Home-body-2-Container'>

              {listAbout}

            </div>
          </div>
        </section>
        {/* body 3 */}
        <section id='question'>
          <div className='Home-body-3'>
            <h4 className='title-h4-b Home-body-3-title'>H???i ????p</h4>
            <div className='Home-body-3-Container'>
              <img src={`https://drive.google.com/uc?export=view&id=${email}`} alt='' className='Home-body-3-img' />
              <div className='Home-body-3-right'>
                <h4>?????T C??U H???I TR???C TUY???N CHO LU???T S??</h4>
                <div className='Home-body-3-font'>
                  <div>
                    <label>H??? V?? T??n</label>
                  </div>
                  <input type='text' onChange={e => setName(e.target.value)} value={Name}></input>
                  <div>
                    <label>Email ????? nh???n t?? v???n (*)</label>
                  </div>
                  <input type='email' onChange={e => setEmailNhan(e.target.value)} value={EmailNhan}></input>
                  <div>
                    <label>S??? ??i???n tho???i (*)</label>
                  </div>
                  <input type='text' onChange={e => setPhoneNumber(e.target.value)} value={PhoneNumber}></input>
                  <div>
                    <label>Ti??u ????? c??u h???i</label>
                  </div>
                  <input type='text' onChange={e => setTitle(e.target.value)} value={Title}></input>
                  <div>
                    <label>N???i dung t?? v???n</label>
                  </div>
                  <textarea className='Home-body-3-font-textarea' onChange={e => setContentEmail(e.target.value)} value={ContentEmail}></textarea>
                  <div>
                    <button className='Home-body-3-btn' onClick={sendEmail}>X??c Nh???n</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* body 4 */}
        <section id='notify'>
          <div className='Home-body-4'>
            <h4 className='title-h4-w Home-body-4-title'>Th??ng B??o</h4>
            <div className='Home-body-4-container'>

              {listNof}

            </div>
          </div>
        </section>
        {/* body 5 */}
        <section id="blog">
          <div className='Home-body__5'>
            <h2 className='title-h4-b Home-body__5-title'>Blog</h2>
            <p className='Home-body__5-Title__chir-2'>Ho???t ?????ng G???n ????y C???a Ch??ng T??i</p>
            <div className='Home-body__5_AllCard'>
              <button className='Home-body__5_AllCard-btn'><svg className="w-6 h-6 Home-body__4_AllCard-btn-l" onClick={() => scroll(-300)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg></button>
              <div className='Home-body__5_AllCard_container' ref={ref}>

                {listBlog}

              </div>
              <button className='Home-body__5_AllCard-btn'><svg className="w-6 h-6 Home-body__4_AllCard-btn-r" onClick={() => scroll(300)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg></button>
            </div>
          </div>
        </section>
        {/* body 6 */}
        <section id='question-a'>
          <div className='Home-body-6'>
            <h4 className='title-h4-w Home-body-6-title'>C??U H???I TH?????NG G???P</h4>
            <div className='Home-body-6-container'>
              {listQuestion}
            </div>
          </div>
        </section>

        {/* day web */}
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
            <p className='Home_bottom-2_text'>?? 2022 All Rights Reserved</p>
          </div>
        </section>
      </>
    )
  } else {
    body = (
      <div className='loading'>Loading...</div>
    )
  }

  return (body)
}

export default Home