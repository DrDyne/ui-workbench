;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    10: function (module, __webpack_exports__, __webpack_require__) {
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
          dark: '#232729'
        },
        pageBackground = { 2: colors.workbench, 3: colors.design }
      __webpack_exports__.a = {
        font: font,
        colors: colors,
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
    113: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          64
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
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
        _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          4
        ),
        _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          114
        ),
        _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          115
        ),
        _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          116
        ),
        _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          117
        ),
        _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _components_TopBar_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          65
        ),
        _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          264
        ),
        _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_9__
        ),
        _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          265
        ),
        _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_10__
        ),
        Link = function (props) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            _components_TopBar_Link__WEBPACK_IMPORTED_MODULE_8__.a,
            _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
              { withBorder: !0 },
              props
            )
          )
        },
        PageBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
          'div',
          { target: 'e1ur4wv20' }
        )(
          'padding:94px;padding-top:194px;min-height:900px;position:relative;',
          _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
          '{max-width:290px;}img.whitewash{position:absolute;right:0;bottom:0;height:100%;z-index:-1;}'
        ),
        PageLeft = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
          'section',
          { target: 'e1ur4wv21' }
        )(''),
        PageRight = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
          'section',
          { target: 'e1ur4wv22' }
        )(''),
        LinksBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
          'div',
          { target: 'e1ur4wv23' }
        )({
          name: 'qfdd9t',
          styles: 'display:flex;flex-direction:column;align-items:flex-end;'
        }),
        CenterBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
          'div',
          { target: 'e1ur4wv24' }
        )(
          'flex-direction:column;display:flex;justify-content:center;background:rgba(255,255,255,0.4);height:100px;',
          _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
          '{margin-top:240px;margin:0 auto;opacity:0.4;}img{max-width:40px;margin:1em auto;}'
        ),
        Page1 = function (props) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            PageBox,
            { pageIndex: 1 },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              PageLeft,
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_3__.b,
                null,
                'Hi,'
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
                null,
                "I'm a UX Engineer with 10 years experience in bringing together designers and developers to create amazing web apps."
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              PageRight,
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                LinksBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  Link,
                  props.behanceLink
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  Link,
                  props.tumblrLink
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  Link,
                  props.linkedInLink
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  Link,
                  props.githubLink
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              CenterBox,
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
                null,
                'Read more'
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'img',
                {
                  src:
                    _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_9___default.a
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('img', {
              className: 'whitewash',
              src:
                _assets_white_wash_p1_png__WEBPACK_IMPORTED_MODULE_10___default.a
            })
          )
        }
      ;(Page1.defaultProps = {
        behanceLink: {
          to: 'behance',
          logo:
            _components_TopBar_logo_behance_png__WEBPACK_IMPORTED_MODULE_4___default.a,
          title: 'behance',
          url: 'https://www.behance.net/rchaumard25b7'
        },
        tumblrLink: {
          to: 'tumblr',
          logo:
            _components_TopBar_logo_tumblr_png__WEBPACK_IMPORTED_MODULE_5___default.a,
          title: 'tumblr',
          url: 'https://dr-dyne.tumblr.com/tagged/sketch'
        },
        linkedInLink: {
          to: 'linkedin',
          logo:
            _components_TopBar_logo_linked_png__WEBPACK_IMPORTED_MODULE_6___default.a,
          title: 'linked in',
          url: 'https://linkedin.com/in/ryc'
        },
        githubLink: {
          to: 'github',
          logo:
            _components_TopBar_logo_github_png__WEBPACK_IMPORTED_MODULE_7___default.a,
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
    114: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'b66756c49b5ca9a79130b13c86fa2556.png'
    },
    115: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '90ff6e21f548d1a59cd9435cdba990e3.png'
    },
    116: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '0b603076dfc832af9f9f357e2552dd5c.png'
    },
    117: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'f440148b22f2a412e69f2c32edde7302.png'
    },
    118: function (module, __webpack_exports__, __webpack_require__) {
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
        react_rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119),
        react_rellax__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react_rellax__WEBPACK_IMPORTED_MODULE_2__
        ),
        _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          4
        ),
        _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          266
        ),
        _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_logo_figma_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          267
        ),
        _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _assets_logo_react_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          268
        ),
        _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _assets_logo_storybook_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          269
        ),
        _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _assets_white_wash_p2_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12),
        ContentBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'eiui8310' }
        )({
          name: '1pj117i',
          styles:
            'display:flex;flex-grow:1;min-width:560px;transition:all 0.2s;min-height:1000px;@media (min-width:740px){padding-left:200px;> div:first-child{margin-top:240px;margin-bottom:-50px;}> div.parallax{}img.react-logo{padding-left:300px;margin-top:-240px;}}'
        }),
        UIWBButtonBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          _Layout__WEBPACK_IMPORTED_MODULE_8__.a,
          { target: 'eiui8311' }
        )({
          name: '1ugj9xt',
          styles:
            'z-index:2;width:100%;max-width:686px;height:363px;margin-top:94px;background:#ffffff;box-shadow:0px 8px 16px rgba(0,0,0,0.25);'
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
        Page2 = function () {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Layout__WEBPACK_IMPORTED_MODULE_8__.b,
            { pageIndex: 2, light: !0 },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Layout__WEBPACK_IMPORTED_MODULE_8__.c,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _components_Typography__WEBPACK_IMPORTED_MODULE_3__.d,
                null,
                'These days I use Figma and React, backed by Storybook to build visual libraries of components that can be tested and regressed automatically.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Layout__WEBPACK_IMPORTED_MODULE_8__.d,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                ContentBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  UIWBButtonBox,
                  null
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
                  { speed: 4, figma: !0 },
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
              { wash: !0, speed: -4 },
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
        _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
        _components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
          _components_Typography__WEBPACK_IMPORTED_MODULE_2__.d,
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
              '/* page 4 -- sketches (fullscreen image) */\n    z-index: 3;\n    .bg {\n      display: block;\n      width: 100%;\n      height: auto;\n      margin-top: -184px;\n      margin-bottom: -5px;\n    }\n\n    .bg > img {\n      width: 100%;\n    }\n\n    '.concat(
                _components_Typography__WEBPACK_IMPORTED_MODULE_2__.d,
                ' {\n      width: 100%;\n      max-width: 800px;\n      margin: 55px auto;\n      text-align: center;\n    }\n  '
              )
            )
          },
          ' ',
          function (props) {
            return (
              5 === props.pageIndex &&
              '/* page 5 -- resume (vertical flow) */\n    flex-direction: vertical;\n    '.concat(
                _components_Typography__WEBPACK_IMPORTED_MODULE_2__.d,
                ' {\n      max-width: 876px;\n      margin-top: 100px;\n    }\n\n    img {\n      width: 100%;\n    }\n  '
              )
            )
          },
          ' ',
          function (props) {
            return (
              6 === props.pageIndex &&
              '\n    min-height: 1200px;\n    .tooltip {\n      z-index: 1;\n      max-width: 750px;\n      max-height: 207px;\n      margin-left: 54px;\n      margin-top: -260px;\n    }\n\n    .dark-wash {\n      z-index: 0;\n      width: 100%;\n    }\n\n    .contact-line {\n      margin: -600px 100px 0 auto;\n    }\n  '
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
          'div',
          { target: 'e1o3p8063' }
        )(
          'display:flex;width:100%;background:#fff;z-index:',
          function (props) {
            return props.theme.z.pageButton
          },
          ';box-shadow:0px 8px 16px rgba(0,0,0,0.25);'
        )
    },
    120: function (module, __webpack_exports__, __webpack_require__) {
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
          270
        ),
        _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_white_wash_p3_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        react_rellax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(119),
        react_rellax__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react_rellax__WEBPACK_IMPORTED_MODULE_5__
        ),
        ContentBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'ep2g05l0' }
        )({
          name: '179asnf',
          styles:
            'width:100%;margin-top:240px;margin-left:auto;margin-bottom:100px;'
        }),
        Page2Parallax = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          react_rellax__WEBPACK_IMPORTED_MODULE_5___default.a,
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
          name: 'tnja20',
          styles: 'z-index:2;margin:0 0 0 auto;height:437px;width:900px;'
        }),
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
                  null
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
    121: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          64
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          33
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
        _components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          4
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12),
        _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          271
        ),
        _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        SketchesButtonBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
          _Layout__WEBPACK_IMPORTED_MODULE_5__.a,
          { target: 'ej67efe0' }
        )(''),
        PageBg = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
          function (_ref) {
            var src = _ref.src,
              children = _ref.children,
              props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
                _ref,
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
        )(
          'display:flex;flex-direction:column;align-items:top;width:100%;',
          _components_Typography__WEBPACK_IMPORTED_MODULE_4__.d,
          '{margin-bottom:-180px;}img{width:100%;height:auto;}'
        )
      __webpack_exports__.a = function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          _Layout__WEBPACK_IMPORTED_MODULE_5__.b,
          { pageIndex: 4, light: !0 },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            PageBg,
            {
              src:
                _assets_bg_sketches_png__WEBPACK_IMPORTED_MODULE_6___default.a
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              _components_Typography__WEBPACK_IMPORTED_MODULE_4__.d,
              null,
              'When I’m not coding, I can be found sketching, exploring art, design, motion or gaming.'
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              SketchesButtonBox,
              null
            )
          )
        )
      }
    },
    122: function (module, __webpack_exports__, __webpack_require__) {
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
        _assets_blue_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          272
        ),
        _assets_blue_bg_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_blue_bg_png__WEBPACK_IMPORTED_MODULE_4__
        ),
        ContentBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          'div',
          { target: 'e1epzm2c0' }
        )({
          name: '3ukxjs',
          styles:
            'display:flex;flex-grow:1;img{position:absolute;left:0;right:0;bottom:0;}&& > div{position:absolute;margin-left:94px;left:0;bottom:0;max-width:876px;min-height:493px;}'
        }),
        ResumeButtonBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
          _Layout__WEBPACK_IMPORTED_MODULE_3__.a,
          { target: 'e1epzm2c1' }
        )({ name: '10ib5jr', styles: 'margin-bottom:40px;' })
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
              ResumeButtonBox,
              null
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', {
              src: _assets_blue_bg_png__WEBPACK_IMPORTED_MODULE_4___default.a
            })
          )
        )
      }
    },
    123: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          273
        ),
        _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_1__
        ),
        _assets_dark_wash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          274
        ),
        _assets_dark_wash_png__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _assets_dark_wash_png__WEBPACK_IMPORTED_MODULE_2__
        ),
        _assets_tooltip_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          275
        ),
        _assets_tooltip_png__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _assets_tooltip_png__WEBPACK_IMPORTED_MODULE_3__
        ),
        _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12)
      __webpack_exports__.a = function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Layout__WEBPACK_IMPORTED_MODULE_4__.b,
          { pageIndex: 6, light: !0 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
            className: 'dark-wash',
            src: _assets_dark_wash_png__WEBPACK_IMPORTED_MODULE_2___default.a
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
            className: 'tooltip',
            src: _assets_tooltip_png__WEBPACK_IMPORTED_MODULE_3___default.a
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
            className: 'contact-line',
            src: _assets_contact_line_png__WEBPACK_IMPORTED_MODULE_1___default.a
          })
        )
      }
    },
    264: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'be7e58f2816f4ac7b1724e0ef97cab76.png'
    },
    265: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'e85b811087b5cc277431d08e3067b05b.png'
    },
    266: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '468fcabd781f738c798265f8c0ea74bf.png'
    },
    267: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '7de29fdc8f8e2eda4deb45d0c9183cbf.png'
    },
    268: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '8816ff05da90adccb506956d783e714e.png'
    },
    269: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '7be0947c8fe5546ea0c3230108a58235.png'
    },
    270: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '0a0f0ab71ac53ae2b254e80df8dd43ef.png'
    },
    271: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '82bc2804d31e833aa47371d997cf8156.png'
    },
    272: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'b74d53902c9c5dc4b7fb29bd906bfcc8.png'
    },
    273: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '1e961780787f030094ea457fb8351afe.png'
    },
    274: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '357b8e99a59b91a0544c5fd44e0a51c7.png'
    },
    275: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + '539a8b53e6057c17f180bb0216c55ff0.png'
    },
    276: function (module, __webpack_exports__, __webpack_require__) {
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
        Button = function (props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'button',
            props
          )
        }
      __webpack_exports__.a = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(
        Button,
        { target: 'e4jdy710' }
      )({
        name: '37nkg5',
        styles:
          'background:#ffffff;box-shadow:0px 8px 16px rgba(0,0,0,0.25);padding:4em;'
      })
    },
    277: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var styled_base_browser_cjs = __webpack_require__(2),
        styled_base_browser_cjs_default = __webpack_require__.n(
          styled_base_browser_cjs
        ),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        emotion_theming_browser_cjs = __webpack_require__(112),
        page_01_hi = __webpack_require__(113),
        page_02_ui_workbench = __webpack_require__(118),
        page_03_design = __webpack_require__(120),
        page_04_sketches = __webpack_require__(121),
        page_05_resume = __webpack_require__(122),
        page_06_contact = __webpack_require__(123),
        theme = __webpack_require__(10),
        TopBar = __webpack_require__(80),
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
              react_default.a.createElement(TopBar.a, null)
            ),
            react_default.a.createElement(page_01_hi.a, null),
            react_default.a.createElement(page_02_ui_workbench.a, null),
            react_default.a.createElement(page_03_design.a, null),
            react_default.a.createElement(page_04_sketches.a, null),
            react_default.a.createElement(page_05_resume.a, null),
            react_default.a.createElement(page_06_contact.a, null)
          )
        }
      __webpack_exports__.a = App
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
    278: function (module, exports, __webpack_require__) {
      __webpack_require__(279),
        __webpack_require__(358),
        (module.exports = __webpack_require__(359))
    },
    359: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (global, module) {
          __webpack_require__(7), __webpack_require__(6), __webpack_require__(8)
          var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              260
            ),
            _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__
            ),
            react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_4__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_require__(
              179
            ),
            __webpack_require__(81)),
            _storybook_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              261
            ),
            _storybook_addon_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              262
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              111
            ),
            _src_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10),
            emotion_theming__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              112
            )
          global.storiesOf =
            _storybook_react__WEBPACK_IMPORTED_MODULE_6__.storiesOf
          var req = __webpack_require__(599)
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
        }.call(this, __webpack_require__(22), __webpack_require__(51)(module))
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
      __webpack_require__(603)
      var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          33
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
        _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10),
        Branding = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(
          'a',
          { target: 'ej86u3o0' }
        )(
          'margin:0 auto 0 -100px;padding:0 50px;line-height:100px;color:#fff;text-transform:uppercase;font-size:24px;text-decoration:none;letter-spacing:0.3em;font-family:',
          _theme__WEBPACK_IMPORTED_MODULE_4__.b.family,
          ';:hover{background:rgba(255,255,255,0.2);}',
          '\n  transition: background .4s ease-out;\n',
          ' border:none,none,4px solid rgba(0,0,0,1),none;transition:border-color 0.2s ease-in;:hover{border-color:rgba(255,255,255,0.1);}'
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
    599: function (module, exports, __webpack_require__) {
      var map = {
        './components/App/stories/App.stories.js': 600,
        './components/Button/stories/Button.stories.js': 610,
        './components/TopBar/stories/TopBar.stories.js': 611,
        './components/Typography/stories/Typography.stories.js': 612,
        './pages/stories/pages.stories.js': 613,
        './stories/index.stories.js': 614
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
        (webpackContext.id = 599)
    },
    600: function (module, __webpack_exports__, __webpack_require__) {
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
            ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277),
            withStorySource = __webpack_require__(79).withStorySource,
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
        }.call(this, __webpack_require__(51)(module))
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
            ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(276),
            withStorySource = __webpack_require__(79).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport Button from '../';\n\nstoriesOf('Portfolio|Button', module).add('. default', () => <Button>This is a button</Button>);\n",
            __ADDS_MAP__ = {
              'Portfolio|Button@. default': {
                startLoc: { col: 42, line: 4 },
                endLoc: { col: 94, line: 4 }
              }
            }
          storiesOf('Portfolio|Button', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport Button from '../';\n\nstoriesOf('Portfolio|Button', module).add('. default', () => <Button>This is a button</Button>);\n",
                __ADDS_MAP__
              )
            )
            .add('. default', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_1__.a,
                null,
                'This is a button'
              )
            })
        }.call(this, __webpack_require__(51)(module))
    },
    611: function (module, __webpack_exports__, __webpack_require__) {
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
              111
            ),
            _TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80),
            withStorySource = __webpack_require__(79).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport { boolean } from '@storybook/addon-knobs';\nimport styled from '@emotion/styled';\nimport TopBar from '../TopBar';\n\nconst DemoBox = styled.div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n`;\n\nstoriesOf('Portfolio|TopBar', module)\n  .add('. default', () => <TopBar />)\n  .add('with links', () => <TopBar showBehance showTumblr showLinkedIn showGithub />)\n  .add('fixed top', () => {\n    const showLinks = boolean('showLinks?', true);\n    const props = !showLinks\n      ? {}\n      : {\n          showBehance: true,\n          showTumblr: true,\n          showLinkedIn: true,\n          showGithub: true,\n        };\n\n    return (\n      <DemoBox>\n        <TopBar {...props} />\n      </DemoBox>\n    );\n  });\n",
            __ADDS_MAP__ = {
              'Portfolio|TopBar@fixed top': {
                startLoc: { col: 7, line: 16 },
                endLoc: { col: 3, line: 32 }
              },
              'Portfolio|TopBar@with links': {
                startLoc: { col: 7, line: 15 },
                endLoc: { col: 84, line: 15 }
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
                "import React from 'react';\nimport { boolean } from '@storybook/addon-knobs';\nimport styled from '@emotion/styled';\nimport TopBar from '../TopBar';\n\nconst DemoBox = styled.div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n`;\n\nstoriesOf('Portfolio|TopBar', module)\n  .add('. default', () => <TopBar />)\n  .add('with links', () => <TopBar showBehance showTumblr showLinkedIn showGithub />)\n  .add('fixed top', () => {\n    const showLinks = boolean('showLinks?', true);\n    const props = !showLinks\n      ? {}\n      : {\n          showBehance: true,\n          showTumblr: true,\n          showLinkedIn: true,\n          showGithub: true,\n        };\n\n    return (\n      <DemoBox>\n        <TopBar {...props} />\n      </DemoBox>\n    );\n  });\n",
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
                {
                  showBehance: !0,
                  showTumblr: !0,
                  showLinkedIn: !0,
                  showGithub: !0
                }
              )
            })
            .add('fixed top', function () {
              var props = Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean
              )('showLinks?', !0)
                ? {
                    showBehance: !0,
                    showTumblr: !0,
                    showLinkedIn: !0,
                    showGithub: !0
                  }
                : {}
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                DemoBox,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _TopBar__WEBPACK_IMPORTED_MODULE_3__.a,
                  props
                )
              )
            })
        }.call(this, __webpack_require__(51)(module))
    },
    612: function (module, __webpack_exports__, __webpack_require__) {
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
          __webpack_require__(42)
          var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              33
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
            _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10),
            ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
            withStorySource = __webpack_require__(79).withStorySource,
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
        }.call(this, __webpack_require__(51)(module))
    },
    613: function (module, __webpack_exports__, __webpack_require__) {
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
            _page_01_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113),
            _page_02_ui_workbench__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              118
            ),
            _page_03_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              120
            ),
            _page_04_sketches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              121
            ),
            _page_05_resume__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              122
            ),
            _page_06_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              123
            ),
            withStorySource = __webpack_require__(79).withStorySource,
            __STORY__ =
              "import React from 'react';\nimport Page1 from '../page-01-hi';\nimport Page2 from '../page-02-ui-workbench';\nimport Page3 from '../page-03-design';\nimport Page4 from '../page-04-sketches';\nimport Page5 from '../page-05-resume';\nimport Page6 from '../page-06-contact';\n\nstoriesOf('Portfolio|Pages', module)\n  .add('page 1', () => <Page1 />)\n  .add('page 2', () => <Page2 />)\n  .add('page 3', () => <Page3 />)\n  .add('page 4', () => <Page4 />)\n  .add('page 5', () => <Page5 />)\n  .add('page 6', () => <Page6 />);\n",
            __ADDS_MAP__ = {
              'Portfolio|Pages@page 6': {
                startLoc: { col: 7, line: 15 },
                endLoc: { col: 32, line: 15 }
              },
              'Portfolio|Pages@page 5': {
                startLoc: { col: 7, line: 14 },
                endLoc: { col: 32, line: 14 }
              },
              'Portfolio|Pages@page 4': {
                startLoc: { col: 7, line: 13 },
                endLoc: { col: 32, line: 13 }
              },
              'Portfolio|Pages@page 3': {
                startLoc: { col: 7, line: 12 },
                endLoc: { col: 32, line: 12 }
              },
              'Portfolio|Pages@page 2': {
                startLoc: { col: 7, line: 11 },
                endLoc: { col: 32, line: 11 }
              },
              'Portfolio|Pages@page 1': {
                startLoc: { col: 7, line: 10 },
                endLoc: { col: 32, line: 10 }
              }
            }
          storiesOf('Portfolio|Pages', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\nimport Page1 from '../page-01-hi';\nimport Page2 from '../page-02-ui-workbench';\nimport Page3 from '../page-03-design';\nimport Page4 from '../page-04-sketches';\nimport Page5 from '../page-05-resume';\nimport Page6 from '../page-06-contact';\n\nstoriesOf('Portfolio|Pages', module)\n  .add('page 1', () => <Page1 />)\n  .add('page 2', () => <Page2 />)\n  .add('page 3', () => <Page3 />)\n  .add('page 4', () => <Page4 />)\n  .add('page 5', () => <Page5 />)\n  .add('page 6', () => <Page6 />);\n",
                __ADDS_MAP__
              )
            )
            .add('page 1', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _page_01_hi__WEBPACK_IMPORTED_MODULE_1__.a,
                null
              )
            })
            .add('page 2', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _page_02_ui_workbench__WEBPACK_IMPORTED_MODULE_2__.a,
                null
              )
            })
            .add('page 3', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _page_03_design__WEBPACK_IMPORTED_MODULE_3__.a,
                null
              )
            })
            .add('page 4', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _page_04_sketches__WEBPACK_IMPORTED_MODULE_4__.a,
                null
              )
            })
            .add('page 5', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _page_05_resume__WEBPACK_IMPORTED_MODULE_5__.a,
                null
              )
            })
            .add('page 6', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _page_06_contact__WEBPACK_IMPORTED_MODULE_6__.a,
                null
              )
            })
        }.call(this, __webpack_require__(51)(module))
    },
    614: function (module, __webpack_exports__, __webpack_require__) {
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
            withStorySource = __webpack_require__(79).withStorySource,
            __STORY__ =
              "import React from 'react';\n// import theme from '../theme'\n\nstoriesOf('📌 Welcome', module).add('README', () => <div> hello </div>);\n\nstoriesOf('Portfolio|Theme', module).add('Palette', () => {\n  // const { behance, tumblr, github, linkedin } = theme.colors\n  return null;\n});\n",
            __ADDS_MAP__ = {
              '📌 Welcome@README': {
                startLoc: { col: 36, line: 4 },
                endLoc: { col: 70, line: 4 }
              },
              'Portfolio|Theme@Palette': {
                startLoc: { col: 41, line: 6 },
                endLoc: { col: 1, line: 9 }
              }
            }
          storiesOf('📌 Welcome', module)
            .addDecorator(
              withStorySource(
                "import React from 'react';\n// import theme from '../theme'\n\nstoriesOf('📌 Welcome', module).add('README', () => <div> hello </div>);\n\nstoriesOf('Portfolio|Theme', module).add('Palette', () => {\n  // const { behance, tumblr, github, linkedin } = theme.colors\n  return null;\n});\n",
                __ADDS_MAP__
              )
            )
            .add('README', function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                ' hello '
              )
            }),
            storiesOf('Portfolio|Theme', module)
              .addDecorator(
                withStorySource(
                  "import React from 'react';\n// import theme from '../theme'\n\nstoriesOf('📌 Welcome', module).add('README', () => <div> hello </div>);\n\nstoriesOf('Portfolio|Theme', module).add('Palette', () => {\n  // const { behance, tumblr, github, linkedin } = theme.colors\n  return null;\n});\n",
                  __ADDS_MAP__
                )
              )
              .add('Palette', function () {
                return null
              })
        }.call(this, __webpack_require__(51)(module))
    },
    65: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          64
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          33
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
            { href: url, className: linkBox, target: '_blank', light: !0 },
            other
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('img', {
            src: logo
          }),
          title
        )
      }
    },
    80: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          33
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
        _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65),
        _logo_behance_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          114
        ),
        _logo_behance_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _logo_behance_png__WEBPACK_IMPORTED_MODULE_5__
        ),
        _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          115
        ),
        _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _logo_tumblr_png__WEBPACK_IMPORTED_MODULE_6__
        ),
        _logo_linked_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          116
        ),
        _logo_linked_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _logo_linked_png__WEBPACK_IMPORTED_MODULE_7__
        ),
        _logo_github_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          117
        ),
        _logo_github_png__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _logo_github_png__WEBPACK_IMPORTED_MODULE_8__
        ),
        BarBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
          'div',
          { target: 'e2s2wxl0' }
        )({
          name: 'wngsno',
          styles:
            'display:flex;background:#000;padding-left:100px;transition:all 0.2ms;div a{img{max-height:100px;}}'
        }),
        LinksBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(
          'div',
          { target: 'e2s2wxl1' }
        )({ name: '1dnzbhn', styles: 'display:flex;align-content:center;' }),
        TopBar = function (_ref) {
          var showBehance = _ref.showBehance,
            showTumblr = _ref.showTumblr,
            showLinkedIn = _ref.showLinkedIn,
            showGithub = _ref.showGithub,
            props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(
              _ref,
              ['showBehance', 'showTumblr', 'showLinkedIn', 'showGithub']
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
              null,
              showBehance &&
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _Link__WEBPACK_IMPORTED_MODULE_4__.a,
                  props.behanceLink
                ),
              showTumblr &&
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _Link__WEBPACK_IMPORTED_MODULE_4__.a,
                  props.tumblrLink
                ),
              showLinkedIn &&
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _Link__WEBPACK_IMPORTED_MODULE_4__.a,
                  props.linkedInLink
                ),
              showGithub &&
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _Link__WEBPACK_IMPORTED_MODULE_4__.a,
                  props.githubLink
                )
            )
          )
        }
      ;(TopBar.defaultProps = {
        showBehance: !1,
        showTumblr: !1,
        showLinkedIn: !1,
        showGithub: !1,
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
            showBehance: {
              defaultValue: { value: 'false', computed: !1 },
              required: !1
            },
            showTumblr: {
              defaultValue: { value: 'false', computed: !1 },
              required: !1
            },
            showLinkedIn: {
              defaultValue: { value: 'false', computed: !1 },
              required: !1
            },
            showGithub: {
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
  [[278, 1, 2]]
])
//# sourceMappingURL=main.07ffa518b0bf5aa804f6.bundle.js.map
