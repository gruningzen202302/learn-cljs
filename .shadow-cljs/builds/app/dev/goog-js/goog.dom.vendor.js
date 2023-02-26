["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/vendor.js"],"~:js","goog.provide(\"goog.dom.vendor\");\ngoog.require(\"goog.string\");\ngoog.require(\"goog.userAgent\");\ngoog.dom.vendor.getVendorJsPrefix = function() {\n  if (goog.userAgent.WEBKIT) {\n    return \"Webkit\";\n  } else if (goog.userAgent.GECKO) {\n    return \"Moz\";\n  } else if (goog.userAgent.IE) {\n    return \"ms\";\n  }\n  return null;\n};\ngoog.dom.vendor.getVendorPrefix = function() {\n  if (goog.userAgent.WEBKIT) {\n    return \"-webkit\";\n  } else if (goog.userAgent.GECKO) {\n    return \"-moz\";\n  } else if (goog.userAgent.IE) {\n    return \"-ms\";\n  }\n  return null;\n};\ngoog.dom.vendor.getPrefixedPropertyName = function(propertyName, opt_object) {\n  if (opt_object && propertyName in opt_object) {\n    return propertyName;\n  }\n  var prefix = goog.dom.vendor.getVendorJsPrefix();\n  if (prefix) {\n    prefix = prefix.toLowerCase();\n    var prefixedPropertyName = prefix + goog.string.toTitleCase(propertyName);\n    return opt_object === undefined || prefixedPropertyName in opt_object ? prefixedPropertyName : null;\n  }\n  return null;\n};\ngoog.dom.vendor.getPrefixedEventType = function(eventType) {\n  var prefix = goog.dom.vendor.getVendorJsPrefix() || \"\";\n  return (prefix + eventType).toLowerCase();\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Vendor prefix getters.\n */\n\ngoog.provide('goog.dom.vendor');\n\ngoog.require('goog.string');\ngoog.require('goog.userAgent');\n\n\n/**\n * Returns the JS vendor prefix used in CSS properties. Different vendors\n * use different methods of changing the case of the property names.\n *\n * @return {?string} The JS vendor prefix or null if there is none.\n */\ngoog.dom.vendor.getVendorJsPrefix = function() {\n  'use strict';\n  if (goog.userAgent.WEBKIT) {\n    return 'Webkit';\n  } else if (goog.userAgent.GECKO) {\n    return 'Moz';\n  } else if (goog.userAgent.IE) {\n    return 'ms';\n  }\n\n  return null;\n};\n\n\n/**\n * Returns the vendor prefix used in CSS properties.\n *\n * @return {?string} The vendor prefix or null if there is none.\n */\ngoog.dom.vendor.getVendorPrefix = function() {\n  'use strict';\n  if (goog.userAgent.WEBKIT) {\n    return '-webkit';\n  } else if (goog.userAgent.GECKO) {\n    return '-moz';\n  } else if (goog.userAgent.IE) {\n    return '-ms';\n  }\n\n  return null;\n};\n\n\n/**\n * @param {string} propertyName A property name.\n * @param {!Object=} opt_object If provided, we verify if the property exists in\n *     the object.\n * @return {?string} A vendor prefixed property name, or null if it does not\n *     exist.\n */\ngoog.dom.vendor.getPrefixedPropertyName = function(propertyName, opt_object) {\n  'use strict';\n  // We first check for a non-prefixed property, if available.\n  if (opt_object && propertyName in opt_object) {\n    return propertyName;\n  }\n  var prefix = goog.dom.vendor.getVendorJsPrefix();\n  if (prefix) {\n    prefix = prefix.toLowerCase();\n    var prefixedPropertyName = prefix + goog.string.toTitleCase(propertyName);\n    return (opt_object === undefined || prefixedPropertyName in opt_object) ?\n        prefixedPropertyName :\n        null;\n  }\n  return null;\n};\n\n\n/**\n * @param {string} eventType An event type.\n * @return {string} A lower-cased vendor prefixed event type.\n */\ngoog.dom.vendor.getPrefixedEventType = function(eventType) {\n  'use strict';\n  var prefix = goog.dom.vendor.getVendorJsPrefix() || '';\n  return (prefix + eventType).toLowerCase();\n};\n","~:compiled-at",1677374978475,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.vendor.js\",\n\"lineCount\":40,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,iBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,aAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,gBAAb,CAAA;AASAF,IAAKG,CAAAA,GAAIC,CAAAA,MAAOC,CAAAA,iBAAhB,GAAoCC,QAAQ,EAAG;AAE7C,MAAIN,IAAKO,CAAAA,SAAUC,CAAAA,MAAnB;AACE,WAAO,QAAP;AADF,QAEO,KAAIR,IAAKO,CAAAA,SAAUE,CAAAA,KAAnB;AACL,WAAO,KAAP;AADK,QAEA,KAAIT,IAAKO,CAAAA,SAAUG,CAAAA,EAAnB;AACL,WAAO,IAAP;AADK;AAIP,SAAO,IAAP;AAV6C,CAA/C;AAmBAV,IAAKG,CAAAA,GAAIC,CAAAA,MAAOO,CAAAA,eAAhB,GAAkCC,QAAQ,EAAG;AAE3C,MAAIZ,IAAKO,CAAAA,SAAUC,CAAAA,MAAnB;AACE,WAAO,SAAP;AADF,QAEO,KAAIR,IAAKO,CAAAA,SAAUE,CAAAA,KAAnB;AACL,WAAO,MAAP;AADK,QAEA,KAAIT,IAAKO,CAAAA,SAAUG,CAAAA,EAAnB;AACL,WAAO,KAAP;AADK;AAIP,SAAO,IAAP;AAV2C,CAA7C;AAqBAV,IAAKG,CAAAA,GAAIC,CAAAA,MAAOS,CAAAA,uBAAhB,GAA0CC,QAAQ,CAACC,YAAD,EAAeC,UAAf,CAA2B;AAG3E,MAAIA,UAAJ,IAAkBD,YAAlB,IAAkCC,UAAlC;AACE,WAAOD,YAAP;AADF;AAGA,MAAIE,SAASjB,IAAKG,CAAAA,GAAIC,CAAAA,MAAOC,CAAAA,iBAAhB,EAAb;AACA,MAAIY,MAAJ,CAAY;AACVA,UAAA,GAASA,MAAOC,CAAAA,WAAP,EAAT;AACA,QAAIC,uBAAuBF,MAAvBE,GAAgCnB,IAAKoB,CAAAA,MAAOC,CAAAA,WAAZ,CAAwBN,YAAxB,CAApC;AACA,WAAQC,UAAD,KAAgBM,SAAhB,IAA6BH,oBAA7B,IAAqDH,UAArD,GACHG,oBADG,GAEH,IAFJ;AAHU;AAOZ,SAAO,IAAP;AAd2E,CAA7E;AAsBAnB,IAAKG,CAAAA,GAAIC,CAAAA,MAAOmB,CAAAA,oBAAhB,GAAuCC,QAAQ,CAACC,SAAD,CAAY;AAEzD,MAAIR,SAASjB,IAAKG,CAAAA,GAAIC,CAAAA,MAAOC,CAAAA,iBAAhB,EAATY,IAAgD,EAApD;AACA,SAA4BC,CAApBD,MAAoBC,GAAXO,SAAWP,EAAAA,WAArB,EAAP;AAHyD,CAA3D;;\",\n\"sources\":[\"goog/dom/vendor.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Vendor prefix getters.\\n */\\n\\ngoog.provide('goog.dom.vendor');\\n\\ngoog.require('goog.string');\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * Returns the JS vendor prefix used in CSS properties. Different vendors\\n * use different methods of changing the case of the property names.\\n *\\n * @return {?string} The JS vendor prefix or null if there is none.\\n */\\ngoog.dom.vendor.getVendorJsPrefix = function() {\\n  'use strict';\\n  if (goog.userAgent.WEBKIT) {\\n    return 'Webkit';\\n  } else if (goog.userAgent.GECKO) {\\n    return 'Moz';\\n  } else if (goog.userAgent.IE) {\\n    return 'ms';\\n  }\\n\\n  return null;\\n};\\n\\n\\n/**\\n * Returns the vendor prefix used in CSS properties.\\n *\\n * @return {?string} The vendor prefix or null if there is none.\\n */\\ngoog.dom.vendor.getVendorPrefix = function() {\\n  'use strict';\\n  if (goog.userAgent.WEBKIT) {\\n    return '-webkit';\\n  } else if (goog.userAgent.GECKO) {\\n    return '-moz';\\n  } else if (goog.userAgent.IE) {\\n    return '-ms';\\n  }\\n\\n  return null;\\n};\\n\\n\\n/**\\n * @param {string} propertyName A property name.\\n * @param {!Object=} opt_object If provided, we verify if the property exists in\\n *     the object.\\n * @return {?string} A vendor prefixed property name, or null if it does not\\n *     exist.\\n */\\ngoog.dom.vendor.getPrefixedPropertyName = function(propertyName, opt_object) {\\n  'use strict';\\n  // We first check for a non-prefixed property, if available.\\n  if (opt_object && propertyName in opt_object) {\\n    return propertyName;\\n  }\\n  var prefix = goog.dom.vendor.getVendorJsPrefix();\\n  if (prefix) {\\n    prefix = prefix.toLowerCase();\\n    var prefixedPropertyName = prefix + goog.string.toTitleCase(propertyName);\\n    return (opt_object === undefined || prefixedPropertyName in opt_object) ?\\n        prefixedPropertyName :\\n        null;\\n  }\\n  return null;\\n};\\n\\n\\n/**\\n * @param {string} eventType An event type.\\n * @return {string} A lower-cased vendor prefixed event type.\\n */\\ngoog.dom.vendor.getPrefixedEventType = function(eventType) {\\n  'use strict';\\n  var prefix = goog.dom.vendor.getVendorJsPrefix() || '';\\n  return (prefix + eventType).toLowerCase();\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"vendor\",\"getVendorJsPrefix\",\"goog.dom.vendor.getVendorJsPrefix\",\"userAgent\",\"WEBKIT\",\"GECKO\",\"IE\",\"getVendorPrefix\",\"goog.dom.vendor.getVendorPrefix\",\"getPrefixedPropertyName\",\"goog.dom.vendor.getPrefixedPropertyName\",\"propertyName\",\"opt_object\",\"prefix\",\"toLowerCase\",\"prefixedPropertyName\",\"string\",\"toTitleCase\",\"undefined\",\"getPrefixedEventType\",\"goog.dom.vendor.getPrefixedEventType\",\"eventType\"]\n}\n"]