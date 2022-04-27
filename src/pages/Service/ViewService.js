import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Table } from 'react-bootstrap';
import parse from 'html-react-parser'
import { apiUrl } from '../../contexts/constants';

function ViewService() {
  let navigate = useNavigate();
  const [Loading, setLoading] = useState(false)
  const [Loading2, setLoading2] = useState(false)
  const [Loading3, setLoading3] = useState(false)
  const [ChangeTable, setChangeTable] = useState(true)
  const [infor, setinfor] = useState([])
  const [dataTable, setdataTable] = useState([])
  //=====================================
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
  //=====================================
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${apiUrl}/service`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setdataTable(result.data)
          setLoading3(true)
        }
      })
      .catch(error => console.log('error', error));
  }, [ChangeTable])
  //=====================================
  //Add service
  const AddService = () => {
    navigate('/add-service')
  }
  //Chi tiết Service
  const ServiceDetails = (data) => {
    return (event) => {
      navigate('/details-service/' + data._id)
    }
  }
  //Edit Service
  const EditService = (data) => {
    return (event) => {
      navigate('/edit-service/' + data._id)
    }
  }
  //Xóa service
  const DelService = (data) => {
    return (event) => {
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

      fetch(apiUrl + "/service/" + data._id, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            setChangeTable(!ChangeTable)
          } else {
            alert(result.message)
          }
        })
        .catch(error => console.log('error', error));
    }
  }
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
  const ViewEmail = () => {
    navigate('/view-email')
  }
  //=====================================
  //HTML
  let body
  if (Loading && Loading2 && Loading3) {
    const listTable = dataTable.map(data => (
      <tr key={data._id}>
        <td><img className='Admin-table-Icon' src={`https://drive.google.com/uc?export=view&id=${data.Icon}`} alt=''></img></td>
        <td>{parse(data.Title)}</td>
        <td>
          <button className='Admin-btn-edit' onClick={ServiceDetails(data)}>Chi Tiết</button>
          <button className='Admin-btn-edit' onClick={EditService(data)}>Edit</button>
          <button className='Admin-btn-del' onClick={DelService(data)}>Xoa</button>
        </td>
      </tr>
    ))
    body = (
      <>
        {/* Heder */}
        <div className='Home-header'>
          <img className='Home-logo' src={`https://drive.google.com/uc?export=view&id=${infor[0].Logo}`} alt=''></img>
          <div className='Home-left'>
            <div className='Home-header-text' onClick={viewInfor}>Thông Tin Chung</div>
            <div className='Home-header-text' onClick={ViewTop}>Top</div>
            <div className='Home-header-text' onClick={ViewService}>Dịch Vụ</div>
            <div className='Home-header-text' onClick={ViewAbout}>Giới Thiệu</div>
            <div className='Home-header-text' onClick={ViewEmail}>Email</div>
            <div className='Home-header-text' onClick={ViewNof}>Thông Báo</div>
            <div className='Home-header-text' onClick={ViewBlog}>Blog</div>
            <div className='Home-header-text' onClick={ViewQue}>Giải Đáp</div>
            <button className='Admin-btn-logout' onClick={logout}>LogOut</button>
          </div>
        </div>

        <div className='Name'>
          <button className='Admin-btn-add' onClick={AddService}>Thêm</button>
          <Table className='Admin-Table' striped bordered hover >
            <thead>
              <tr>
                <th>Icon</th>
                <th>Tiêu Đề</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {listTable}
            </tbody>
          </Table>
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

export default ViewService