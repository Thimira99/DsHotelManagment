import React, { Component } from 'react';
import AdminNavbar from '../components/AdminNavbar/adminNavbar'; 
import axios from 'axios'

export default class RoomManagement extends Component {

    constructor(props){
        super(props);

        this.state={
            rooms:[]
        };
    }

    componentDidMount(){
        this.retrieveRooms();
    }

    retrieveRooms(){
        axios.get("http://localhost:8000/api/reservations").then(res=>{
            if(res.data.success){
                this.setState({
                    rooms:res.data.existingRooms
                });
                console.log(this.state.rooms)
            }
        });
    }

    onDelete = (id) => {
        if (window.confirm("Do you want to remove this hotel?")) {
          axios.delete(`http://localhost:8000/api/reservations/delete/${id}`).then((res) => {
            alert("Hotel removed Successfully!");
            this.retrieveRooms();
          });
        }
      };

       //Search bar
  filterData(rooms, searchKey) {
    const result = rooms.filter(
      (item) =>
        item.reservationId.toLowerCase().includes(searchKey) || //toLowerCase() helps to filter the data using the lowercase letters.
        item.reservationId.toUpperCase().includes(searchKey) || //toUpperCase() helps to filter the data using the Uppercase letters.
        item.reservationName.toUpperCase().includes(searchKey) ||
        item.reservationName.toLowerCase().includes(searchKey)
    );

    this.setState({ rooms: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/api/reservations").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingRooms, searchKey);
      }
    });
  };




  render() {
    return (
        <div>
            <AdminNavbar/>
            {/* <Sidebar /> */}
            <div className="container"
                    style={{
                    // margin: "40px",
                    // marginLeft: "0px",
                    width: "100%",
                    borderRadius: "0px",
                    marginTop: "-20px",
                    background: "#D3D3D3",
                    }}>
                <div className="col-lg-9 mt-2 mb-2">
            <br />
            <h4
              style={{
                color: 'rgba(6, 21, 117)',
                fontSize: "48px",
                fontWeight: "bold",
                textAlign: "center",
                marginLeft:"100px"
              }}
            >
              All Reservations
            </h4>
          </div>

          <div className="col-lg-9 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
              style={{
                width: "350px",
                marginLeft: "10px",
                marginTop: "30px",
                borderColor: "rgba(6, 21, 117,0.5)",
              }}
            ></input>
          </div>
          <br />
          

          <button className='btn btn-success'><a href='#' style={{textDecoration:'none',color:'white'}}>
                        Add a Reservation
          </a></button>

          &nbsp;&nbsp;
          <button className='btn btn-success'><a href='/home' style={{textDecoration:'none',color:'white'}}>
                        Dashboard
          </a></button>
          
          <div>
              <br/><br/>
                <table className="table table-hover"
                style={{
                    marginLeft:'0px',
                    backgroundColor: "#ffff",
                    borderRadius: "5px",
                    width: "100%",
                    //border: "none",
                }}>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>RESERVATION ID</th>
                            <th scope='col'>RESERVATION NAME</th>
                            <th scope='col'>NUMBER OF RESERVATIONS</th>
                            <th scope='col'>PRICE</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rooms.map((rooms,index)=>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>
                                <a href={`/reservations/${rooms._id}`} style={{textDecoration:'none'}}>
                                 {rooms.reservationId}
                                </a>
                                </td>
                                <td>{rooms.reservationName}</td>
                                <td>{rooms.numberOfReservations}</td>
                                <td>{rooms.price}</td>
                                
                                <td>
                                    <a className='btn btn-warning' href='#' style={{color:'black'}}>
                                        <i className='fas fa-edit'></i>
                                        &nbsp;EDIT
                                    </a>
                                    &nbsp;
                                    <a className ="btn btn-danger" href="#" onClick={() => this.onDelete(rooms._id)} style={{ textDecoration: "none", color: "white" }}
                                        >
                                        <i className='fas fa-trash-alt'></i>
                                        &nbsp;REMOVE
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                   
            </div>
        </div>
        <br/>
        </div>

    )
  }
}
