'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PauseResumeButton = function (_Component) {
    _inherits(PauseResumeButton, _Component);

    function PauseResumeButton() {
        _classCallCheck(this, PauseResumeButton);

        var _this = _possibleConstructorReturn(this, (PauseResumeButton.__proto__ || Object.getPrototypeOf(PauseResumeButton)).call(this));

        _this.state = {
            pausable: false,
            resumable: false
        };

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted) {
                var pausable = isPausable(newStatus);
                var resumable = !pausable && isResumable(newStatus);

                if (!pausable && _this.state.pausable) {
                    _this.setState({ pausable: pausable, resumable: resumable });
                } else if (resumable && !_this.state.resumable) {
                    _this.setState({ pausable: pausable, resumable: resumable });
                } else if (!resumable && _this.state.resumable) {
                    _this.setState({ pausable: pausable, resumable: resumable });
                } else if (newStatus === 'deleted' || newStatus === 'canceled' || newStatus === 'upload successful') {
                    _this._unregisterStatusChangeHandler();
                    _this._unregisterOnUploadChunkHandler();
                }
            }
        };

        _this._onClick = function () {
            if (_this.state.pausable) {
                _this.props.uploader.methods.pauseUpload(_this.props.id);
            } else if (_this.state.resumable) {
                _this.props.uploader.methods.continueUpload(_this.props.id);
            }
        };

        _this._onUploadChunk = function (id, name, chunkData) {
            if (id === _this.props.id && !_this._unmounted) {
                if (chunkData.partIndex > 0 && !_this.state.pausable) {
                    _this.setState({
                        pausable: true,
                        resumable: false
                    });
                } else if (chunkData.partIndex === 0 && _this.state.pausable) {
                    _this.setState({
                        pausable: false,
                        resumable: false
                    });
                }
            }
        };
        return _this;
    }

    _createClass(PauseResumeButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('statusChange', this._onStatusChange);
            this.props.uploader.on('uploadChunk', this._onUploadChunk);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterOnStatusChangeHandler();
            this._unregisterOnUploadChunkHandler();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                onlyRenderIfEnabled = _props.onlyRenderIfEnabled,
                id = _props.id,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['onlyRenderIfEnabled', 'id', 'uploader']); // eslint-disable-line no-unused-vars

            if (this.state.pausable || this.state.resumable || !onlyRenderIfEnabled) {
                return _react2.default.createElement(
                    'button',
                    _extends({ 'aria-label': getButtonLabel(this.state),
                        className: 'react-fine-uploader-pause-resume-button ' + getButtonClassName(this.state) + ' ' + (this.props.className || ''),
                        disabled: !this.state.pausable && !this.state.resumable,
                        onClick: this._onClick
                    }, elementProps),
                    getButtonContent(this.state, this.props)
                );
            }

            return null;
        }
    }, {
        key: '_unregisterOnStatusChangeHandler',
        value: function _unregisterOnStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }, {
        key: '_unregisterOnUploadChunkHandler',
        value: function _unregisterOnUploadChunkHandler() {
            this.props.uploader.off('uploadChunk', this._onUploadChunk);
        }
    }, {
        key: '_unregisterStatusChangeHandler',
        value: function _unregisterStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }]);

    return PauseResumeButton;
}(_react.Component);

PauseResumeButton.propTypes = {
    id: _react.PropTypes.number.isRequired,
    onlyRenderIfEnabled: _react.PropTypes.bool,
    pauseChildren: _react.PropTypes.node,
    resumeChildren: _react.PropTypes.node,
    uploader: _react.PropTypes.object.isRequired
};
PauseResumeButton.defaultProps = {
    onlyRenderIfEnabled: true
};


var getButtonClassName = function getButtonClassName(state) {
    var resumable = state.resumable;


    return resumable ? 'react-fine-uploader-resume-button' : 'react-fine-uploader-pause-button';
};

var getButtonContent = function getButtonContent(state, props) {
    var resumable = state.resumable;
    var pauseChildren = props.pauseChildren,
        resumeChildren = props.resumeChildren;


    if (resumable) {
        return resumeChildren || 'Resume';
    }

    return pauseChildren || 'Pause';
};

var getButtonLabel = function getButtonLabel(state) {
    var resumable = state.resumable;


    return resumable ? 'resume' : 'pause';
};

var isPausable = function isPausable(status) {
    return status === 'uploading';
};
var isResumable = function isResumable(status) {
    return status === 'paused';
};

exports.default = PauseResumeButton;