import React from 'react';
import './Certificates.css';

import certificatesData from '../../data/certificates.json';

class Certificates extends React.Component {
  render() {
    return (
      <div className='Certificates-Container'>
        <div className='Default-Header'>
          <p>Certificates</p>
        </div>
        <div className='Certificates-List'>
          <div className='Certificates-Inner-Container'>
            {certificatesData.map(
              (item, index) =>
                index % 2 === 0 && (
                  <div className='Certificates-Item' key={index}>
                    <img src={item.imageLocation} alt={item.name} />
                  </div>
                ),
            )}
          </div>
          <div className='Certificates-Inner-Container'>
            {certificatesData.map(
              (item, index) =>
                index % 2 !== 0 && (
                  <div className='Certificates-Item' key={index}>
                    <img src={item.imageLocation} alt={item.name} />
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
