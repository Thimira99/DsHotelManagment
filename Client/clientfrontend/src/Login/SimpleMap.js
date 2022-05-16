import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from '@react-google-maps/api';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Circle } from '@react-google-maps/api';

const libraries = ['places', 'geometry'];
const mapContainerStyle = {
  width: '100%',
  height: '40vh',
};
const center = {
  lat: 6.9271,
  lng: 79.8612,
};
const options = {
  zoomControl: true,
};

const circleOptions = {
  strokeColor: '#00a3a6',
  strokeOpacity: 0.4,
  strokeWeight: 2,
  fillColor: '#00a3a6',
  fillOpacity: 0.1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 1050,
  zIndex: 1,
};



export default function SimpleMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBltgxLK8Nz-TI7IDzaRjXTxGIoO8QHCgI",
    libraries,
  });

  



  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        options={options}
        center={center}
       >
        <Circle center={center} options={circleOptions} />
        {<Marker position={{ lat:6.932468, lng: 79.852703 }} />}
      </GoogleMap>
    );
  };



  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <>
      <div>{renderMap()}</div>
      {/* <Modal
        show={showModal}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Address is out of bounds</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sorry ! We Dont Deliver Food In Your Area .</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalClose}>Choose New Address</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
