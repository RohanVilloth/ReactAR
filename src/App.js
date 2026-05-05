import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="arjs-loader">
          <div className="arjs-loader-spinner"></div>
        </div>

        <div className="fab">
            <span className="fab-action-button">
                <i className="fab-icon"></i>
            </span>
            <ul className="fab-buttons">
                <li className="fab-buttons-item">
                    <a className="fab-buttons-link" target="_blank" href="https://github.com/RohanVilloth/ReactAR/blob/main/README.md" data-tooltip="How to use">
                        <i className="icon-material icon-material-info"></i>
                    </a>
                </li>
                <li className="fab-buttons-item">
                    <a className="fab-buttons-link" target="_blank" href="https://github.com/RohanVilloth/ReactAR/raw/main/public/assets/markers/phoenix-of-autumn.jpg" data-tooltip="Open marker image">
                        <i className="icon-material icon-material-image"></i>
                    </a>
                </li>
                <li className="fab-buttons-item">
                    <a className="fab-buttons-link" target="_blank" href="https://github.com/RohanVilloth/ReactAR" data-tooltip="View source code">
                        <i className="icon-material icon-material-source"></i>
                    </a>
                </li>
                <li className="fab-buttons-item">
                    <a className="fab-buttons-link" target="_blank" href="https://RohanVilloth.github.io" data-tooltip="About me">
                        <i className="icon-material icon-material-about"></i>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
