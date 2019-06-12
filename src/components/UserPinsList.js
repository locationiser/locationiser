import React, { useCallback, useEffect, useState } from 'react';
import L from 'leaflet';
import styled from 'styled-components/macro';
import { getPins } from '../api/pins';
import Emoji, { emojis } from './Emoji';
import { useMap } from './Map';

const PinList = styled.ul`
  list-style-type: none;
  padding: ${({ theme }) => theme.sizes.nil};
`;

const Pin = styled.li`
  margin: ${({ theme }) => theme.sizes.md} ${({ theme }) => theme.sizes.nil};
`;

function UserPinsList() {
  const map = useMap();
  const [pins, setPins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      const pins = await getPins();
      setPins(pins);
      const markers = pins.map(({ lat, lng }) => {
        const marker = L.marker([lat, lng]).addTo(map);
        return marker;
      });
      map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [40, 40] });
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }, [map]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return isLoading ? (
    <p>
      <Emoji emoji={emojis.waiting} /> Loading...
    </p>
  ) : pins.length ? (
    <PinList>
      {pins.map(pin => (
        <Pin key={pin.id}>
          <Emoji emoji={emojis.pin} />
          <b>{pin.title}</b>
          <br />
          {pin.description}
        </Pin>
      ))}
    </PinList>
  ) : (
    <p>No pins.</p>
  );
}

export default UserPinsList;
