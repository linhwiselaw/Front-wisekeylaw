import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { apiUrl } from '../../contexts/constants'
import logo from '../../img/logo.png'

function ViewNof() {
  let navigate = useNavigate();
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    const checklogin = () => {
      //kiểm tra có cookie nào tồn tại hay không
      if (document.cookie.split(';').some((item) => item.trim().startsWith('accessToken='))) {
        //đoc cookie
        const cookieValue = document.cookie
          .split('; ')
          .find(row => row.startsWith('accessToken='))
          .split('=')[1];
        //Gửi req token lên server xác thực
        var myHeaders = new Headers();
        myHeaders.append("token", cookieValue);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        return fetch(apiUrl + `/login`, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              setLoading(true)
            } else {
              navigate('/login')
            }
          })
          .catch(error => console.log('error', error));
      } else {
        navigate('/login')
      }
    }
    checklogin()
  }, [navigate])
  //=====================================
  //click logout
  const logout = () => {
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  }
  //=====================================

  const viewInfor = () => {
    navigate('/admin')
  }
  const ViewTop = () => {
    navigate('/view-top')
  }
  const ViewService = () => {
    navigate('/view-service')
  }
  const ViewAbout = () => {
    navigate('/view-about')
  }
  const ViewNof = () => {
    navigate('/view-nof')
  }
  const ViewBlog = () => {
    navigate('/view-blog')
  }
  const ViewQue = () => {
    navigate('/view-que')
  }

  //=====================================
  //HTML
  let body
  if (Loading) {
    body = (
      <>
        {/* Heder */}
        <div className='Home-header'>
          <img className='Home-logo' src={logo} alt=''></img>
          <div className='Home-left'>
            <div className='Home-header-text' onClick={viewInfor}>Thông Tin Chung</div>
            <div className='Home-header-text' onClick={ViewTop}>Top</div>
            <div className='Home-header-text' onClick={ViewService}>Dịch Vụ</div>
            <div className='Home-header-text' onClick={ViewAbout}>Giới Thiệu</div>
            <div className='Home-header-text' onClick={ViewNof}>Thông Báo</div>
            <div className='Home-header-text' onClick={ViewBlog}>Blog</div>
            <div className='Home-header-text' onClick={ViewQue}>Giải Đáp</div>
            <button className='Admin-btn-logout' onClick={logout}>LogOut</button>
          </div>
        </div>
      </>
    )
  }

  return (body)
}
export default ViewNof