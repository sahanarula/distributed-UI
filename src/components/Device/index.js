import React from 'react';
import './index.css';

const MyComponent = ({ device, doRemoveDevice }) => {
    return (
        <div id={"device"}>
            {
                device.devices.map((dev, key) => {
                    return <div className="device-type-container" key={key}>
                        <img src={`/assets/images/${dev.type}.png`} alt={dev.type}/>
                        <p>{ dev.type }</p>
                        <p>Owner: { dev.owner.email } </p>
                        <button className={"delete-btn"} onClick={e => doRemoveDevice(dev.id)}>Remove Device</button>
                    </div>
                })
            }
        </div>
    );
};

export default MyComponent;
