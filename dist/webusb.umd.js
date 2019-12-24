!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("usb")):"function"==typeof define&&define.amd?define(["exports","usb"],r):r((e=e||self).webusb={},e.usb$1)}(this,(function(e,r){"use strict";function t(){}function n(){n.init.call(this)}function i(e){return void 0===e._maxListeners?n.defaultMaxListeners:e._maxListeners}function o(e,r,t){if(r)e.call(t);else for(var n=e.length,i=h(e,n),o=0;o<n;++o)i[o].call(t)}function s(e,r,t,n){if(r)e.call(t,n);else for(var i=e.length,o=h(e,i),s=0;s<i;++s)o[s].call(t,n)}function c(e,r,t,n,i){if(r)e.call(t,n,i);else for(var o=e.length,s=h(e,o),c=0;c<o;++c)s[c].call(t,n,i)}function a(e,r,t,n,i,o){if(r)e.call(t,n,i,o);else for(var s=e.length,c=h(e,s),a=0;a<s;++a)c[a].call(t,n,i,o)}function u(e,r,t,n){if(r)e.apply(t,n);else for(var i=e.length,o=h(e,i),s=0;s<i;++s)o[s].apply(t,n)}function l(e,r,n,o){var s,c,a,u;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((c=e._events)?(c.newListener&&(e.emit("newListener",r,n.listener?n.listener:n),c=e._events),a=c[r]):(c=e._events=new t,e._eventsCount=0),a){if("function"==typeof a?a=c[r]=o?[n,a]:[a,n]:o?a.unshift(n):a.push(n),!a.warned&&(s=i(e))&&s>0&&a.length>s){a.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+r+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=r,l.count=a.length,u=l,"function"==typeof console.warn?console.warn(u):console.log(u)}}else a=c[r]=n,++e._eventsCount;return e}function f(e,r,t){var n=!1;function i(){e.removeListener(r,i),n||(n=!0,t.apply(e,arguments))}return i.listener=t,i}function d(e){var r=this._events;if(r){var t=r[e];if("function"==typeof t)return 1;if(t)return t.length}return 0}function h(e,r){for(var t=new Array(r);r--;)t[r]=e[r];return t}t.prototype=Object.create(null),n.EventEmitter=n,n.usingDomains=!1,n.prototype.domain=void 0,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.init=function(){this.domain=null,n.usingDomains&&(void 0).active&&(void 0).Domain,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new t,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},n.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},n.prototype.getMaxListeners=function(){return i(this)},n.prototype.emit=function(e){var r,t,n,i,l,f,d,h="error"===e;if(f=this._events)h=h&&null==f.error;else if(!h)return!1;if(d=this.domain,h){if(r=arguments[1],!d){if(r instanceof Error)throw r;var E=new Error('Uncaught, unspecified "error" event. ('+r+")");throw E.context=r,E}return r||(r=new Error('Uncaught, unspecified "error" event')),r.domainEmitter=this,r.domain=d,r.domainThrown=!1,d.emit("error",r),!1}if(!(t=f[e]))return!1;var v="function"==typeof t;switch(n=arguments.length){case 1:o(t,v,this);break;case 2:s(t,v,this,arguments[1]);break;case 3:c(t,v,this,arguments[1],arguments[2]);break;case 4:a(t,v,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(n-1),l=1;l<n;l++)i[l-1]=arguments[l];u(t,v,this,i)}return!0},n.prototype.addListener=function(e,r){return l(this,e,r,!1)},n.prototype.on=n.prototype.addListener,n.prototype.prependListener=function(e,r){return l(this,e,r,!0)},n.prototype.once=function(e,r){if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');return this.on(e,f(this,e,r)),this},n.prototype.prependOnceListener=function(e,r){if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,f(this,e,r)),this},n.prototype.removeListener=function(e,r){var n,i,o,s,c;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if(!(i=this._events))return this;if(!(n=i[e]))return this;if(n===r||n.listener&&n.listener===r)0==--this._eventsCount?this._events=new t:(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||r));else if("function"!=typeof n){for(o=-1,s=n.length;s-- >0;)if(n[s]===r||n[s].listener&&n[s].listener===r){c=n[s].listener,o=s;break}if(o<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new t,this;delete i[e]}else!function(e,r){for(var t=r,n=t+1,i=e.length;n<i;t+=1,n+=1)e[t]=e[n];e.pop()}(n,o);i.removeListener&&this.emit("removeListener",e,c||r)}return this},n.prototype.removeAllListeners=function(e){var r,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new t,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new t:delete n[e]),this;if(0===arguments.length){for(var i,o=Object.keys(n),s=0;s<o.length;++s)"removeListener"!==(i=o[s])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=new t,this._eventsCount=0,this}if("function"==typeof(r=n[e]))this.removeListener(e,r);else if(r)do{this.removeListener(e,r[r.length-1])}while(r[0]);return this},n.prototype.listeners=function(e){var r,t=this._events;return t&&(r=t[e])?"function"==typeof r?[r.listener||r]:function(e){for(var r=new Array(e.length),t=0;t<r.length;++t)r[t]=e[t].listener||e[t];return r}(r):[]},n.listenerCount=function(e,r){return"function"==typeof e.listenerCount?e.listenerCount(r):d.call(e,r)},n.prototype.listenerCount=d,n.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};class E extends n{addEventListener(e,r){return super.addListener(e,r)}removeEventListener(e,r){return super.removeListener(e,r)}dispatchEvent(e,r){return super.emit(e,{type:e,target:this,value:r})}}class v{constructor(e){this.configurationValue=null,this.configurationName=null,this.interfaces=[],this.configurationValue=e.configurationValue,this.configurationName=e.configurationName,this.interfaces=e.interfaces}}class p{constructor(e){this.interfaceNumber=null,this.alternates=[],this._claimed=!1,this._currentAlternate=0,this._handle=null,this.interfaceNumber=e.interfaceNumber,this.alternates=e.alternates,this._handle=e._handle}get claimed(){return this._claimed}get alternate(){return this.alternates.find(e=>e.alternateSetting===this._currentAlternate)}selectAlternateInterface(e){return b.selectAlternateInterface(this._handle,this.interfaceNumber,e).then(()=>{this._currentAlternate=e})}claimInterface(){return b.claimInterface(this._handle,this.interfaceNumber).then(()=>{this._claimed=!0})}releaseInterface(){return b.releaseInterface(this._handle,this.interfaceNumber).then(()=>{this._claimed=!1})}reset(){this._currentAlternate=0}}class m{constructor(e){this.alternateSetting=null,this.interfaceClass=null,this.interfaceSubclass=null,this.interfaceProtocol=null,this.interfaceName=null,this.endpoints=[],this.alternateSetting=e.alternateSetting,this.interfaceClass=e.interfaceClass,this.interfaceSubclass=e.interfaceSubclass,this.interfaceProtocol=e.interfaceProtocol,this.interfaceName=e.interfaceName,this.endpoints=e.endpoints}}class _{constructor(e){this.endpointNumber=null,this.direction=null,this.type=null,this.packetSize=null,this.endpointNumber=e.endpointNumber,this.direction=e.direction,this.type=e.type,this.packetSize=e.packetSize}}class I{constructor(e){this.manufacturerName=null,this.productName=null,this.serialNumber=null,this._configurations=[],this._currentConfiguration=null,this.url=null,this._maxPacketSize=0,this._handle=null,this.usbVersionMajor=e.usbVersionMajor,this.usbVersionMinor=e.usbVersionMinor,this.usbVersionSubminor=e.usbVersionSubminor,this.deviceClass=e.deviceClass,this.deviceSubclass=e.deviceSubclass,this.deviceProtocol=e.deviceProtocol,this.vendorId=e.vendorId,this.productId=e.productId,this.deviceVersionMajor=e.deviceVersionMajor,this.deviceVersionMinor=e.deviceVersionMinor,this.deviceVersionSubminor=e.deviceVersionSubminor,this.manufacturerName=e.manufacturerName,this.productName=e.productName,this.serialNumber=e.serialNumber,this._configurations=e.configurations,this.url=e.url,this._maxPacketSize=e._maxPacketSize,this._handle=e._handle,this._currentConfiguration=e._currentConfiguration}get configurations(){return this._configurations}get configuration(){return this.configurations.find(e=>e.configurationValue===this._currentConfiguration)}get connected(){return b.getConnected(this._handle)}get opened(){return b.getOpened(this._handle)}getEndpoint(e,r){let t=null,n=null;return this.configuration.interfaces.some(i=>(t=i.alternate.endpoints.find(t=>t.endpointNumber===r&&t.direction===e),t&&(n=i),t)),{endpoint:t,iface:n}}setupInvalid(e){if("interface"===e.recipient){const r=255&e.index,t=this.configuration.interfaces.find(e=>e.interfaceNumber===r);if(!t)return"interface not found";if(!t.claimed)return"invalid state"}else if("endpoint"===e.recipient){const t=15&e.index,n=e.index&r.LIBUSB_ENDPOINT_IN?"in":"out",i=this.getEndpoint(n,t);if(!i.endpoint)return"endpoint not found";if(!i.iface.claimed)return"invalid state"}}open(){return new Promise((e,r)=>this.connected?this.opened?e():void b.open(this._handle).then(e).catch(e=>{r(new Error(`open error: ${e}`))}):r(new Error("open error: device not found")))}close(){return new Promise((e,r)=>{if(!this.connected)return r(new Error("close error: device not found"));if(!this.opened)return e();const t=this.configuration.interfaces.map(e=>this.releaseInterface(e.interfaceNumber));Promise.all(t).catch(e=>{}).then(()=>b.close(this._handle)).then(e).catch(e=>{r(new Error(`close error: ${e}`))})})}selectConfiguration(e){return new Promise((r,t)=>{if(e===this._currentConfiguration)return r();if(!this.connected)return t(new Error("selectConfiguration error: device not found"));return this.configurations.find(r=>r.configurationValue===e)?this.opened?void b.selectConfiguration(this._handle,e).then(()=>{this._currentConfiguration=e,this.configuration.interfaces.forEach(e=>e.reset()),r()}).catch(e=>{t(new Error(`selectConfiguration error: ${e}`))}):t(new Error("selectConfiguration error: invalid state")):t(new Error("selectConfiguration error: configuration not found"))})}claimInterface(e){return new Promise((r,t)=>{if(!this.connected)return t(new Error("claimInterface error: device not found"));const n=this.configuration.interfaces.find(r=>r.interfaceNumber===e);return n?this.opened?n.claimed?r():void n.claimInterface().then(r).catch(e=>{t(new Error(`claimInterface error: ${e}`))}):t(new Error("claimInterface error: invalid state")):t(new Error("claimInterface error: interface not found"))})}releaseInterface(e){return new Promise((r,t)=>{if(!this.connected)return t(new Error("releaseInterface error: device not found"));const n=this.configuration.interfaces.find(r=>r.interfaceNumber===e);return n?this.opened?n.claimed?void n.releaseInterface().then(r).catch(e=>{t(new Error(`releaseInterface error: ${e}`))}):r():t(new Error("releaseInterface error: invalid state")):t(new Error("releaseInterface error: interface not found"))})}selectAlternateInterface(e,r){return new Promise((t,n)=>{if(!this.connected)return n(new Error("selectAlternateInterface error: device not found"));const i=this.configuration.interfaces.find(r=>r.interfaceNumber===e);return i?this.opened&&i.claimed?void i.selectAlternateInterface(r).then(t).catch(e=>{n(new Error(`selectAlternateInterface error: ${e}`))}):n(new Error("selectAlternateInterface error: invalid state")):n(new Error("selectAlternateInterface error: interface not found"))})}controlTransferIn(e,r){return new Promise((t,n)=>{if(!this.connected)return n(new Error("controlTransferIn error: device not found"));if(!this.opened)return n(new Error("controlTransferIn error: invalid state"));const i=this.setupInvalid(e);if(i)return n(new Error(`controlTransferIn error: ${i}`));b.controlTransferIn(this._handle,e,r).then(t).catch(e=>{n(new Error(`controlTransferIn error: ${e}`))})})}controlTransferOut(e,r){return new Promise((t,n)=>{if(!this.connected)return n(new Error("controlTransferOut error: device not found"));if(!this.opened)return n(new Error("controlTransferOut error: invalid state"));const i=this.setupInvalid(e);if(i)return n(new Error(`controlTransferOut error: ${i}`));b.controlTransferOut(this._handle,e,r).then(t).catch(e=>{n(new Error(`controlTransferOut error: ${e}`))})})}clearHalt(e,r){return new Promise((t,n)=>{if(!this.connected)return n(new Error("clearHalt error: device not found"));const i=this.getEndpoint(e,r);return i.endpoint?this.opened&&i.iface.claimed?void b.clearHalt(this._handle,e,r).then(t).catch(e=>{n(new Error(`clearHalt error: ${e}`))}):n(new Error("clearHalt error: invalid state")):n(new Error("clearHalt error: endpoint not found"))})}transferIn(e,r){return new Promise((t,n)=>{if(!this.connected)return n(new Error("transferIn error: device not found"));const i=this.getEndpoint("in",e);return i.endpoint?"interrupt"!==i.endpoint.type&&"bulk"!==i.endpoint.type?n(new Error("transferIn error: invalid access")):this.opened&&i.iface.claimed?void b.transferIn(this._handle,e,r).then(t).catch(e=>{n(new Error(`transferIn error: ${e}`))}):n(new Error("transferIn error: invalid state")):n(new Error("transferIn error: endpoint not found"))})}transferOut(e,r){return new Promise((t,n)=>{if(!this.connected)return n(new Error("transferOut error: device not found"));const i=this.getEndpoint("out",e);return i.endpoint?"interrupt"!==i.endpoint.type&&"bulk"!==i.endpoint.type?n(new Error("transferOut error: invalid access")):this.opened&&i.iface.claimed?void b.transferOut(this._handle,e,r).then(t).catch(e=>{n(new Error(`transferOut error: ${e}`))}):n(new Error("transferOut error: invalid state")):n(new Error("transferOut error: endpoint not found"))})}isochronousTransferIn(e,r){return new Promise((t,n)=>{if(!this.connected)return n(new Error("isochronousTransferIn error: device not found"));const i=this.getEndpoint("in",e);return i.endpoint?"isochronous"!==i.endpoint.type?n(new Error("isochronousTransferIn error: invalid access")):this.opened&&i.iface.claimed?void b.isochronousTransferIn(this._handle,e,r).then(t).catch(e=>{n(new Error(`isochronousTransferIn error: ${e}`))}):n(new Error("isochronousTransferIn error: invalid state")):n(new Error("isochronousTransferIn error: endpoint not found"))})}isochronousTransferOut(e,r,t){return new Promise((n,i)=>{if(!this.connected)return i(new Error("isochronousTransferOut error: device not found"));const o=this.getEndpoint("out",e);return o.endpoint?"isochronous"!==o.endpoint.type?i(new Error("isochronousTransferOut error: invalid access")):this.opened&&o.iface.claimed?void b.isochronousTransferOut(this._handle,e,r,t).then(n).catch(e=>{i(new Error(`isochronousTransferOut error: ${e}`))}):i(new Error("isochronousTransferOut error: invalid state")):i(new Error("isochronousTransferOut error: endpoint not found"))})}reset(){return new Promise((e,r)=>this.connected?this.opened?void b.reset(this._handle).then(e).catch(e=>{r(new Error(`reset error: ${e}`))}):r(new Error("reset error: invalid state")):r(new Error("reset error: device not found")))}}const T=200,g=10,N={WEB_UUID:"3408b638-09a9-47a0-8bfd-a0768815b665",LIBUSB_DT_BOS:15,LIBUSB_DT_BOS_SIZE:5,LIBUSB_TRANSFER_TYPE_MASK:3,USB_VERSION:513,CAPABILITY_VERSION:256,URL_REQUEST_TYPE:192,URL_REQUEST_INDEX:2,CLEAR_FEATURE:1,ENDPOINT_HALT:0};class w extends n{constructor(){super(),this.devices={};const e=e=>{this.loadDevice(e,g).then(e=>{if(e){const r=this.getDeviceHandle(e);this.devicetoUSBDevice(r).then(e=>{e&&this.emit(w.EVENT_DEVICE_CONNECT,e)})}})},t=e=>{const r=this.getDeviceHandle(e);r&&this.devices[r]&&(delete this.devices[r],this.emit(w.EVENT_DEVICE_DISCONNECT,r))};this.on("newListener",n=>{0===this.listenerCount(n)&&(n===w.EVENT_DEVICE_CONNECT?r.on("attach",e):n===w.EVENT_DEVICE_DISCONNECT&&r.on("detach",t))}),this.on("removeListener",n=>{0===this.listenerCount(n)&&(n===w.EVENT_DEVICE_CONNECT?r.removeListener("attach",e):n===w.EVENT_DEVICE_DISCONNECT&&r.removeListener("detach",t))})}getDeviceHandle(e){return null===e.busNumber||null===e.deviceAddress?null:`${e.busNumber}.${e.deviceAddress}`}serialPromises(e,r){return r.reduce(function(r,t){return r.then(r=>e.call(this,t).then(e=>(e&&r.push(e),r)))}.bind(this),Promise.resolve([]))}serialDevicePromises(e,r,t){return t.reduce(function(t,n){return t.then(t=>e.call(this,r,n).then(e=>(t.push(e),t)))}.bind(this),Promise.resolve([]))}delay(e=T){return new Promise((r,t)=>{setTimeout(r,e)})}retryPromise(e,r=0,t=T){return new Promise((n,i)=>{e().then(n).catch(o=>0===r?i(o):this.delay(t).then(()=>this.retryPromise(e,--r,t)).then(n).catch(e=>i(e)))})}loadDevices(){this.devices={};const e=r.getDeviceList();return this.serialPromises(this.loadDevice,e)}loadDevice(e,r=0){try{e.configDescriptor,e.allConfigDescriptors,e.deviceDescriptor}catch(e){return Promise.resolve(null)}return this.getCapabilities(e,r).then(e=>this.getWebCapability(e)).then(r=>this.getWebUrl(e,r).then(r=>{const t=this.getDeviceHandle(e);return this.devices[t]={device:e,url:r},e}))}getCapabilities(e,r){return new Promise((t,n)=>{this.openDevice(e,r).then(()=>{e.getCapabilities((r,n)=>{try{e.close()}catch(e){}if(r)return t([]);t(n)})}).catch(e=>{t([])})})}getWebCapability(e){return e.filter(e=>5===e.type).find(e=>{const r=this.decodeUUID(e.data.slice(1,17)),t=e.data.readUInt16LE(17);return r===N.WEB_UUID&&t===N.CAPABILITY_VERSION})}decodeUUID(e){const r=`00000000${e.readUInt32LE(0).toString(16)}`.slice(-8),t=`0000${e.readUInt16LE(4).toString(16)}`.slice(-4),n=`0000${e.readUInt16LE(6).toString(16)}`.slice(-4),i=[];for(let r=8;r<10;r++)i.push(`00${e.readUInt8(r).toString(16)}`.slice(-2));const o=[];for(let r=10;r<16;r++)o.push(`00${e.readUInt8(r).toString(16)}`.slice(-2));return`${r}-${t}-${n}-${i.join("")}-${o.join("")}`}getWebUrl(e,r,t=!0){return new Promise((n,i)=>{if(!r||!r.data||r.data.byteLength<20)return n(null);const o=r.data.readUInt8(19),s=r.data.readUInt8(20);this.openDevice(e).then(()=>{e.controlTransfer(N.URL_REQUEST_TYPE,o,s,N.URL_REQUEST_INDEX,64,(r,o)=>{if(e.close(),r)return t?n(null):i(r);let s=o.toString("utf8",3);const c=o.readUInt8(2);0===c&&(s="http://"+s),1===c&&(s="https://"+s),n(s)})}).catch(e=>{n("")})})}devicetoUSBDevice(e){return new Promise((r,t)=>{const n=this.devices[e].device,i=this.devices[e].url;let o=null,s=null,c=null;try{s=n.configDescriptor,o=n.allConfigDescriptors,c=n.deviceDescriptor}catch(e){return r(null)}return o?this.serialDevicePromises(this.configToUSBConfiguration,n,o).then(e=>{if(!c)return r(new I({_handle:this.getDeviceHandle(n),url:i,configurations:e}));const t=this.decodeVersion(c.bcdDevice),o=this.decodeVersion(c.bcdUSB);let a=null,u=null;return this.getStringDescriptor(n,c.iManufacturer).then(e=>(a=e,this.getStringDescriptor(n,c.iProduct))).then(e=>(u=e,this.getStringDescriptor(n,c.iSerialNumber))).then(l=>{const f={_handle:this.getDeviceHandle(n),_maxPacketSize:c.bMaxPacketSize0,url:i,deviceClass:c.bDeviceClass,deviceSubclass:c.bDeviceSubClass,deviceProtocol:c.bDeviceProtocol,productId:c.idProduct,vendorId:c.idVendor,deviceVersionMajor:t.major,deviceVersionMinor:t.minor,deviceVersionSubminor:t.sub,usbVersionMajor:o.major,usbVersionMinor:o.minor,usbVersionSubminor:o.sub,manufacturerName:a,productName:u,serialNumber:l,configurations:e,_currentConfiguration:s.bConfigurationValue};return r(new I(f))})}).catch(e=>{r(null)}):r(null)})}decodeVersion(e){const r=`0000${e.toString(16)}`.slice(-4);return{major:parseInt(r.substr(0,2),null),minor:parseInt(r.substr(2,1),null),sub:parseInt(r.substr(3,1),null)}}getStringDescriptor(e,r){return new Promise(t=>{this.openDevice(e).then(()=>{e.getStringDescriptor(r,(r,n)=>{e.close(),t(r?"":n.toString())})}).catch(e=>{t("")})})}bufferToDataView(e){const r=new Uint8Array(e).buffer;return new DataView(r)}bufferSourceToBuffer(e){const r=ArrayBuffer.isView(e)?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):e;return Buffer.from(r)}getEndpoint(e,t,n){let i=null;const o=n|("in"===t?r.LIBUSB_ENDPOINT_IN:r.LIBUSB_ENDPOINT_OUT);return e.interfaces.some(e=>{const r=e.endpoint(o);return!!r&&(i=r,!0)}),i}getInEndpoint(e,r){const t=this.getEndpoint(e,"in",r);if(t&&"in"===t.direction)return t}getOutEndpoint(e,r){const t=this.getEndpoint(e,"out",r);if(t&&"out"===t.direction)return t}endpointToUSBEndpoint(e){const t=e.bEndpointAddress&r.LIBUSB_ENDPOINT_IN?"in":"out";return new _({endpointNumber:e.bEndpointAddress^("in"===t?r.LIBUSB_ENDPOINT_IN:r.LIBUSB_ENDPOINT_OUT),direction:t,type:(e.bmAttributes&N.LIBUSB_TRANSFER_TYPE_MASK)===r.LIBUSB_TRANSFER_TYPE_BULK?"bulk":(e.bmAttributes&N.LIBUSB_TRANSFER_TYPE_MASK)===r.LIBUSB_TRANSFER_TYPE_INTERRUPT?"interrupt":"isochronous",packetSize:e.wMaxPacketSize})}interfaceToUSBAlternateInterface(e,r){return this.getStringDescriptor(e,r.iInterface).then(e=>new m({alternateSetting:r.bAlternateSetting,interfaceClass:r.bInterfaceClass,interfaceSubclass:r.bInterfaceSubClass,interfaceProtocol:r.bInterfaceProtocol,interfaceName:e,endpoints:r.endpoints.map(this.endpointToUSBEndpoint)}))}interfacesToUSBInterface(e,r){return this.serialDevicePromises(this.interfaceToUSBAlternateInterface,e,r).then(t=>new p({_handle:this.getDeviceHandle(e),interfaceNumber:r[0].bInterfaceNumber,alternates:t}))}configToUSBConfiguration(e,r){return this.getStringDescriptor(e,r.iConfiguration).then(t=>{const n=r.interfaces||[];return this.serialDevicePromises(this.interfacesToUSBInterface,e,n).then(e=>new v({configurationValue:r.bConfigurationValue,configurationName:t,interfaces:e}))})}getDevice(e){return this.devices[e]?this.devices[e].device:null}controlTransferParamsToType(e,t){return("device"===e.recipient?r.LIBUSB_RECIPIENT_DEVICE:"interface"===e.recipient?r.LIBUSB_RECIPIENT_INTERFACE:"endpoint"===e.recipient?r.LIBUSB_RECIPIENT_ENDPOINT:r.LIBUSB_RECIPIENT_OTHER)|("standard"===e.requestType?r.LIBUSB_REQUEST_TYPE_STANDARD:"class"===e.requestType?r.LIBUSB_REQUEST_TYPE_CLASS:r.LIBUSB_REQUEST_TYPE_VENDOR)|t}openDevice(e,r=0){return this.retryPromise(()=>new Promise((r,t)=>{try{e.open()}catch(e){return t(e)}r()}),r)}getConnected(e){return null!==this.getDevice(e)}getOpened(e){const r=this.getDevice(e);return!!r&&null!==r.interfaces}listUSBDevices(){return this.loadDevices().then(()=>this.serialPromises(this.devicetoUSBDevice,Object.keys(this.devices)))}open(e){const r=this.getDevice(e);return this.openDevice(r)}close(e){return new Promise((r,t)=>{this.getDevice(e).close(),r()})}selectConfiguration(e,r){return new Promise((t,n)=>{this.getDevice(e).setConfiguration(r,e=>{if(e)return n(e);t()})})}claimInterface(e,r){return new Promise((t,n)=>{this.getDevice(e).interface(r).claim(),t()})}releaseInterface(e,r){return new Promise((t,n)=>{this.getDevice(e).interface(r).release(!0,e=>{if(e)return n(e);t()})})}selectAlternateInterface(e,r,t){return new Promise((n,i)=>{this.getDevice(e).interface(r).setAltSetting(t,e=>{if(e)return i(e);n()})})}controlTransferIn(e,t,n){return new Promise((i,o)=>{const s=this.getDevice(e),c=this.controlTransferParamsToType(t,r.LIBUSB_ENDPOINT_IN);s.controlTransfer(c,t.request,t.value,t.index,n,(e,t)=>{if(e)return e.errno===r.LIBUSB_TRANSFER_STALL?i({status:"stall"}):e.errno===r.LIBUSB_TRANSFER_OVERFLOW?i({status:"babble"}):o(e);i({data:this.bufferToDataView(t),status:"ok"})})})}controlTransferOut(e,t,n){return new Promise((i,o)=>{const s=this.getDevice(e),c=this.controlTransferParamsToType(t,r.LIBUSB_ENDPOINT_OUT),a=n?this.bufferSourceToBuffer(n):new Buffer(0);s.controlTransfer(c,t.request,t.value,t.index,a,e=>{if(e)return e.errno===r.LIBUSB_TRANSFER_STALL?i({bytesWritten:0,status:"stall"}):o(e);i({bytesWritten:a.byteLength,status:"ok"})})})}clearHalt(e,t,n){return new Promise((i,o)=>{const s=this.getDevice(e),c=n|("in"===t?r.LIBUSB_ENDPOINT_IN:r.LIBUSB_ENDPOINT_OUT);s.controlTransfer(r.LIBUSB_RECIPIENT_ENDPOINT,N.CLEAR_FEATURE,N.ENDPOINT_HALT,c,0,e=>{if(e)return o(e);i()})})}transferIn(e,t,n){return new Promise((i,o)=>{const s=this.getDevice(e);this.getInEndpoint(s,t).transfer(n,(e,t)=>{if(e)return e.errno===r.LIBUSB_TRANSFER_STALL?i({status:"stall"}):e.errno===r.LIBUSB_TRANSFER_OVERFLOW?i({status:"babble"}):o(e);i({data:this.bufferToDataView(t),status:"ok"})})})}transferOut(e,t,n){return new Promise((i,o)=>{const s=this.getDevice(e),c=this.getOutEndpoint(s,t),a=this.bufferSourceToBuffer(n);c.transfer(a,e=>{if(e)return e.errno===r.LIBUSB_TRANSFER_STALL?i({bytesWritten:0,status:"stall"}):o(e);i({bytesWritten:a.byteLength,status:"ok"})})})}isochronousTransferIn(e,r,t){return new Promise((e,r)=>{r("isochronousTransferIn error: method not implemented")})}isochronousTransferOut(e,r,t,n){return new Promise((e,r)=>{r("isochronousTransferOut error: method not implemented")})}reset(e){return new Promise((r,t)=>{this.getDevice(e).reset(e=>{if(e)return t(e);r()})})}}w.EVENT_DEVICE_CONNECT="connect",w.EVENT_DEVICE_DISCONNECT="disconnect";const b=new w;class S extends E{constructor(e){super(),this.allowedDevices=[],e=e||{},this.devicesFound=e.devicesFound;const r=e=>{this.replaceAllowedDevice(e)&&this.emit(S.EVENT_DEVICE_CONNECT,e)},t=e=>{const r=this.allowedDevices.find(r=>r._handle===e);r&&this.emit(S.EVENT_DEVICE_DISCONNECT,r)};this.on("newListener",e=>{0===this.listenerCount(e)&&(e===S.EVENT_DEVICE_CONNECT?b.addListener(w.EVENT_DEVICE_CONNECT,r):e===S.EVENT_DEVICE_DISCONNECT&&b.addListener(w.EVENT_DEVICE_DISCONNECT,t))}),this.on("removeListener",e=>{0===this.listenerCount(e)&&(e===S.EVENT_DEVICE_CONNECT?b.removeListener(w.EVENT_DEVICE_CONNECT,r):e===S.EVENT_DEVICE_DISCONNECT&&b.removeListener(w.EVENT_DEVICE_DISCONNECT,t))})}replaceAllowedDevice(e){for(const r in this.allowedDevices)if(this.isSameDevice(e,this.allowedDevices[r]))return this.allowedDevices[r]=e,!0;return!1}isSameDevice(e,r){return e.productId===r.productId&&e.vendorId===r.vendorId&&e.serialNumber===r.serialNumber}filterDevice(e,r){return e.filters.some(e=>{if(e.vendorId&&e.vendorId!==r.vendorId)return!1;if(e.productId&&e.productId!==r.productId)return!1;if(e.classCode){if(r.configuration.interfaces.some(r=>(!e.classCode||e.classCode===r.alternate.interfaceClass)&&((!e.subclassCode||e.subclassCode===r.alternate.interfaceSubclass)&&(!e.protocolCode||e.protocolCode===r.alternate.interfaceProtocol))))return!0}return(!e.classCode||e.classCode===r.deviceClass)&&((!e.subclassCode||e.subclassCode===r.deviceSubclass)&&((!e.protocolCode||e.protocolCode===r.deviceProtocol)&&(!e.serialnumber||e.serialnumber===r.serialNumber)))})}getDevices(){return b.listUSBDevices().then(e=>{return e.filter(e=>{if(!e.connected)return!1;for(const r in this.allowedDevices)if(this.isSameDevice(e,this.allowedDevices[r]))return!0;return!1})})}requestDevice(e){return new Promise((r,t)=>{if(!e)return t(new TypeError("requestDevice error: 1 argument required, but only 0 present"));if(e.constructor!=={}.constructor)return t(new TypeError("requestDevice error: parameter 1 (options) is not an object"));if(!e.filters)return t(new TypeError("requestDevice error: required member filters is undefined"));if(e.filters.constructor!==[].constructor)return t(new TypeError("requestDevice error: the provided value cannot be converted to a sequence"));return e.filters.every(e=>e.protocolCode&&!e.subclassCode?(t(new TypeError("requestDevice error: subclass code is required")),!1):!(e.subclassCode&&!e.classCode)||(t(new TypeError("requestDevice error: class code is required")),!1))?b.listUSBDevices().then(n=>{if(0===(n=n.filter(r=>this.filterDevice(e,r))).length)return t(new Error("requestDevice error: no devices found"));function i(e){this.replaceAllowedDevice(e)||this.allowedDevices.push(e),r(e)}return this.devicesFound?this.devicesFound(n).then(e=>(e||t(new Error("selected device not found")),i.call(this,e))):i.call(this,n[0])}).catch(e=>{t(new Error(`requestDevice error: ${e}`))}):void 0})}}S.EVENT_DEVICE_CONNECT="connect",S.EVENT_DEVICE_DISCONNECT="disconnect";const D=new S;e.USB=S,e.USBAdapter=w,e.USBAlternateInterface=m,e.USBConfiguration=v,e.USBDevice=I,e.USBEndpoint=_,e.USBInterface=p,e.adapter=b,e.usb=D,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=webusb.umd.js.map