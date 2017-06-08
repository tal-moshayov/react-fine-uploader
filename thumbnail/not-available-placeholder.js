"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotAvailablePlaceholder = function (_Component) {
    _inherits(NotAvailablePlaceholder, _Component);

    function NotAvailablePlaceholder() {
        _classCallCheck(this, NotAvailablePlaceholder);

        return _possibleConstructorReturn(this, (NotAvailablePlaceholder.__proto__ || Object.getPrototypeOf(NotAvailablePlaceholder)).apply(this, arguments));
    }

    _createClass(NotAvailablePlaceholder, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "svg",
                { height: this.props.maxSize, width: this.props.maxSize, viewBox: "0 0 252 300", version: "1.1" },
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 0.00 0.00 L 252.00 0.00 L 252.00 300.00 L 0.00 300.00 L 0.00 279.07 C 0.21 281.56 2.43 283.73 4.98 283.51 C 54.33 283.52 103.68 283.47 153.03 283.53 C 163.75 293.62 178.22 299.86 193.02 299.75 C 209.68 300.16 226.27 292.72 237.25 280.22 C 246.51 269.83 252.00 255.97 251.75 242.00 C 252.22 227.72 246.68 213.46 237.19 202.83 C 236.46 201.92 235.43 201.19 235.01 200.08 C 234.92 158.48 235.13 116.87 234.91 75.28 C 215.93 56.82 196.64 38.69 177.62 20.28 C 170.86 14.13 164.58 7.44 157.65 1.49 C 106.73 1.51 55.82 1.49 4.90 1.50 C 2.72 1.29 1.25 3.08 0.00 4.58 L 0.00 0.00 Z" }),
                _react2.default.createElement("path", { fill: "#525352", d: " M 0.00 4.58 C 1.25 3.08 2.72 1.29 4.90 1.50 C 55.82 1.49 106.73 1.51 157.65 1.49 C 164.58 7.44 170.86 14.13 177.62 20.28 C 196.64 38.69 215.93 56.82 234.91 75.28 C 235.13 116.87 234.92 158.48 235.01 200.08 C 235.43 201.19 236.46 201.92 237.19 202.83 C 246.68 213.46 252.22 227.72 251.75 242.00 C 252.00 255.97 246.51 269.83 237.25 280.22 C 226.27 292.72 209.68 300.16 193.02 299.75 C 178.22 299.86 163.75 293.62 153.03 283.53 C 103.68 283.47 54.33 283.52 4.98 283.51 C 2.43 283.73 0.21 281.56 0.00 279.07 L 0.00 4.58 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 18.27 19.97 C 19.84 19.39 21.63 19.90 23.28 19.79 C 21.74 21.53 19.73 22.95 18.62 25.03 C 18.50 28.06 18.60 31.09 18.69 34.11 C 23.87 29.67 28.43 24.52 33.33 19.77 C 37.67 19.77 42.01 19.65 46.34 19.84 C 37.18 29.45 27.59 38.65 18.27 48.11 C 18.40 38.72 17.69 29.36 18.27 19.97 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 23.28 19.79 C 26.63 19.71 29.98 19.75 33.33 19.77 C 28.43 24.52 23.87 29.67 18.69 34.11 C 18.60 31.09 18.50 28.06 18.62 25.03 C 19.73 22.95 21.74 21.53 23.28 19.79 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 46.34 19.84 C 49.71 19.63 53.13 19.80 56.52 19.77 C 43.83 32.57 31.13 45.37 18.25 57.99 C 18.26 54.69 18.22 51.40 18.27 48.11 C 27.59 38.65 37.18 29.45 46.34 19.84 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 56.52 19.77 C 60.83 19.74 65.14 19.71 69.45 19.79 C 52.52 37.03 35.29 53.98 18.27 71.12 C 18.23 66.74 18.25 62.36 18.25 57.99 C 31.13 45.37 43.83 32.57 56.52 19.77 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 69.45 19.79 C 72.81 19.70 76.17 19.76 79.53 19.77 C 59.20 40.32 38.60 60.61 18.28 81.17 C 18.23 77.82 18.23 74.47 18.27 71.12 C 35.29 53.98 52.52 37.03 69.45 19.79 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 79.53 19.77 C 83.77 19.95 88.19 19.29 92.32 20.11 C 67.83 44.98 43.05 69.60 18.30 94.22 C 18.22 89.87 18.23 85.52 18.28 81.17 C 38.60 60.61 59.20 40.32 79.53 19.77 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 92.32 20.11 L 92.70 19.72 C 96.04 19.80 99.39 19.71 102.74 19.77 C 74.71 48.09 46.39 76.13 18.28 104.37 C 18.25 100.98 18.20 97.60 18.30 94.22 C 43.05 69.60 67.83 44.98 92.32 20.11 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 102.74 19.77 C 106.92 19.93 111.25 19.32 115.34 20.09 C 112.00 23.83 108.31 27.23 104.81 30.81 C 75.95 59.59 47.26 88.53 18.30 117.21 C 18.22 112.93 18.23 108.64 18.28 104.37 C 46.39 76.13 74.71 48.09 102.74 19.77 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 115.34 20.09 L 115.69 19.72 C 119.04 19.80 122.38 19.71 125.73 19.77 C 90.04 55.76 54.06 91.46 18.28 127.37 C 18.25 123.98 18.19 120.59 18.30 117.21 C 47.26 88.53 75.95 59.59 104.81 30.81 C 108.31 27.23 112.00 23.83 115.34 20.09 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 125.73 19.77 C 129.88 20.06 134.43 19.06 138.31 20.29 C 136.70 22.34 134.76 24.09 132.93 25.94 C 102.10 56.77 71.27 87.60 40.44 118.43 C 33.04 125.71 25.89 133.24 18.33 140.34 C 18.18 136.02 18.25 131.69 18.28 127.37 C 54.06 91.46 90.04 55.76 125.73 19.77 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 138.31 20.29 L 138.78 19.74 C 142.18 19.77 145.58 19.73 148.97 19.77 C 105.53 63.48 61.86 106.99 18.27 150.56 C 18.28 147.15 18.15 143.74 18.33 140.34 C 25.89 133.24 33.04 125.71 40.44 118.43 C 71.27 87.60 102.10 56.77 132.93 25.94 C 134.76 24.09 136.70 22.34 138.31 20.29 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 148.97 19.77 C 149.41 19.77 150.29 19.77 150.73 19.77 C 150.76 23.59 150.76 27.40 150.74 31.21 C 109.55 72.22 68.53 113.39 27.41 154.46 C 24.39 157.43 21.49 160.54 18.32 163.36 C 18.18 159.09 18.26 154.82 18.27 150.56 C 61.86 106.99 105.53 63.48 148.97 19.77 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 27.41 154.46 C 68.53 113.39 109.55 72.22 150.74 31.21 C 150.76 34.49 150.75 37.78 150.75 41.06 C 106.64 85.27 62.49 129.44 18.26 173.53 C 18.28 170.14 18.16 166.74 18.32 163.36 C 21.49 160.54 24.39 157.43 27.41 154.46 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 18.26 173.53 C 62.49 129.44 106.64 85.27 150.75 41.06 C 150.74 45.52 150.78 49.99 150.73 54.45 C 106.53 98.56 62.38 142.72 18.26 186.92 C 18.25 182.46 18.23 177.99 18.26 173.53 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 18.26 186.92 C 62.38 142.72 106.53 98.56 150.73 54.45 C 150.69 57.78 150.90 61.14 150.64 64.46 C 149.89 65.10 149.15 65.76 148.44 66.44 C 105.03 109.79 61.71 153.23 18.27 196.56 C 18.23 193.34 18.24 190.13 18.26 186.92 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 148.44 66.44 C 149.15 65.76 149.89 65.10 150.64 64.46 C 150.87 68.77 150.72 73.11 150.73 77.43 C 106.56 121.58 62.35 165.71 18.26 209.94 C 18.26 205.48 18.22 201.01 18.27 196.56 C 61.71 153.23 105.03 109.79 148.44 66.44 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 18.26 209.94 C 62.35 165.71 106.56 121.58 150.73 77.43 C 150.51 80.16 150.59 83.44 153.47 84.78 C 108.27 129.65 63.42 174.88 18.26 219.80 C 18.24 216.51 18.24 213.22 18.26 209.94 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 153.47 84.78 C 157.68 85.24 161.92 84.84 166.14 85.07 C 117.01 134.57 67.55 183.74 18.27 233.09 C 18.24 228.66 18.24 224.23 18.26 219.80 C 63.42 174.88 108.27 129.65 153.47 84.78 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 166.14 85.07 C 169.49 84.92 172.85 85.00 176.20 85.04 C 123.43 137.48 71.02 190.31 18.26 242.77 C 18.25 239.54 18.22 236.32 18.27 233.09 C 67.55 183.74 117.01 134.57 166.14 85.07 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 176.20 85.04 C 180.51 84.97 184.82 84.95 189.12 85.08 C 132.35 142.26 75.19 199.07 18.27 256.11 C 18.24 251.66 18.24 247.22 18.26 242.77 C 71.02 190.31 123.43 137.48 176.20 85.04 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 189.12 85.08 C 192.54 84.91 195.97 85.01 199.39 85.03 C 142.78 141.53 86.28 198.13 29.71 254.67 C 26.34 258.11 22.79 261.40 19.56 264.98 L 18.98 265.60 C 17.33 263.02 18.67 259.18 18.27 256.11 C 75.19 199.07 132.35 142.26 189.12 85.08 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 199.39 85.03 C 203.66 85.00 207.95 84.90 212.22 85.11 C 198.55 99.45 184.25 113.18 170.34 127.28 C 124.40 173.28 78.35 219.17 32.48 265.23 C 28.18 265.12 23.80 265.58 19.56 264.98 C 22.79 261.40 26.34 258.11 29.71 254.67 C 86.28 198.13 142.78 141.53 199.39 85.03 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 212.22 85.11 C 213.79 84.88 215.40 85.02 216.98 85.01 C 216.96 86.94 217.14 88.89 216.87 90.80 C 201.36 105.62 186.47 121.10 171.20 136.17 C 139.03 168.35 106.85 200.53 74.67 232.70 C 64.06 243.45 53.17 253.94 42.73 264.85 L 42.33 265.28 C 39.05 265.20 35.76 265.29 32.48 265.23 C 78.35 219.17 124.40 173.28 170.34 127.28 C 184.25 113.18 198.55 99.45 212.22 85.11 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 171.20 136.17 C 186.47 121.10 201.36 105.62 216.87 90.80 C 217.12 95.07 216.98 99.35 216.97 103.62 C 163.19 157.54 109.22 211.27 55.49 265.23 C 51.26 265.02 46.80 265.76 42.73 264.85 C 53.17 253.94 64.06 243.45 74.67 232.70 C 106.85 200.53 139.03 168.35 171.20 136.17 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 55.49 265.23 C 109.22 211.27 163.19 157.54 216.97 103.62 C 216.98 107.04 217.09 110.47 216.92 113.89 C 169.72 160.66 122.91 207.83 75.87 254.76 C 72.45 258.24 68.88 261.57 65.61 265.19 C 62.24 265.32 58.86 265.23 55.49 265.23 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 75.87 254.76 C 122.91 207.83 169.72 160.66 216.92 113.89 C 217.06 118.13 217.01 122.37 216.97 126.61 C 170.87 172.88 124.54 218.92 78.49 265.23 C 74.20 265.25 69.90 265.31 65.61 265.19 C 68.88 261.57 72.45 258.24 75.87 254.76 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 78.49 265.23 C 124.54 218.92 170.87 172.88 216.97 126.61 C 217.00 130.02 217.07 133.43 216.94 136.83 C 199.92 153.51 183.23 170.52 166.31 187.30 C 164.81 188.76 163.34 190.26 162.10 191.94 C 159.60 194.48 156.45 196.32 153.93 198.86 C 150.05 202.08 147.44 206.51 143.95 210.08 C 140.61 212.64 137.88 215.88 134.84 218.78 C 119.44 234.28 103.85 249.59 88.57 265.20 C 85.21 265.30 81.85 265.23 78.49 265.23 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 166.31 187.30 C 183.23 170.52 199.92 153.51 216.94 136.83 C 217.03 141.15 217.04 145.47 216.95 149.78 C 205.65 161.41 194.02 172.72 182.63 184.27 C 175.92 185.62 169.42 188.04 163.54 191.58 C 163.18 191.67 162.46 191.85 162.10 191.94 C 163.34 190.26 164.81 188.76 166.31 187.30 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 182.63 184.27 C 194.02 172.72 205.65 161.41 216.95 149.78 C 217.02 153.17 217.03 156.56 216.97 159.95 C 209.19 167.66 201.42 175.39 193.74 183.20 C 190.01 183.32 186.30 183.64 182.63 184.27 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 193.74 183.20 C 201.42 175.39 209.19 167.66 216.97 159.95 C 217.01 164.23 217.04 168.51 216.96 172.80 C 213.60 176.97 208.68 179.97 206.09 184.65 C 202.04 183.69 197.88 183.37 193.74 183.20 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 206.09 184.65 C 208.68 179.97 213.60 176.97 216.96 172.80 C 216.97 176.81 217.19 180.83 216.73 184.83 L 215.42 184.54 C 215.53 185.11 215.73 186.25 215.83 186.82 C 212.45 186.71 209.40 185.16 206.09 184.65 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 134.84 218.78 C 137.88 215.88 140.61 212.64 143.95 210.08 C 143.87 210.46 143.70 211.23 143.62 211.61 C 140.00 217.58 137.54 224.21 136.28 231.07 L 136.28 231.07 C 135.42 231.60 134.62 232.21 133.92 232.93 C 123.19 243.72 112.39 254.43 101.67 265.23 C 97.30 265.26 92.93 265.29 88.57 265.20 C 103.85 249.59 119.44 234.28 134.84 218.78 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 133.92 232.93 C 134.62 232.21 135.42 231.60 136.28 231.07 C 135.60 234.54 135.44 238.06 135.44 241.58 C 127.40 249.32 119.58 257.30 111.72 265.22 C 108.37 265.29 105.02 265.25 101.67 265.23 C 112.39 254.43 123.19 243.72 133.92 232.93 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 162.75 232.54 C 183.33 232.46 203.91 232.49 224.48 232.52 C 224.51 238.51 224.52 244.49 224.48 250.48 C 203.91 250.50 183.33 250.54 162.76 250.47 C 162.74 244.49 162.75 238.51 162.75 232.54 Z" }),
                _react2.default.createElement("path", { fill: "#bababa", d: " M 111.72 265.22 C 119.58 257.30 127.40 249.32 135.44 241.58 C 135.36 245.55 135.82 249.48 136.51 253.39 C 132.54 257.31 128.60 261.27 124.66 265.23 C 120.35 265.27 116.03 265.28 111.72 265.22 Z" }),
                _react2.default.createElement("path", { fill: "#ffffff", d: " M 124.66 265.23 C 128.60 261.27 132.54 257.31 136.51 253.39 C 136.91 256.83 139.27 260.12 138.36 263.61 L 139.68 263.56 C 139.81 263.80 140.07 264.30 140.20 264.54 C 138.21 264.75 136.08 264.17 134.27 265.28 C 131.07 265.21 127.86 265.29 124.66 265.23 Z" })
            );
        }
    }]);

    return NotAvailablePlaceholder;
}(_react.Component);

NotAvailablePlaceholder.propTypes = {
    maxSize: _react.PropTypes.number
};
exports.default = NotAvailablePlaceholder;