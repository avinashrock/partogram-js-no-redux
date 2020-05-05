 import React from 'react';
 import MarkdownWrapper from 'terra-dev-site/lib/wrappers/_MarkdownWrapper';
 import ContentWrapper from 'terra-dev-site/lib/wrappers/_ContentWrapper';
 import { Redirect } from 'react-router-dom';
 const  ReactLazyImport1 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/README.md'));
 const  ReactLazyImport2 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/doc/Partogram.doc'));
 const  ReactLazyImport3 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Contraction-View/Contraction-baisc-layout.test'));
 const  ReactLazyImport4 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Contraction-View/Contraction-NoData.test'));
 const  ReactLazyImport5 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Epidural-View/Epidural-basic-layout.test'));
 const  ReactLazyImport6 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Epidural-View/Epidural-NoData.test'));
 const  ReactLazyImport7 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Overview-View/Overview-basic-layout.test'));
 const  ReactLazyImport8 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Overview-View/Overview-bloodtype-negative-indicator.test'));
 const  ReactLazyImport9 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Overview-View/Overview-no-data.test'));
 const  ReactLazyImport10 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-error-400.test'));
 const  ReactLazyImport11 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-error-401.test'));
 const  ReactLazyImport12 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-error-404.test'));
 const  ReactLazyImport13 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-error-500.test'));
 const  ReactLazyImport14 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-error-loading-partogram.test'));
 const  ReactLazyImport15 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-error-retrieving-pregnancy.test'));
 const  ReactLazyImport16 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-no-active-pregnancy.test'));
 const  ReactLazyImport17 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-no-partogram-response.test'));
 const  ReactLazyImport18 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-not-female.test'));
 const  ReactLazyImport19 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-partogram-start-not-configured.test'));
 const  ReactLazyImport20 = React.lazy(() => import('/Users/ap062035/Documents/dev-merge/partogram-js/src/terra-dev-site/test/Partogram-View/PartogramView-partogram-start-not-documented.test'));

 export default {
   '/home': {
      '/home': {
         'name': 'Home',
         'path': '/home',
         'component': {
            'default': {
               'componentClass': MarkdownWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport1
               }
            }
         }
      }
   },
   '/components': {
      '/components/partogram-js/partogram': {
         'name': 'Partogram',
         'path': '/components/partogram-js/partogram',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport2
               }
            }
         }
      },
      '/components': {
         'name': 'Components',
         'path': '/components',
         'component': {
            'default': {
               'componentClass': Redirect,
               'props': { 'to': '/components/partogram-js/partogram' }
            }
         }
      }
   },
   '/tests': {
      '/tests/partogram-js/contraction-view/contraction-baisc-layout': {
         'name': 'Contraction Baisc Layout',
         'path': '/tests/partogram-js/contraction-view/contraction-baisc-layout',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport3
               }
            }
         }
      },
      '/tests/partogram-js/contraction-view/contraction-no-data': {
         'name': 'Contraction No Data',
         'path': '/tests/partogram-js/contraction-view/contraction-no-data',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport4
               }
            }
         }
      },
      '/tests/partogram-js/epidural-view/epidural-basic-layout': {
         'name': 'Epidural Basic Layout',
         'path': '/tests/partogram-js/epidural-view/epidural-basic-layout',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport5
               }
            }
         }
      },
      '/tests/partogram-js/epidural-view/epidural-no-data': {
         'name': 'Epidural No Data',
         'path': '/tests/partogram-js/epidural-view/epidural-no-data',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport6
               }
            }
         }
      },
      '/tests/partogram-js/overview-view/overview-basic-layout': {
         'name': 'Overview Basic Layout',
         'path': '/tests/partogram-js/overview-view/overview-basic-layout',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport7
               }
            }
         }
      },
      '/tests/partogram-js/overview-view/overview-bloodtype-negative-indicator': {
         'name': 'Overview Bloodtype Negative Indicator',
         'path': '/tests/partogram-js/overview-view/overview-bloodtype-negative-indicator',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport8
               }
            }
         }
      },
      '/tests/partogram-js/overview-view/overview-no-data': {
         'name': 'Overview No Data',
         'path': '/tests/partogram-js/overview-view/overview-no-data',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport9
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-error-400': {
         'name': 'Partogram View Error 400',
         'path': '/tests/partogram-js/partogram-view/partogram-view-error-400',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport10
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-error-401': {
         'name': 'Partogram View Error 401',
         'path': '/tests/partogram-js/partogram-view/partogram-view-error-401',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport11
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-error-404': {
         'name': 'Partogram View Error 404',
         'path': '/tests/partogram-js/partogram-view/partogram-view-error-404',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport12
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-error-500': {
         'name': 'Partogram View Error 500',
         'path': '/tests/partogram-js/partogram-view/partogram-view-error-500',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport13
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-error-loading-partogram': {
         'name': 'Partogram View Error Loading Partogram',
         'path': '/tests/partogram-js/partogram-view/partogram-view-error-loading-partogram',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport14
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-error-retrieving-pregnancy': {
         'name': 'Partogram View Error Retrieving Pregnancy',
         'path': '/tests/partogram-js/partogram-view/partogram-view-error-retrieving-pregnancy',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport15
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-no-active-pregnancy': {
         'name': 'Partogram View No Active Pregnancy',
         'path': '/tests/partogram-js/partogram-view/partogram-view-no-active-pregnancy',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport16
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-no-partogram-response': {
         'name': 'Partogram View No Partogram Response',
         'path': '/tests/partogram-js/partogram-view/partogram-view-no-partogram-response',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport17
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-not-female': {
         'name': 'Partogram View Not Female',
         'path': '/tests/partogram-js/partogram-view/partogram-view-not-female',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport18
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-partogram-start-not-configured': {
         'name': 'Partogram View Partogram Start Not Configured',
         'path': '/tests/partogram-js/partogram-view/partogram-view-partogram-start-not-configured',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport19
               }
            }
         }
      },
      '/tests/partogram-js/partogram-view/partogram-view-partogram-start-not-documented': {
         'name': 'Partogram View Partogram Start Not Documented',
         'path': '/tests/partogram-js/partogram-view/partogram-view-partogram-start-not-documented',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'props': void 0,
                  'content': ReactLazyImport20
               }
            }
         }
      }
   },
   '/evidence': {}
};
