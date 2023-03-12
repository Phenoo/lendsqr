import React ,{useEffect, useState} from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Moment from 'moment'
import Link from 'next/link';
const userTableStyles = {
  height: '650px',
  backgroundColor: '#fff',
  padding: '10px',
  textTransform: 'capitalize',
  fontSize: '14px',
};

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    const columns = [
        { field: "orgName", headerName: "Organization", width: 100 },
        {
          field: "userName",
          headerName: "Username",
          flex: 1,
          cellClassName: "name-column--cell",
          width: 100,
          renderCell: (params) => (
            <Link href={`/${params.id}`}>{params.value}</Link>
          )
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
          cellClassName: "email-column--cell",
          width: 100


        },
          {
          field: "phoneNumber",
          headerName: "Phone Number",
          flex: 1,
          width: 100
        },
        {
          field: "createdAt",
          headerName: "Date Joined",
          flex: 1,
          width: 100,
          valueFormatter: params => 
          Moment(params?.value).format("MMM Do YY hh:mm A"),
        },
        {
          field: "status",
          headerName: "Status",
          flex: 1,
          renderCell: params => {
            if (params.id % 3  === 0) {
              return <button className='btn-active'>active</button>;
            } else if (params.id % 3 === 1) {
              return <button className='btn-bad'>blacklisted</button>;
            }
            return <button className='btn-pending'>pending</button>;
          }
        },
      ];
    const fetchData = async () => {
        const response = await fetch(' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <div
    sx={{
      "& .MuiDataGrid-root": {
        border: "none",
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
        fontSize: '14px',
      },
      "& .name-column--cell": {
        color: '#213F7D',
        fontSize: '14px',
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: '#ddd',
        borderBottom: "none",
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: '#ddd',
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: 'blue',
      },
      "& .MuiCheckbox-root": {
        color: `#213F7D !important`,
      },
      "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        color: `#213F7D !important`,
        fontSize: '12px',
      },
      "& .MuiDataGrid-root  .MuiDataGrid-cellContent": {
        fontSize: '12px',
      },
    }}
    >
         <DataGrid
          rows={users}
          columns={columns}
          sx={userTableStyles}
                    
        />
        {/* <div>
            <div className='six-grid'>
              {
              columns.map((column, index) => {
                return (
                  <div key={index}>
                      <h6>{column.headerName}</h6>
                  </div>
                )
              } )
              }
            </div>
          {
            users.map((user, index) => {
              return (
                <div key={index} >
                  <ul className="six-grid user-item" >
                    <li>{user.orgName}</li>
                    <li>{user.userName}</li>
                    <li className='email'>{user.email}</li>
                    <li style={{whiteSpace: 'wrap'}}>{user.phoneNumber.substring(0, 10)}</li>
                    <li>
                    {Moment(user.createdAt).format("MMM Do, YYYY.")}
                    </li>
                    <li>{user.status}</li>
                  </ul>
                </div>
              )
            } )
          }
            
        </div> */}
    </div>
  )
}

export default UserContainer