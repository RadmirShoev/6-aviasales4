import React from 'react';
import { Card } from 'antd';

import { formatPrice, formatTime, formatDuration } from '../../utils';

import './Ticket.scss';

let minId = 100;

function Ticket({ data }) {
  const { price, carrier, segments } = data; //carrier, segments

  const segmentsArr = segments.map((segment) => {
    let transfer = 'БЕЗ ПЕРЕСАДОК';
    const stopsNum = segment.stops.length;

    if (stopsNum === 1) transfer = '1 ПЕРЕСАДКА';
    if (stopsNum > 1) transfer = `${segment.stops.length} ПЕРЕСАДКИ`;

    return (
      <div key={minId++} className="ticket__line">
        <div className="info-blok">
          <div className="info-blok__label">{`${segment.origin} - ${segment.destination}`}</div>
          <div className="info-blok__value">{formatTime(segment.date, segment.duration)}</div>
        </div>
        <div className="info-blok">
          <div className="info-blok__label">В ПУТИ</div>
          <div className="info-blok__value">{formatDuration(segment.duration)}</div>
        </div>
        <div className="info-blok">
          <div className="info-blok__label">{transfer}</div>
          <div className="iinfo-blok__value">{segment.stops.join(', ')}</div>
        </div>
      </div>
    );
  });

  return (
    <Card className="ticket" hoverable>
      <div className="ticket__header">
        <div className="ticket__price"> {`${formatPrice(price)} Р`}</div>
        <img className="ticket__logo" src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`logo ${carrier}`} />
      </div>
      {segmentsArr}
    </Card>
  );
}

export default Ticket;
