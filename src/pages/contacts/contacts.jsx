import React, { useState, useEffect } from 'react';
import '../../styles/contacts.css';
import Footer from '../../components/footer/footer';
import useSlideAnimation from '../../animation/useSlideAnimation';
import { FaPhone } from "react-icons/fa6";

const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// Module-level queue so the Maps script is only injected once
const mapInitQueue = [];
let mapsScriptStatus = 'idle'; // 'idle' | 'loading' | 'ready'

function loadMapsScript() {
  if (mapsScriptStatus !== 'idle') return;
  mapsScriptStatus = 'loading';
  window.__initGoogleMaps = () => {
    mapsScriptStatus = 'ready';
    mapInitQueue.forEach(fn => fn());
    mapInitQueue.length = 0;
  };
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=__initGoogleMaps`;
  script.defer = true;
  document.head.appendChild(script);
}

function runWhenReady(fn) {
  if (mapsScriptStatus === 'ready' && window.google?.maps) {
    fn();
  } else {
    mapInitQueue.push(fn);
    loadMapsScript();
  }
}

function MapComponent({ address }) {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (!address) return;
    const controller = new AbortController();
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${MAPS_API_KEY}`,
      { signal: controller.signal }
    )
      .then(r => {
        if (!r.ok) throw new Error('Geocode request failed');
        return r.json();
      })
      .then(data => {
        if (data.results?.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        }
      })
      .catch(err => {
        if (err.name !== 'AbortError') console.error('Geocode error:', err);
      });
    return () => controller.abort();
  }, [address]);

  useEffect(() => {
    if (!coordinates) return;
    const mapId = `map-${address}`;
    runWhenReady(() => {
      const el = document.getElementById(mapId);
      if (!el) return;
      const map = new window.google.maps.Map(el, { center: coordinates, zoom: 12 });
      new window.google.maps.Marker({ position: coordinates, map, title: address });
    });
  }, [coordinates, address]);

  return (
    <div className='map' id={`map-${address}`} style={{ width: '100%', height: '250px' }} />
  );
}

function Contacts() {
  useSlideAnimation();
  const addresses = [
    { address: "2 Ovie Nmhada Street, Somolu", phone: "+234 123 456 7890" },
    { address: "Olayinka Adewuyi St, Lekki Phase I", phone: "+234 123 456 7890" },
    { address: "Anthony, Ikeja 105102, Lagos", phone: "+234 123 456 7890" }
  ];

  return (
    <div className='hidden' id='contact-us-container'>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} required></textarea>
          <label htmlFor="floatingTextarea2">Message</label>
        </div>
        <br />
        <button style={{ width: '100%' }} type="submit" className="btn btn-dark">Send</button>
      </form>
      <p>You can reach out to us if you have any questions</p>
      <br />
      <h4>OUR LOCATIONS</h4>
      <div id='map-container'>
        <div className="row">
          {addresses.map((addressInfo) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={addressInfo.address}>
              <div>
                <MapComponent address={addressInfo.address} />
                <span id='address'>{addressInfo.address}</span>
                <br />
                <span id='number'><FaPhone /> {addressInfo.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
