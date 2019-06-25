import Leaflet from 'leaflet';

const L = {
  map: jest.fn(() => ({
    on: jest.fn(),
    remove: jest.fn(),
    setView: jest.fn(),
    fitBounds: jest.fn(),
    locate: jest.fn(),
    getCenter: jest.fn(),
    addControl: jest.fn(),
    removeControl: jest.fn(),
    removeLayer: jest.fn(),
    zoomControl: null,
    dragging: {
      enable: jest.fn(),
      disable: jest.fn(),
    },
    touchZoom: {
      enable: jest.fn(),
      disable: jest.fn(),
    },
    doubleClickZoom: {
      enable: jest.fn(),
      disable: jest.fn(),
    },
    scrollWheelZoom: {
      enable: jest.fn(),
      disable: jest.fn(),
    },
    boxZoom: {
      enable: jest.fn(),
      disable: jest.fn(),
    },
    keyboard: {
      enable: jest.fn(),
      disable: jest.fn(),
    },
    tap: {
      enable: jest.fn(),
      disable: jest.fn(),
    },
  })),
  tileLayer: jest.fn(),
  control: {
    zoom: jest.fn(() => ({})),
  },
  marker: jest.fn(() => ({
    addTo: jest.fn(),
    bindPopup: jest.fn(),
    openPopup: jest.fn(),
    getLatLng: jest.fn(),
    remove: jest.fn(),
  })),
  featureGroup: jest.fn(() => ({
    getBounds: jest.fn(),
  })),
  Icon: Leaflet.Icon,
  Marker: Leaflet.Marker,
};

export default L;
