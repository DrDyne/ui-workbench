;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    119: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        react_waypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273),
        _ctx_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83),
        _components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          4
        ),
        _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          125
        ),
        _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          126
        ),
        _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          127
        ),
        _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          128
        ),
        _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_8__
        ),
        _components_TopBar_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          66
        ),
        _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          275
        ),
        _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_10__
        ),
        _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          276
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
        PageBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'e1ur4wv20' }
        )(
          'padding:94px;padding-top:194px;min-height:900px;position:relative;z-index:10;',
          _components_Typography__WEBPACK_IMPORTED_MODULE_4__.d,
          '{max-width:290px;}img.whitewash{position:absolute;right:0;bottom:0;height:100%;z-index:-1;}'
        ),
        PageLeft = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'section',
          { target: 'e1ur4wv21' }
        )(''),
        PageRight = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'section',
          { target: 'e1ur4wv22' }
        )(''),
        LinksBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'e1ur4wv23' }
        )({
          name: 'qfdd9t',
          styles: 'display:flex;flex-direction:column;align-items:flex-end;'
        }),
        CenterBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
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
                      react_waypoint__WEBPACK_IMPORTED_MODULE_2__.Waypoint,
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
    12: function (module, __webpack_exports__, __webpack_require__) {
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
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__
        ),
        _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5),
        _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          67
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          4
        ),
        PageBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
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
              '\n    position: relative;\n    overflow: hidden;\n\n    .tooltip {\n      z-index: 1;\n      max-width: 750px;\n      max-height: 207px;\n      margin-left: 54px;\n      margin-top: -600px;\n    }\n\n    .bg {\n      margin-bottom: -5px;\n      display: block;\n      height: 100%;\n      width: 100%;\n      > img { \n        width: 100%;\n        min-height: 900px \n      }\n\n      .contact-line {\n        position: absolute;\n        right: 50px;\n        bottom: 50px;\n      }\n    }\n  '
            )
          },
          ''
        ),
        PageLeft = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'section',
          { target: 'e1o3p8061' }
        )({ name: 'hyxlzm', styles: 'position:relative;display:flex;' }),
        PageRight = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'section',
          { target: 'e1o3p8062' }
        )({
          name: 'dj7ba3',
          styles: 'position:relative;display:flex;flex-grow:1;z-index:1;'
        }),
        ButtonBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          _components_Button__WEBPACK_IMPORTED_MODULE_2__.a,
          { target: 'e1o3p8063' }
        )('')
    },
    125: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'b66756c49b5ca9a79130b13c86fa2556.png'
    },
    126: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '90ff6e21f548d1a59cd9435cdba990e3.png'
    },
    127: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '0b603076dfc832af9f9f357e2552dd5c.png'
    },
    128: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'f440148b22f2a412e69f2c32edde7302.png'
    },
    129: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        react_rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84),
        react_rellax__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react_rellax__WEBPACK_IMPORTED_MODULE_2__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          4
        ),
        _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          277
        ),
        _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          278
        ),
        _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          279
        ),
        _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          280
        ),
        _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _assets_workbench_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          281
        ),
        _assets_workbench_png__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _assets_workbench_png__WEBPACK_IMPORTED_MODULE_8__
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12),
        ContentBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'eiui8310' }
        )({
          name: '1ls7yjo',
          styles:
            'display:flex;flex-grow:1;min-width:560px;transition:all 0.2s;min-height:1000px;@media (min-width:740px){padding-left:200px;> div:first-of-type{margin-top:240px;margin-bottom:-50px;}> div.parallax{}img.react-logo{padding-left:300px;margin-top:-240px;}}'
        }),
        UIWBButtonBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          _Layout__WEBPACK_IMPORTED_MODULE_9__.a,
          { target: 'eiui8311' }
        )({
          name: '18ayi41',
          styles:
            'z-index:2;width:100%;max-width:686px;height:363px;margin-top:94px;background:#ffffff;box-shadow:0px 8px 16px rgba(0,0,0,0.25);img{max-width:686px;height:363px;}.label{position:absolute;left:50%;top:50%;text-align:center;}'
        }),
        Page1Parallax = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          react_rellax__WEBPACK_IMPORTED_MODULE_2___default.a,
          { target: 'eiui8312' }
        )(
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
    130: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12),
        _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          282
        ),
        _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        _assets_button_behance_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          283
        ),
        _assets_button_behance_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _assets_button_behance_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        react_rellax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84),
        react_rellax__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_rellax__WEBPACK_IMPORTED_MODULE_6__
        ),
        ContentBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'ep2g05l0' }
        )(
          'width:100%;margin-top:240px;margin-left:auto;margin-bottom:500px;@media (max-width:',
          function (props) {
            return props.theme.breakpoint
          },
          'px){padding-bottom:200px;}'
        ),
        Page2Parallax = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          react_rellax__WEBPACK_IMPORTED_MODULE_6___default.a,
          { target: 'ep2g05l1' }
        )(
          'position:absolute;left:0;bottom:0;right:0;top:auto;z-index:0;margin-left:-384px;img{width:100%;}@media (max-width:',
          function (props) {
            return props.theme.breakpoint
          },
          'px){opacity:0;}'
        ),
        BehanceButtonBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          _Layout__WEBPACK_IMPORTED_MODULE_3__.a,
          { target: 'ep2g05l2' }
        )({
          name: '9r2qtm',
          styles:
            'z-index:2;margin:0 0 0 auto;height:437px;width:900px;.label{margin-right:50px;right:0;text-align:right;}:hover .label{margin-right:20px;}:hover .accent{margin-top:35px;margin-left:-35px;}'
        }),
        btnProps = {
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
    131: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          35
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          23
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        react_rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84),
        react_rellax__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react_rellax__WEBPACK_IMPORTED_MODULE_4__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          4
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12),
        _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          284
        ),
        _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        SketchesButtonBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
          _Layout__WEBPACK_IMPORTED_MODULE_6__.a,
          { target: 'ej67efe0' }
        )(
          'height:209px;max-width:600px;margin:0 auto;padding:2em;.label{margin-top:20px;margin-left:75px;opacity:1;color:',
          function (_ref) {
            return _ref.theme.colors.black
          },
          ';}:hover .label{margin-top:50px;margin-left:75px;color:white;}:hover .accent{margin-top:-75px;margin-left:25px;}'
        ),
        PageBg = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
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
    132: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12),
        _assets_button_vim_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          285
        ),
        _assets_button_vim_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_button_vim_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        BgBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'e1epzm2c0' }
        )(''),
        ResumeButtonBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          _Layout__WEBPACK_IMPORTED_MODULE_3__.a,
          { target: 'e1epzm2c1' }
        )({
          name: '172tvdy',
          styles:
            'width:876px;height:493px;margin:100px auto;.label{text-align:center;top:50%;left:50%;}'
        }),
        ContentBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'e1epzm2c2' }
        )(
          'width:100%;background:',
          function (props) {
            return props.theme.colors.resume
          },
          ';background-opacity:0.4;'
        ),
        btnProps = {
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
    133: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          286
        ),
        _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_1__
        ),
        _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          287
        ),
        _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_2__
        ),
        _assets_tooltip_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          288
        ),
        _assets_tooltip_png__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _assets_tooltip_png__WEBPACK_IMPORTED_MODULE_3__
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12)
      __webpack_exports__.a = function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Layout__WEBPACK_IMPORTED_MODULE_4__.b,
          { pageIndex: 6 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'bg' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
              src: _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_2___default.a
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'contact-line' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src:
                    _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_1___default.a
                }
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'tooltip' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
              src: _assets_tooltip_png__WEBPACK_IMPORTED_MODULE_3___default.a
            })
          )
        )
      }
    },
    189: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'ca3211105d00b409071de21d18e0e14c.jpeg'
    },
    275: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'be7e58f2816f4ac7b1724e0ef97cab76.png'
    },
    276: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'e85b811087b5cc277431d08e3067b05b.png'
    },
    277: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '468fcabd781f738c798265f8c0ea74bf.png'
    },
    278: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '7de29fdc8f8e2eda4deb45d0c9183cbf.png'
    },
    279: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '8816ff05da90adccb506956d783e714e.png'
    },
    280: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '7be0947c8fe5546ea0c3230108a58235.png'
    },
    281: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'f77ed3cbca39a21c9feca15019b11bcc.png'
    },
    282: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '0a0f0ab71ac53ae2b254e80df8dd43ef.png'
    },
    283: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '16506319dbfb7bfb5cf6e056d4f25056.png'
    },
    284: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '82bc2804d31e833aa47371d997cf8156.png'
    },
    285: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '139c4c4807da03366f70dca731ae4fc4.png'
    },
    286: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'ae5770c5fc4008d1a2c5b4d8eebf3692.png'
    },
    287: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'afd4f28dd4335cfafa8f9505eb7410dc.png'
    },
    288: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '539a8b53e6057c17f180bb0216c55ff0.png'
    },
    289: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var Component,
        styled_base_browser_cjs = __webpack_require__(2),
        styled_base_browser_cjs_default = __webpack_require__.n(
          styled_base_browser_cjs
        ),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        emotion_theming_browser_cjs = __webpack_require__(118),
        page_01_hi = __webpack_require__(119),
        page_02_ui_workbench = __webpack_require__(129),
        page_03_design = __webpack_require__(130),
        page_04_sketches = __webpack_require__(131),
        page_05_resume = __webpack_require__(132),
        page_06_contact = __webpack_require__(133),
        theme = __webpack_require__(5),
        links = __webpack_require__(83),
        helpers_extends = __webpack_require__(35),
        extends_default = __webpack_require__.n(helpers_extends),
        TopBar = __webpack_require__(85),
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
        TopBarBox = styled_base_browser_cjs_default()('div', {
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
            emotion_theming_browser_cjs.ThemeProvider,
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
    290: function (module, exports, __webpack_require__) {
      __webpack_require__(291),
        __webpack_require__(370),
        (module.exports = __webpack_require__(371))
    },
    371: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (global, module) {
          __webpack_require__(8), __webpack_require__(7), __webpack_require__(9)
          var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              117
            ),
            _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__
            ),
            react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_4__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_require__(
              190
            ),
            __webpack_require__(86)),
            _storybook_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              271
            ),
            _storybook_addon_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              272
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              24
            ),
            _src_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5),
            emotion_theming__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              118
            )
          global.storiesOf =
            _storybook_react__WEBPACK_IMPORTED_MODULE_6__.storiesOf
          var req = __webpack_require__(609)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(
            Object(
              _storybook_addon_options__WEBPACK_IMPORTED_MODULE_8__.withOptions
            )({
              name: 'ui-workbench',
              url: 'http://drdyne.github.io/ui-workbench',
              hierarchySeparator: /\//,
              hierarchyRootSeparator: /\|/,
              sortStoriesByKind: !0,
              enableShortcuts: !1,
              theme: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                _storybook_components__WEBPACK_IMPORTED_MODULE_7__.themes.light,
                {
                  mainBorder: '1px solid transparent',
                  mainBorderRadius: '0',
                  mainBackground: '#fff',
                  mainTextFace:
                    'Roboto Mono,Montserrat,Helvetica,Arial,sans-serif',
                  mainTextColor: '#444',
                  dimmedTextColor: '#ccc',
                  highlightColor: '#ea4862',
                  inputFill: 'rgba(0,0,0,0.05)',
                  barFill: 'rgba(43, 43, 43, 0.05)',
                  menuLink: { color: '#331c86', fontWeight: 'bold' }
                }
              )
            })
          ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_9__.withKnobs
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(
              function (story) {
                return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  emotion_theming__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider,
                  { theme: _src_theme__WEBPACK_IMPORTED_MODULE_10__.a },
                  story()
                )
              }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.configure)(
              function () {
                req.keys().forEach(function (filename) {
                  return req(filename)
                })
              },
              module
            )
        }.call(this, __webpack_require__(20), __webpack_require__(53)(module))
    },
    4: function (module, __webpack_exports__, __webpack_require__) {
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
      __webpack_require__(618)
      var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          23
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5),
        Branding = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
          'a',
          { target: 'ej86u3o0' }
        )(
          'margin:0 auto 0 -100px;padding:0 50px;line-height:100px;color:#fff;text-transform:uppercase;font-size:24px;text-decoration:none;letter-spacing:0.3em;font-family:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.family,
          ';:hover{background:rgba(255,255,255,0.2);}',
          '\n  transition: background .4s ease-out;\n',
          ''
        ),
        Subtitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
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
        Header = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
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
        Link = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
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
    5: function (module, __webpack_exports__, __webpack_require__) {
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
        z: { pageButton: 10, subtitle: 1, topbar: 11 },
        lightTextVariant: lightTextVariant,
        hoverLinkBorderColor: {
          behance: '#B1C6FC',
          tumblr: '#B2B9C2',
          github: '#F8BECF',
          linkedin: '#D6E6F4'
        },
        breakpoint: 1200
      }
    },
    609: function (module, exports, __webpack_require__) {
      var map = {
        './components/App/stories/App.stories.js': 610,
        './components/Button/stories/Button.stories.js': 625,
        './components/TopBar/stories/TopBar.stories.js': 626,
        './components/Typography/stories/Typography.stories.js': 627,
        './pages/stories/pages.stories.js': 628,
        './stories/index.stories.js': 629
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
      ;(webpackContext.keys = function () {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 609)
    },
    610: function (module, __webpack_exports__, __webpack_require__) {
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
            ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(289),
            withStorySource = __webpack_require__(81).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport App from '../';\n\nstoriesOf('Portfolio', module).add('App', () => <App />);\n",
            __ADDS_MAP__ = {
              'Portfolio@App': {
                startLoc: { col: 35, line: 4 },
                endLoc: { col: 55, line: 4 }
              }
            }
          storiesOf('Portfolio', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport App from '../';\n\nstoriesOf('Portfolio', module).add('App', () => <App />);\n",
                __ADDS_MAP__
              )
            )
            .add('App', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_1__.a,
                null
              )
            })
        }.call(this, __webpack_require__(53)(module))
    },
    625: function (module, __webpack_exports__, __webpack_require__) {
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
              2
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              24
            ),
            ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67),
            _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(189),
            _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4__
            ),
            withStorySource = __webpack_require__(81).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport styled from '@emotion/styled';\nimport { text, number } from '@storybook/addon-knobs';\nimport Button from '../';\n\nimport Kitty from './kitty.jpeg';\n\nconst DemoBox = styled.div`\n  display: flex;\n  justify-content: center;\n  padding: 100px;\n  background: #ccc;\n  ${Button} {\n    width: 600px;\n    height: 400px;\n  }\n`;\n\nstoriesOf('Portfolio|Button', module)\n  .add('. default', () => (\n    <DemoBox>\n      <Button>This is a button</Button>\n    </DemoBox>\n  ))\n\n  .add('image', () => (\n    <DemoBox>\n      <Button>\n        <img src={Kitty} />\n      </Button>\n    </DemoBox>\n  ))\n\n  .add('offset', () => {\n    const props = {\n      label: text('label', 'Nya! nya! nya!'),\n      offset: {\n        x: number('offset.x', 40),\n        y: number('offset.y', 40),\n      },\n      'label-width': number('labelWidth', 40),\n      'label-origin': {\n        x: number('labelOrigin.x', 420),\n        y: number('labelOrigin.y', 20),\n      },\n      'label-offset': {\n        x: number('labelOffset.x', 420),\n        y: number('labelOffset.y', 40),\n      },\n      'label-delay': number('labelDelay', 0.2),\n    };\n\n    return (\n      <DemoBox>\n        <Button {...props}>\n          <img src={Kitty} />\n        </Button>\n      </DemoBox>\n    );\n  });\n",
            __ADDS_MAP__ = {
              'Portfolio|Button@offset': {
                startLoc: { col: 7, line: 34 },
                endLoc: { col: 3, line: 60 }
              },
              'Portfolio|Button@image': {
                startLoc: { col: 7, line: 26 },
                endLoc: { col: 3, line: 32 }
              },
              'Portfolio|Button@. default': {
                startLoc: { col: 7, line: 20 },
                endLoc: { col: 3, line: 24 }
              }
            },
            DemoBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
              'div',
              { target: 'eykcq7v0' }
            )(
              'display:flex;justify-content:center;padding:100px;background:#ccc;',
              ___WEBPACK_IMPORTED_MODULE_3__.a,
              '{width:600px;height:400px;}'
            )
          storiesOf('Portfolio|Button', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport styled from '@emotion/styled';\nimport { text, number } from '@storybook/addon-knobs';\nimport Button from '../';\n\nimport Kitty from './kitty.jpeg';\n\nconst DemoBox = styled.div`\n  display: flex;\n  justify-content: center;\n  padding: 100px;\n  background: #ccc;\n  ${Button} {\n    width: 600px;\n    height: 400px;\n  }\n`;\n\nstoriesOf('Portfolio|Button', module)\n  .add('. default', () => (\n    <DemoBox>\n      <Button>This is a button</Button>\n    </DemoBox>\n  ))\n\n  .add('image', () => (\n    <DemoBox>\n      <Button>\n        <img src={Kitty} />\n      </Button>\n    </DemoBox>\n  ))\n\n  .add('offset', () => {\n    const props = {\n      label: text('label', 'Nya! nya! nya!'),\n      offset: {\n        x: number('offset.x', 40),\n        y: number('offset.y', 40),\n      },\n      'label-width': number('labelWidth', 40),\n      'label-origin': {\n        x: number('labelOrigin.x', 420),\n        y: number('labelOrigin.y', 20),\n      },\n      'label-offset': {\n        x: number('labelOffset.x', 420),\n        y: number('labelOffset.y', 40),\n      },\n      'label-delay': number('labelDelay', 0.2),\n    };\n\n    return (\n      <DemoBox>\n        <Button {...props}>\n          <img src={Kitty} />\n        </Button>\n      </DemoBox>\n    );\n  });\n",
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
            .add('offset', function () {
              var props = {
                label: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                )('label', 'Nya! nya! nya!'),
                offset: {
                  x: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('offset.x', 40),
                  y: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('offset.y', 40)
                },
                'label-width': Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                )('labelWidth', 40),
                'label-origin': {
                  x: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('labelOrigin.x', 420),
                  y: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('labelOrigin.y', 20)
                },
                'label-offset': {
                  x: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('labelOffset.x', 420),
                  y: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('labelOffset.y', 40)
                },
                'label-delay': Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                )('labelDelay', 0.2)
              }
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                DemoBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_3__.a,
                  props,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'img',
                    { src: _kitty_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a }
                  )
                )
              )
            })
        }.call(this, __webpack_require__(53)(module))
    },
    626: function (module, __webpack_exports__, __webpack_require__) {
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
              2
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              24
            ),
            _TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85),
            withStorySource = __webpack_require__(81).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport { boolean } from '@storybook/addon-knobs';\nimport styled from '@emotion/styled';\nimport TopBar from '../TopBar';\n\nconst DemoBox = styled.div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n`;\n\nstoriesOf('Portfolio|TopBar', module)\n  .add('. default', () => <TopBar />)\n  .add('with links', () => <TopBar showLinks />)\n  .add('fixed top', () => {\n    const props = { showLinks: boolean('showLinks?', true) };\n\n    return (\n      <DemoBox>\n        <TopBar {...props} />\n      </DemoBox>\n    );\n  });\n",
            __ADDS_MAP__ = {
              'Portfolio|TopBar@fixed top': {
                startLoc: { col: 7, line: 16 },
                endLoc: { col: 3, line: 24 }
              },
              'Portfolio|TopBar@with links': {
                startLoc: { col: 7, line: 15 },
                endLoc: { col: 47, line: 15 }
              },
              'Portfolio|TopBar@. default': {
                startLoc: { col: 7, line: 14 },
                endLoc: { col: 36, line: 14 }
              }
            },
            DemoBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
              'div',
              { target: 'eykdad80' }
            )({
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
        }.call(this, __webpack_require__(53)(module))
    },
    627: function (module, __webpack_exports__, __webpack_require__) {
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
          __webpack_require__(37)
          var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              23
            ),
            _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              2
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__
            ),
            react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__
            ),
            _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5),
            ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
            withStorySource = __webpack_require__(81).withStorySource,
            __STORY__ =
              'import React from \'react\';\nimport styled from \'@emotion/styled\';\n\nimport { font } from \'../../../theme\';\n\nimport { Header, Subtitle, Link } from \'..\';\n\nconst TypoListItem = styled(({ name, children, ...other }) => (\n  <li {...other}>\n    <p>{name}</p>\n    {children}\n  </li>\n))`\n  display: flex;\n  align-items: baseline;\n\n  p {\n    min-width: 120px;\n    opacity: 0.4;\n    font-family: ${font.familty};\n    font-size: ${font.size.subtitle};\n    margin: 0 1em;\n  }\n`;\n\nstoriesOf(\'Portfolio|Theme\', module).add(\'Typography\', () => (\n  <div>\n    <TypoListItem name="Header">\n      <Header>Hi</Header>\n    </TypoListItem>\n\n    <TypoListItem name="Subtitle">\n      <Subtitle>\n        I\'m a UX Engineer with 10 years experience in bringing together designers and developers to create amazing web\n        apps.\n      </Subtitle>\n    </TypoListItem>\n\n    <TypoListItem name="Link">\n      <Link href="#">Lorem ipsum dolor</Link>\n    </TypoListItem>\n\n    <TypoListItem name="Link/to">\n      <Link href="#" to="github">\n        Github\n      </Link>\n    </TypoListItem>\n\n    <TypoListItem name="Link/light">\n      <Link href="#" to="github" light>\n        Github\n      </Link>\n    </TypoListItem>\n  </div>\n));\n',
            __ADDS_MAP__ = {
              'Portfolio|Theme@Typography': {
                startLoc: { col: 41, line: 26 },
                endLoc: { col: 1, line: 55 }
              }
            },
            TypoListItem = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
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
        }.call(this, __webpack_require__(53)(module))
    },
    628: function (module, __webpack_exports__, __webpack_require__) {
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
              2
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            _page_01_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119),
            _page_02_ui_workbench__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              129
            ),
            _page_03_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              130
            ),
            _page_04_sketches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              131
            ),
            _page_05_resume__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              132
            ),
            _page_06_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              133
            ),
            withStorySource = __webpack_require__(81).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport styled from '@emotion/styled';\nimport Page1 from '../page-01-hi';\nimport Page2 from '../page-02-ui-workbench';\nimport Page3 from '../page-03-design';\nimport Page4 from '../page-04-sketches';\nimport Page5 from '../page-05-resume';\nimport Page6 from '../page-06-contact';\n\nconst PageBox = styled.div`\n  min-height: 1800px;\n`;\nstoriesOf('Portfolio|Pages', module)\n  .addDecorator(story => <PageBox>{story()}</PageBox>)\n  .add('page 1', () => <Page1 />)\n  .add('page 2', () => <Page2 />)\n  .add('page 3', () => <Page3 />)\n  .add('page 4', () => <Page4 />)\n  .add('page 5', () => <Page5 />)\n  .add('page 6', () => <Page6 />);\n",
            __ADDS_MAP__ = {
              'Portfolio|Pages@page 6': {
                startLoc: { col: 7, line: 20 },
                endLoc: { col: 32, line: 20 }
              },
              'Portfolio|Pages@page 5': {
                startLoc: { col: 7, line: 19 },
                endLoc: { col: 32, line: 19 }
              },
              'Portfolio|Pages@page 4': {
                startLoc: { col: 7, line: 18 },
                endLoc: { col: 32, line: 18 }
              },
              'Portfolio|Pages@page 3': {
                startLoc: { col: 7, line: 17 },
                endLoc: { col: 32, line: 17 }
              },
              'Portfolio|Pages@page 2': {
                startLoc: { col: 7, line: 16 },
                endLoc: { col: 32, line: 16 }
              },
              'Portfolio|Pages@page 1': {
                startLoc: { col: 7, line: 15 },
                endLoc: { col: 32, line: 15 }
              }
            },
            PageBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
              'div',
              { target: 'e16njc6h0' }
            )({ name: '978nq', styles: 'min-height:1800px;' })
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
        }.call(this, __webpack_require__(53)(module))
    },
    629: function (module, __webpack_exports__, __webpack_require__) {
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
          __webpack_require__(37)
          var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              23
            ),
            _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              2
            ),
            _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__
            ),
            react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__
            ),
            _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5),
            withStorySource = __webpack_require__(81).withStorySource,
            __STORY__ =
              'import React from \'react\';\nimport styled from \'@emotion/styled\';\nimport theme from \'../theme\';\n\nconst ColorBox = styled.div`\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width: 1250px;\n  margin: 0 auto;\n`;\n\nconst ColorBlock = styled(({ name, hex, bg, ...other }) => (\n  <div {...other}>\n    <div />\n    <div>\n      <p>{name}</p>\n      <p>{hex || \'gradient\'}</p>\n    </div>\n  </div>\n))`\n  font-family: ${props => props.theme.font.family};\n  background-color: ${props => props.hex};\n  border-radius: 16px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin: 16px;\n  max-width: 250px;\n  min-height: 250px;\n  width: 100%;\n  position: relative;\n\n  ${props =>\n    props.bg &&\n    `\n    background: ${props.bg};\n  `}\n\n  div {\n    min-height: 130px;\n    width: 100%;\n    border-radius: 0 0 16px 16px;\n  }\n  div + div {\n    min-height: 0;\n    background: white;\n    position: absolute;\n    bottom: 0;\n  }\n  div + div > p {\n    padding: 0 1em;\n    opacity: 0.4;\n  }\n\n  div + div > p + p {\n    opacity: 1;\n  }\n`;\n\nstoriesOf(\'📌 Welcome\', module).add(\'README\', () => <div> hello </div>);\n\nstoriesOf(\'Portfolio|Theme\', module).add(\'Palette\', () => (\n  <ColorBox>\n    <ColorBlock name="Black Pearl" hex={theme.colors.black} />\n    <ColorBlock name="Brink Pink" hex={theme.colors.workbench} />\n    <ColorBlock name="Royal Blue" hex={theme.colors.design} />\n    <ColorBlock name="East Bay" hex={theme.colors.tumblr} />\n    <ColorBlock name="Sail" hex={theme.colors.resume} />\n    <ColorBlock name="Black Pearl to Pure Black" bg={theme.gradients.header} />\n    <ColorBlock name="Accent (light)" bg={theme.gradients.accentLight} />\n    <ColorBlock name="Accent (dark)" bg={theme.gradients.accentDark} />\n  </ColorBox>\n));\n',
            __ADDS_MAP__ = {
              '📌 Welcome@README': {
                startLoc: { col: 36, line: 59 },
                endLoc: { col: 70, line: 59 }
              },
              'Portfolio|Theme@Palette': {
                startLoc: { col: 41, line: 61 },
                endLoc: { col: 1, line: 72 }
              }
            },
            ColorBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
              'div',
              { target: 'eex7ddx0' }
            )({
              name: '7u16ol',
              styles:
                'display:flex;justify-content:space-around;flex-wrap:wrap;max-width:1250px;margin:0 auto;'
            }),
            ColorBlock = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
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
              ';border-radius:16px;box-shadow:0px 4px 4px rgba(0,0,0,0.25);margin:16px;max-width:250px;min-height:250px;width:100%;position:relative;',
              function (props) {
                return (
                  props.bg && '\n    background: '.concat(props.bg, ';\n  ')
                )
              },
              ' div{min-height:130px;width:100%;border-radius:0 0 16px 16px;}div + div{min-height:0;background:white;position:absolute;bottom:0;}div + div > p{padding:0 1em;opacity:0.4;}div + div > p + p{opacity:1;}'
            )
          storiesOf('📌 Welcome', module)
            .addDecorator(
              withStorySource(
                'import React from \'react\';\nimport styled from \'@emotion/styled\';\nimport theme from \'../theme\';\n\nconst ColorBox = styled.div`\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width: 1250px;\n  margin: 0 auto;\n`;\n\nconst ColorBlock = styled(({ name, hex, bg, ...other }) => (\n  <div {...other}>\n    <div />\n    <div>\n      <p>{name}</p>\n      <p>{hex || \'gradient\'}</p>\n    </div>\n  </div>\n))`\n  font-family: ${props => props.theme.font.family};\n  background-color: ${props => props.hex};\n  border-radius: 16px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin: 16px;\n  max-width: 250px;\n  min-height: 250px;\n  width: 100%;\n  position: relative;\n\n  ${props =>\n    props.bg &&\n    `\n    background: ${props.bg};\n  `}\n\n  div {\n    min-height: 130px;\n    width: 100%;\n    border-radius: 0 0 16px 16px;\n  }\n  div + div {\n    min-height: 0;\n    background: white;\n    position: absolute;\n    bottom: 0;\n  }\n  div + div > p {\n    padding: 0 1em;\n    opacity: 0.4;\n  }\n\n  div + div > p + p {\n    opacity: 1;\n  }\n`;\n\nstoriesOf(\'📌 Welcome\', module).add(\'README\', () => <div> hello </div>);\n\nstoriesOf(\'Portfolio|Theme\', module).add(\'Palette\', () => (\n  <ColorBox>\n    <ColorBlock name="Black Pearl" hex={theme.colors.black} />\n    <ColorBlock name="Brink Pink" hex={theme.colors.workbench} />\n    <ColorBlock name="Royal Blue" hex={theme.colors.design} />\n    <ColorBlock name="East Bay" hex={theme.colors.tumblr} />\n    <ColorBlock name="Sail" hex={theme.colors.resume} />\n    <ColorBlock name="Black Pearl to Pure Black" bg={theme.gradients.header} />\n    <ColorBlock name="Accent (light)" bg={theme.gradients.accentLight} />\n    <ColorBlock name="Accent (dark)" bg={theme.gradients.accentDark} />\n  </ColorBox>\n));\n',
                __ADDS_MAP__
              )
            )
            .add('README', function () {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'div',
                null,
                ' hello '
              )
            }),
            storiesOf('Portfolio|Theme', module)
              .addDecorator(
                withStorySource(
                  'import React from \'react\';\nimport styled from \'@emotion/styled\';\nimport theme from \'../theme\';\n\nconst ColorBox = styled.div`\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width: 1250px;\n  margin: 0 auto;\n`;\n\nconst ColorBlock = styled(({ name, hex, bg, ...other }) => (\n  <div {...other}>\n    <div />\n    <div>\n      <p>{name}</p>\n      <p>{hex || \'gradient\'}</p>\n    </div>\n  </div>\n))`\n  font-family: ${props => props.theme.font.family};\n  background-color: ${props => props.hex};\n  border-radius: 16px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin: 16px;\n  max-width: 250px;\n  min-height: 250px;\n  width: 100%;\n  position: relative;\n\n  ${props =>\n    props.bg &&\n    `\n    background: ${props.bg};\n  `}\n\n  div {\n    min-height: 130px;\n    width: 100%;\n    border-radius: 0 0 16px 16px;\n  }\n  div + div {\n    min-height: 0;\n    background: white;\n    position: absolute;\n    bottom: 0;\n  }\n  div + div > p {\n    padding: 0 1em;\n    opacity: 0.4;\n  }\n\n  div + div > p + p {\n    opacity: 1;\n  }\n`;\n\nstoriesOf(\'📌 Welcome\', module).add(\'README\', () => <div> hello </div>);\n\nstoriesOf(\'Portfolio|Theme\', module).add(\'Palette\', () => (\n  <ColorBox>\n    <ColorBlock name="Black Pearl" hex={theme.colors.black} />\n    <ColorBlock name="Brink Pink" hex={theme.colors.workbench} />\n    <ColorBlock name="Royal Blue" hex={theme.colors.design} />\n    <ColorBlock name="East Bay" hex={theme.colors.tumblr} />\n    <ColorBlock name="Sail" hex={theme.colors.resume} />\n    <ColorBlock name="Black Pearl to Pure Black" bg={theme.gradients.header} />\n    <ColorBlock name="Accent (light)" bg={theme.gradients.accentLight} />\n    <ColorBlock name="Accent (dark)" bg={theme.gradients.accentDark} />\n  </ColorBox>\n));\n',
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
        }.call(this, __webpack_require__(53)(module))
    },
    66: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          35
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          23
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4),
        linkBox = Object(emotion__WEBPACK_IMPORTED_MODULE_0__.css)(
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
    67: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          35
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          23
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          120
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          121
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          122
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          123
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__
        ),
        _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          82
        ),
        _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          124
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          99
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_9__
        ),
        react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_10__
        ),
        defaultState = {
          isActive: !1,
          width: 0,
          height: 0,
          pos: { x: 0, y: 0 },
          origin: { x: 0, y: 0 },
          rotation: { rx: 0, ry: 0 }
        },
        Button = (function (_React$Component) {
          function Button () {
            var _getPrototypeOf2, _this
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              Button
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
                  Button
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
              Button,
              _React$Component
            ),
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
              Button,
              [
                {
                  key: 'setSize',
                  value: function (event) {
                    var _event$currentTarget$ = event.currentTarget.getBoundingClientRect(),
                      width = _event$currentTarget$.width,
                      height = _event$currentTarget$.height
                    this.setState({ width: width, height: height })
                  }
                },
                {
                  key: 'setOrigin',
                  value: function (event) {
                    var _event$currentTarget$2 = event.currentTarget.getBoundingClientRect(),
                      left = _event$currentTarget$2.left,
                      top = _event$currentTarget$2.top,
                      width = _event$currentTarget$2.width,
                      height = _event$currentTarget$2.height,
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
                  key: 'setRotation',
                  value: function () {
                    var _this$state = this.state,
                      isActive = _this$state.isActive,
                      pos = _this$state.pos,
                      width = _this$state.width,
                      height = _this$state.height,
                      x = pos.x,
                      y = pos.y
                    if (!isActive) return {}
                    var rotation = {
                      rx: (x / width / 2).toFixed(2),
                      ry: (y / height / 2).toFixed(2)
                    }
                    return (0 > x && 0 < y) || (0 < x && 0 > y)
                      ? this.setState({
                          rotation: {
                            rx: -1 * rotation.rx,
                            ry: -1 * rotation.ry
                          }
                        })
                      : void this.setState({ rotation: rotation })
                  }
                },
                {
                  key: 'startTracking',
                  value: function (event) {
                    event.persist(),
                      this.setSize(event),
                      this.setOrigin(event),
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
                      requestAnimationFrame(function () {
                        _this2.setPosition(event), _this2.setRotation()
                      })
                  }
                },
                {
                  key: 'render',
                  value: function () {
                    var _this3 = this,
                      _this$props = this.props,
                      href = _this$props.href,
                      label = _this$props.label,
                      transformAccent = _this$props.transformAccent,
                      transformBox = _this$props.transformBox,
                      transformLabel = _this$props.transformLabel,
                      children = _this$props.children,
                      labelProps = _this$props.labelProps,
                      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
                        _this$props,
                        [
                          'href',
                          'label',
                          'transformAccent',
                          'transformBox',
                          'transformLabel',
                          'children',
                          'labelProps'
                        ]
                      ),
                      _this$state$rotation = this.state.rotation,
                      rx = _this$state$rotation.rx,
                      ry = _this$state$rotation.ry,
                      rotate =
                        rx && ry
                          ? 'rotateX('
                              .concat(rx, 'deg) rotateY(')
                              .concat(ry, 'deg)')
                          : '',
                      rotateAnti =
                        rx && ry
                          ? 'rotateX('
                              .concat(-0.5 * rx, 'deg) rotateY(')
                              .concat(-0.5 * ry, 'deg)')
                          : '',
                      pos = this.state.pos,
                      tr = {
                        box: transformBox(rotate, pos),
                        label: transformLabel(rotateAnti, pos),
                        accent: transformAccent(rotate, pos)
                      }
                    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                      'div',
                      _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                        {},
                        {
                          onMouseEnter: function (event) {
                            return _this3.startTracking(event)
                          },
                          onMouseLeave: function () {
                            return _this3.stopTracking()
                          },
                          onMouseMove: function (event) {
                            return _this3.track(event)
                          }
                        },
                        other,
                        { style: { transform: tr.box } }
                      ),
                      react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                        'div',
                        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                          { className: 'label' },
                          labelProps,
                          { style: { transform: tr.label } }
                        ),
                        label
                      ),
                      react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                        'a',
                        {
                          href: href,
                          className: 'accent',
                          style: { transform: tr.accent }
                        }
                      ),
                      children
                    )
                  }
                }
              ]
            ),
            Button
          )
        })(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component)
      ;(Button.defaultProps = {
        href: '#',
        label: void 0,
        children: null,
        offset: { x: 0, y: 0 },
        transformAccent: function (f) {
          return f
        },
        transformBox: function (f) {
          return f
        },
        transformLabel: function (f) {
          return f
        }
      }),
        (__webpack_exports__.a = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_9___default()(
          Button,
          { target: 'e4jdy710' }
        )(
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
          ';font-weight:bold;letter-spacing:10px;color:white;z-index:3;position:absolute;opacity:0;transition:opacity 0.2s ease-in,margin 0.2s ease-in 0s;}.accent{perspective:400px;position:absolute;opacity:0;z-index:3;border:2px solid white;width:100%;height:100%;margin:0;background:rgba(255,255,255,0);transition:all 0.2s ease-out,margin 0.2s ease-out,opacity 0.4s ease-out,background 0.2s ease-out;}:hover{background:linear-gradient( 224.01deg,rgba(255,255,255,0) 12.8%,rgba(255,255,255,0.2) 46.35%,rgba(255,255,255,0) 88.7% ),#232729;backdrop-filter:blur(4px);img{opacity:0.6;transform:scale(0.98);}.accent,.label{opacity:1;}.label{}.accent{z-index:3;background:rgba(255,255,255,0.4);margin-top:',
          function (props) {
            return props.offset.y
          },
          'px;margin-left:',
          function (props) {
            return props.offset.x
          },
          'px;}}'
        ))
    },
    83: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return LinksContext
      })
      var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          117
        ),
        _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          120
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          121
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          122
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          123
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__
        ),
        _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          82
        ),
        _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          124
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          99
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
    85: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          23
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          2
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4),
        _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66),
        _logo_behance_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          125
        ),
        _logo_behance_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _logo_behance_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          126
        ),
        _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _logo_linked_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          127
        ),
        _logo_linked_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _logo_linked_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _logo_github_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          128
        ),
        _logo_github_png__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _logo_github_png__WEBPACK_IMPORTED_MODULE_8__
        ),
        BarBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
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
        LinksBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
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
    }
  },
  [[290, 1, 2]]
])
//# sourceMappingURL=main.ded23b79172ce9b76371.bundle.js.map
