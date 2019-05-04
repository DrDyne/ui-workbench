;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    103: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          1
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        react_waypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(224),
        _ctx_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57),
        _components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          2
        ),
        _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          109
        ),
        _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          110
        ),
        _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          111
        ),
        _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          112
        ),
        _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_8__
        ),
        _components_TopBar_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          45
        ),
        _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          225
        ),
        _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_10__
        ),
        _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          226
        ),
        _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_11__
        ),
        Link = function (props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _components_TopBar_Link__WEBPACK_IMPORTED_MODULE_9__.a,
            props
          )
        },
        PageBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'div',
          { target: 'e1ur4wv20' }
        )(
          'padding:94px;padding-top:194px;min-height:900px;position:relative;z-index:10;',
          _components_Typography__WEBPACK_IMPORTED_MODULE_4__.d,
          '{max-width:290px;}img.whitewash{position:absolute;right:0;bottom:0;height:100%;z-index:-1;}'
        ),
        PageLeft = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'section',
          { target: 'e1ur4wv21' }
        )(''),
        PageRight = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'section',
          { target: 'e1ur4wv22' }
        )(''),
        LinksBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'div',
          { target: 'e1ur4wv23' }
        )({
          name: 'qfdd9t',
          styles: 'display:flex;flex-direction:column;align-items:flex-end;'
        }),
        CenterBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'div',
          { target: 'e1ur4wv24' }
        )(
          'flex-direction:column;display:flex;justify-content:center;background:rgba(255,255,255,0.4);height:100px;',
          _components_Typography__WEBPACK_IMPORTED_MODULE_4__.d,
          '{margin-top:240px;margin:0 auto;opacity:0.4;}img{max-width:40px;margin:1em auto;}'
        ),
        Page1 = function (props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            PageBox,
            { pageIndex: 1 },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              PageLeft,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_4__.b,
                null,
                'Hi,'
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_4__.d,
                null,
                "I'm a UX Engineer with 10 years experience in bringing together designers and developers to create amazing web apps."
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              PageRight,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _ctx_links__WEBPACK_IMPORTED_MODULE_3__.a.Consumer,
                null,
                function (_ref) {
                  var show = _ref.show,
                    hide = _ref.hide
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    LinksBox,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      react_waypoint__WEBPACK_IMPORTED_MODULE_2__.a,
                      {
                        onLeave: function () {
                          return show('links')
                        },
                        onEnter: function () {
                          return hide('links')
                        }
                      }
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      Link,
                      props.behanceLink
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      Link,
                      props.tumblrLink
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      Link,
                      props.linkedInLink
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      Link,
                      props.githubLink
                    )
                  )
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              CenterBox,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_4__.d,
                null,
                'Read more'
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'img',
                {
                  src:
                    _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_10___default.a
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', {
              className: 'whitewash',
              src:
                _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_11___default.a
            })
          )
        }
      ;(Page1.defaultProps = {
        behanceLink: {
          to: 'behance',
          logo:
            _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_5___default.a,
          title: 'behance',
          url: 'https://www.behance.net/rchaumard25b7'
        },
        tumblrLink: {
          to: 'tumblr',
          logo:
            _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6___default.a,
          title: 'tumblr',
          url: 'https://dr-dyne.tumblr.com/tagged/sketch'
        },
        linkedInLink: {
          to: 'linkedin',
          logo:
            _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_7___default.a,
          title: 'linked in',
          url: 'https://linkedin.com/in/ryc'
        },
        githubLink: {
          to: 'github',
          logo:
            _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_8___default.a,
          title: 'github',
          url: 'https://github.com/drdyne'
        }
      }),
        (__webpack_exports__.a = Page1),
        (Page1.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Page1',
          props: {
            behanceLink: {
              defaultValue: {
                value:
                  "{\n  to: 'behance',\n  logo: LogoBehance,\n  title: 'behance',\n  url: 'https://www.behance.net/rchaumard25b7'\n}",
                computed: !1
              },
              required: !1
            },
            tumblrLink: {
              defaultValue: {
                value:
                  "{\n  to: 'tumblr',\n  logo: LogoTumblr,\n  title: 'tumblr',\n  url: 'https://dr-dyne.tumblr.com/tagged/sketch'\n}",
                computed: !1
              },
              required: !1
            },
            linkedInLink: {
              defaultValue: {
                value:
                  "{\n  to: 'linkedin',\n  logo: LogoLinkedIn,\n  title: 'linked in',\n  url: 'https://linkedin.com/in/ryc'\n}",
                computed: !1
              },
              required: !1
            },
            githubLink: {
              defaultValue: {
                value:
                  "{\n  to: 'github',\n  logo: LogoGithub,\n  title: 'github',\n  url: 'https://github.com/drdyne'\n}",
                computed: !1
              },
              required: !1
            }
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/pages/page-01-hi.js'] = {
            name: 'Page1',
            docgenInfo: Page1.__docgenInfo,
            path: 'src/pages/page-01-hi.js'
          })
    },
    109: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'b66756c49b5ca9a79130b13c86fa2556.png'
    },
    110: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '90ff6e21f548d1a59cd9435cdba990e3.png'
    },
    111: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '0b603076dfc832af9f9f357e2552dd5c.png'
    },
    112: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'f440148b22f2a412e69f2c32edde7302.png'
    },
    113: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          1
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        react_rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59),
        react_rellax__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react_rellax__WEBPACK_IMPORTED_MODULE_2__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          2
        ),
        _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          227
        ),
        _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          228
        ),
        _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          229
        ),
        _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          230
        ),
        _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _assets_workbench_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          231
        ),
        _assets_workbench_png__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _assets_workbench_png__WEBPACK_IMPORTED_MODULE_8__
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7),
        ContentBox = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
        )('div', { target: 'eiui8310' })({
          name: '1ls7yjo',
          styles:
            'display:flex;flex-grow:1;min-width:560px;transition:all 0.2s;min-height:1000px;@media (min-width:740px){padding-left:200px;> div:first-of-type{margin-top:240px;margin-bottom:-50px;}> div.parallax{}img.react-logo{padding-left:300px;margin-top:-240px;}}'
        }),
        UIWBButtonBox = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
        )(_Layout__WEBPACK_IMPORTED_MODULE_9__.a, { target: 'eiui8311' })({
          name: '18ayi41',
          styles:
            'z-index:2;width:100%;max-width:686px;height:363px;margin-top:94px;background:#ffffff;box-shadow:0px 8px 16px rgba(0,0,0,0.25);img{max-width:686px;height:363px;}.label{position:absolute;left:50%;top:50%;text-align:center;}'
        }),
        Page1Parallax = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
        )(react_rellax__WEBPACK_IMPORTED_MODULE_2___default.a, {
          target: 'eiui8312'
        })(
          'margin-left:-786px;img{position:absolute;left:0;top:0;}',
          function (props) {
            return (
              props.figma &&
              '\n    position: absolute;\n    margin-left: -120px;\n  '
            )
          },
          ' .figma-logo{left:-50px;top:126px;margin-top:400px;}.storybook-logo{left:316px;top:451px;z-index:1;}.react-logo{padding-left:695px;margin-top:-85px;}',
          function (props) {
            return (
              props.wash &&
              '\n    @media(max-width: '
                .concat(
                  props.theme.breakpoint,
                  'px) { opacity: 0 }\n    @media(min-width: '
                )
                .concat(
                  props.theme.breakpoint,
                  'px) {\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: auto;\n      margin-top: 300px;\n      z-index: 0;\n\n      img.white-wash {\n        width: 100%;\n      }\n    }\n  '
                )
            )
          },
          ''
        ),
        btnProps = {
          href: 'https://drdyne.github.io/ui-workbench/',
          label: 'Check out my UI workbench',
          transformLabel: function (tr) {
            return ''.concat(tr, ' translate(-50%, -50%)')
          },
          'label-width': 300,
          offset: { x: 40, y: 40 }
        },
        Page2 = function () {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Layout__WEBPACK_IMPORTED_MODULE_9__.b,
            { pageIndex: 2, light: 'true' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Layout__WEBPACK_IMPORTED_MODULE_9__.c,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
                null,
                'These days I use Figma and React, backed by Storybook to build visual libraries of components that can be tested and regressed automatically.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Layout__WEBPACK_IMPORTED_MODULE_9__.d,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                ContentBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  UIWBButtonBox,
                  btnProps,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    {
                      src:
                        _assets_workbench_png__WEBPACK_IMPORTED_MODULE_8___default.a
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  Page1Parallax,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    {
                      src:
                        _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6___default.a,
                      className: 'storybook-logo'
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    {
                      src:
                        _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5___default.a,
                      className: 'react-logo'
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  Page1Parallax,
                  { speed: 4, figma: 'true' },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    {
                      src:
                        _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4___default.a,
                      className: 'figma-logo'
                    }
                  )
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Page1Parallax,
              { wash: 'true', speed: -5 },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'img',
                {
                  src:
                    _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
                  className: 'white-wash'
                }
              )
            )
          )
        }
      ;(__webpack_exports__.a = Page2),
        (Page2.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Page2'
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/pages/page-02-ui-workbench.js'] = {
            name: 'Page2',
            docgenInfo: Page2.__docgenInfo,
            path: 'src/pages/page-02-ui-workbench.js'
          })
    },
    114: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          19
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          6
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          104
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          105
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          106
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          107
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__
        ),
        _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          76
        ),
        _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          108
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          75
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__
        ),
        react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_9__
        ),
        defaultState = {
          isActive: !1,
          width: 0,
          height: 0,
          pos: { x: 0, y: 0 },
          origin: { x: 0, y: 0 }
        },
        getBoundingClientRect = function (event) {
          return event.currentTarget.getBoundingClientRect()
        },
        requestAnimationFrame = function (fn) {
          return window.requestAnimationFrame(fn)
        }
      __webpack_exports__.a = function (Component) {
        var options =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : {
                  getBoundingClientRect: getBoundingClientRect,
                  requestAnimationFrame: requestAnimationFrame
                },
          MouseTracker = (function (_React$Component) {
            function MouseTracker () {
              var _getPrototypeOf2, _this
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
                this,
                MouseTracker
              )
              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              )
                args[_key] = arguments[_key]
              return (
                (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
                  this,
                  (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
                    MouseTracker
                  )).call.apply(_getPrototypeOf2, [this].concat(args))
                )),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                    _this
                  ),
                  'state',
                  defaultState
                ),
                _this
              )
            }
            return (
              _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(
                MouseTracker,
                _React$Component
              ),
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
                MouseTracker,
                [
                  {
                    key: 'setSize',
                    value: function (event) {
                      var _options$getBoundingC = options.getBoundingClientRect(
                          event
                        ),
                        width = _options$getBoundingC.width,
                        height = _options$getBoundingC.height
                      this.setState({ width: width, height: height })
                    }
                  },
                  {
                    key: 'setOrigin',
                    value: function (event) {
                      var _options$getBoundingC2 = options.getBoundingClientRect(
                          event
                        ),
                        left = _options$getBoundingC2.left,
                        top = _options$getBoundingC2.top,
                        width = _options$getBoundingC2.width,
                        height = _options$getBoundingC2.height,
                        origin = {
                          x: left + Math.floor(width / 2),
                          y: top + Math.floor(height / 2)
                        }
                      this.setState({ origin: origin })
                    }
                  },
                  {
                    key: 'setPosition',
                    value: function (event) {
                      var _this$state$origin = this.state.origin,
                        x = _this$state$origin.x,
                        y = _this$state$origin.y,
                        pos = {
                          x: event.clientX - x,
                          y: -1 * (event.clientY - y)
                        }
                      this.setState({ pos: pos })
                    }
                  },
                  {
                    key: 'startTracking',
                    value: function (event) {
                      event.persist(),
                        this.setOrigin(event),
                        this.setSize(event),
                        this.setState({ isActive: !0 })
                    }
                  },
                  {
                    key: 'stopTracking',
                    value: function () {
                      this.setState(defaultState)
                    }
                  },
                  {
                    key: 'track',
                    value: function (event) {
                      var _this2 = this
                      event.persist(),
                        options.requestAnimationFrame(function () {
                          _this2.setPosition(event)
                        })
                    }
                  },
                  {
                    key: 'render',
                    value: function () {
                      var _this3 = this,
                        _this$state = this.state,
                        width = _this$state.width,
                        height = _this$state.height,
                        pos = _this$state.pos,
                        origin = _this$state.origin,
                        _this$props = this.props,
                        _onMouseEnter = _this$props.onMouseEnter,
                        _onMouseLeave = _this$props.onMouseLeave,
                        _onMouseMove = _this$props.onMouseMove,
                        other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
                          _this$props,
                          ['onMouseEnter', 'onMouseLeave', 'onMouseMove']
                        )
                      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        Component,
                        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                          {},
                          {
                            onMouseEnter: function (event) {
                              _onMouseEnter(event), _this3.startTracking(event)
                            },
                            onMouseLeave: function (event) {
                              _onMouseLeave(event), _this3.stopTracking()
                            },
                            onMouseMove: function (event) {
                              _onMouseMove(event), _this3.track(event)
                            },
                            width: width,
                            height: height,
                            pos: pos,
                            origin: origin
                          },
                          other
                        )
                      )
                    }
                  }
                ]
              ),
              MouseTracker
            )
          })(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component)
        return (
          (MouseTracker.defaultProps = {
            onMouseEnter: function (f) {
              return f
            },
            onMouseLeave: function (f) {
              return f
            },
            onMouseMove: function (f) {
              return f
            }
          }),
          MouseTracker
        )
      }
    },
    115: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          1
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          2
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7),
        _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          232
        ),
        _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        _assets_button_behance_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          233
        ),
        _assets_button_behance_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _assets_button_behance_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        react_rellax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59),
        react_rellax__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_rellax__WEBPACK_IMPORTED_MODULE_6__
        ),
        ContentBox = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
        )('div', { target: 'ep2g05l0' })(
          'width:100%;margin-top:240px;margin-left:auto;margin-bottom:500px;@media (max-width:',
          function (props) {
            return props.theme.breakpoint
          },
          'px){padding-bottom:200px;}'
        ),
        Page2Parallax = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
        )(react_rellax__WEBPACK_IMPORTED_MODULE_6___default.a, {
          target: 'ep2g05l1'
        })(
          'position:absolute;left:0;bottom:0;right:0;top:auto;z-index:0;margin-left:-384px;img{width:100%;}@media (max-width:',
          function (props) {
            return props.theme.breakpoint
          },
          'px){opacity:0;}'
        ),
        BehanceButtonBox = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
        )(_Layout__WEBPACK_IMPORTED_MODULE_3__.a, { target: 'ep2g05l2' })({
          name: '9r2qtm',
          styles:
            'z-index:2;margin:0 0 0 auto;height:437px;width:900px;.label{margin-right:50px;right:0;text-align:right;}:hover .label{margin-right:20px;}:hover .accent{margin-top:35px;margin-left:-35px;}'
        }),
        btnProps = {
          href: 'https://www.behance.net/rchaumard25b7',
          label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'span',
            null,
            'Some crazy',
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'br',
              null
            ),
            'ideas'
          )
        },
        Page2 = function () {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Layout__WEBPACK_IMPORTED_MODULE_3__.b,
            { pageIndex: 3, light: !0 },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Layout__WEBPACK_IMPORTED_MODULE_3__.c,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_2__.d,
                null,
                'I strive to build tools that help people achieve objectives or visualize their progress, make them work faster, or simply improve their quality of life.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Layout__WEBPACK_IMPORTED_MODULE_3__.d,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                ContentBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  BehanceButtonBox,
                  btnProps,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    {
                      src:
                        _assets_button_behance_png__WEBPACK_IMPORTED_MODULE_5___default.a
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  Page2Parallax,
                  { speed: -2 },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    {
                      src:
                        _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4___default.a
                    }
                  )
                )
              )
            )
          )
        }
      ;(__webpack_exports__.a = Page2),
        (Page2.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Page2'
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/pages/page-03-design.js'] = {
            name: 'Page2',
            docgenInfo: Page2.__docgenInfo,
            path: 'src/pages/page-03-design.js'
          })
    },
    116: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          19
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          6
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          1
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        react_rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59),
        react_rellax__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react_rellax__WEBPACK_IMPORTED_MODULE_4__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          2
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7),
        _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          234
        ),
        _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        SketchesButtonBox = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a
        )(_Layout__WEBPACK_IMPORTED_MODULE_6__.a, { target: 'ej67efe0' })(
          'height:209px;max-width:600px;margin:0 auto;padding:2em;.label{margin-top:20px;margin-left:75px;opacity:1;color:',
          function (_ref) {
            return _ref.theme.colors.black
          },
          ';}:hover .label{margin-top:50px;margin-left:75px;color:white;}:hover .accent{margin-top:-75px;margin-left:25px;}'
        ),
        PageBg = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a)(
          function (_ref2) {
            var src = _ref2.src,
              children = _ref2.children,
              props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
                _ref2,
                ['src', 'children']
              )
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'div',
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                { className: 'bg' },
                props
              ),
              children,
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'img',
                { src: src }
              )
            )
          },
          { target: 'ej67efe1' }
        )({
          name: '1ofqig9',
          styles: 'display:flex;flex-direction:column;width:100%;'
        }),
        btnProps = {
          href: 'https://dr-dyne.tumblr.com/tagged/sketch',
          label: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'span',
            null,
            'Have a look at',
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'br',
              null
            ),
            'some of my',
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'br',
              null
            ),
            'sketches'
          ),
          transformBox: function (tr) {
            return ''.concat(tr, ' translate(0, -25px)')
          }
        }
      __webpack_exports__.a = function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          _Layout__WEBPACK_IMPORTED_MODULE_6__.b,
          { pageIndex: 4, light: !0 },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            _components_Typography__WEBPACK_IMPORTED_MODULE_5__.d,
            null,
            'When I’m not coding, I can be found sketching, exploring art, design, motion or gaming.'
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            react_rellax__WEBPACK_IMPORTED_MODULE_4___default.a,
            { speed: 2 },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PageBg, {
              src:
                _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_7___default.a
            }),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              SketchesButtonBox,
              btnProps
            )
          )
        )
      }
    },
    117: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          1
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          2
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7),
        _assets_button_vim_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          235
        ),
        _assets_button_vim_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_button_vim_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        BgBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'div',
          { target: 'e1epzm2c0' }
        )(''),
        ResumeButtonBox = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
        )(_Layout__WEBPACK_IMPORTED_MODULE_3__.a, { target: 'e1epzm2c1' })({
          name: '172tvdy',
          styles:
            'width:876px;height:493px;margin:100px auto;.label{text-align:center;top:50%;left:50%;}'
        }),
        ContentBox = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
        )('div', { target: 'e1epzm2c2' })(
          'width:100%;background:',
          function (props) {
            return props.theme.colors.resume
          },
          ';background-opacity:0.4;'
        ),
        btnProps = {
          href:
            'https://github.com/DrDyne/ui-workbench/raw/master/src/pages/assets/resume%20anon.png',
          label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'span',
            null,
            'Download my',
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'br',
              null
            ),
            'resume'
          ),
          transformLabel: function () {
            return 'translate(-50%, -50%)'
          }
        }
      __webpack_exports__.a = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _Layout__WEBPACK_IMPORTED_MODULE_3__.b,
          { pageIndex: 5 },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _components_Typography__WEBPACK_IMPORTED_MODULE_2__.d,
            null,
            'Most of my experience is based on secure, enterprise-level, innovative web apps, with optimized bundling and offline support, developed and tested by small teams and released in fast iteration cycles through a solid CI pipeline to a wide array of devices.'
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ContentBox,
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              BgBox,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                ResumeButtonBox,
                btnProps,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'img',
                  {
                    src:
                      _assets_button_vim_png__WEBPACK_IMPORTED_MODULE_4___default.a
                  }
                )
              )
            )
          )
        )
      }
    },
    118: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          2
        ),
        _components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          62
        ),
        _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          238
        ),
        _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_3__
        ),
        _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          239
        ),
        _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7)
      __webpack_exports__.a = function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Layout__WEBPACK_IMPORTED_MODULE_5__.b,
          { pageIndex: 6 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'bg' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
              src: _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_4___default.a
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'contact-line' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src:
                    _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_3___default.a
                }
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'tooltip-box' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                href:
                  'mailto:r.chaumard@gmail.com?subject=UX Engineer&body=Hi remy,'
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_1__.d,
                null,
                'Sounds interesting? Drop me a line.'
              )
            )
          )
        )
      }
    },
    146: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'ca3211105d00b409071de21d18e0e14c.jpeg'
    },
    2: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Branding
      }),
        __webpack_require__.d(__webpack_exports__, 'd', function () {
          return Subtitle
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return Header
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return Link
        })
      __webpack_require__(404)
      var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          6
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          1
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4),
        Branding = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a)(
          'a',
          { target: 'ej86u3o0' }
        )(
          'margin:0 auto 0 -100px;padding:0 50px;line-height:100px;color:#fff;text-transform:uppercase;font-size:24px;text-decoration:none;letter-spacing:0.3em;font-family:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.family,
          ';:hover{background:rgba(255,255,255,0.2);}',
          '\n  transition: background .4s ease-out;\n',
          ''
        ),
        Subtitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a)(
          'h3',
          { target: 'ej86u3o1' }
        )(
          'font-family:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.family,
          ';font-style:normal;font-weight:normal;line-height:normal;font-size:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.size.subtitle,
          ';letter-spacing:0.15em;color:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.c,
          ';'
        ),
        Header = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a)(
          'h1',
          { target: 'ej86u3o2' }
        )(
          'font-family:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.family,
          ';font-style:normal;font-weight:normal;line-height:normal;font-size:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.size.header,
          ';letter-spacing:0.15em;'
        ),
        linkHighlightColor = function (_ref) {
          var to = _ref.to,
            theme = _ref.theme
          return '\n  '
            .concat(
              '\n  transition: background .4s ease-out;\n',
              '\n  background: '
            )
            .concat(
              'behance' === to
                ? theme.colors.design
                : 'tumblr' === to
                ? theme.colors.tumblr
                : 'github' === to
                ? theme.colors.workbench
                : 'linkedin' === to
                ? theme.colors.resume
                : '#000',
              ';\n'
            )
        },
        Link = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a)(
          function (_ref2) {
            var children = _ref2.children,
              className = (_ref2.to, _ref2.className),
              props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
                _ref2,
                ['children', 'to', 'className']
              )
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'div',
              { className: className },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'a',
                props,
                children
              ),
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'div',
                { className: 'highlight' }
              )
            )
          },
          { target: 'ej86u3o3' }
        )(
          'position:relative;:hover{',
          linkHighlightColor,
          '}a{display:flex;width:100%;line-height:100px;font-family:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.family,
          ';font-style:normal;font-weight:normal;font-size:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.size.link,
          ';letter-spacing:0.15em;text-decoration:none;text-align:center;padding-left:30px;img{margin:0 30px 0 0;align-self:center;}color:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.c,
          ';}'
        )
    },
    225: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'be7e58f2816f4ac7b1724e0ef97cab76.png'
    },
    226: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'e85b811087b5cc277431d08e3067b05b.png'
    },
    227: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '468fcabd781f738c798265f8c0ea74bf.png'
    },
    228: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '7de29fdc8f8e2eda4deb45d0c9183cbf.png'
    },
    229: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '8816ff05da90adccb506956d783e714e.png'
    },
    230: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '7be0947c8fe5546ea0c3230108a58235.png'
    },
    231: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'f77ed3cbca39a21c9feca15019b11bcc.png'
    },
    232: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '0a0f0ab71ac53ae2b254e80df8dd43ef.png'
    },
    233: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '16506319dbfb7bfb5cf6e056d4f25056.png'
    },
    234: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '82bc2804d31e833aa47371d997cf8156.png'
    },
    235: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '139c4c4807da03366f70dca731ae4fc4.png'
    },
    236: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '77fbc1420bac05b1e65551b56fa3fd6b.png'
    },
    237: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '91c6d698ec34e58517eb7504c1e5cb5a.png'
    },
    238: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'ae5770c5fc4008d1a2c5b4d8eebf3692.png'
    },
    239: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'afd4f28dd4335cfafa8f9505eb7410dc.png'
    },
    240: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          19
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          1
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147),
        rotateLoop = function () {
          console.log('rotate'),
            Object(animejs__WEBPACK_IMPORTED_MODULE_3__.a)({
              targets: '[role="loader"] section',
              duration: 1800,
              delay: 400,
              keyframes: [
                { rotateY: 180, scaleZ: -50 },
                { rotateY: 180, scaleZ: 100 }
              ],
              loop: !0,
              easing: 'easeOutElastic(1, .8)'
            }),
            Object(animejs__WEBPACK_IMPORTED_MODULE_3__.a)({
              targets: '[role="loader"] section + section',
              duration: 1200,
              keyframes: [{ rotateY: -360 }],
              loop: !0,
              easing: 'easeOutElastic(1, .8)'
            })
        },
        Loader = function (props) {
          return (
            Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(rotateLoop),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                {},
                props,
                { role: 'loader' }
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'section',
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'section',
                null
              )
            )
          )
        }
      __webpack_exports__.a = Object(
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a
      )(Loader, { target: 'e1a431he0' })({
        name: '1ewzlz4',
        styles:
          'position:relative;padding:40px;section{position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;width:80px;height:80px;background:orange;}section + section{position:absolute;top:24px;left:24px;display:flex;width:24px;height:24px;border:4px solid royalblue;background:white;box-shadow:0px 2px 2px black;}'
      })
    },
    242: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
      __webpack_exports__.a = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h1',
          { id: 'uiworkbench' },
          'ui-workbench'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'a',
            {
              href:
                'https://drdyne.github.io/ui-workbench/?selectedKind=Portfolio&selectedStory=App&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-panel'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
              src:
                'https://github.com/storybooks/brand/raw/master/badge/badge-storybook.svg?sanitize=true',
              alt: 'Storybook'
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'a',
            {
              href:
                'https://drdyne.github.io/ui-workbench/coverage/lcov-report/index.html'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
              src: 'https://jestjs.io/img/jest-badge.svg',
              alt: 'Jest'
            })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'web-ui/x portfolio'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'live storybook available at',
          ' ',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'a',
            {
              href:
                'https://drdyne.github.io/ui-workbench/?selectedKind=Portfolio&selectedStory=App&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-panel'
            },
            'https://drdyne.github.io/ui-workbench'
          ),
          ', enjoy ;)'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'blockquote',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              {
                href:
                  'https://www.figma.com/file/B5A4DV5M6miRnod9KsFovVnh/10-portfolio-website?node-id=0%3A1'
              },
              'Figma - Designs'
            ),
            ' ',
            'for the Portfolio app.'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              {
                href:
                  'https://preview.uxpin.com/2840e897e0acc0aad4cb45cddcae28d8306242c3#/pages/107312594/simulate/no-panels?mode=chdm'
              },
              'UXpin - Mobile prototype'
            ),
            ' ',
            'for the Portfolio app (iPhone X).'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              {
                href:
                  'https://preview.uxpin.com/415e0bf603b7bc024b966305cd994265a1b41aa9#/pages/107317001'
              },
              'UXpin - Interaction design'
            ),
            ' ',
            'for the Portfolio menu (Desktop and Tablets).'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              {
                href:
                  'https://drdyne.github.io/ui-workbench/coverage/lcov-report/index.html'
              },
              'Jest - Code coverage'
            ),
            ' ',
            'for the entire ui-workbench.'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              { href: 'https://github.com/DrDyne/ui-workbench' },
              'Github - Source code'
            ),
            ' ',
            "for everything you'll see here."
          )
        )
      )
    },
    243: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var Component,
        styled_base_browser_esm = __webpack_require__(1),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        emotion_theming_browser_esm = __webpack_require__(99),
        page_01_hi = __webpack_require__(103),
        page_02_ui_workbench = __webpack_require__(113),
        page_03_design = __webpack_require__(115),
        page_04_sketches = __webpack_require__(116),
        page_05_resume = __webpack_require__(117),
        page_06_contact = __webpack_require__(118),
        theme = __webpack_require__(4),
        links = __webpack_require__(57),
        helpers_extends = __webpack_require__(19),
        extends_default = __webpack_require__.n(helpers_extends),
        TopBar = __webpack_require__(60),
        components_TopBar = ((Component = TopBar.a),
        function (props) {
          return react_default.a.createElement(
            links.a.Consumer,
            null,
            function (ctx) {
              return react_default.a.createElement(
                Component,
                extends_default()(
                  {},
                  (function (ctx) {
                    return { showLinks: ctx.isVisible }
                  })(ctx),
                  props
                )
              )
            }
          )
        }),
        TopBarBox = Object(styled_base_browser_esm.a)('div', {
          target: 'e1tovj9z0'
        })(
          'position:fixed;top:0;left:0;right:0;z-index:',
          function (props) {
            return props.theme.z.topbar
          },
          ';'
        ),
        App = function () {
          return react_default.a.createElement(
            emotion_theming_browser_esm.a,
            { theme: theme.a },
            react_default.a.createElement(
              TopBarBox,
              null,
              react_default.a.createElement(components_TopBar, null)
            ),
            react_default.a.createElement(page_01_hi.a, null),
            react_default.a.createElement(page_02_ui_workbench.a, null),
            react_default.a.createElement(page_03_design.a, null),
            react_default.a.createElement(page_04_sketches.a, null),
            react_default.a.createElement(page_05_resume.a, null),
            react_default.a.createElement(page_06_contact.a, null)
          )
        }
      __webpack_exports__.a = Object(links.b)(App)
      ;(App.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'App'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/App/index.js'] = {
            name: 'App',
            docgenInfo: App.__docgenInfo,
            path: 'src/components/App/index.js'
          })
    },
    245: function (module, exports, __webpack_require__) {
      __webpack_require__(246),
        __webpack_require__(324),
        (module.exports = __webpack_require__(325))
    },
    325: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (global, module) {
          __webpack_require__(24),
            __webpack_require__(25),
            __webpack_require__(32)
          var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_require__(
              148
            ),
            __webpack_require__(63)),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              22
            ),
            _src_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4),
            emotion_theming__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              99
            )
          global.storiesOf =
            _storybook_react__WEBPACK_IMPORTED_MODULE_5__.storiesOf
          var req = __webpack_require__(397)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({
            options: {
              brandTitle: 'ui-workbench',
              brandUrl: 'http://drdyne.github.io/ui-workbench',
              sortStoriesByKind: !0,
              enableShortcuts: !1
            }
          }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.withKnobs
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
              function (story) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  emotion_theming__WEBPACK_IMPORTED_MODULE_8__.a,
                  { theme: _src_theme__WEBPACK_IMPORTED_MODULE_7__.a },
                  story()
                )
              }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(
              function loadStories () {
                req.keys().forEach(function (filename) {
                  return req(filename)
                })
              },
              module
            )
        }.call(this, __webpack_require__(8), __webpack_require__(26)(module))
    },
    397: function (module, exports, __webpack_require__) {
      var map = {
        './components/App/stories/App.stories.js': 398,
        './components/Button/stories/Button.stories.js': 408,
        './components/Loader/stories/Loader.stories.js': 409,
        './components/Tooltip/stories/Tooltip.stories.js': 410,
        './components/TopBar/stories/TopBar.stories.js': 480,
        './components/Typography/stories/Typography.stories.js': 481,
        './pages/stories/pages.stories.js': 482,
        './stories/index.stories.js': 483
      }
      function webpackContext (req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve (req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys () {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 397)
    },
    398: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__.d(
            __webpack_exports__,
            'withStorySource',
            function () {
              return withStorySource
            }
          ),
            __webpack_require__.d(
              __webpack_exports__,
              '__STORY__',
              function () {
                return __STORY__
              }
            ),
            __webpack_require__.d(
              __webpack_exports__,
              '__ADDS_MAP__',
              function () {
                return __ADDS_MAP__
              }
            )
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(243),
            withStorySource = __webpack_require__(35).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport App from '../';\n\nstoriesOf('Portfolio|📌 App', module).add('Desktop and tablet', () => <App />);\n",
            __ADDS_MAP__ = {
              'portfolio-📌-app--desktop-and-tablet': {
                startLoc: { col: 42, line: 4 },
                endLoc: { col: 77, line: 4 }
              }
            }
          storiesOf('Portfolio|📌 App', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport App from '../';\n\nstoriesOf('Portfolio|📌 App', module).add('Desktop and tablet', () => <App />);\n",
                __ADDS_MAP__
              )
            )
            .add('Desktop and tablet', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_1__.a,
                null
              )
            })
        }.call(this, __webpack_require__(26)(module))
    },
    4: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'c', function () {
        return lightTextVariant
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return font
        })
      var lightTextVariant = function (props) {
          return font[props.light ? 'colorLight' : 'color']
        },
        font = {
          family: 'Encode Sans',
          color: '#000',
          colorLight: '#fff',
          size: { header: '51px', subtitle: '28px', link: '18px' }
        },
        colors = {
          workbench: '#F1618C',
          design: '#4176FB',
          resume: '#9EC4E7',
          tumblr: '#44546A',
          black: '#232729'
        },
        pageBackground = { 2: colors.workbench, 3: colors.design }
      __webpack_exports__.a = {
        font: font,
        colors: colors,
        gradients: {
          header:
            'linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 50%), #232729',
          accentLight:
            'linear-gradient(235.77deg, rgba(35, 39, 41, 0) 12.8%, rgba(35, 39, 41, 0.2) 46.35%, rgba(35, 39, 41, 0) 88.7%), #FFFFFF',
          accentDark:
            'linear-gradient(235.77deg, rgba(255, 255, 255, 0) 12.8%, rgba(255, 255, 255, 0.2) 46.35%, rgba(255, 255, 255, 0) 88.7%), #232729'
        },
        pageBackground: pageBackground,
        z: {
          pageButton: 10,
          subtitle: 1,
          topbar: 11,
          btn: { label: 3, accent: 3 }
        },
        lightTextVariant: lightTextVariant,
        breakpoint: 1200
      }
    },
    408: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__.d(
            __webpack_exports__,
            'withStorySource',
            function () {
              return withStorySource
            }
          ),
            __webpack_require__.d(
              __webpack_exports__,
              '__STORY__',
              function () {
                return __STORY__
              }
            ),
            __webpack_require__.d(
              __webpack_exports__,
              '__ADDS_MAP__',
              function () {
                return __ADDS_MAP__
              }
            )
          var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              1
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              22
            ),
            ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61),
            _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(146),
            _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4__
            ),
            withStorySource = __webpack_require__(35).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport styled from '@emotion/styled';\nimport { text, number } from '@storybook/addon-knobs';\nimport Button from '../';\n\nimport Kitty from './kitty.jpeg';\n\nconst btnSize = `\n  width: 500px;\n  height: 333px;\n`;\nconst DemoBox = styled.div`\n  display: flex;\n  justify-content: center;\n  padding: 100px;\n  background: #ccc;\n\n  > div {\n    ${btnSize}\n  }\n`;\n\nstoriesOf('Portfolio|Button', module)\n  .add('. default', () => (\n    <DemoBox>\n      <Button>This is a button</Button>\n    </DemoBox>\n  ))\n\n  .add('image', () => (\n    <DemoBox>\n      <Button>\n        <img src={Kitty} />\n      </Button>\n    </DemoBox>\n  ))\n\n  .add('styled', () => {\n    const props = {\n      label: text('label', 'Nya! nya! nya!'),\n    };\n\n    const DemoButton = styled(Button)`\n      ${btnSize}\n\n      .label {\n        width: ${number('label width', 40)}px;\n        margin-left: ${number('label x', 400)}px;\n        margin-top: ${number('label y', 20)}px;\n      }\n\n      :hover .label {\n        margin-left: ${number('label hover x', 400)}px;\n        margin-top: ${number('label hover y', 40)}px;\n      }\n\n      :hover .accent {\n        margin-left: 40px;\n        margin-top: 40px;\n      }\n    `;\n\n    return (\n      <DemoBox>\n        <DemoButton {...props}>\n          <img src={Kitty} />\n        </DemoButton>\n      </DemoBox>\n    );\n  });\n",
            __ADDS_MAP__ = {
              'portfolio-button--styled': {
                startLoc: { col: 7, line: 38 },
                endLoc: { col: 3, line: 70 }
              },
              'portfolio-button--image': {
                startLoc: { col: 7, line: 30 },
                endLoc: { col: 3, line: 36 }
              },
              'portfolio-button--default': {
                startLoc: { col: 7, line: 24 },
                endLoc: { col: 3, line: 28 }
              }
            },
            DemoBox = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
            )('div', { target: 'eykcq7v0' })(
              'display:flex;justify-content:center;padding:100px;background:#ccc;> div{',
              '\n  width: 500px;\n  height: 333px;\n',
              '}'
            )
          storiesOf('Portfolio|Button', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport styled from '@emotion/styled';\nimport { text, number } from '@storybook/addon-knobs';\nimport Button from '../';\n\nimport Kitty from './kitty.jpeg';\n\nconst btnSize = `\n  width: 500px;\n  height: 333px;\n`;\nconst DemoBox = styled.div`\n  display: flex;\n  justify-content: center;\n  padding: 100px;\n  background: #ccc;\n\n  > div {\n    ${btnSize}\n  }\n`;\n\nstoriesOf('Portfolio|Button', module)\n  .add('. default', () => (\n    <DemoBox>\n      <Button>This is a button</Button>\n    </DemoBox>\n  ))\n\n  .add('image', () => (\n    <DemoBox>\n      <Button>\n        <img src={Kitty} />\n      </Button>\n    </DemoBox>\n  ))\n\n  .add('styled', () => {\n    const props = {\n      label: text('label', 'Nya! nya! nya!'),\n    };\n\n    const DemoButton = styled(Button)`\n      ${btnSize}\n\n      .label {\n        width: ${number('label width', 40)}px;\n        margin-left: ${number('label x', 400)}px;\n        margin-top: ${number('label y', 20)}px;\n      }\n\n      :hover .label {\n        margin-left: ${number('label hover x', 400)}px;\n        margin-top: ${number('label hover y', 40)}px;\n      }\n\n      :hover .accent {\n        margin-left: 40px;\n        margin-top: 40px;\n      }\n    `;\n\n    return (\n      <DemoBox>\n        <DemoButton {...props}>\n          <img src={Kitty} />\n        </DemoButton>\n      </DemoBox>\n    );\n  });\n",
                __ADDS_MAP__
              )
            )
            .add('. default', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                DemoBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_3__.a,
                  null,
                  'This is a button'
                )
              )
            })
            .add('image', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                DemoBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_3__.a,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    { src: _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a }
                  )
                )
              )
            })
            .add('styled', function () {
              var props = {
                  label: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('label', 'Nya! nya! nya!')
                },
                DemoButton = Object(
                  _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
                )(___WEBPACK_IMPORTED_MODULE_3__.a, { target: 'eykcq7v1' })(
                  '\n  width: 500px;\n  height: 333px;\n',
                  ' .label{width:',
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('label width', 40),
                  'px;margin-left:',
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('label x', 400),
                  'px;margin-top:',
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('label y', 20),
                  'px;}:hover .label{margin-left:',
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('label hover x', 400),
                  'px;margin-top:',
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('label hover y', 40),
                  'px;}:hover .accent{margin-left:40px;margin-top:40px;}'
                )
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                DemoBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  DemoButton,
                  props,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    { src: _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a }
                  )
                )
              )
            })
        }.call(this, __webpack_require__(26)(module))
    },
    409: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__.d(
            __webpack_exports__,
            'withStorySource',
            function () {
              return withStorySource
            }
          ),
            __webpack_require__.d(
              __webpack_exports__,
              '__STORY__',
              function () {
                return __STORY__
              }
            ),
            __webpack_require__.d(
              __webpack_exports__,
              '__ADDS_MAP__',
              function () {
                return __ADDS_MAP__
              }
            )
          var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              1
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(240),
            withStorySource = __webpack_require__(35).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport styled from '@emotion/styled';\nimport Loader from '../Loader';\n\nconst DemoBox = styled.div`\n  padding: 40px;\n`;\n\nstoriesOf('Animation|Loader', module).add('. default', () => (\n  <DemoBox>\n    <Loader />\n  </DemoBox>\n));\n",
            __ADDS_MAP__ = {
              'animation-loader--default': {
                startLoc: { col: 42, line: 9 },
                endLoc: { col: 1, line: 13 }
              }
            },
            DemoBox = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
            )('div', { target: 'e7bvk3c0' })({
              name: '1mb7ed4',
              styles: 'padding:40px;'
            })
          storiesOf('Animation|Loader', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport styled from '@emotion/styled';\nimport Loader from '../Loader';\n\nconst DemoBox = styled.div`\n  padding: 40px;\n`;\n\nstoriesOf('Animation|Loader', module).add('. default', () => (\n  <DemoBox>\n    <Loader />\n  </DemoBox>\n));\n",
                __ADDS_MAP__
              )
            )
            .add('. default', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                DemoBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Loader__WEBPACK_IMPORTED_MODULE_2__.a,
                  null
                )
              )
            })
        }.call(this, __webpack_require__(26)(module))
    },
    410: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__.d(
            __webpack_exports__,
            'withStorySource',
            function () {
              return withStorySource
            }
          ),
            __webpack_require__.d(
              __webpack_exports__,
              '__STORY__',
              function () {
                return __STORY__
              }
            ),
            __webpack_require__.d(
              __webpack_exports__,
              '__ADDS_MAP__',
              function () {
                return __ADDS_MAP__
              }
            )
          var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              58
            ),
            _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              1
            ),
            react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_2__
            ),
            _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              241
            ),
            ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62),
            withStorySource = __webpack_require__(35).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport { actions } from '@storybook/addon-actions';\nimport styled from '@emotion/styled';\nimport Tooltip from '../';\n\nconst DemoBox = styled.div`\n  background: ${props => props.theme.colors.black};\n  min-height: 900px;\n  padding: 200px;\n  > div {\n    min-height: 100px;\n  }\n`;\nconst eventProps = {\n  ...actions('onMouseEnter', 'onMouseLeave', 'onMouseMove'),\n};\n\nstoriesOf('Portfolio|Tooltip', module)\n  .addDecorator(story => <DemoBox>{story()}</DemoBox>)\n  .add('. default', () => <Tooltip />)\n  .add('with text', () => <Tooltip>Here is some text.</Tooltip>)\n  .add('event logger', () => <Tooltip {...eventProps} />);\n",
            __ADDS_MAP__ = {
              'portfolio-tooltip--event-logger': {
                startLoc: { col: 7, line: 22 },
                endLoc: { col: 56, line: 22 }
              },
              'portfolio-tooltip--with-text': {
                startLoc: { col: 7, line: 21 },
                endLoc: { col: 63, line: 21 }
              },
              'portfolio-tooltip--default': {
                startLoc: { col: 7, line: 20 },
                endLoc: { col: 37, line: 20 }
              }
            },
            DemoBox = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a
            )('div', { target: 'esfw8s30' })(
              'background:',
              function (props) {
                return props.theme.colors.black
              },
              ';min-height:900px;padding:200px;> div{min-height:100px;}'
            ),
            eventProps = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()(
              {},
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.actions
              )('onMouseEnter', 'onMouseLeave', 'onMouseMove')
            )
          storiesOf('Portfolio|Tooltip', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport { actions } from '@storybook/addon-actions';\nimport styled from '@emotion/styled';\nimport Tooltip from '../';\n\nconst DemoBox = styled.div`\n  background: ${props => props.theme.colors.black};\n  min-height: 900px;\n  padding: 200px;\n  > div {\n    min-height: 100px;\n  }\n`;\nconst eventProps = {\n  ...actions('onMouseEnter', 'onMouseLeave', 'onMouseMove'),\n};\n\nstoriesOf('Portfolio|Tooltip', module)\n  .addDecorator(story => <DemoBox>{story()}</DemoBox>)\n  .add('. default', () => <Tooltip />)\n  .add('with text', () => <Tooltip>Here is some text.</Tooltip>)\n  .add('event logger', () => <Tooltip {...eventProps} />);\n",
                __ADDS_MAP__
              )
            )
            .addDecorator(function (story) {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                DemoBox,
                null,
                story()
              )
            })
            .add('. default', function () {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                null
              )
            })
            .add('with text', function () {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                null,
                'Here is some text.'
              )
            })
            .add('event logger', function () {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                eventProps
              )
            })
        }.call(this, __webpack_require__(26)(module))
    },
    45: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          19
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          6
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2),
        linkBox = Object(emotion__WEBPACK_IMPORTED_MODULE_0__.a)(
          {
            name: 'ou6ezd',
            styles:
              'display:flex;align-items:center;color:white;min-width:227px;img{margin:0 30px 0 9px;max-height:33px;max-width:33px;}&:hover{background:rgba(255,255,255,0.15);}'
          },
          ''
        )
      __webpack_exports__.a = function (_ref) {
        var logo = _ref.logo,
          title = _ref.title,
          url = _ref.url,
          other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(
            _ref,
            ['logo', 'title', 'url']
          )
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          _Typography__WEBPACK_IMPORTED_MODULE_4__.c,
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(
            { href: url, className: linkBox, target: '_blank', light: 'true' },
            other
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('img', {
            src: logo
          }),
          title
        )
      }
    },
    480: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__.d(
            __webpack_exports__,
            'withStorySource',
            function () {
              return withStorySource
            }
          ),
            __webpack_require__.d(
              __webpack_exports__,
              '__STORY__',
              function () {
                return __STORY__
              }
            ),
            __webpack_require__.d(
              __webpack_exports__,
              '__ADDS_MAP__',
              function () {
                return __ADDS_MAP__
              }
            )
          var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              1
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              22
            ),
            _TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60),
            withStorySource = __webpack_require__(35).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport { boolean } from '@storybook/addon-knobs';\nimport styled from '@emotion/styled';\nimport TopBar from '../TopBar';\n\nconst DemoBox = styled.div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n`;\n\nstoriesOf('Portfolio|TopBar', module)\n  .add('. default', () => <TopBar />)\n  .add('with links', () => <TopBar showLinks />)\n  .add('fixed top', () => {\n    const props = { showLinks: boolean('showLinks?', true) };\n\n    return (\n      <DemoBox>\n        <TopBar {...props} />\n      </DemoBox>\n    );\n  });\n",
            __ADDS_MAP__ = {
              'portfolio-topbar--fixed-top': {
                startLoc: { col: 7, line: 16 },
                endLoc: { col: 3, line: 24 }
              },
              'portfolio-topbar--with-links': {
                startLoc: { col: 7, line: 15 },
                endLoc: { col: 47, line: 15 }
              },
              'portfolio-topbar--default': {
                startLoc: { col: 7, line: 14 },
                endLoc: { col: 36, line: 14 }
              }
            },
            DemoBox = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
            )('div', { target: 'eykdad80' })({
              name: 'pym6ze',
              styles: 'position:fixed;top:0;left:0;right:0;'
            })
          storiesOf('Portfolio|TopBar', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport { boolean } from '@storybook/addon-knobs';\nimport styled from '@emotion/styled';\nimport TopBar from '../TopBar';\n\nconst DemoBox = styled.div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n`;\n\nstoriesOf('Portfolio|TopBar', module)\n  .add('. default', () => <TopBar />)\n  .add('with links', () => <TopBar showLinks />)\n  .add('fixed top', () => {\n    const props = { showLinks: boolean('showLinks?', true) };\n\n    return (\n      <DemoBox>\n        <TopBar {...props} />\n      </DemoBox>\n    );\n  });\n",
                __ADDS_MAP__
              )
            )
            .add('. default', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _TopBar__WEBPACK_IMPORTED_MODULE_3__.a,
                null
              )
            })
            .add('with links', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _TopBar__WEBPACK_IMPORTED_MODULE_3__.a,
                { showLinks: !0 }
              )
            })
            .add('fixed top', function () {
              var props = {
                showLinks: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean
                )('showLinks?', !0)
              }
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                DemoBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _TopBar__WEBPACK_IMPORTED_MODULE_3__.a,
                  props
                )
              )
            })
        }.call(this, __webpack_require__(26)(module))
    },
    481: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__.d(
            __webpack_exports__,
            'withStorySource',
            function () {
              return withStorySource
            }
          ),
            __webpack_require__.d(
              __webpack_exports__,
              '__STORY__',
              function () {
                return __STORY__
              }
            ),
            __webpack_require__.d(
              __webpack_exports__,
              '__ADDS_MAP__',
              function () {
                return __ADDS_MAP__
              }
            )
          __webpack_require__(34)
          var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              6
            ),
            _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__
            ),
            _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4),
            ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2),
            withStorySource = __webpack_require__(35).withStorySource,
            __STORY__ =
              'import React from \'react\';\nimport styled from \'@emotion/styled\';\n\nimport { font } from \'../../../theme\';\n\nimport { Header, Subtitle, Link } from \'..\';\n\nconst TypoListItem = styled(({ name, children, ...other }) => (\n  <li {...other}>\n    <p>{name}</p>\n    {children}\n  </li>\n))`\n  display: flex;\n  align-items: baseline;\n\n  p {\n    min-width: 120px;\n    opacity: 0.4;\n    font-family: ${font.familty};\n    font-size: ${font.size.subtitle};\n    margin: 0 1em;\n  }\n`;\n\nstoriesOf(\'Portfolio|Theme\', module).add(\'Typography\', () => (\n  <div>\n    <TypoListItem name="Header">\n      <Header>Hi</Header>\n    </TypoListItem>\n\n    <TypoListItem name="Subtitle">\n      <Subtitle>\n        I\'m a UX Engineer with 10 years experience in bringing together designers and developers to create amazing web\n        apps.\n      </Subtitle>\n    </TypoListItem>\n\n    <TypoListItem name="Link">\n      <Link href="#">Lorem ipsum dolor</Link>\n    </TypoListItem>\n\n    <TypoListItem name="Link/to">\n      <Link href="#" to="github">\n        Github\n      </Link>\n    </TypoListItem>\n\n    <TypoListItem name="Link/light">\n      <Link href="#" to="github" light>\n        Github\n      </Link>\n    </TypoListItem>\n  </div>\n));\n',
            __ADDS_MAP__ = {
              'portfolio-theme--typography': {
                startLoc: { col: 41, line: 26 },
                endLoc: { col: 1, line: 55 }
              }
            },
            TypoListItem = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a
            )(
              function (_ref) {
                var name = _ref.name,
                  children = _ref.children,
                  other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
                    _ref,
                    ['name', 'children']
                  )
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'li',
                  other,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    'p',
                    null,
                    name
                  ),
                  children
                )
              },
              { target: 'e1t6pf9l0' }
            )(
              'display:flex;align-items:baseline;p{min-width:120px;opacity:0.4;font-family:',
              _theme__WEBPACK_IMPORTED_MODULE_4__.b.familty,
              ';font-size:',
              _theme__WEBPACK_IMPORTED_MODULE_4__.b.size.subtitle,
              ';margin:0 1em;}'
            )
          storiesOf('Portfolio|Theme', module)
            .addDecorator(
              withStorySource(
                'import React from \'react\';\nimport styled from \'@emotion/styled\';\n\nimport { font } from \'../../../theme\';\n\nimport { Header, Subtitle, Link } from \'..\';\n\nconst TypoListItem = styled(({ name, children, ...other }) => (\n  <li {...other}>\n    <p>{name}</p>\n    {children}\n  </li>\n))`\n  display: flex;\n  align-items: baseline;\n\n  p {\n    min-width: 120px;\n    opacity: 0.4;\n    font-family: ${font.familty};\n    font-size: ${font.size.subtitle};\n    margin: 0 1em;\n  }\n`;\n\nstoriesOf(\'Portfolio|Theme\', module).add(\'Typography\', () => (\n  <div>\n    <TypoListItem name="Header">\n      <Header>Hi</Header>\n    </TypoListItem>\n\n    <TypoListItem name="Subtitle">\n      <Subtitle>\n        I\'m a UX Engineer with 10 years experience in bringing together designers and developers to create amazing web\n        apps.\n      </Subtitle>\n    </TypoListItem>\n\n    <TypoListItem name="Link">\n      <Link href="#">Lorem ipsum dolor</Link>\n    </TypoListItem>\n\n    <TypoListItem name="Link/to">\n      <Link href="#" to="github">\n        Github\n      </Link>\n    </TypoListItem>\n\n    <TypoListItem name="Link/light">\n      <Link href="#" to="github" light>\n        Github\n      </Link>\n    </TypoListItem>\n  </div>\n));\n',
                __ADDS_MAP__
              )
            )
            .add('Typography', function () {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  TypoListItem,
                  { name: 'Header' },
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_5__.b,
                    null,
                    'Hi'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  TypoListItem,
                  { name: 'Subtitle' },
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_5__.d,
                    null,
                    "I'm a UX Engineer with 10 years experience in bringing together designers and developers to create amazing web apps."
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  TypoListItem,
                  { name: 'Link' },
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_5__.c,
                    { href: '#' },
                    'Lorem ipsum dolor'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  TypoListItem,
                  { name: 'Link/to' },
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_5__.c,
                    { href: '#', to: 'github' },
                    'Github'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  TypoListItem,
                  { name: 'Link/light' },
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_5__.c,
                    { href: '#', to: 'github', light: !0 },
                    'Github'
                  )
                )
              )
            })
        }.call(this, __webpack_require__(26)(module))
    },
    482: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__.d(
            __webpack_exports__,
            'withStorySource',
            function () {
              return withStorySource
            }
          ),
            __webpack_require__.d(
              __webpack_exports__,
              '__STORY__',
              function () {
                return __STORY__
              }
            ),
            __webpack_require__.d(
              __webpack_exports__,
              '__ADDS_MAP__',
              function () {
                return __ADDS_MAP__
              }
            )
          var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              1
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            _page_01_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103),
            _page_02_ui_workbench__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              113
            ),
            _page_03_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              115
            ),
            _page_04_sketches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              116
            ),
            _page_05_resume__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              117
            ),
            _page_06_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              118
            ),
            withStorySource = __webpack_require__(35).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport styled from '@emotion/styled';\nimport Page1 from '../page-01-hi';\nimport Page2 from '../page-02-ui-workbench';\nimport Page3 from '../page-03-design';\nimport Page4 from '../page-04-sketches';\nimport Page5 from '../page-05-resume';\nimport Page6 from '../page-06-contact';\n\nconst PageBox = styled.div`\n  min-height: 1800px;\n`;\nstoriesOf('Portfolio|Pages', module)\n  .addDecorator(story => <PageBox>{story()}</PageBox>)\n  .add('page 1', () => <Page1 />)\n  .add('page 2', () => <Page2 />)\n  .add('page 3', () => <Page3 />)\n  .add('page 4', () => <Page4 />)\n  .add('page 5', () => <Page5 />)\n  .add('page 6', () => <Page6 />);\n",
            __ADDS_MAP__ = {
              'portfolio-pages--page-6': {
                startLoc: { col: 7, line: 20 },
                endLoc: { col: 32, line: 20 }
              },
              'portfolio-pages--page-5': {
                startLoc: { col: 7, line: 19 },
                endLoc: { col: 32, line: 19 }
              },
              'portfolio-pages--page-4': {
                startLoc: { col: 7, line: 18 },
                endLoc: { col: 32, line: 18 }
              },
              'portfolio-pages--page-3': {
                startLoc: { col: 7, line: 17 },
                endLoc: { col: 32, line: 17 }
              },
              'portfolio-pages--page-2': {
                startLoc: { col: 7, line: 16 },
                endLoc: { col: 32, line: 16 }
              },
              'portfolio-pages--page-1': {
                startLoc: { col: 7, line: 15 },
                endLoc: { col: 32, line: 15 }
              }
            },
            PageBox = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a
            )('div', { target: 'e16njc6h0' })({
              name: '978nq',
              styles: 'min-height:1800px;'
            })
          storiesOf('Portfolio|Pages', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport styled from '@emotion/styled';\nimport Page1 from '../page-01-hi';\nimport Page2 from '../page-02-ui-workbench';\nimport Page3 from '../page-03-design';\nimport Page4 from '../page-04-sketches';\nimport Page5 from '../page-05-resume';\nimport Page6 from '../page-06-contact';\n\nconst PageBox = styled.div`\n  min-height: 1800px;\n`;\nstoriesOf('Portfolio|Pages', module)\n  .addDecorator(story => <PageBox>{story()}</PageBox>)\n  .add('page 1', () => <Page1 />)\n  .add('page 2', () => <Page2 />)\n  .add('page 3', () => <Page3 />)\n  .add('page 4', () => <Page4 />)\n  .add('page 5', () => <Page5 />)\n  .add('page 6', () => <Page6 />);\n",
                __ADDS_MAP__
              )
            )
            .addDecorator(function (story) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                PageBox,
                null,
                story()
              )
            })
            .add('page 1', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _page_01_hi__WEBPACK_IMPORTED_MODULE_2__.a,
                null
              )
            })
            .add('page 2', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _page_02_ui_workbench__WEBPACK_IMPORTED_MODULE_3__.a,
                null
              )
            })
            .add('page 3', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _page_03_design__WEBPACK_IMPORTED_MODULE_4__.a,
                null
              )
            })
            .add('page 4', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _page_04_sketches__WEBPACK_IMPORTED_MODULE_5__.a,
                null
              )
            })
            .add('page 5', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _page_05_resume__WEBPACK_IMPORTED_MODULE_6__.a,
                null
              )
            })
            .add('page 6', function () {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _page_06_contact__WEBPACK_IMPORTED_MODULE_7__.a,
                null
              )
            })
        }.call(this, __webpack_require__(26)(module))
    },
    483: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__.d(
            __webpack_exports__,
            'withStorySource',
            function () {
              return withStorySource
            }
          ),
            __webpack_require__.d(
              __webpack_exports__,
              '__STORY__',
              function () {
                return __STORY__
              }
            ),
            __webpack_require__.d(
              __webpack_exports__,
              '__ADDS_MAP__',
              function () {
                return __ADDS_MAP__
              }
            )
          __webpack_require__(34)
          var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              6
            ),
            _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__
            ),
            _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4),
            _readme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(242),
            withStorySource = __webpack_require__(35).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport styled from '@emotion/styled';\n\nimport theme from '../theme';\nimport readme from './readme';\n\nconst ColorBox = styled.div`\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width: 1250px;\n  margin: 0 auto;\n`;\n\nconst ColorBlock = styled(({ name, hex, bg, ...other }) => (\n  <div {...other}>\n    <div />\n    <div>\n      <p>{name}</p>\n      <p>{hex || 'gradient'}</p>\n    </div>\n  </div>\n))`\n  font-family: ${props => props.theme.font.family};\n  background-color: ${props => props.hex};\n  border-radius: 16px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin: 16px;\n  max-width: 250px;\n  min-height: 250px;\n  width: 100%;\n  position: relative;\n\n  :hover {\n    box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.4);\n  }\n  transition: box-shadow 0.3s ease-out;\n\n  ${props =>\n    props.bg &&\n    `\n    background: ${props.bg};\n  `}\n\n  div {\n    min-height: 130px;\n    width: 100%;\n    border-radius: 0 0 16px 16px;\n  }\n  div + div {\n    min-height: 0;\n    background: white;\n    position: absolute;\n    bottom: 0;\n  }\n  div + div > p {\n    padding: 0 1em;\n    opacity: 0.4;\n  }\n\n  div + div > p + p {\n    opacity: 1;\n  }\n`;\nconst TldrBox = styled.div`\n  font-family: ${props => props.theme.font.family};\n  h1 {\n    text-transform: uppercase;\n  }\n  padding: 40px;\n\n  blockquote {\n    margin: 1em;\n  }\n  blockquote > p:before {\n    content: ' ';\n    border-left: 4px solid #ccc;\n    margin-right: 1em;\n  }\n`;\n\nstoriesOf('📌 TLDR;', module).add('README', () => <TldrBox> {readme} </TldrBox>);\n\nstoriesOf('Portfolio|Theme', module).add('Palette', () => (\n  <ColorBox>\n    <ColorBlock name=\"Black Pearl\" hex={theme.colors.black} />\n    <ColorBlock name=\"Brink Pink\" hex={theme.colors.workbench} />\n    <ColorBlock name=\"Royal Blue\" hex={theme.colors.design} />\n    <ColorBlock name=\"East Bay\" hex={theme.colors.tumblr} />\n    <ColorBlock name=\"Sail\" hex={theme.colors.resume} />\n    <ColorBlock name=\"Black Pearl to Pure Black\" bg={theme.gradients.header} />\n    <ColorBlock name=\"Accent (light)\" bg={theme.gradients.accentLight} />\n    <ColorBlock name=\"Accent (dark)\" bg={theme.gradients.accentDark} />\n  </ColorBox>\n));\n",
            __ADDS_MAP__ = {
              '📌-tldr--readme': {
                startLoc: { col: 34, line: 82 },
                endLoc: { col: 79, line: 82 }
              },
              'portfolio-theme--palette': {
                startLoc: { col: 41, line: 84 },
                endLoc: { col: 1, line: 95 }
              }
            },
            ColorBox = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a
            )('div', { target: 'eex7ddx0' })({
              name: '7u16ol',
              styles:
                'display:flex;justify-content:space-around;flex-wrap:wrap;max-width:1250px;margin:0 auto;'
            }),
            ColorBlock = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a
            )(
              function (_ref) {
                var name = _ref.name,
                  hex = _ref.hex,
                  other = (_ref.bg,
                  _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
                    _ref,
                    ['name', 'hex', 'bg']
                  ))
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  other,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    'div',
                    null
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    'div',
                    null,
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                      'p',
                      null,
                      name
                    ),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                      'p',
                      null,
                      hex || 'gradient'
                    )
                  )
                )
              },
              { target: 'eex7ddx1' }
            )(
              'font-family:',
              function (props) {
                return props.theme.font.family
              },
              ';background-color:',
              function (props) {
                return props.hex
              },
              ';border-radius:16px;box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);margin:16px;max-width:250px;min-height:250px;width:100%;position:relative;:hover{box-shadow:0 4px 4px -4px rgba(0,0,0,0.4);}transition:box-shadow 0.3s ease-out;',
              function (props) {
                return (
                  props.bg && '\n    background: '.concat(props.bg, ';\n  ')
                )
              },
              ' div{min-height:130px;width:100%;border-radius:0 0 16px 16px;}div + div{min-height:0;background:white;position:absolute;bottom:0;}div + div > p{padding:0 1em;opacity:0.4;}div + div > p + p{opacity:1;}'
            ),
            TldrBox = Object(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a
            )('div', { target: 'eex7ddx2' })(
              'font-family:',
              function (props) {
                return props.theme.font.family
              },
              ";h1{text-transform:uppercase;}padding:40px;blockquote{margin:1em;}blockquote > p:before{content:' ';border-left:4px solid #ccc;margin-right:1em;}"
            )
          storiesOf('📌 TLDR;', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport styled from '@emotion/styled';\n\nimport theme from '../theme';\nimport readme from './readme';\n\nconst ColorBox = styled.div`\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width: 1250px;\n  margin: 0 auto;\n`;\n\nconst ColorBlock = styled(({ name, hex, bg, ...other }) => (\n  <div {...other}>\n    <div />\n    <div>\n      <p>{name}</p>\n      <p>{hex || 'gradient'}</p>\n    </div>\n  </div>\n))`\n  font-family: ${props => props.theme.font.family};\n  background-color: ${props => props.hex};\n  border-radius: 16px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin: 16px;\n  max-width: 250px;\n  min-height: 250px;\n  width: 100%;\n  position: relative;\n\n  :hover {\n    box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.4);\n  }\n  transition: box-shadow 0.3s ease-out;\n\n  ${props =>\n    props.bg &&\n    `\n    background: ${props.bg};\n  `}\n\n  div {\n    min-height: 130px;\n    width: 100%;\n    border-radius: 0 0 16px 16px;\n  }\n  div + div {\n    min-height: 0;\n    background: white;\n    position: absolute;\n    bottom: 0;\n  }\n  div + div > p {\n    padding: 0 1em;\n    opacity: 0.4;\n  }\n\n  div + div > p + p {\n    opacity: 1;\n  }\n`;\nconst TldrBox = styled.div`\n  font-family: ${props => props.theme.font.family};\n  h1 {\n    text-transform: uppercase;\n  }\n  padding: 40px;\n\n  blockquote {\n    margin: 1em;\n  }\n  blockquote > p:before {\n    content: ' ';\n    border-left: 4px solid #ccc;\n    margin-right: 1em;\n  }\n`;\n\nstoriesOf('📌 TLDR;', module).add('README', () => <TldrBox> {readme} </TldrBox>);\n\nstoriesOf('Portfolio|Theme', module).add('Palette', () => (\n  <ColorBox>\n    <ColorBlock name=\"Black Pearl\" hex={theme.colors.black} />\n    <ColorBlock name=\"Brink Pink\" hex={theme.colors.workbench} />\n    <ColorBlock name=\"Royal Blue\" hex={theme.colors.design} />\n    <ColorBlock name=\"East Bay\" hex={theme.colors.tumblr} />\n    <ColorBlock name=\"Sail\" hex={theme.colors.resume} />\n    <ColorBlock name=\"Black Pearl to Pure Black\" bg={theme.gradients.header} />\n    <ColorBlock name=\"Accent (light)\" bg={theme.gradients.accentLight} />\n    <ColorBlock name=\"Accent (dark)\" bg={theme.gradients.accentDark} />\n  </ColorBox>\n));\n",
                __ADDS_MAP__
              )
            )
            .add('README', function () {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                TldrBox,
                null,
                ' ',
                _readme__WEBPACK_IMPORTED_MODULE_5__.a,
                ' '
              )
            }),
            storiesOf('Portfolio|Theme', module)
              .addDecorator(
                withStorySource(
                  "import React from 'react';\nimport styled from '@emotion/styled';\n\nimport theme from '../theme';\nimport readme from './readme';\n\nconst ColorBox = styled.div`\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width: 1250px;\n  margin: 0 auto;\n`;\n\nconst ColorBlock = styled(({ name, hex, bg, ...other }) => (\n  <div {...other}>\n    <div />\n    <div>\n      <p>{name}</p>\n      <p>{hex || 'gradient'}</p>\n    </div>\n  </div>\n))`\n  font-family: ${props => props.theme.font.family};\n  background-color: ${props => props.hex};\n  border-radius: 16px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin: 16px;\n  max-width: 250px;\n  min-height: 250px;\n  width: 100%;\n  position: relative;\n\n  :hover {\n    box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.4);\n  }\n  transition: box-shadow 0.3s ease-out;\n\n  ${props =>\n    props.bg &&\n    `\n    background: ${props.bg};\n  `}\n\n  div {\n    min-height: 130px;\n    width: 100%;\n    border-radius: 0 0 16px 16px;\n  }\n  div + div {\n    min-height: 0;\n    background: white;\n    position: absolute;\n    bottom: 0;\n  }\n  div + div > p {\n    padding: 0 1em;\n    opacity: 0.4;\n  }\n\n  div + div > p + p {\n    opacity: 1;\n  }\n`;\nconst TldrBox = styled.div`\n  font-family: ${props => props.theme.font.family};\n  h1 {\n    text-transform: uppercase;\n  }\n  padding: 40px;\n\n  blockquote {\n    margin: 1em;\n  }\n  blockquote > p:before {\n    content: ' ';\n    border-left: 4px solid #ccc;\n    margin-right: 1em;\n  }\n`;\n\nstoriesOf('📌 TLDR;', module).add('README', () => <TldrBox> {readme} </TldrBox>);\n\nstoriesOf('Portfolio|Theme', module).add('Palette', () => (\n  <ColorBox>\n    <ColorBlock name=\"Black Pearl\" hex={theme.colors.black} />\n    <ColorBlock name=\"Brink Pink\" hex={theme.colors.workbench} />\n    <ColorBlock name=\"Royal Blue\" hex={theme.colors.design} />\n    <ColorBlock name=\"East Bay\" hex={theme.colors.tumblr} />\n    <ColorBlock name=\"Sail\" hex={theme.colors.resume} />\n    <ColorBlock name=\"Black Pearl to Pure Black\" bg={theme.gradients.header} />\n    <ColorBlock name=\"Accent (light)\" bg={theme.gradients.accentLight} />\n    <ColorBlock name=\"Accent (dark)\" bg={theme.gradients.accentDark} />\n  </ColorBox>\n));\n",
                  __ADDS_MAP__
                )
              )
              .add('Palette', function () {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  ColorBox,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ColorBlock,
                    {
                      name: 'Black Pearl',
                      hex: _theme__WEBPACK_IMPORTED_MODULE_4__.a.colors.black
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ColorBlock,
                    {
                      name: 'Brink Pink',
                      hex:
                        _theme__WEBPACK_IMPORTED_MODULE_4__.a.colors.workbench
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ColorBlock,
                    {
                      name: 'Royal Blue',
                      hex: _theme__WEBPACK_IMPORTED_MODULE_4__.a.colors.design
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ColorBlock,
                    {
                      name: 'East Bay',
                      hex: _theme__WEBPACK_IMPORTED_MODULE_4__.a.colors.tumblr
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ColorBlock,
                    {
                      name: 'Sail',
                      hex: _theme__WEBPACK_IMPORTED_MODULE_4__.a.colors.resume
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ColorBlock,
                    {
                      name: 'Black Pearl to Pure Black',
                      bg: _theme__WEBPACK_IMPORTED_MODULE_4__.a.gradients.header
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ColorBlock,
                    {
                      name: 'Accent (light)',
                      bg:
                        _theme__WEBPACK_IMPORTED_MODULE_4__.a.gradients
                          .accentLight
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    ColorBlock,
                    {
                      name: 'Accent (dark)',
                      bg:
                        _theme__WEBPACK_IMPORTED_MODULE_4__.a.gradients
                          .accentDark
                    }
                  )
                )
              })
        }.call(this, __webpack_require__(26)(module))
    },
    57: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return LinksContext
      })
      var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          58
        ),
        _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          104
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          105
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          106
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          107
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__
        ),
        _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          76
        ),
        _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          108
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          75
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__
        ),
        react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_8__
        ),
        LinksContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.createContext(
          {
            isVisible: !1,
            show: function (f) {
              return f
            },
            hide: function (f) {
              return f
            }
          }
        )
      __webpack_exports__.b = function (Component) {
        return (function (_React$Component) {
          function LinksContextHOC () {
            var _getPrototypeOf2, _this
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
              this,
              LinksContextHOC
            )
            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key]
            return (
              (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
                this,
                (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
                  LinksContextHOC
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              )),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                  _this
                ),
                'state',
                { isVisible: !1 }
              ),
              _this
            )
          }
          return (
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(
              LinksContextHOC,
              _React$Component
            ),
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(
              LinksContextHOC,
              [
                {
                  key: 'show',
                  value: function () {
                    this.setState({ isVisible: !0 })
                  }
                },
                {
                  key: 'hide',
                  value: function () {
                    this.setState({ isVisible: !1 })
                  }
                },
                {
                  key: 'render',
                  value: function () {
                    var _this2 = this,
                      props = this.props,
                      ctx = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()(
                        {},
                        this.state,
                        {
                          show: function () {
                            return _this2.show()
                          },
                          hide: function () {
                            return _this2.hide()
                          }
                        }
                      )
                    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                      LinksContext.Provider,
                      { value: ctx },
                      react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                        Component,
                        props
                      )
                    )
                  }
                }
              ]
            ),
            LinksContextHOC
          )
        })(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)
      }
    },
    60: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          6
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          1
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45),
        _logo_behance_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          109
        ),
        _logo_behance_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _logo_behance_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          110
        ),
        _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _logo_linked_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          111
        ),
        _logo_linked_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _logo_linked_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _logo_github_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          112
        ),
        _logo_github_png__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _logo_github_png__WEBPACK_IMPORTED_MODULE_8__
        ),
        BarBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)(
          'div',
          { target: 'e2s2wxl0' }
        )({
          name: '1q99edc',
          styles:
            'display:flex;background:linear-gradient(270deg,#000000 0%,rgba(0,0,0,0) 50%),#232729;padding-left:100px;transition:all 0.2ms ease-in;div a{img{max-height:100px;}}'
        }),
        trLinkReveal = function () {
          var delay =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
          return '\n  transition-property: opacity;\n  transition-duration: .8s;\n  transition-timing-function: ease-out;\n  transition-delay: '.concat(
            delay,
            's;\n'
          )
        },
        LinksBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)(
          'div',
          { target: 'e2s2wxl1' }
        )(
          'display:flex;align-content:center;justify-content:flex-end;flex-wrap:wrap;> div:hover{',
          function (props) {
            return !props.show && 'background: none;'
          },
          '}a{opacity:',
          function (props) {
            return props.show ? 1 : 0
          },
          ';}a:nth-of-type(1){',
          trLinkReveal(),
          '}a:nth-of-type(2){',
          trLinkReveal(0.8),
          '}a:nth-of-type(3){',
          trLinkReveal(1.2),
          '}a:nth-of-type(4){',
          trLinkReveal(1.8),
          '}'
        ),
        TopBar = function (_ref) {
          var showLinks = _ref.showLinks,
            props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(
              _ref,
              ['showLinks']
            )
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            BarBox,
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              _Typography__WEBPACK_IMPORTED_MODULE_3__.a,
              { href: '#' },
              'remy  chaumard'
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              LinksBox,
              { show: showLinks },
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _Link__WEBPACK_IMPORTED_MODULE_4__.a,
                props.behanceLink
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _Link__WEBPACK_IMPORTED_MODULE_4__.a,
                props.tumblrLink
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _Link__WEBPACK_IMPORTED_MODULE_4__.a,
                props.linkedInLink
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _Link__WEBPACK_IMPORTED_MODULE_4__.a,
                props.githubLink
              )
            )
          )
        }
      ;(TopBar.defaultProps = {
        showLinks: !1,
        behanceLink: {
          to: 'behance',
          logo: _logo_behance_png__WEBPACK_IMPORTED_MODULE_5___default.a,
          title: 'behance',
          url: 'https://www.behance.net/rchaumard25b7'
        },
        tumblrLink: {
          to: 'tumblr',
          logo: _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6___default.a,
          title: 'tumblr',
          url: 'https://dr-dyne.tumblr.com/tagged/sketch'
        },
        linkedInLink: {
          to: 'linkedin',
          logo: _logo_linked_png__WEBPACK_IMPORTED_MODULE_7___default.a,
          title: 'linked in',
          url: 'https://linkedin.com/in/ryc'
        },
        githubLink: {
          to: 'github',
          logo: _logo_github_png__WEBPACK_IMPORTED_MODULE_8___default.a,
          title: 'github',
          url: 'https://github.com/DrDyne'
        }
      }),
        (__webpack_exports__.a = TopBar),
        (TopBar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TopBar',
          props: {
            showLinks: {
              defaultValue: { value: 'false', computed: !1 },
              required: !1
            },
            behanceLink: {
              defaultValue: {
                value:
                  "{\n  to: 'behance',\n  logo: LogoBehance,\n  title: 'behance',\n  url: 'https://www.behance.net/rchaumard25b7'\n}",
                computed: !1
              },
              required: !1
            },
            tumblrLink: {
              defaultValue: {
                value:
                  "{\n  to: 'tumblr',\n  logo: LogoTumblr,\n  title: 'tumblr',\n  url: 'https://dr-dyne.tumblr.com/tagged/sketch'\n}",
                computed: !1
              },
              required: !1
            },
            linkedInLink: {
              defaultValue: {
                value:
                  "{\n  to: 'linkedin',\n  logo: LogoLinkedIn,\n  title: 'linked in',\n  url: 'https://linkedin.com/in/ryc'\n}",
                computed: !1
              },
              required: !1
            },
            githubLink: {
              defaultValue: {
                value:
                  "{\n  to: 'github',\n  logo: LogoGithub,\n  title: 'github',\n  url: 'https://github.com/DrDyne'\n}",
                computed: !1
              },
              required: !1
            }
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/TopBar/TopBar.js'] = {
            name: 'TopBar',
            docgenInfo: TopBar.__docgenInfo,
            path: 'src/components/TopBar/TopBar.js'
          })
    },
    61: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var withMouseTracker_hoc = __webpack_require__(114),
        helpers_extends = __webpack_require__(19),
        extends_default = __webpack_require__.n(helpers_extends),
        objectSpread = __webpack_require__(58),
        objectSpread_default = __webpack_require__.n(objectSpread),
        objectWithoutProperties = __webpack_require__(6),
        objectWithoutProperties_default = __webpack_require__.n(
          objectWithoutProperties
        ),
        styled_base_browser_esm = __webpack_require__(1),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Button = function (_ref3) {
          _ref3.isActive
          var pos = _ref3.pos,
            width = _ref3.width,
            height = _ref3.height,
            href = _ref3.href,
            label = _ref3.label,
            children = _ref3.children,
            transformAccent = _ref3.transformAccent,
            transformBox = _ref3.transformBox,
            transformLabel = _ref3.transformLabel,
            props = objectWithoutProperties_default()(_ref3, [
              'isActive',
              'pos',
              'width',
              'height',
              'href',
              'label',
              'children',
              'transformAccent',
              'transformBox',
              'transformLabel'
            ]),
            _rotate = (function (_ref) {
              var x = _ref.x,
                y = _ref.y,
                width = _ref.width,
                height = _ref.height,
                rotation = {
                  rx: (x / width / 2).toFixed(2),
                  ry: (y / height / 2).toFixed(2)
                }
              return (0 > x && 0 < y) || (0 < x && 0 > y)
                ? { rx: -1 * rotation.rx, ry: -1 * rotation.ry }
                : rotation
            })(
              objectSpread_default()({}, pos, { width: width, height: height })
            ),
            tr = (function (_ref2) {
              var rx = _ref2.rx,
                ry = _ref2.ry,
                pos = _ref2.pos,
                transformBox = _ref2.transformBox,
                transformLabel = _ref2.transformLabel,
                transformAccent = _ref2.transformAccent,
                rotate = 'rotateX('
                  .concat(rx || 0, 'deg) rotateY(')
                  .concat(ry || 0, 'deg)'),
                rotateAnti = 'rotateX('
                  .concat(-0.5 * rx || 0, 'deg) rotateY(')
                  .concat(-0.5 * ry || 0, 'deg)')
              return {
                box: transformBox(rotate, pos),
                label: transformLabel(rotateAnti, pos),
                accent: transformAccent(rotate, pos)
              }
            })({
              rx: _rotate.rx,
              ry: _rotate.ry,
              pos: pos,
              transformBox: transformBox,
              transformLabel: transformLabel,
              transformAccent: transformAccent
            })
          return react_default.a.createElement(
            'div',
            extends_default()({ className: 'btn-box' }, props, {
              style: { transform: tr.box }
            }),
            react_default.a.createElement(
              'div',
              { className: 'label', style: { transform: tr.label } },
              label
            ),
            react_default.a.createElement('a', {
              href: href,
              target: '_blank',
              className: 'accent',
              style: { transform: tr.accent }
            }),
            children
          )
        }
      Button.defaultProps = {
        href: '#',
        label: void 0,
        children: null,
        width: 0,
        height: 0,
        pos: { x: 0, y: 0 },
        transformAccent: function (f) {
          return f
        },
        transformBox: function (f) {
          return f
        },
        transformLabel: function (f) {
          return f
        }
      }
      var Button_Button = Object(styled_base_browser_esm.a)(Button, {
        target: 'em4lxqa0'
      })(
        'transition:all 0.4s ease-out;position:relative;display:block;background:rgba(255,255,255,0.8);z-index:',
        function (props) {
          return props.theme.z.pageButton
        },
        ';box-shadow:0px 8px 16px rgba(0,0,0,0.25);perspective:20px;img{width:100%;transition:all 0.2s ease-in;}.label{font-family:',
        function (props) {
          return props.theme.font.family
        },
        ';font-size:',
        function (props) {
          return props.theme.font.size.subtitle
        },
        ';font-weight:bold;letter-spacing:10px;color:white;z-index:',
        function (props) {
          return props.theme.z.btn.label
        },
        ';position:absolute;opacity:0;transition:opacity 0.2s ease-in,margin 0.2s ease-in 0s;}.accent{perspective:400px;position:absolute;opacity:0;z-index:',
        function (props) {
          return props.theme.z.btn.accent
        },
        ';border:2px solid white;width:100%;height:100%;margin:0;background:rgba(255,255,255,0);transition:all 0.2s ease-out,margin 0.2s ease-out,opacity 0.4s ease-out,background 0.2s ease-out;}:hover{background:linear-gradient( 224.01deg,rgba(255,255,255,0) 12.8%,rgba(255,255,255,0.2) 46.35%,rgba(255,255,255,0) 88.7% ),#232729;backdrop-filter:blur(4px);img{opacity:0.6;transform:scale(0.98);}.accent,.label{opacity:1;}.label{}.accent{z-index:',
        function (props) {
          return props.theme.z.btn.accent
        },
        ';background:rgba(255,255,255,0.4);}}'
      )
      __webpack_exports__.a = Object(withMouseTracker_hoc.a)(Button_Button)
    },
    62: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var objectWithoutProperties = __webpack_require__(6),
        objectWithoutProperties_default = __webpack_require__.n(
          objectWithoutProperties
        ),
        styled_base_browser_esm = __webpack_require__(1),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        bg = __webpack_require__(236),
        bg_default = __webpack_require__.n(bg),
        accent = __webpack_require__(237),
        accent_default = __webpack_require__.n(accent),
        tr_translate = function (_ref) {
          var x = _ref.x,
            y = _ref.y
          return 'translate('.concat(-0.05 * x, 'px, ').concat(-0.05 * y, 'px)')
        },
        tr_rotate = function (_ref2, width, height) {
          var x = _ref2.x,
            y = _ref2.y
          return 'rotateX('
            .concat(30 * (x / width / 2).toFixed(2), 'deg) rotateY(')
            .concat(30 * (y / height / 2).toFixed(2), 'deg)')
        },
        Tooltip = function (_ref3) {
          var children = _ref3.children,
            href = _ref3.href,
            pos = _ref3.pos,
            width = _ref3.width,
            height = _ref3.height,
            props = objectWithoutProperties_default()(_ref3, [
              'children',
              'href',
              'pos',
              'width',
              'height'
            ])
          return react_default.a.createElement(
            'div',
            props,
            react_default.a.createElement(
              'a',
              { href: href, target: '_blank', className: 'tooltip-label' },
              children
            ),
            react_default.a.createElement('img', {
              className: 'tooltip-accent',
              src: accent_default.a,
              style: { transform: tr_translate(pos) }
            }),
            react_default.a.createElement('img', {
              className: 'tooltip-bg',
              src: bg_default.a,
              style: { transform: tr_rotate(pos, width, height) }
            })
          )
        }
      Tooltip.defaultProps = {
        children: null,
        href: '#',
        width: 0,
        height: 0,
        pos: { x: 0, y: 0 }
      }
      var Tooltip_Tooltip = Object(styled_base_browser_esm.a)(Tooltip, {
          target: 'eo6wtbo0'
        })({
          name: 'kjufk2',
          styles:
            'position:relative;display:flex;margin:0 auto;transition:all 0.2s ease-out;min-height:100px;a{text-decoration:none;}.tooltip-label{position:absolute;transform:translate(0,150%);width:100%;text-align:center;z-index:2;margin-left:-18px;}.tooltip-label h3{display:inline;margin:0 auto;padding:0;}img{z-index:1;position:absolute;transition:all 0.2s ease-out;}.tooltip-accent{margin-top:-3px;margin-left:-16px;}:hover .tooltip-bg{-webkit-filter:drop-shadow(8px 8px 10px black);filter:drop-shadow(8px 8px 10px black);}:hover .tooltip-accent{-webkit-filter:drop-shadow(8px 8px 10px white);filter:drop-shadow(8px 8px 10px white);}'
        }),
        withMouseTracker_hoc = __webpack_require__(114)
      __webpack_exports__.a = Object(withMouseTracker_hoc.a)(Tooltip_Tooltip)
    },
    7: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return PageBox
      }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return PageLeft
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function () {
          return PageRight
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return ButtonBox
        })
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          1
        ),
        _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4),
        _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          61
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          2
        ),
        PageBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'div',
          { target: 'e1o3p8060' }
        )(
          'position:relative;display:flex;flex-wrap:wrap;background:',
          function (props) {
            return props.theme.pageBackground[props.pageIndex] || '#fff'
          },
          ';',
          _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
          '{color:',
          _theme__WEBPACK_IMPORTED_MODULE_1__.c,
          ';max-width:290px;margin-top:240px;margin:240px 0 0 94px;z-index:',
          function (props) {
            return props.theme.z.subtitle
          },
          ';}min-height:900px;',
          function (props) {
            return (
              4 === props.pageIndex &&
              '/* page 4 -- sketches (fullscreen image) */\n    z-index: 3;\n\n    .bg {\n      display: block;\n      width: 100%;\n      height: auto;\n      margin-top: -174px;\n      margin-bottom: -5px;\n    }\n\n    [data-rellax-speed] {\n      width: 100%;\n    }\n\n    div img {\n      margin-top: 150px;\n      width: 100%;\n    }\n\n    '.concat(
                _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
                ' {\n      width: 100%;\n      max-width: 800px;\n      text-align: center;\n      margin: -172px auto 0 auto;\n      padding: 50px;\n      background: rgba(0, 0, 0, 0.33);\n      backdrop-filter: blur(8px);\n    }\n  '
              )
            )
          },
          ' ',
          function (props) {
            return (
              5 === props.pageIndex &&
              '/* page 5 -- resume (vertical flow) */\n\n    '
                .concat(
                  _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
                  ' {\n      max-width: '
                )
                .concat(props.theme.breakpoint, 'px;\n      color: ')
                .concat(
                  props.theme.colors.resume,
                  ';\n      margin: 0 auto;\n      padding: 100px 100px 20px 100px;\n      z-index: 3;\n      text-align: center;\n    }\n  '
                )
            )
          },
          ' ',
          function (props) {
            return (
              6 === props.pageIndex &&
              '\n    position: relative;\n    overflow: hidden;\n\n    .tooltip-box {\n      z-index: 1;\n      position: absolute;\n      width: 750px;\n      height: 207px;\n      bottom: 300px;\n      margin-left: 50px;\n    }\n\n    .bg {\n      margin-bottom: -5px;\n      display: block;\n      height: 100%;\n      width: 100%;\n      > img { \n        width: 100%;\n        min-height: 900px \n      }\n\n      .contact-line {\n        position: absolute;\n        right: 50px;\n        bottom: 50px;\n      }\n    }\n  '
            )
          },
          ''
        ),
        PageLeft = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'section',
          { target: 'e1o3p8061' }
        )({ name: 'hyxlzm', styles: 'position:relative;display:flex;' }),
        PageRight = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          'section',
          { target: 'e1o3p8062' }
        )({
          name: 'dj7ba3',
          styles: 'position:relative;display:flex;flex-grow:1;z-index:1;'
        }),
        ButtonBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(
          _components_Button__WEBPACK_IMPORTED_MODULE_2__.a,
          { target: 'e1o3p8063' }
        )('')
    }
  },
  [[245, 1, 2]]
])
//# sourceMappingURL=main.3a46a0983ef0ef3a5a91.bundle.js.map
