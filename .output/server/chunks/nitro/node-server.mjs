globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/contact.php": {
    "type": "application/x-httpd-php",
    "etag": "\"605-AK6AmdkCEZvMQrEcrfOg3vSuUZs\"",
    "mtime": "2023-09-18T10:21:09.352Z",
    "size": 1541,
    "path": "../public/contact.php"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-09-18T10:21:08.847Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/1.df1988b5.js": {
    "type": "application/javascript",
    "etag": "\"73-EqQTi62vQidLa7QctTt5d8u4IWM\"",
    "mtime": "2023-09-18T10:21:08.499Z",
    "size": 115,
    "path": "../public/_nuxt/1.df1988b5.js"
  },
  "/_nuxt/1.fbeb616c.js": {
    "type": "application/javascript",
    "etag": "\"74-GgtqQ5meDjwtk4ZIThM37ns6YgY\"",
    "mtime": "2023-09-18T10:21:08.495Z",
    "size": 116,
    "path": "../public/_nuxt/1.fbeb616c.js"
  },
  "/_nuxt/2Col.0f423aa2.js": {
    "type": "application/javascript",
    "etag": "\"d17-WoGoQD/KEfeBQSPJRKhwDV7KsSA\"",
    "mtime": "2023-09-18T10:21:08.494Z",
    "size": 3351,
    "path": "../public/_nuxt/2Col.0f423aa2.js"
  },
  "/_nuxt/2Col.9781d44d.js": {
    "type": "application/javascript",
    "etag": "\"1785-DgsHwK/WiR1P4iO7Dm/gw293cQs\"",
    "mtime": "2023-09-18T10:21:08.493Z",
    "size": 6021,
    "path": "../public/_nuxt/2Col.9781d44d.js"
  },
  "/_nuxt/3.375b3a11.js": {
    "type": "application/javascript",
    "etag": "\"73-mnjM2oGn7pa2ZXi8UHSTR/QH+k0\"",
    "mtime": "2023-09-18T10:21:08.492Z",
    "size": 115,
    "path": "../public/_nuxt/3.375b3a11.js"
  },
  "/_nuxt/3Col.abb6e856.js": {
    "type": "application/javascript",
    "etag": "\"e87-XOll3dkgpcAJUasgMNsmEXAQvZI\"",
    "mtime": "2023-09-18T10:21:08.490Z",
    "size": 3719,
    "path": "../public/_nuxt/3Col.abb6e856.js"
  },
  "/_nuxt/3Col.b52fd05a.js": {
    "type": "application/javascript",
    "etag": "\"e7b-SnleNSVn3APoJ3ew+3K1jYZdYOk\"",
    "mtime": "2023-09-18T10:21:08.488Z",
    "size": 3707,
    "path": "../public/_nuxt/3Col.b52fd05a.js"
  },
  "/_nuxt/4Col.122136ef.js": {
    "type": "application/javascript",
    "etag": "\"e07-B5r/b1WsMGGbrO7mn/muSAkckuI\"",
    "mtime": "2023-09-18T10:21:08.488Z",
    "size": 3591,
    "path": "../public/_nuxt/4Col.122136ef.js"
  },
  "/_nuxt/4Col.7c287c5d.js": {
    "type": "application/javascript",
    "etag": "\"e08-tY38Cy6ptKYQyHBWAIVb00ier9k\"",
    "mtime": "2023-09-18T10:21:08.487Z",
    "size": 3592,
    "path": "../public/_nuxt/4Col.7c287c5d.js"
  },
  "/_nuxt/5.96a1cbd7.js": {
    "type": "application/javascript",
    "etag": "\"73-g9TQqHoeHgLGzJso0BscedXgYYY\"",
    "mtime": "2023-09-18T10:21:08.486Z",
    "size": 115,
    "path": "../public/_nuxt/5.96a1cbd7.js"
  },
  "/_nuxt/Blog.3a018250.js": {
    "type": "application/javascript",
    "etag": "\"50a8-usFo4yJGfxqen+mUDNP4/3qx2r4\"",
    "mtime": "2023-09-18T10:21:08.485Z",
    "size": 20648,
    "path": "../public/_nuxt/Blog.3a018250.js"
  },
  "/_nuxt/CallToAction.13c2235d.js": {
    "type": "application/javascript",
    "etag": "\"8a6-r9Fz/hb7IX4/AWNbjtK2rl4Qm+0\"",
    "mtime": "2023-09-18T10:21:08.485Z",
    "size": 2214,
    "path": "../public/_nuxt/CallToAction.13c2235d.js"
  },
  "/_nuxt/CallToAction.980bf599.js": {
    "type": "application/javascript",
    "etag": "\"15b7-drfV2ALcpJLxcG/GJBrimAt0tuI\"",
    "mtime": "2023-09-18T10:21:08.484Z",
    "size": 5559,
    "path": "../public/_nuxt/CallToAction.980bf599.js"
  },
  "/_nuxt/CallToAction.ccbf7d74.js": {
    "type": "application/javascript",
    "etag": "\"1fdf-lue3D5yxuy+w6r/VVNirqbwritc\"",
    "mtime": "2023-09-18T10:21:08.483Z",
    "size": 8159,
    "path": "../public/_nuxt/CallToAction.ccbf7d74.js"
  },
  "/_nuxt/Carousel.f291e9f6.js": {
    "type": "application/javascript",
    "etag": "\"1269-vauS/Bf5fw/BOMdg6F7m4XjdRA8\"",
    "mtime": "2023-09-18T10:21:08.480Z",
    "size": 4713,
    "path": "../public/_nuxt/Carousel.f291e9f6.js"
  },
  "/_nuxt/Cart.392fc0d1.js": {
    "type": "application/javascript",
    "etag": "\"d11-GP/Wa0htCFhNKakhF7+Xv03RRCk\"",
    "mtime": "2023-09-18T10:21:08.479Z",
    "size": 3345,
    "path": "../public/_nuxt/Cart.392fc0d1.js"
  },
  "/_nuxt/Checkout.4c638974.js": {
    "type": "application/javascript",
    "etag": "\"c4c-wpDIsT8JDwJ69jiyq5d5ZQoFfkM\"",
    "mtime": "2023-09-18T10:21:08.477Z",
    "size": 3148,
    "path": "../public/_nuxt/Checkout.4c638974.js"
  },
  "/_nuxt/CircleSlider.4226b153.js": {
    "type": "application/javascript",
    "etag": "\"b49-kPcyUCDePFGLKrvHc/TscQKGyQ8\"",
    "mtime": "2023-09-18T10:21:08.477Z",
    "size": 2889,
    "path": "../public/_nuxt/CircleSlider.4226b153.js"
  },
  "/_nuxt/Classic.0eabbd1c.js": {
    "type": "application/javascript",
    "etag": "\"a1d-rqtjQBNIOuwy+yOcwJg48T86/Yo\"",
    "mtime": "2023-09-18T10:21:08.476Z",
    "size": 2589,
    "path": "../public/_nuxt/Classic.0eabbd1c.js"
  },
  "/_nuxt/Clients.adef802e.js": {
    "type": "application/javascript",
    "etag": "\"1104-sBpMfHmwZRu6pqT4PDvH8UZsoCM\"",
    "mtime": "2023-09-18T10:21:08.476Z",
    "size": 4356,
    "path": "../public/_nuxt/Clients.adef802e.js"
  },
  "/_nuxt/FAQ.feacc5cf.js": {
    "type": "application/javascript",
    "etag": "\"1e28-9mm+oImWeIQTyRhsIY3eU+BmD3c\"",
    "mtime": "2023-09-18T10:21:08.476Z",
    "size": 7720,
    "path": "../public/_nuxt/FAQ.feacc5cf.js"
  },
  "/_nuxt/Footer.072ade23.js": {
    "type": "application/javascript",
    "etag": "\"6e61-gKAFlIGhG+wbvI9C5f79ixz3t3w\"",
    "mtime": "2023-09-18T10:21:08.476Z",
    "size": 28257,
    "path": "../public/_nuxt/Footer.072ade23.js"
  },
  "/_nuxt/Footer.0a7b7b3b.js": {
    "type": "application/javascript",
    "etag": "\"610a-7cZEAyIyvF5bbusuHkH6A/rmiuk\"",
    "mtime": "2023-09-18T10:21:08.475Z",
    "size": 24842,
    "path": "../public/_nuxt/Footer.0a7b7b3b.js"
  },
  "/_nuxt/Footer.1258404f.js": {
    "type": "application/javascript",
    "etag": "\"8416-Py8ruN0UYk8qRWgXQwy+N+ibQdg\"",
    "mtime": "2023-09-18T10:21:08.475Z",
    "size": 33814,
    "path": "../public/_nuxt/Footer.1258404f.js"
  },
  "/_nuxt/Footer.303d48bd.js": {
    "type": "application/javascript",
    "etag": "\"7f4b-KIXksUDwmiD8Y2/c3DmZDyZtW5o\"",
    "mtime": "2023-09-18T10:21:08.475Z",
    "size": 32587,
    "path": "../public/_nuxt/Footer.303d48bd.js"
  },
  "/_nuxt/Footer.5e79a90f.js": {
    "type": "application/javascript",
    "etag": "\"4b3a-UPwEVkGAVnJE0pfTZChbfBJun74\"",
    "mtime": "2023-09-18T10:21:08.475Z",
    "size": 19258,
    "path": "../public/_nuxt/Footer.5e79a90f.js"
  },
  "/_nuxt/Footer.d061c91d.js": {
    "type": "application/javascript",
    "etag": "\"d238-i7fQs0OWWVNXzzFaZuUoKUCAago\"",
    "mtime": "2023-09-18T10:21:08.475Z",
    "size": 53816,
    "path": "../public/_nuxt/Footer.d061c91d.js"
  },
  "/_nuxt/Footer.d9a6486e.js": {
    "type": "application/javascript",
    "etag": "\"81e5-dtFB9EqfwaEEkIFUxNca0W3yHko\"",
    "mtime": "2023-09-18T10:21:08.474Z",
    "size": 33253,
    "path": "../public/_nuxt/Footer.d9a6486e.js"
  },
  "/_nuxt/Footer.e26ddf5b.js": {
    "type": "application/javascript",
    "etag": "\"988f-5CCBaqtFCMZm80j5jw7xnMA4628\"",
    "mtime": "2023-09-18T10:21:08.474Z",
    "size": 39055,
    "path": "../public/_nuxt/Footer.e26ddf5b.js"
  },
  "/_nuxt/Footer.f731315a.js": {
    "type": "application/javascript",
    "etag": "\"2237-CszEq620C4SUbZLqYAHd8UPWce8\"",
    "mtime": "2023-09-18T10:21:08.474Z",
    "size": 8759,
    "path": "../public/_nuxt/Footer.f731315a.js"
  },
  "/_nuxt/Footer.ff6e7069.js": {
    "type": "application/javascript",
    "etag": "\"8ef-8ZKihfmY3mRpWF913WQVBXvt/6Y\"",
    "mtime": "2023-09-18T10:21:08.474Z",
    "size": 2287,
    "path": "../public/_nuxt/Footer.ff6e7069.js"
  },
  "/_nuxt/Form.e5a6acf2.js": {
    "type": "application/javascript",
    "etag": "\"9a6-UuJ/STD9vw1QAAG1u1IyYEd0CzY\"",
    "mtime": "2023-09-18T10:21:08.474Z",
    "size": 2470,
    "path": "../public/_nuxt/Form.e5a6acf2.js"
  },
  "/_nuxt/FrameSlider.a665e3e7.js": {
    "type": "application/javascript",
    "etag": "\"800-4kT7t1zOQFsfOgNYQwBywSQEqdw\"",
    "mtime": "2023-09-18T10:21:08.474Z",
    "size": 2048,
    "path": "../public/_nuxt/FrameSlider.a665e3e7.js"
  },
  "/_nuxt/Header.21b19c51.js": {
    "type": "application/javascript",
    "etag": "\"1ab-IdrsggPOegBZ7CcQydRT5yrpekQ\"",
    "mtime": "2023-09-18T10:21:08.473Z",
    "size": 427,
    "path": "../public/_nuxt/Header.21b19c51.js"
  },
  "/_nuxt/Header.483812f9.js": {
    "type": "application/javascript",
    "etag": "\"1bc-Ksmq0QysaRnkuCMAvOISLUNJTZA\"",
    "mtime": "2023-09-18T10:21:08.473Z",
    "size": 444,
    "path": "../public/_nuxt/Header.483812f9.js"
  },
  "/_nuxt/Header.db83f5b8.js": {
    "type": "application/javascript",
    "etag": "\"1ab-IdrsggPOegBZ7CcQydRT5yrpekQ\"",
    "mtime": "2023-09-18T10:21:08.473Z",
    "size": 427,
    "path": "../public/_nuxt/Header.db83f5b8.js"
  },
  "/_nuxt/ImageOutFrame.7693c472.js": {
    "type": "application/javascript",
    "etag": "\"7a6-2OkP6ZiPHcdUBdwZUoYHg0gqqO4\"",
    "mtime": "2023-09-18T10:21:08.473Z",
    "size": 1958,
    "path": "../public/_nuxt/ImageOutFrame.7693c472.js"
  },
  "/_nuxt/InteractiveCenter.9e7de5ba.js": {
    "type": "application/javascript",
    "etag": "\"a14-CI9ZF1NwqnfAoGg3Elk4+n3RT3M\"",
    "mtime": "2023-09-18T10:21:08.473Z",
    "size": 2580,
    "path": "../public/_nuxt/InteractiveCenter.9e7de5ba.js"
  },
  "/_nuxt/InteractiveCenterHorizontal.5fccc7e6.js": {
    "type": "application/javascript",
    "etag": "\"a5d-uj4cVMKiWmx9Ip+hQm7XxcTrgVk\"",
    "mtime": "2023-09-18T10:21:08.473Z",
    "size": 2653,
    "path": "../public/_nuxt/InteractiveCenterHorizontal.5fccc7e6.js"
  },
  "/_nuxt/LinesTwo.681502ed.js": {
    "type": "application/javascript",
    "etag": "\"ad-RtGCMKboQCz6ngV2FK4U/Bs8Q/k\"",
    "mtime": "2023-09-18T10:21:08.473Z",
    "size": 173,
    "path": "../public/_nuxt/LinesTwo.681502ed.js"
  },
  "/_nuxt/List.3b83df44.js": {
    "type": "application/javascript",
    "etag": "\"78d-M1+FOKgQKn5LZCMDpUJ3zSVAjYI\"",
    "mtime": "2023-09-18T10:21:08.472Z",
    "size": 1933,
    "path": "../public/_nuxt/List.3b83df44.js"
  },
  "/_nuxt/List.95ba2ddb.js": {
    "type": "application/javascript",
    "etag": "\"1cc4-KgwQBgce6rRz9cStUig56yDI2MQ\"",
    "mtime": "2023-09-18T10:21:08.472Z",
    "size": 7364,
    "path": "../public/_nuxt/List.95ba2ddb.js"
  },
  "/_nuxt/Menu.fce35251.js": {
    "type": "application/javascript",
    "etag": "\"25eb-EvcwypGh209JKggjFfjxW96fTEM\"",
    "mtime": "2023-09-18T10:21:08.472Z",
    "size": 9707,
    "path": "../public/_nuxt/Menu.fce35251.js"
  },
  "/_nuxt/Metro.4d949ed9.js": {
    "type": "application/javascript",
    "etag": "\"b45-WWFznFFqZLMA1hBx7mwQte5AMzg\"",
    "mtime": "2023-09-18T10:21:08.472Z",
    "size": 2885,
    "path": "../public/_nuxt/Metro.4d949ed9.js"
  },
  "/_nuxt/ModalVideo.d2142a90.js": {
    "type": "application/javascript",
    "etag": "\"445-Wv4Zhoq7izWPYCRAQl/cC2SzHDI\"",
    "mtime": "2023-09-18T10:21:08.472Z",
    "size": 1093,
    "path": "../public/_nuxt/ModalVideo.d2142a90.js"
  },
  "/_nuxt/ModernGrid.e6c4b303.js": {
    "type": "application/javascript",
    "etag": "\"927-l0+3Cmfl6TcB1hjtTi+Y58kLFgk\"",
    "mtime": "2023-09-18T10:21:08.472Z",
    "size": 2343,
    "path": "../public/_nuxt/ModernGrid.e6c4b303.js"
  },
  "/_nuxt/Navbar.cfa02ab6.js": {
    "type": "application/javascript",
    "etag": "\"1a71-3TZFTKHudsbkV9cJTLVKl5JB5g4\"",
    "mtime": "2023-09-18T10:21:08.472Z",
    "size": 6769,
    "path": "../public/_nuxt/Navbar.cfa02ab6.js"
  },
  "/_nuxt/ParallaxSlider.2711edf2.js": {
    "type": "application/javascript",
    "etag": "\"af7-s3G/E4rCZq4a0JE6ZMTXg1KiMTQ\"",
    "mtime": "2023-09-18T10:21:08.471Z",
    "size": 2807,
    "path": "../public/_nuxt/ParallaxSlider.2711edf2.js"
  },
  "/_nuxt/Product.eafa6753.js": {
    "type": "application/javascript",
    "etag": "\"45cb-KxmEVkqcjzR/cFpTh61SahIGnaM\"",
    "mtime": "2023-09-18T10:21:08.471Z",
    "size": 17867,
    "path": "../public/_nuxt/Product.eafa6753.js"
  },
  "/_nuxt/Services.43bf9edd.js": {
    "type": "application/javascript",
    "etag": "\"5c3-u8x2LJel2W205zt0upEPO1ueJjQ\"",
    "mtime": "2023-09-18T10:21:08.471Z",
    "size": 1475,
    "path": "../public/_nuxt/Services.43bf9edd.js"
  },
  "/_nuxt/ServicesTab.b9acaeaf.js": {
    "type": "application/javascript",
    "etag": "\"11d0-zQjxq5kXr1FsaC9KBAU9Tn2iqGA\"",
    "mtime": "2023-09-18T10:21:08.471Z",
    "size": 4560,
    "path": "../public/_nuxt/ServicesTab.b9acaeaf.js"
  },
  "/_nuxt/StatementSplitter.44923738.js": {
    "type": "application/javascript",
    "etag": "\"17e-wjAMbVwGSAr8at3g7TSMZxCAtsQ\"",
    "mtime": "2023-09-18T10:21:08.470Z",
    "size": 382,
    "path": "../public/_nuxt/StatementSplitter.44923738.js"
  },
  "/_nuxt/Team.6048b7f4.js": {
    "type": "application/javascript",
    "etag": "\"d0e-pu/vG0K714m9zBZ8Yvqjzv01+PA\"",
    "mtime": "2023-09-18T10:21:08.470Z",
    "size": 3342,
    "path": "../public/_nuxt/Team.6048b7f4.js"
  },
  "/_nuxt/Testimonials.825c7dad.js": {
    "type": "application/javascript",
    "etag": "\"f4a-UkFU1z515o+gTTI53koTehQuR8c\"",
    "mtime": "2023-09-18T10:21:08.470Z",
    "size": 3914,
    "path": "../public/_nuxt/Testimonials.825c7dad.js"
  },
  "/_nuxt/Testimonials.83c1b631.js": {
    "type": "application/javascript",
    "etag": "\"26b6-5P6zFxpmNyAlMdJ7yJR6Xa0EEUo\"",
    "mtime": "2023-09-18T10:21:08.470Z",
    "size": 9910,
    "path": "../public/_nuxt/Testimonials.83c1b631.js"
  },
  "/_nuxt/app-data.c5e7f44e.js": {
    "type": "application/javascript",
    "etag": "\"6c-ioxaNO4e2JTwz68CLljdW/RLRMI\"",
    "mtime": "2023-09-18T10:21:08.469Z",
    "size": 108,
    "path": "../public/_nuxt/app-data.c5e7f44e.js"
  },
  "/_nuxt/autoplay.13542af0.js": {
    "type": "application/javascript",
    "etag": "\"bcc-J6IaDE3Gr9cDUT8KY+9feeTvgzw\"",
    "mtime": "2023-09-18T10:21:08.469Z",
    "size": 3020,
    "path": "../public/_nuxt/autoplay.13542af0.js"
  },
  "/_nuxt/circle-star.9631c1b8.js": {
    "type": "application/javascript",
    "etag": "\"83-itwBFISgHJ/pBG8JI9vqB8TVLPM\"",
    "mtime": "2023-09-18T10:21:08.469Z",
    "size": 131,
    "path": "../public/_nuxt/circle-star.9631c1b8.js"
  },
  "/_nuxt/components.fb6c74dd.js": {
    "type": "application/javascript",
    "etag": "\"4dd-3I+3LQ4V8OBq8u+1n/zsh+vgt7s\"",
    "mtime": "2023-09-18T10:21:08.469Z",
    "size": 1245,
    "path": "../public/_nuxt/components.fb6c74dd.js"
  },
  "/_nuxt/correctStylesheetsOrder.78a29917.js": {
    "type": "application/javascript",
    "etag": "\"10a2-eFDU5NlcpI1JyJbx94X7+lQfCIc\"",
    "mtime": "2023-09-18T10:21:08.469Z",
    "size": 4258,
    "path": "../public/_nuxt/correctStylesheetsOrder.78a29917.js"
  },
  "/_nuxt/default-light.591c3cb7.js": {
    "type": "application/javascript",
    "etag": "\"1e8-2sbXNfwgdI0CjTn2LSEeNSxhfzg\"",
    "mtime": "2023-09-18T10:21:08.469Z",
    "size": 488,
    "path": "../public/_nuxt/default-light.591c3cb7.js"
  },
  "/_nuxt/default.77ac55b7.js": {
    "type": "application/javascript",
    "etag": "\"219-hh+t4gw2Oe8QS5RGcN4oPTpxur0\"",
    "mtime": "2023-09-18T10:21:08.469Z",
    "size": 537,
    "path": "../public/_nuxt/default.77ac55b7.js"
  },
  "/_nuxt/entry.468990d5.js": {
    "type": "application/javascript",
    "etag": "\"2bd32-JDX97dzBqAd6mQmh6j42yVsz79Q\"",
    "mtime": "2023-09-18T10:21:08.468Z",
    "size": 179506,
    "path": "../public/_nuxt/entry.468990d5.js"
  },
  "/_nuxt/entry.e4db7f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d9b-UNQPZTmH3D8DFS84lxZbDUnznoA\"",
    "mtime": "2023-09-18T10:21:08.468Z",
    "size": 19867,
    "path": "../public/_nuxt/entry.e4db7f76.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-09-18T10:21:08.468Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.7941ba3f.js": {
    "type": "application/javascript",
    "etag": "\"8d2-p+J9u7VT6ByuSabQd1O3nn2Pq3E\"",
    "mtime": "2023-09-18T10:21:08.468Z",
    "size": 2258,
    "path": "../public/_nuxt/error-404.7941ba3f.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-09-18T10:21:08.468Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.f14ac3cb.js": {
    "type": "application/javascript",
    "etag": "\"751-+6t/stnFL7DeHxb7FzjeoGOgJ4Y\"",
    "mtime": "2023-09-18T10:21:08.467Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.f14ac3cb.js"
  },
  "/_nuxt/error-component.424d8fcb.js": {
    "type": "application/javascript",
    "etag": "\"478-hYGlPTIaFiEd3ZzhcYgdS8XhM6g\"",
    "mtime": "2023-09-18T10:21:08.467Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.424d8fcb.js"
  },
  "/_nuxt/index.030d9167.js": {
    "type": "application/javascript",
    "etag": "\"3af-1vicNBrJKlD1intWpaW1Oi5TpDM\"",
    "mtime": "2023-09-18T10:21:08.467Z",
    "size": 943,
    "path": "../public/_nuxt/index.030d9167.js"
  },
  "/_nuxt/index.04af80db.js": {
    "type": "application/javascript",
    "etag": "\"22d-RY1+VAM0ektb20tm7h5IAcx09LQ\"",
    "mtime": "2023-09-18T10:21:08.467Z",
    "size": 557,
    "path": "../public/_nuxt/index.04af80db.js"
  },
  "/_nuxt/index.103c62c4.js": {
    "type": "application/javascript",
    "etag": "\"378-xn034UW5Z55BBQ46U5ip4NCESCw\"",
    "mtime": "2023-09-18T10:21:08.466Z",
    "size": 888,
    "path": "../public/_nuxt/index.103c62c4.js"
  },
  "/_nuxt/index.1049b6d8.js": {
    "type": "application/javascript",
    "etag": "\"2a1-YVJauKhzUpw+7yZSVR0V2VC4tbs\"",
    "mtime": "2023-09-18T10:21:08.466Z",
    "size": 673,
    "path": "../public/_nuxt/index.1049b6d8.js"
  },
  "/_nuxt/index.11e864e8.js": {
    "type": "application/javascript",
    "etag": "\"379-aGnCTTmggtRvtFYx/cM2AjlUhtw\"",
    "mtime": "2023-09-18T10:21:08.466Z",
    "size": 889,
    "path": "../public/_nuxt/index.11e864e8.js"
  },
  "/_nuxt/index.16e18849.js": {
    "type": "application/javascript",
    "etag": "\"288-d4eKchKSBqGcGAPEkMw6hozwtL4\"",
    "mtime": "2023-09-18T10:21:08.466Z",
    "size": 648,
    "path": "../public/_nuxt/index.16e18849.js"
  },
  "/_nuxt/index.18127a44.js": {
    "type": "application/javascript",
    "etag": "\"246-hyduc7qv8USCzLrES9S0LP5Sdws\"",
    "mtime": "2023-09-18T10:21:08.465Z",
    "size": 582,
    "path": "../public/_nuxt/index.18127a44.js"
  },
  "/_nuxt/index.1ab8d0ce.js": {
    "type": "application/javascript",
    "etag": "\"20a-1q4NAZg17tkM2TvAUtc04YHz7aI\"",
    "mtime": "2023-09-18T10:21:08.465Z",
    "size": 522,
    "path": "../public/_nuxt/index.1ab8d0ce.js"
  },
  "/_nuxt/index.1db05edc.js": {
    "type": "application/javascript",
    "etag": "\"29c-k+3e65orKLLrIvBaXQD8lfgFoPg\"",
    "mtime": "2023-09-18T10:21:08.465Z",
    "size": 668,
    "path": "../public/_nuxt/index.1db05edc.js"
  },
  "/_nuxt/index.20e8e14e.js": {
    "type": "application/javascript",
    "etag": "\"5791-ZqqShHaQQyFk0EEjCvSCqxNNELI\"",
    "mtime": "2023-09-18T10:21:08.465Z",
    "size": 22417,
    "path": "../public/_nuxt/index.20e8e14e.js"
  },
  "/_nuxt/index.21b427f8.js": {
    "type": "application/javascript",
    "etag": "\"254-UmJRZS8+XzCzDMqExNuCAeTlxjk\"",
    "mtime": "2023-09-18T10:21:08.465Z",
    "size": 596,
    "path": "../public/_nuxt/index.21b427f8.js"
  },
  "/_nuxt/index.256340c1.js": {
    "type": "application/javascript",
    "etag": "\"39c-rLZVwVcFkSMo1zpJGeZ0kniuuWk\"",
    "mtime": "2023-09-18T10:21:08.464Z",
    "size": 924,
    "path": "../public/_nuxt/index.256340c1.js"
  },
  "/_nuxt/index.2899a7f8.js": {
    "type": "application/javascript",
    "etag": "\"3cb-EXylpAiP+xXvrwXnBY384eJrhts\"",
    "mtime": "2023-09-18T10:21:08.464Z",
    "size": 971,
    "path": "../public/_nuxt/index.2899a7f8.js"
  },
  "/_nuxt/index.2c5bd43f.js": {
    "type": "application/javascript",
    "etag": "\"36b-tAQXQrDolR+sBfFN2eqMRVDLhBw\"",
    "mtime": "2023-09-18T10:21:08.464Z",
    "size": 875,
    "path": "../public/_nuxt/index.2c5bd43f.js"
  },
  "/_nuxt/index.2f038241.js": {
    "type": "application/javascript",
    "etag": "\"2cf5-y5DypBweT45IH+PuGo6AC5ebMKo\"",
    "mtime": "2023-09-18T10:21:08.464Z",
    "size": 11509,
    "path": "../public/_nuxt/index.2f038241.js"
  },
  "/_nuxt/index.2f606dde.js": {
    "type": "application/javascript",
    "etag": "\"40a-xP3y5bng6k16JBRLyZt/Th0v/+E\"",
    "mtime": "2023-09-18T10:21:08.464Z",
    "size": 1034,
    "path": "../public/_nuxt/index.2f606dde.js"
  },
  "/_nuxt/index.32b8f62c.js": {
    "type": "application/javascript",
    "etag": "\"21c-/APwFLmC46z8bqAUrVlJnGW6vlM\"",
    "mtime": "2023-09-18T10:21:08.463Z",
    "size": 540,
    "path": "../public/_nuxt/index.32b8f62c.js"
  },
  "/_nuxt/index.32d361af.js": {
    "type": "application/javascript",
    "etag": "\"26b-i952ib7ejI96wSoBQ+3rz0cRdGw\"",
    "mtime": "2023-09-18T10:21:08.463Z",
    "size": 619,
    "path": "../public/_nuxt/index.32d361af.js"
  },
  "/_nuxt/index.35331fcb.js": {
    "type": "application/javascript",
    "etag": "\"2a7-r4i9fCu+wYhi8Eej9NkNrQivnbI\"",
    "mtime": "2023-09-18T10:21:08.463Z",
    "size": 679,
    "path": "../public/_nuxt/index.35331fcb.js"
  },
  "/_nuxt/index.35488847.js": {
    "type": "application/javascript",
    "etag": "\"24c-fqcoe+D1VrOMAziB5qafcA5K1eo\"",
    "mtime": "2023-09-18T10:21:08.463Z",
    "size": 588,
    "path": "../public/_nuxt/index.35488847.js"
  },
  "/_nuxt/index.3804d8d1.js": {
    "type": "application/javascript",
    "etag": "\"372-4bcObGebI+mktBohU4xjK6pXR9U\"",
    "mtime": "2023-09-18T10:21:08.463Z",
    "size": 882,
    "path": "../public/_nuxt/index.3804d8d1.js"
  },
  "/_nuxt/index.3fbb6746.js": {
    "type": "application/javascript",
    "etag": "\"1bb-znFOJLb9dx+fzOI9CiQM6DREk/k\"",
    "mtime": "2023-09-18T10:21:08.463Z",
    "size": 443,
    "path": "../public/_nuxt/index.3fbb6746.js"
  },
  "/_nuxt/index.4057579c.js": {
    "type": "application/javascript",
    "etag": "\"255-x+5j9Vv5rpGtoc6WhREIw6EcGoY\"",
    "mtime": "2023-09-18T10:21:08.463Z",
    "size": 597,
    "path": "../public/_nuxt/index.4057579c.js"
  },
  "/_nuxt/index.43b0dfff.js": {
    "type": "application/javascript",
    "etag": "\"2a2-YFazOqa2Pq4iO96y0WGGIA0cQd0\"",
    "mtime": "2023-09-18T10:21:08.462Z",
    "size": 674,
    "path": "../public/_nuxt/index.43b0dfff.js"
  },
  "/_nuxt/index.46e57357.js": {
    "type": "application/javascript",
    "etag": "\"1da-aXb1WAUFxAEB0B/FV4q2gK5dTMk\"",
    "mtime": "2023-09-18T10:21:08.462Z",
    "size": 474,
    "path": "../public/_nuxt/index.46e57357.js"
  },
  "/_nuxt/index.48876733.js": {
    "type": "application/javascript",
    "etag": "\"354-fB8278/VCl6yoohsRPMf0VCSTZM\"",
    "mtime": "2023-09-18T10:21:08.462Z",
    "size": 852,
    "path": "../public/_nuxt/index.48876733.js"
  },
  "/_nuxt/index.4e5229e3.js": {
    "type": "application/javascript",
    "etag": "\"3dc-m9bSWlJR3J5KADHl/alm29nqfpA\"",
    "mtime": "2023-09-18T10:21:08.462Z",
    "size": 988,
    "path": "../public/_nuxt/index.4e5229e3.js"
  },
  "/_nuxt/index.4f39029b.js": {
    "type": "application/javascript",
    "etag": "\"39f-gStyZRJXZYg0PescnoMbmoKbhzI\"",
    "mtime": "2023-09-18T10:21:08.462Z",
    "size": 927,
    "path": "../public/_nuxt/index.4f39029b.js"
  },
  "/_nuxt/index.526afa00.js": {
    "type": "application/javascript",
    "etag": "\"33a-k3I3RDshxO8DoxPcBzZKvpUAYgY\"",
    "mtime": "2023-09-18T10:21:08.462Z",
    "size": 826,
    "path": "../public/_nuxt/index.526afa00.js"
  },
  "/_nuxt/index.56a81f33.js": {
    "type": "application/javascript",
    "etag": "\"413-sqeYFVdZs3GqU9YusC9/K9tflc4\"",
    "mtime": "2023-09-18T10:21:08.461Z",
    "size": 1043,
    "path": "../public/_nuxt/index.56a81f33.js"
  },
  "/_nuxt/index.5759be54.js": {
    "type": "application/javascript",
    "etag": "\"1f8-D331R+wQiVld7OlJKuqPhpb6ViQ\"",
    "mtime": "2023-09-18T10:21:08.461Z",
    "size": 504,
    "path": "../public/_nuxt/index.5759be54.js"
  },
  "/_nuxt/index.5e881268.js": {
    "type": "application/javascript",
    "etag": "\"1fa-Wgts1m/nrxr215meAJz6JWLBDcY\"",
    "mtime": "2023-09-18T10:21:08.461Z",
    "size": 506,
    "path": "../public/_nuxt/index.5e881268.js"
  },
  "/_nuxt/index.5ec6939e.js": {
    "type": "application/javascript",
    "etag": "\"288-+nR2S4xwu+soRP4CfPDWUJ3DLBk\"",
    "mtime": "2023-09-18T10:21:08.461Z",
    "size": 648,
    "path": "../public/_nuxt/index.5ec6939e.js"
  },
  "/_nuxt/index.645d4a07.js": {
    "type": "application/javascript",
    "etag": "\"250-Z6IfSZhUgHPFvky+2IxblvDOzhs\"",
    "mtime": "2023-09-18T10:21:08.461Z",
    "size": 592,
    "path": "../public/_nuxt/index.645d4a07.js"
  },
  "/_nuxt/index.6a33122e.js": {
    "type": "application/javascript",
    "etag": "\"413-rwtgu5Ce31VGyrs/nKemIgi2sKg\"",
    "mtime": "2023-09-18T10:21:08.461Z",
    "size": 1043,
    "path": "../public/_nuxt/index.6a33122e.js"
  },
  "/_nuxt/index.6ec7d072.js": {
    "type": "application/javascript",
    "etag": "\"2a7-KCanlA7OMVjDzoLGt3UJ7Clu2hI\"",
    "mtime": "2023-09-18T10:21:08.460Z",
    "size": 679,
    "path": "../public/_nuxt/index.6ec7d072.js"
  },
  "/_nuxt/index.77339d13.js": {
    "type": "application/javascript",
    "etag": "\"2c2-WfTb6PxjSFL7qzFRiGfcIcoTXWk\"",
    "mtime": "2023-09-18T10:21:08.460Z",
    "size": 706,
    "path": "../public/_nuxt/index.77339d13.js"
  },
  "/_nuxt/index.7aa58170.js": {
    "type": "application/javascript",
    "etag": "\"1a6-mPDMXSoaPcOKyRsdQa//MmftDKQ\"",
    "mtime": "2023-09-18T10:21:08.460Z",
    "size": 422,
    "path": "../public/_nuxt/index.7aa58170.js"
  },
  "/_nuxt/index.7b282401.js": {
    "type": "application/javascript",
    "etag": "\"38c-DaTDrZ06Frc1w0gI+2j2fcN54Nc\"",
    "mtime": "2023-09-18T10:21:08.460Z",
    "size": 908,
    "path": "../public/_nuxt/index.7b282401.js"
  },
  "/_nuxt/index.7cdf20df.js": {
    "type": "application/javascript",
    "etag": "\"2bd-4G0a3Ci3opCsFhiZWMkmpT+KHaE\"",
    "mtime": "2023-09-18T10:21:08.459Z",
    "size": 701,
    "path": "../public/_nuxt/index.7cdf20df.js"
  },
  "/_nuxt/index.8012aded.js": {
    "type": "application/javascript",
    "etag": "\"43c-JQu7eZik7shf663UQda4zVjNWms\"",
    "mtime": "2023-09-18T10:21:08.459Z",
    "size": 1084,
    "path": "../public/_nuxt/index.8012aded.js"
  },
  "/_nuxt/index.81e3d943.js": {
    "type": "application/javascript",
    "etag": "\"227-ZIo04Dqm5CZqcicm8IDXWV77HA8\"",
    "mtime": "2023-09-18T10:21:08.458Z",
    "size": 551,
    "path": "../public/_nuxt/index.81e3d943.js"
  },
  "/_nuxt/index.84d520a1.js": {
    "type": "application/javascript",
    "etag": "\"3d5-R46Pc5PS30vHdbGWAqbEsu0k6mQ\"",
    "mtime": "2023-09-18T10:21:08.458Z",
    "size": 981,
    "path": "../public/_nuxt/index.84d520a1.js"
  },
  "/_nuxt/index.853a61a9.js": {
    "type": "application/javascript",
    "etag": "\"419-bzOkYzLrxErnXPiz+xskrQQhSto\"",
    "mtime": "2023-09-18T10:21:08.457Z",
    "size": 1049,
    "path": "../public/_nuxt/index.853a61a9.js"
  },
  "/_nuxt/index.8ccd224d.js": {
    "type": "application/javascript",
    "etag": "\"38b-YEtN9avdmvYeVKhPGHvqijKtBpE\"",
    "mtime": "2023-09-18T10:21:08.457Z",
    "size": 907,
    "path": "../public/_nuxt/index.8ccd224d.js"
  },
  "/_nuxt/index.911776eb.js": {
    "type": "application/javascript",
    "etag": "\"88f-RY5cxaCyShOOk0eJS0Cql/v4jGg\"",
    "mtime": "2023-09-18T10:21:08.457Z",
    "size": 2191,
    "path": "../public/_nuxt/index.911776eb.js"
  },
  "/_nuxt/index.944913c3.js": {
    "type": "application/javascript",
    "etag": "\"3a0-3SZFiBmZhHOYseZrgFVsT1dbIy8\"",
    "mtime": "2023-09-18T10:21:08.456Z",
    "size": 928,
    "path": "../public/_nuxt/index.944913c3.js"
  },
  "/_nuxt/index.944f588f.js": {
    "type": "application/javascript",
    "etag": "\"297-RUujVNB42pOWZ1hqXBrrMibjfzY\"",
    "mtime": "2023-09-18T10:21:08.456Z",
    "size": 663,
    "path": "../public/_nuxt/index.944f588f.js"
  },
  "/_nuxt/index.97ef9a3b.js": {
    "type": "application/javascript",
    "etag": "\"2db-/QhrC4Bzq+ImTdas5+S7TV1ermw\"",
    "mtime": "2023-09-18T10:21:08.456Z",
    "size": 731,
    "path": "../public/_nuxt/index.97ef9a3b.js"
  },
  "/_nuxt/index.ab5496c7.js": {
    "type": "application/javascript",
    "etag": "\"26a-Im2zhY/50xv51rS8y2NyHXx28JA\"",
    "mtime": "2023-09-18T10:21:08.456Z",
    "size": 618,
    "path": "../public/_nuxt/index.ab5496c7.js"
  },
  "/_nuxt/index.ac49ee34.js": {
    "type": "application/javascript",
    "etag": "\"48b-ssODfWLweI8WWgAZiS1+Mi8YSTs\"",
    "mtime": "2023-09-18T10:21:08.455Z",
    "size": 1163,
    "path": "../public/_nuxt/index.ac49ee34.js"
  },
  "/_nuxt/index.afdea2b9.js": {
    "type": "application/javascript",
    "etag": "\"837-Wjh2ARufaTJo7ILydD5xcGNfi6o\"",
    "mtime": "2023-09-18T10:21:08.455Z",
    "size": 2103,
    "path": "../public/_nuxt/index.afdea2b9.js"
  },
  "/_nuxt/index.b062c00d.js": {
    "type": "application/javascript",
    "etag": "\"34f-+O96QFtkKdkdu2km+Rqpwr6B/00\"",
    "mtime": "2023-09-18T10:21:08.455Z",
    "size": 847,
    "path": "../public/_nuxt/index.b062c00d.js"
  },
  "/_nuxt/index.b1804f81.js": {
    "type": "application/javascript",
    "etag": "\"2a2-haxBQK3b906VZgyz0JciJYhaXms\"",
    "mtime": "2023-09-18T10:21:08.455Z",
    "size": 674,
    "path": "../public/_nuxt/index.b1804f81.js"
  },
  "/_nuxt/index.b64aa7f7.js": {
    "type": "application/javascript",
    "etag": "\"260-6mUF6svyp1cHmcRyJ3FwlEIJv34\"",
    "mtime": "2023-09-18T10:21:08.455Z",
    "size": 608,
    "path": "../public/_nuxt/index.b64aa7f7.js"
  },
  "/_nuxt/index.b68dae30.js": {
    "type": "application/javascript",
    "etag": "\"3b2-NUP4wln7ceh8C+oc6q6H+sxgSf8\"",
    "mtime": "2023-09-18T10:21:08.454Z",
    "size": 946,
    "path": "../public/_nuxt/index.b68dae30.js"
  },
  "/_nuxt/index.bb5908b7.js": {
    "type": "application/javascript",
    "etag": "\"345-Vc/GM5K8BrJG0jj72xwpy8zkb1U\"",
    "mtime": "2023-09-18T10:21:08.454Z",
    "size": 837,
    "path": "../public/_nuxt/index.bb5908b7.js"
  },
  "/_nuxt/index.bbee86bd.js": {
    "type": "application/javascript",
    "etag": "\"279-wOhiI5J5add3ycWO87m8dumJ3wQ\"",
    "mtime": "2023-09-18T10:21:08.453Z",
    "size": 633,
    "path": "../public/_nuxt/index.bbee86bd.js"
  },
  "/_nuxt/index.bdca1a3f.js": {
    "type": "application/javascript",
    "etag": "\"25b-m71Kzr4tV3f6I3s08ZG+q/yEMd0\"",
    "mtime": "2023-09-18T10:21:08.452Z",
    "size": 603,
    "path": "../public/_nuxt/index.bdca1a3f.js"
  },
  "/_nuxt/index.bf744505.js": {
    "type": "application/javascript",
    "etag": "\"3a5-IdxJoUk+NolYNmTWlfagG0Pbowo\"",
    "mtime": "2023-09-18T10:21:08.452Z",
    "size": 933,
    "path": "../public/_nuxt/index.bf744505.js"
  },
  "/_nuxt/index.d0bcdd43.js": {
    "type": "application/javascript",
    "etag": "\"288-HdtAzDzGoSrZCxV9HWXGnu8SnZs\"",
    "mtime": "2023-09-18T10:21:08.451Z",
    "size": 648,
    "path": "../public/_nuxt/index.d0bcdd43.js"
  },
  "/_nuxt/index.d170e3db.js": {
    "type": "application/javascript",
    "etag": "\"281-0ra+an3dg9NdOWsmzceajpYW2dM\"",
    "mtime": "2023-09-18T10:21:08.451Z",
    "size": 641,
    "path": "../public/_nuxt/index.d170e3db.js"
  },
  "/_nuxt/index.d247935e.js": {
    "type": "application/javascript",
    "etag": "\"288-SYxxaMYvotXWdjeSYtyoERXo6Ow\"",
    "mtime": "2023-09-18T10:21:08.451Z",
    "size": 648,
    "path": "../public/_nuxt/index.d247935e.js"
  },
  "/_nuxt/index.d40af7eb.js": {
    "type": "application/javascript",
    "etag": "\"2a7-eWfyEI9zkcqNfElS8oLi4pyFYjk\"",
    "mtime": "2023-09-18T10:21:08.451Z",
    "size": 679,
    "path": "../public/_nuxt/index.d40af7eb.js"
  },
  "/_nuxt/index.d4d2ff85.js": {
    "type": "application/javascript",
    "etag": "\"1c5-qkCBi0Ruu/qSa/sX9X+WdtaNTgc\"",
    "mtime": "2023-09-18T10:21:08.450Z",
    "size": 453,
    "path": "../public/_nuxt/index.d4d2ff85.js"
  },
  "/_nuxt/index.d541dc88.js": {
    "type": "application/javascript",
    "etag": "\"288-hhBdaPKAl0i5xhTDMmhHRCrcMnQ\"",
    "mtime": "2023-09-18T10:21:08.450Z",
    "size": 648,
    "path": "../public/_nuxt/index.d541dc88.js"
  },
  "/_nuxt/index.d6a508ad.js": {
    "type": "application/javascript",
    "etag": "\"288-ruOU+KWj7DCa+UaZPLrxIQsNNsQ\"",
    "mtime": "2023-09-18T10:21:08.450Z",
    "size": 648,
    "path": "../public/_nuxt/index.d6a508ad.js"
  },
  "/_nuxt/index.d730469f.js": {
    "type": "application/javascript",
    "etag": "\"1f2-/2zdxL+SNHLSJ461PSj24A9Sh/8\"",
    "mtime": "2023-09-18T10:21:08.450Z",
    "size": 498,
    "path": "../public/_nuxt/index.d730469f.js"
  },
  "/_nuxt/index.dc5a9d14.js": {
    "type": "application/javascript",
    "etag": "\"270-wv84GXwJMczgWaWtXLdlyTphM94\"",
    "mtime": "2023-09-18T10:21:08.449Z",
    "size": 624,
    "path": "../public/_nuxt/index.dc5a9d14.js"
  },
  "/_nuxt/index.dc63d6cf.js": {
    "type": "application/javascript",
    "etag": "\"27c-G/eDTmOjzM2jssNsfvb+O1290cg\"",
    "mtime": "2023-09-18T10:21:08.449Z",
    "size": 636,
    "path": "../public/_nuxt/index.dc63d6cf.js"
  },
  "/_nuxt/index.dee12479.js": {
    "type": "application/javascript",
    "etag": "\"24d-kp1z8K+mZ6AJpLj6+KEQRF8puBo\"",
    "mtime": "2023-09-18T10:21:08.449Z",
    "size": 589,
    "path": "../public/_nuxt/index.dee12479.js"
  },
  "/_nuxt/index.e4729d2c.js": {
    "type": "application/javascript",
    "etag": "\"373-MpRJfEa285gNN7ZF3NUon4XD7VU\"",
    "mtime": "2023-09-18T10:21:08.448Z",
    "size": 883,
    "path": "../public/_nuxt/index.e4729d2c.js"
  },
  "/_nuxt/index.ee88c1e4.js": {
    "type": "application/javascript",
    "etag": "\"3dd-+t8N9t36YZ3YI8L4Mjz08IWPLAU\"",
    "mtime": "2023-09-18T10:21:08.448Z",
    "size": 989,
    "path": "../public/_nuxt/index.ee88c1e4.js"
  },
  "/_nuxt/index.eedbfe07.js": {
    "type": "application/javascript",
    "etag": "\"4ac-i7VGnzWp2HeI4FUkR+7ic+JVtLE\"",
    "mtime": "2023-09-18T10:21:08.448Z",
    "size": 1196,
    "path": "../public/_nuxt/index.eedbfe07.js"
  },
  "/_nuxt/index.f305bc11.js": {
    "type": "application/javascript",
    "etag": "\"269-RbFBbmryaZLny8FeQIw7Ll7h8Co\"",
    "mtime": "2023-09-18T10:21:08.448Z",
    "size": 617,
    "path": "../public/_nuxt/index.f305bc11.js"
  },
  "/_nuxt/index.f5cb5224.js": {
    "type": "application/javascript",
    "etag": "\"2a2-GaKN5Hra8ZNaYQovKmwDVwtAwgw\"",
    "mtime": "2023-09-18T10:21:08.448Z",
    "size": 674,
    "path": "../public/_nuxt/index.f5cb5224.js"
  },
  "/_nuxt/index.f6047113.js": {
    "type": "application/javascript",
    "etag": "\"272-QY9f2MKmi2bKyuWSdmbfUgEKNAY\"",
    "mtime": "2023-09-18T10:21:08.447Z",
    "size": 626,
    "path": "../public/_nuxt/index.f6047113.js"
  },
  "/_nuxt/index.f6ca643e.js": {
    "type": "application/javascript",
    "etag": "\"285-uSU8WLQ9BciA99w8llu4uF5Z9R8\"",
    "mtime": "2023-09-18T10:21:08.447Z",
    "size": 645,
    "path": "../public/_nuxt/index.f6ca643e.js"
  },
  "/_nuxt/initIsotope.c6ab8537.js": {
    "type": "application/javascript",
    "etag": "\"258-VjNT00Wjwv/e+7iWNdhOVa8yC0Y\"",
    "mtime": "2023-09-18T10:21:08.447Z",
    "size": 600,
    "path": "../public/_nuxt/initIsotope.c6ab8537.js"
  },
  "/_nuxt/isInView.af5ef8ec.js": {
    "type": "application/javascript",
    "etag": "\"1a4-QlE5mfP4dyerHFjJZ/EXUb7pYGA\"",
    "mtime": "2023-09-18T10:21:08.446Z",
    "size": 420,
    "path": "../public/_nuxt/isInView.af5ef8ec.js"
  },
  "/_nuxt/loadBackgroudImages.6dc4ef71.js": {
    "type": "application/javascript",
    "etag": "\"af-Sn1QX0+JduYp+gMCrOctMm7aDuk\"",
    "mtime": "2023-09-18T10:21:08.446Z",
    "size": 175,
    "path": "../public/_nuxt/loadBackgroudImages.6dc4ef71.js"
  },
  "/_nuxt/logo-light.95de334a.js": {
    "type": "application/javascript",
    "etag": "\"77-bq+xyjaM641XK0v4cSiX9JtNREA\"",
    "mtime": "2023-09-18T10:21:08.446Z",
    "size": 119,
    "path": "../public/_nuxt/logo-light.95de334a.js"
  },
  "/_nuxt/marketing-agency-customjs.bb00222e.js": {
    "type": "application/javascript",
    "etag": "\"19a-tTbC61p5K6qUTLBESsZYn5fsPX0\"",
    "mtime": "2023-09-18T10:21:08.446Z",
    "size": 410,
    "path": "../public/_nuxt/marketing-agency-customjs.bb00222e.js"
  },
  "/_nuxt/navigation.83477dde.js": {
    "type": "application/javascript",
    "etag": "\"c4b-dpYDOVE+m4Hz6/Eyn8lucJcLSeY\"",
    "mtime": "2023-09-18T10:21:08.446Z",
    "size": 3147,
    "path": "../public/_nuxt/navigation.83477dde.js"
  },
  "/_nuxt/nuxt-link.7f66a425.js": {
    "type": "application/javascript",
    "etag": "\"10d6-5cN32gmsUPSC0nSGlu56FLLOCLs\"",
    "mtime": "2023-09-18T10:21:08.445Z",
    "size": 4310,
    "path": "../public/_nuxt/nuxt-link.7f66a425.js"
  },
  "/_nuxt/pagination.9c339bb6.js": {
    "type": "application/javascript",
    "etag": "\"1d5a-91L/RBG57ctff8aUKTCYVMU0vzo\"",
    "mtime": "2023-09-18T10:21:08.445Z",
    "size": 7514,
    "path": "../public/_nuxt/pagination.9c339bb6.js"
  },
  "/_nuxt/parallax.8cb99607.js": {
    "type": "application/javascript",
    "etag": "\"794-+bFbAewUFca6XzP4XTvjOzlnAOE\"",
    "mtime": "2023-09-18T10:21:08.445Z",
    "size": 1940,
    "path": "../public/_nuxt/parallax.8cb99607.js"
  },
  "/_nuxt/parallaxie.76ecf7c8.js": {
    "type": "application/javascript",
    "etag": "\"1fd-QYVXQu46PiIrjbcDA04FhaP5FwM\"",
    "mtime": "2023-09-18T10:21:08.444Z",
    "size": 509,
    "path": "../public/_nuxt/parallaxie.76ecf7c8.js"
  },
  "/_nuxt/preview.fcd75b17.js": {
    "type": "application/javascript",
    "etag": "\"1b3-9mn3QlM0m+Jz4LZT17RPCo6VKr0\"",
    "mtime": "2023-09-18T10:21:08.444Z",
    "size": 435,
    "path": "../public/_nuxt/preview.fcd75b17.js"
  },
  "/_nuxt/showcase-script.157f33fa.js": {
    "type": "application/javascript",
    "etag": "\"169c9-IQgs/BxjUUtIViOpDdAfrmV7X3E\"",
    "mtime": "2023-09-18T10:21:08.444Z",
    "size": 92617,
    "path": "../public/_nuxt/showcase-script.157f33fa.js"
  },
  "/_nuxt/showcases-light.8f10dae8.js": {
    "type": "application/javascript",
    "etag": "\"274-jJNiFkzu3CEyu3CcILCCfO/eWZU\"",
    "mtime": "2023-09-18T10:21:08.444Z",
    "size": 628,
    "path": "../public/_nuxt/showcases-light.8f10dae8.js"
  },
  "/_nuxt/showcases.a2a87f16.js": {
    "type": "application/javascript",
    "etag": "\"25d-wHH9Z/94ftwUQzo/5XkhQRau1OI\"",
    "mtime": "2023-09-18T10:21:08.443Z",
    "size": 605,
    "path": "../public/_nuxt/showcases.a2a87f16.js"
  },
  "/_nuxt/sq1.826691ee.js": {
    "type": "application/javascript",
    "etag": "\"76-l6oD36FavYX+m6/q2xqDf7nzb4E\"",
    "mtime": "2023-09-18T10:21:08.443Z",
    "size": 118,
    "path": "../public/_nuxt/sq1.826691ee.js"
  },
  "/_nuxt/sq2.8d26bb41.js": {
    "type": "application/javascript",
    "etag": "\"76-yS8yj/zjKox8DWlCGky5If9zVlE\"",
    "mtime": "2023-09-18T10:21:08.443Z",
    "size": 118,
    "path": "../public/_nuxt/sq2.8d26bb41.js"
  },
  "/_nuxt/swiper-slide.a0b6a4d9.js": {
    "type": "application/javascript",
    "etag": "\"143e7-Zx5GYyfm9M1CmerfHYBMlTSba50\"",
    "mtime": "2023-09-18T10:21:08.442Z",
    "size": 82919,
    "path": "../public/_nuxt/swiper-slide.a0b6a4d9.js"
  },
  "/assets/js/ScrollSmoother.min.js": {
    "type": "application/javascript",
    "etag": "\"2f9c-eFL7pS4SZ21OtkNgMsF+MwLumrM\"",
    "mtime": "2023-09-18T10:21:09.357Z",
    "size": 12188,
    "path": "../public/assets/js/ScrollSmoother.min.js"
  },
  "/assets/js/ScrollTrigger.min.js": {
    "type": "application/javascript",
    "etag": "\"9e9f-l/CfE95w87pevtcL2bdGUfmpGv8\"",
    "mtime": "2023-09-18T10:21:09.357Z",
    "size": 40607,
    "path": "../public/assets/js/ScrollTrigger.min.js"
  },
  "/assets/js/TweenMax.min.js": {
    "type": "application/javascript",
    "etag": "\"1c4c9-aGKZeOrxYX1XkCSTP4ZKtU7lJ3Q\"",
    "mtime": "2023-09-18T10:21:09.357Z",
    "size": 115913,
    "path": "../public/assets/js/TweenMax.min.js"
  },
  "/assets/js/charming.min.js": {
    "type": "application/javascript",
    "etag": "\"20f-LpiyDGw563uPwm86pDNBDWAZb/8\"",
    "mtime": "2023-09-18T10:21:09.357Z",
    "size": 527,
    "path": "../public/assets/js/charming.min.js"
  },
  "/assets/js/countdown.js": {
    "type": "application/javascript",
    "etag": "\"863-0RVVvwOnswGLeDtyDqCkh9mMpy0\"",
    "mtime": "2023-09-18T10:21:09.357Z",
    "size": 2147,
    "path": "../public/assets/js/countdown.js"
  },
  "/assets/js/gsap.min.js": {
    "type": "application/javascript",
    "etag": "\"f3a3-ZL0q+vmMP75jqmJOqdf5HaPFiEE\"",
    "mtime": "2023-09-18T10:21:09.356Z",
    "size": 62371,
    "path": "../public/assets/js/gsap.min.js"
  },
  "/assets/js/imagesloaded.pkgd.min.js": {
    "type": "application/javascript",
    "etag": "\"1547-bgFCCIki8JtmbXJdg/UyWPYKzOE\"",
    "mtime": "2023-09-18T10:21:09.356Z",
    "size": 5447,
    "path": "../public/assets/js/imagesloaded.pkgd.min.js"
  },
  "/assets/js/isotope.pkgd.min.js": {
    "type": "application/javascript",
    "etag": "\"8a80-FMf1nnPSqZqmiMJEOpqbJKy/9Dw\"",
    "mtime": "2023-09-18T10:21:09.355Z",
    "size": 35456,
    "path": "../public/assets/js/isotope.pkgd.min.js"
  },
  "/assets/js/map.js": {
    "type": "application/javascript",
    "etag": "\"f16-IQeKxBR27To+sQYDVUXeZL0xz8E\"",
    "mtime": "2023-09-18T10:21:09.354Z",
    "size": 3862,
    "path": "../public/assets/js/map.js"
  },
  "/assets/js/parallax.min.js": {
    "type": "application/javascript",
    "etag": "\"2486-j84+ubRMUHHtxGcdkhMpcrcFv+o\"",
    "mtime": "2023-09-18T10:21:09.354Z",
    "size": 9350,
    "path": "../public/assets/js/parallax.min.js"
  },
  "/assets/js/plugins.js": {
    "type": "application/javascript",
    "etag": "\"1990a-IRzKu1SArjqhNRHoDwTvZjGxKpw\"",
    "mtime": "2023-09-18T10:21:09.354Z",
    "size": 104714,
    "path": "../public/assets/js/plugins.js"
  },
  "/assets/js/price-range.js": {
    "type": "application/javascript",
    "etag": "\"c65-UodJiXe6HO1qq17PlkH8TVqaHP0\"",
    "mtime": "2023-09-18T10:21:09.353Z",
    "size": 3173,
    "path": "../public/assets/js/price-range.js"
  },
  "/assets/js/scripts.js": {
    "type": "application/javascript",
    "etag": "\"68-EOtqQ4XtEgDfYBuxszi/duM6uEM\"",
    "mtime": "2023-09-18T10:21:09.353Z",
    "size": 104,
    "path": "../public/assets/js/scripts.js"
  },
  "/assets/js/splitting.min.js": {
    "type": "application/javascript",
    "etag": "\"eaf-9J6elkWMN0s/mT1ULINLLHqdIEo\"",
    "mtime": "2023-09-18T10:21:09.353Z",
    "size": 3759,
    "path": "../public/assets/js/splitting.min.js"
  },
  "/assets/js/stars.js": {
    "type": "application/javascript",
    "etag": "\"7b2-3t7J+2hF3aUGap8n2BIRUTGobY0\"",
    "mtime": "2023-09-18T10:21:09.352Z",
    "size": 1970,
    "path": "../public/assets/js/stars.js"
  },
  "/landing-preview/css/preview-style.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"900-GO+xDUbTy1dTz8P4BGKYiakJcl0\"",
    "mtime": "2023-09-18T10:21:08.847Z",
    "size": 2304,
    "path": "../public/landing-preview/css/preview-style.css"
  },
  "/landing-preview/img/abstact-bg.png": {
    "type": "image/png",
    "etag": "\"dc84-Lz384942+j6zmbaq4sUnt8/bDt0\"",
    "mtime": "2023-09-18T10:21:08.846Z",
    "size": 56452,
    "path": "../public/landing-preview/img/abstact-bg.png"
  },
  "/landing-preview/img/star.svg": {
    "type": "image/svg+xml",
    "etag": "\"24e-LL5SLblgGRgqEs5xhswWYV1KBSc\"",
    "mtime": "2023-09-18T10:21:08.806Z",
    "size": 590,
    "path": "../public/landing-preview/img/star.svg"
  },
  "/landing-preview/js/parallax.min.js": {
    "type": "application/javascript",
    "etag": "\"2486-j84+ubRMUHHtxGcdkhMpcrcFv+o\"",
    "mtime": "2023-09-18T10:21:08.806Z",
    "size": 9350,
    "path": "../public/landing-preview/js/parallax.min.js"
  },
  "/landing-preview/scss/preview-style.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"b1f-kCMkLqBilAys6h5s8cRLTTLr8kM\"",
    "mtime": "2023-09-18T10:21:08.806Z",
    "size": 2847,
    "path": "../public/landing-preview/scss/preview-style.scss"
  },
  "/dark/assets/css/base.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c4-Bd+UPFwEzRzml9t9zXk0C+cai+M\"",
    "mtime": "2023-09-18T10:21:09.351Z",
    "size": 452,
    "path": "../public/dark/assets/css/base.css"
  },
  "/dark/assets/css/plugins.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"523-VQddTC6n6wVJmeTvkarnbeqINco\"",
    "mtime": "2023-09-18T10:21:09.344Z",
    "size": 1315,
    "path": "../public/dark/assets/css/plugins.css"
  },
  "/dark/assets/css/style.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2fd91-tJTQhtUfEuhTGyRPQEqSkJHquz4\"",
    "mtime": "2023-09-18T10:21:09.344Z",
    "size": 195985,
    "path": "../public/dark/assets/css/style.css"
  },
  "/assets/js/imgReveal/TweenMax.min.js": {
    "type": "application/javascript",
    "etag": "\"1c4c9-aGKZeOrxYX1XkCSTP4ZKtU7lJ3Q\"",
    "mtime": "2023-09-18T10:21:09.356Z",
    "size": 115913,
    "path": "../public/assets/js/imgReveal/TweenMax.min.js"
  },
  "/assets/js/imgReveal/charming.min.js": {
    "type": "application/javascript",
    "etag": "\"20f-LpiyDGw563uPwm86pDNBDWAZb/8\"",
    "mtime": "2023-09-18T10:21:09.356Z",
    "size": 527,
    "path": "../public/assets/js/imgReveal/charming.min.js"
  },
  "/assets/js/imgReveal/imagesloaded.pkgd.min.js": {
    "type": "application/javascript",
    "etag": "\"1547-bgFCCIki8JtmbXJdg/UyWPYKzOE\"",
    "mtime": "2023-09-18T10:21:09.355Z",
    "size": 5447,
    "path": "../public/assets/js/imgReveal/imagesloaded.pkgd.min.js"
  },
  "/dark/assets/imgs/LOGO.png": {
    "type": "image/png",
    "etag": "\"13267-JGB6QZoO92itErpQpBhzZh9ys0c\"",
    "mtime": "2023-09-18T10:21:09.329Z",
    "size": 78439,
    "path": "../public/dark/assets/imgs/LOGO.png"
  },
  "/dark/assets/imgs/LOGOwhite.png": {
    "type": "image/png",
    "etag": "\"a47c-Ek6J7PNfhuwimlS6XQ7jYEUv94s\"",
    "mtime": "2023-09-18T10:21:09.328Z",
    "size": 42108,
    "path": "../public/dark/assets/imgs/LOGOwhite.png"
  },
  "/dark/assets/imgs/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"13e-iXDEO5dKBbgIChVUFTuoi4a90u0\"",
    "mtime": "2023-09-18T10:21:09.122Z",
    "size": 318,
    "path": "../public/dark/assets/imgs/favicon.ico"
  },
  "/dark/assets/imgs/logo-dark.png": {
    "type": "image/png",
    "etag": "\"1066-Dhvn1ItO10zHvHQ7wxsddVH+P54\"",
    "mtime": "2023-09-18T10:21:09.113Z",
    "size": 4198,
    "path": "../public/dark/assets/imgs/logo-dark.png"
  },
  "/dark/assets/imgs/logo-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"201-SakJPN1qKqbzb25oksSFX6e/194\"",
    "mtime": "2023-09-18T10:21:09.113Z",
    "size": 513,
    "path": "../public/dark/assets/imgs/logo-dark.svg"
  },
  "/dark/assets/imgs/logo-light.png": {
    "type": "image/png",
    "etag": "\"ef1-LtfkRZW+5IncOCQXFJwdMYWgD0k\"",
    "mtime": "2023-09-18T10:21:09.113Z",
    "size": 3825,
    "path": "../public/dark/assets/imgs/logo-light.png"
  },
  "/dark/assets/imgs/logo-light.svg": {
    "type": "image/svg+xml",
    "etag": "\"20b-dg/XJDCaKkexm+QdVMIbMbp8sW0\"",
    "mtime": "2023-09-18T10:21:09.113Z",
    "size": 523,
    "path": "../public/dark/assets/imgs/logo-light.svg"
  },
  "/dark/assets/imgs/vlogo-light.png": {
    "type": "image/png",
    "etag": "\"1a0c-oOnoa32bW736bCwxmVygoM8HxsI\"",
    "mtime": "2023-09-18T10:21:08.973Z",
    "size": 6668,
    "path": "../public/dark/assets/imgs/vlogo-light.png"
  },
  "/dark/assets/fonts/FontAwesome.otf": {
    "type": "font/otf",
    "etag": "\"20e98-BIcHvFKsS2VjqqODv+hmCg3ckIw\"",
    "mtime": "2023-09-18T10:21:09.342Z",
    "size": 134808,
    "path": "../public/dark/assets/fonts/FontAwesome.otf"
  },
  "/dark/assets/fonts/Pe-icon-7-stroke.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"e538-bAn5sBovip1nIpKy1B2U5jnq8T0\"",
    "mtime": "2023-09-18T10:21:09.342Z",
    "size": 58680,
    "path": "../public/dark/assets/fonts/Pe-icon-7-stroke.eot"
  },
  "/dark/assets/fonts/Pe-icon-7-stroke.ttf": {
    "type": "font/ttf",
    "etag": "\"e470-6NIauRh38AQvvutyvq9xymWVueg\"",
    "mtime": "2023-09-18T10:21:09.341Z",
    "size": 58480,
    "path": "../public/dark/assets/fonts/Pe-icon-7-stroke.ttf"
  },
  "/dark/assets/fonts/Pe-icon-7-stroke.woff": {
    "type": "font/woff",
    "etag": "\"e4bc-flRLsRt2VZmNtvMkxhL3/78Ktm4\"",
    "mtime": "2023-09-18T10:21:09.341Z",
    "size": 58556,
    "path": "../public/dark/assets/fonts/Pe-icon-7-stroke.woff"
  },
  "/dark/assets/fonts/fa-brands-400.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"20c96-0f/WNAzb9yiQzLZ/MgFer8XfUac\"",
    "mtime": "2023-09-18T10:21:09.341Z",
    "size": 134294,
    "path": "../public/dark/assets/fonts/fa-brands-400.eot"
  },
  "/dark/assets/fonts/fa-brands-400.ttf": {
    "type": "font/ttf",
    "etag": "\"20b64-irkHCD/sqqKp7JOyf4hK10VzcFw\"",
    "mtime": "2023-09-18T10:21:09.340Z",
    "size": 133988,
    "path": "../public/dark/assets/fonts/fa-brands-400.ttf"
  },
  "/dark/assets/fonts/fa-brands-400.woff": {
    "type": "font/woff",
    "etag": "\"15f84-Hh8Cv6ieF5/i3RODJzuIEqqHNBg\"",
    "mtime": "2023-09-18T10:21:09.339Z",
    "size": 89988,
    "path": "../public/dark/assets/fonts/fa-brands-400.woff"
  },
  "/dark/assets/fonts/fa-brands-400.woff2": {
    "type": "font/woff2",
    "etag": "\"12bc0-BhPH67pV7kfvMCwPd2YyRpL4mac\"",
    "mtime": "2023-09-18T10:21:09.339Z",
    "size": 76736,
    "path": "../public/dark/assets/fonts/fa-brands-400.woff2"
  },
  "/dark/assets/fonts/fa-regular-400.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"84f2-Zw+wHkkwrkb+jW0rderSiPVOjmE\"",
    "mtime": "2023-09-18T10:21:09.338Z",
    "size": 34034,
    "path": "../public/dark/assets/fonts/fa-regular-400.eot"
  },
  "/dark/assets/fonts/fa-regular-400.ttf": {
    "type": "font/ttf",
    "etag": "\"83c8-w0rNaBjfbba+QaLjMYhnZdYB8us\"",
    "mtime": "2023-09-18T10:21:09.338Z",
    "size": 33736,
    "path": "../public/dark/assets/fonts/fa-regular-400.ttf"
  },
  "/dark/assets/fonts/fa-regular-400.woff": {
    "type": "font/woff",
    "etag": "\"3f94-OtT05LH7Pt7j1Lol5s3+0vC4ilQ\"",
    "mtime": "2023-09-18T10:21:09.337Z",
    "size": 16276,
    "path": "../public/dark/assets/fonts/fa-regular-400.woff"
  },
  "/dark/assets/fonts/fa-regular-400.woff2": {
    "type": "font/woff2",
    "etag": "\"33a8-E1F1Ka/6OeJYXFkayubcM2tqqRc\"",
    "mtime": "2023-09-18T10:21:09.337Z",
    "size": 13224,
    "path": "../public/dark/assets/fonts/fa-regular-400.woff2"
  },
  "/dark/assets/fonts/fa-solid-900.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"31916-6oRcWb7kpcbbd0uNgGD1ZBt4muk\"",
    "mtime": "2023-09-18T10:21:09.337Z",
    "size": 203030,
    "path": "../public/dark/assets/fonts/fa-solid-900.eot"
  },
  "/dark/assets/fonts/fa-solid-900.ttf": {
    "type": "font/ttf",
    "etag": "\"317f8-64kU9rF5e0XuCIPmCJ2SaV2flEE\"",
    "mtime": "2023-09-18T10:21:09.336Z",
    "size": 202744,
    "path": "../public/dark/assets/fonts/fa-solid-900.ttf"
  },
  "/dark/assets/fonts/fa-solid-900.woff": {
    "type": "font/woff",
    "etag": "\"18d10-oirNdpfzbn1MwxqFPHDndurFS7E\"",
    "mtime": "2023-09-18T10:21:09.335Z",
    "size": 101648,
    "path": "../public/dark/assets/fonts/fa-solid-900.woff"
  },
  "/dark/assets/fonts/fa-solid-900.woff2": {
    "type": "font/woff2",
    "etag": "\"131bc-DMssgUp+TKEsR3iCFjOAnLA2Hqo\"",
    "mtime": "2023-09-18T10:21:09.334Z",
    "size": 78268,
    "path": "../public/dark/assets/fonts/fa-solid-900.woff2"
  },
  "/dark/assets/fonts/fontawesome-webfont.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"2876e-2YDCzoc9xDr0YNTVctRBMESZ9AA\"",
    "mtime": "2023-09-18T10:21:09.334Z",
    "size": 165742,
    "path": "../public/dark/assets/fonts/fontawesome-webfont.eot"
  },
  "/dark/assets/fonts/fontawesome-webfont.ttf": {
    "type": "font/ttf",
    "etag": "\"286ac-E7HqtlqYPHpzvHmXxHnWaUP3xss\"",
    "mtime": "2023-09-18T10:21:09.333Z",
    "size": 165548,
    "path": "../public/dark/assets/fonts/fontawesome-webfont.ttf"
  },
  "/dark/assets/fonts/fontawesome-webfont.woff": {
    "type": "font/woff",
    "etag": "\"17ee8-KLeCJAs+dtuCThLAJ1SpcxoWdSc\"",
    "mtime": "2023-09-18T10:21:09.332Z",
    "size": 98024,
    "path": "../public/dark/assets/fonts/fontawesome-webfont.woff"
  },
  "/dark/assets/fonts/fontawesome-webfont.woff2": {
    "type": "font/woff2",
    "etag": "\"12d68-1vSMun0Hb7by/Wupk6dbncHsvww\"",
    "mtime": "2023-09-18T10:21:09.331Z",
    "size": 77160,
    "path": "../public/dark/assets/fonts/fontawesome-webfont.woff2"
  },
  "/dark/assets/fonts/ionicons.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1d794-YVMuieIS+N0WujHz6881wKczQDU\"",
    "mtime": "2023-09-18T10:21:09.331Z",
    "size": 120724,
    "path": "../public/dark/assets/fonts/ionicons.eot"
  },
  "/dark/assets/fonts/ionicons.ttf": {
    "type": "font/ttf",
    "etag": "\"2e05c-GwoN4ISQWUaiAwDKjDVIZd7EZ2Q\"",
    "mtime": "2023-09-18T10:21:09.330Z",
    "size": 188508,
    "path": "../public/dark/assets/fonts/ionicons.ttf"
  },
  "/dark/assets/fonts/ionicons.woff": {
    "type": "font/woff",
    "etag": "\"10940-5GgZ6GOkZ1HWIsEZDE6Kg+vCBhI\"",
    "mtime": "2023-09-18T10:21:09.329Z",
    "size": 67904,
    "path": "../public/dark/assets/fonts/ionicons.woff"
  },
  "/dark/assets/scss/style.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"651-WoyzIwNyt09Vyj+H2MURo88Xwn8\"",
    "mtime": "2023-09-18T10:21:08.851Z",
    "size": 1617,
    "path": "../public/dark/assets/scss/style.scss"
  },
  "/landing-preview/img/demos/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"adfb-HDhc5IYBJiVJ1A4poD4YhXPn4HM\"",
    "mtime": "2023-09-18T10:21:08.846Z",
    "size": 44539,
    "path": "../public/landing-preview/img/demos/01.jpg"
  },
  "/landing-preview/img/demos/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"c608-9T6biEx7ZSFwIjitIjZRrdBskP4\"",
    "mtime": "2023-09-18T10:21:08.845Z",
    "size": 50696,
    "path": "../public/landing-preview/img/demos/02.jpg"
  },
  "/landing-preview/img/demos/03.jpg": {
    "type": "image/jpeg",
    "etag": "\"b01f-HoVZt0QnSW55R2/6ocw3hWUGHKQ\"",
    "mtime": "2023-09-18T10:21:08.845Z",
    "size": 45087,
    "path": "../public/landing-preview/img/demos/03.jpg"
  },
  "/landing-preview/img/demos/04.jpg": {
    "type": "image/jpeg",
    "etag": "\"861a-ZpGuCVFTIjWDwHCMWxdh09+D888\"",
    "mtime": "2023-09-18T10:21:08.845Z",
    "size": 34330,
    "path": "../public/landing-preview/img/demos/04.jpg"
  },
  "/landing-preview/img/demos/05.jpg": {
    "type": "image/jpeg",
    "etag": "\"9838-wqCXasi/HH2bc6L644yCk5h3rVQ\"",
    "mtime": "2023-09-18T10:21:08.844Z",
    "size": 38968,
    "path": "../public/landing-preview/img/demos/05.jpg"
  },
  "/landing-preview/img/demos/06.jpg": {
    "type": "image/jpeg",
    "etag": "\"9f79-tM1L/u/k8JDz2X9Q5HD1IPLOmUM\"",
    "mtime": "2023-09-18T10:21:08.844Z",
    "size": 40825,
    "path": "../public/landing-preview/img/demos/06.jpg"
  },
  "/landing-preview/img/demos/07.jpg": {
    "type": "image/jpeg",
    "etag": "\"a9e5-ooAf8qVYMKi7Za2NnNbHcKXyjKM\"",
    "mtime": "2023-09-18T10:21:08.844Z",
    "size": 43493,
    "path": "../public/landing-preview/img/demos/07.jpg"
  },
  "/landing-preview/img/demos/08.jpg": {
    "type": "image/jpeg",
    "etag": "\"9956-jQU2nCIJ6AaxnbFiuWVX84PJqpw\"",
    "mtime": "2023-09-18T10:21:08.843Z",
    "size": 39254,
    "path": "../public/landing-preview/img/demos/08.jpg"
  },
  "/landing-preview/img/demos/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"c307-eJiN/1f9BJT+65TNiUF8GmvgSs4\"",
    "mtime": "2023-09-18T10:21:08.843Z",
    "size": 49927,
    "path": "../public/landing-preview/img/demos/1.jpg"
  },
  "/landing-preview/img/demos/1.png": {
    "type": "image/png",
    "etag": "\"12f45-0e618uYCp0UhdUjB1/X2afopm4U\"",
    "mtime": "2023-09-18T10:21:08.842Z",
    "size": 77637,
    "path": "../public/landing-preview/img/demos/1.png"
  },
  "/landing-preview/img/demos/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"c55b-92t9vL7NYhl9rZlO7Rp35gfAZT8\"",
    "mtime": "2023-09-18T10:21:08.842Z",
    "size": 50523,
    "path": "../public/landing-preview/img/demos/2.jpg"
  },
  "/landing-preview/img/demos/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"b0f0-yj6Q0tqCNRcodxhc+g69hUkj8eo\"",
    "mtime": "2023-09-18T10:21:08.841Z",
    "size": 45296,
    "path": "../public/landing-preview/img/demos/3.jpg"
  },
  "/landing-preview/img/demos/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"87ad-pUbgOPt/NVWIc41Yx0pUocOaC+o\"",
    "mtime": "2023-09-18T10:21:08.841Z",
    "size": 34733,
    "path": "../public/landing-preview/img/demos/4.jpg"
  },
  "/landing-preview/img/demos/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"ae89-7SEpU311JQ7zJ1j124se4Op2gw0\"",
    "mtime": "2023-09-18T10:21:08.840Z",
    "size": 44681,
    "path": "../public/landing-preview/img/demos/5.jpg"
  },
  "/landing-preview/img/demos/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1313d-2NocySiGbYImMjbPMjwc94C2z7Q\"",
    "mtime": "2023-09-18T10:21:08.840Z",
    "size": 78141,
    "path": "../public/landing-preview/img/demos/6.jpg"
  },
  "/landing-preview/img/demos/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"13ab1-AO1Q9/eLnnR5+SKhvdFuApNnXuc\"",
    "mtime": "2023-09-18T10:21:08.839Z",
    "size": 80561,
    "path": "../public/landing-preview/img/demos/7.jpg"
  },
  "/landing-preview/img/demos/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"9a87-Xx50eFknMrj/aGOOupIMNaaufys\"",
    "mtime": "2023-09-18T10:21:08.839Z",
    "size": 39559,
    "path": "../public/landing-preview/img/demos/8.jpg"
  },
  "/landing-preview/img/demos/m01.jpg": {
    "type": "image/jpeg",
    "etag": "\"23baa-Glb+3QEliD01txZSsNtCCj0w7n8\"",
    "mtime": "2023-09-18T10:21:08.839Z",
    "size": 146346,
    "path": "../public/landing-preview/img/demos/m01.jpg"
  },
  "/landing-preview/img/demos/m1.jpg": {
    "type": "image/jpeg",
    "etag": "\"22c9d-1fepjo1Vv5j5JtEMsoHmvhv+pdc\"",
    "mtime": "2023-09-18T10:21:08.838Z",
    "size": 142493,
    "path": "../public/landing-preview/img/demos/m1.jpg"
  },
  "/landing-preview/img/demos/more.jpg": {
    "type": "image/jpeg",
    "etag": "\"782c-m6OIoI23q+ZLbVa1HttLEKImrh0\"",
    "mtime": "2023-09-18T10:21:08.837Z",
    "size": 30764,
    "path": "../public/landing-preview/img/demos/more.jpg"
  },
  "/landing-preview/img/demos/s04.jpg": {
    "type": "image/jpeg",
    "etag": "\"4c6b-AH9Rh9vfce8DkWWOlcwDa6bErpo\"",
    "mtime": "2023-09-18T10:21:08.836Z",
    "size": 19563,
    "path": "../public/landing-preview/img/demos/s04.jpg"
  },
  "/landing-preview/img/demos/s05.jpg": {
    "type": "image/jpeg",
    "etag": "\"58f5-N5EwDp/IMI3T829CghJaTVWDI3o\"",
    "mtime": "2023-09-18T10:21:08.836Z",
    "size": 22773,
    "path": "../public/landing-preview/img/demos/s05.jpg"
  },
  "/landing-preview/img/demos/s1.jpg": {
    "type": "image/jpeg",
    "etag": "\"643c-uLTiSaLU5imdSRHbjWhe9Z8epTU\"",
    "mtime": "2023-09-18T10:21:08.836Z",
    "size": 25660,
    "path": "../public/landing-preview/img/demos/s1.jpg"
  },
  "/landing-preview/img/demos/s2.jpg": {
    "type": "image/jpeg",
    "etag": "\"5a24-8s+PTd/fLst0FLwI1Lt4eQV7khM\"",
    "mtime": "2023-09-18T10:21:08.836Z",
    "size": 23076,
    "path": "../public/landing-preview/img/demos/s2.jpg"
  },
  "/landing-preview/img/demos/s3.jpg": {
    "type": "image/jpeg",
    "etag": "\"5a49-llpr/c/zItJrlRB3RTO5vL/rTc8\"",
    "mtime": "2023-09-18T10:21:08.835Z",
    "size": 23113,
    "path": "../public/landing-preview/img/demos/s3.jpg"
  },
  "/landing-preview/img/demos/s4.jpg": {
    "type": "image/jpeg",
    "etag": "\"4821-M4ENzvPZl87F/tKZK50rU8UZWfc\"",
    "mtime": "2023-09-18T10:21:08.835Z",
    "size": 18465,
    "path": "../public/landing-preview/img/demos/s4.jpg"
  },
  "/landing-preview/img/demos/s5.jpg": {
    "type": "image/jpeg",
    "etag": "\"5a79-ykx12fyGQ1V7A/ak04j8mh9A8m8\"",
    "mtime": "2023-09-18T10:21:08.834Z",
    "size": 23161,
    "path": "../public/landing-preview/img/demos/s5.jpg"
  },
  "/landing-preview/img/header/graph.png": {
    "type": "image/png",
    "etag": "\"2770-KgWimX5EXuyWa8VxQQJPov0ET3M\"",
    "mtime": "2023-09-18T10:21:08.834Z",
    "size": 10096,
    "path": "../public/landing-preview/img/header/graph.png"
  },
  "/landing-preview/img/header/lines-1.webp": {
    "type": "image/webp",
    "etag": "\"654-2rcA7cF6+h8a4vib9y1C6DJklq8\"",
    "mtime": "2023-09-18T10:21:08.834Z",
    "size": 1620,
    "path": "../public/landing-preview/img/header/lines-1.webp"
  },
  "/landing-preview/img/header/overlay.webp": {
    "type": "image/webp",
    "etag": "\"3a50-jjRkfvEKV+/nr3DIUC870zwe8NA\"",
    "mtime": "2023-09-18T10:21:08.834Z",
    "size": 14928,
    "path": "../public/landing-preview/img/header/overlay.webp"
  },
  "/landing-preview/img/pages/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d9e6-UmrkB45Ej6j/bdNFes7SDYV8eFo\"",
    "mtime": "2023-09-18T10:21:08.833Z",
    "size": 121318,
    "path": "../public/landing-preview/img/pages/01.jpg"
  },
  "/landing-preview/img/pages/010.jpg": {
    "type": "image/jpeg",
    "etag": "\"1360c-qmuWC2spaJUSEKKXLS0YlmauHmI\"",
    "mtime": "2023-09-18T10:21:08.833Z",
    "size": 79372,
    "path": "../public/landing-preview/img/pages/010.jpg"
  },
  "/landing-preview/img/pages/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"13cf8-cJx+UrX1H30kJNXE2d9EmF8ICi0\"",
    "mtime": "2023-09-18T10:21:08.832Z",
    "size": 81144,
    "path": "../public/landing-preview/img/pages/02.jpg"
  },
  "/landing-preview/img/pages/03.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e29a-58/wh4ajJrcW9Bc+4jD6PJPbRYk\"",
    "mtime": "2023-09-18T10:21:08.831Z",
    "size": 123546,
    "path": "../public/landing-preview/img/pages/03.jpg"
  },
  "/landing-preview/img/pages/04.jpg": {
    "type": "image/jpeg",
    "etag": "\"ce70-c+HWO9PPFXtdgPgvlLwurCTgs80\"",
    "mtime": "2023-09-18T10:21:08.830Z",
    "size": 52848,
    "path": "../public/landing-preview/img/pages/04.jpg"
  },
  "/landing-preview/img/pages/05.jpg": {
    "type": "image/jpeg",
    "etag": "\"12910-RCVhCK8kD285wbtMoA0H678HOJM\"",
    "mtime": "2023-09-18T10:21:08.829Z",
    "size": 76048,
    "path": "../public/landing-preview/img/pages/05.jpg"
  },
  "/landing-preview/img/pages/06.jpg": {
    "type": "image/jpeg",
    "etag": "\"125fe-hTxlu3aFB+yH3E6ovdTw7Jrmjuo\"",
    "mtime": "2023-09-18T10:21:08.829Z",
    "size": 75262,
    "path": "../public/landing-preview/img/pages/06.jpg"
  },
  "/landing-preview/img/pages/07.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c353-sD5Mn9594WwBB3uXEQQAmXThFpU\"",
    "mtime": "2023-09-18T10:21:08.828Z",
    "size": 115539,
    "path": "../public/landing-preview/img/pages/07.jpg"
  },
  "/landing-preview/img/pages/08.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b0b3-VPEPwsozs6sVgPSyQHuMdUNwFUA\"",
    "mtime": "2023-09-18T10:21:08.827Z",
    "size": 110771,
    "path": "../public/landing-preview/img/pages/08.jpg"
  },
  "/landing-preview/img/pages/09.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a307-UDHGdqhcJkbOVLKIWaU78Yrvix8\"",
    "mtime": "2023-09-18T10:21:08.826Z",
    "size": 107271,
    "path": "../public/landing-preview/img/pages/09.jpg"
  },
  "/landing-preview/img/pages/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e83c-6AWzP9IAMFTiXMeQQv7s/3NU+vA\"",
    "mtime": "2023-09-18T10:21:08.826Z",
    "size": 124988,
    "path": "../public/landing-preview/img/pages/1.jpg"
  },
  "/landing-preview/img/pages/10.jpg": {
    "type": "image/jpeg",
    "etag": "\"14848-NVKtojF5oyio8eBFPQoXltTV1Lo\"",
    "mtime": "2023-09-18T10:21:08.825Z",
    "size": 84040,
    "path": "../public/landing-preview/img/pages/10.jpg"
  },
  "/landing-preview/img/pages/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"15bd0-3sCmf8AC20zEBdoIADBtIrE2aqU\"",
    "mtime": "2023-09-18T10:21:08.824Z",
    "size": 89040,
    "path": "../public/landing-preview/img/pages/2.jpg"
  },
  "/landing-preview/img/pages/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ecce-v8NwTUAQ3NG8H7S79LJ470du+dw\"",
    "mtime": "2023-09-18T10:21:08.824Z",
    "size": 126158,
    "path": "../public/landing-preview/img/pages/3.jpg"
  },
  "/landing-preview/img/pages/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"e2aa-eVDCpkRnQbFr6b3eEf1fTkQAWr8\"",
    "mtime": "2023-09-18T10:21:08.823Z",
    "size": 58026,
    "path": "../public/landing-preview/img/pages/4.jpg"
  },
  "/landing-preview/img/pages/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"13178-R/CTVuCdY0xJjFq2RQnLUNJx+IU\"",
    "mtime": "2023-09-18T10:21:08.822Z",
    "size": 78200,
    "path": "../public/landing-preview/img/pages/5.jpg"
  },
  "/landing-preview/img/pages/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"12fee-fvqHnw4MvnprdD0aouAPCcjRtCc\"",
    "mtime": "2023-09-18T10:21:08.822Z",
    "size": 77806,
    "path": "../public/landing-preview/img/pages/6.jpg"
  },
  "/landing-preview/img/pages/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c476-FqoctNhhdMS8RA0Gh9cxDFJsv1o\"",
    "mtime": "2023-09-18T10:21:08.821Z",
    "size": 115830,
    "path": "../public/landing-preview/img/pages/7.jpg"
  },
  "/landing-preview/img/pages/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"1aa27-14PYegFKkoo4H/K+8uJB9aFM5E0\"",
    "mtime": "2023-09-18T10:21:08.821Z",
    "size": 109095,
    "path": "../public/landing-preview/img/pages/8.jpg"
  },
  "/landing-preview/img/pages/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d1b3-Mh+saCYXGg/aQNBh45tbEyptqGY\"",
    "mtime": "2023-09-18T10:21:08.820Z",
    "size": 119219,
    "path": "../public/landing-preview/img/pages/9.jpg"
  },
  "/landing-preview/img/shop/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"6abcc-/W5euyIWH2cmg2Th3HNow1t0AhA\"",
    "mtime": "2023-09-18T10:21:08.819Z",
    "size": 437196,
    "path": "../public/landing-preview/img/shop/01.jpg"
  },
  "/landing-preview/img/shop/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"8772d-g6jsMP9uHhuM7xe5AMuULXDAlh0\"",
    "mtime": "2023-09-18T10:21:08.817Z",
    "size": 554797,
    "path": "../public/landing-preview/img/shop/02.jpg"
  },
  "/landing-preview/img/shop/03.jpg": {
    "type": "image/jpeg",
    "etag": "\"23e70-fBcB35t/jWevqGgp3ARkihlq1oI\"",
    "mtime": "2023-09-18T10:21:08.815Z",
    "size": 147056,
    "path": "../public/landing-preview/img/shop/03.jpg"
  },
  "/landing-preview/img/shop/04.jpg": {
    "type": "image/jpeg",
    "etag": "\"274fe-RyZ2iNABsQwQFnkLrx6hMdd+0NQ\"",
    "mtime": "2023-09-18T10:21:08.814Z",
    "size": 161022,
    "path": "../public/landing-preview/img/shop/04.jpg"
  },
  "/landing-preview/img/shop/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"6e9c6-fehU+TJW7Fmny4YT4LAbjfS2Od8\"",
    "mtime": "2023-09-18T10:21:08.811Z",
    "size": 453062,
    "path": "../public/landing-preview/img/shop/1.jpg"
  },
  "/landing-preview/img/shop/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"90a80-s+9kzp+Z40X604LHxR2Q3aHjP6s\"",
    "mtime": "2023-09-18T10:21:08.810Z",
    "size": 592512,
    "path": "../public/landing-preview/img/shop/2.jpg"
  },
  "/landing-preview/img/shop/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"23819-GaHLg+t+SZt/6TU9UOUvQhzTFcM\"",
    "mtime": "2023-09-18T10:21:08.808Z",
    "size": 145433,
    "path": "../public/landing-preview/img/shop/3.jpg"
  },
  "/landing-preview/img/shop/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"28274-sZITZCU6rBmyRZ7uFS0UrjbjFDc\"",
    "mtime": "2023-09-18T10:21:08.807Z",
    "size": 164468,
    "path": "../public/landing-preview/img/shop/4.jpg"
  },
  "/light/assets/css/base.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c4-Bd+UPFwEzRzml9t9zXk0C+cai+M\"",
    "mtime": "2023-09-18T10:21:08.805Z",
    "size": 452,
    "path": "../public/light/assets/css/base.css"
  },
  "/light/assets/css/plugins.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"523-VQddTC6n6wVJmeTvkarnbeqINco\"",
    "mtime": "2023-09-18T10:21:08.800Z",
    "size": 1315,
    "path": "../public/light/assets/css/plugins.css"
  },
  "/light/assets/css/style.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2fe9d-cYNh4Psc9o0Mu/xSdugUBZ1iWLw\"",
    "mtime": "2023-09-18T10:21:08.799Z",
    "size": 196253,
    "path": "../public/light/assets/css/style.css"
  },
  "/light/assets/fonts/FontAwesome.otf": {
    "type": "font/otf",
    "etag": "\"20e98-BIcHvFKsS2VjqqODv+hmCg3ckIw\"",
    "mtime": "2023-09-18T10:21:08.798Z",
    "size": 134808,
    "path": "../public/light/assets/fonts/FontAwesome.otf"
  },
  "/light/assets/fonts/Pe-icon-7-stroke.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"e538-bAn5sBovip1nIpKy1B2U5jnq8T0\"",
    "mtime": "2023-09-18T10:21:08.798Z",
    "size": 58680,
    "path": "../public/light/assets/fonts/Pe-icon-7-stroke.eot"
  },
  "/light/assets/fonts/Pe-icon-7-stroke.ttf": {
    "type": "font/ttf",
    "etag": "\"e470-6NIauRh38AQvvutyvq9xymWVueg\"",
    "mtime": "2023-09-18T10:21:08.798Z",
    "size": 58480,
    "path": "../public/light/assets/fonts/Pe-icon-7-stroke.ttf"
  },
  "/light/assets/fonts/Pe-icon-7-stroke.woff": {
    "type": "font/woff",
    "etag": "\"e4bc-flRLsRt2VZmNtvMkxhL3/78Ktm4\"",
    "mtime": "2023-09-18T10:21:08.797Z",
    "size": 58556,
    "path": "../public/light/assets/fonts/Pe-icon-7-stroke.woff"
  },
  "/light/assets/fonts/fa-brands-400.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"20c96-0f/WNAzb9yiQzLZ/MgFer8XfUac\"",
    "mtime": "2023-09-18T10:21:08.796Z",
    "size": 134294,
    "path": "../public/light/assets/fonts/fa-brands-400.eot"
  },
  "/light/assets/fonts/fa-brands-400.ttf": {
    "type": "font/ttf",
    "etag": "\"20b64-irkHCD/sqqKp7JOyf4hK10VzcFw\"",
    "mtime": "2023-09-18T10:21:08.795Z",
    "size": 133988,
    "path": "../public/light/assets/fonts/fa-brands-400.ttf"
  },
  "/light/assets/fonts/fa-brands-400.woff": {
    "type": "font/woff",
    "etag": "\"15f84-Hh8Cv6ieF5/i3RODJzuIEqqHNBg\"",
    "mtime": "2023-09-18T10:21:08.794Z",
    "size": 89988,
    "path": "../public/light/assets/fonts/fa-brands-400.woff"
  },
  "/light/assets/fonts/fa-brands-400.woff2": {
    "type": "font/woff2",
    "etag": "\"12bc0-BhPH67pV7kfvMCwPd2YyRpL4mac\"",
    "mtime": "2023-09-18T10:21:08.794Z",
    "size": 76736,
    "path": "../public/light/assets/fonts/fa-brands-400.woff2"
  },
  "/light/assets/fonts/fa-regular-400.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"84f2-Zw+wHkkwrkb+jW0rderSiPVOjmE\"",
    "mtime": "2023-09-18T10:21:08.793Z",
    "size": 34034,
    "path": "../public/light/assets/fonts/fa-regular-400.eot"
  },
  "/light/assets/fonts/fa-regular-400.ttf": {
    "type": "font/ttf",
    "etag": "\"83c8-w0rNaBjfbba+QaLjMYhnZdYB8us\"",
    "mtime": "2023-09-18T10:21:08.793Z",
    "size": 33736,
    "path": "../public/light/assets/fonts/fa-regular-400.ttf"
  },
  "/light/assets/fonts/fa-regular-400.woff": {
    "type": "font/woff",
    "etag": "\"3f94-OtT05LH7Pt7j1Lol5s3+0vC4ilQ\"",
    "mtime": "2023-09-18T10:21:08.793Z",
    "size": 16276,
    "path": "../public/light/assets/fonts/fa-regular-400.woff"
  },
  "/light/assets/fonts/fa-regular-400.woff2": {
    "type": "font/woff2",
    "etag": "\"33a8-E1F1Ka/6OeJYXFkayubcM2tqqRc\"",
    "mtime": "2023-09-18T10:21:08.792Z",
    "size": 13224,
    "path": "../public/light/assets/fonts/fa-regular-400.woff2"
  },
  "/light/assets/fonts/fa-solid-900.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"31916-6oRcWb7kpcbbd0uNgGD1ZBt4muk\"",
    "mtime": "2023-09-18T10:21:08.792Z",
    "size": 203030,
    "path": "../public/light/assets/fonts/fa-solid-900.eot"
  },
  "/light/assets/fonts/fa-solid-900.ttf": {
    "type": "font/ttf",
    "etag": "\"317f8-64kU9rF5e0XuCIPmCJ2SaV2flEE\"",
    "mtime": "2023-09-18T10:21:08.791Z",
    "size": 202744,
    "path": "../public/light/assets/fonts/fa-solid-900.ttf"
  },
  "/light/assets/fonts/fa-solid-900.woff": {
    "type": "font/woff",
    "etag": "\"18d10-oirNdpfzbn1MwxqFPHDndurFS7E\"",
    "mtime": "2023-09-18T10:21:08.790Z",
    "size": 101648,
    "path": "../public/light/assets/fonts/fa-solid-900.woff"
  },
  "/light/assets/fonts/fa-solid-900.woff2": {
    "type": "font/woff2",
    "etag": "\"131bc-DMssgUp+TKEsR3iCFjOAnLA2Hqo\"",
    "mtime": "2023-09-18T10:21:08.790Z",
    "size": 78268,
    "path": "../public/light/assets/fonts/fa-solid-900.woff2"
  },
  "/light/assets/fonts/fontawesome-webfont.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"2876e-2YDCzoc9xDr0YNTVctRBMESZ9AA\"",
    "mtime": "2023-09-18T10:21:08.789Z",
    "size": 165742,
    "path": "../public/light/assets/fonts/fontawesome-webfont.eot"
  },
  "/light/assets/fonts/fontawesome-webfont.ttf": {
    "type": "font/ttf",
    "etag": "\"286ac-E7HqtlqYPHpzvHmXxHnWaUP3xss\"",
    "mtime": "2023-09-18T10:21:08.788Z",
    "size": 165548,
    "path": "../public/light/assets/fonts/fontawesome-webfont.ttf"
  },
  "/light/assets/fonts/fontawesome-webfont.woff": {
    "type": "font/woff",
    "etag": "\"17ee8-KLeCJAs+dtuCThLAJ1SpcxoWdSc\"",
    "mtime": "2023-09-18T10:21:08.787Z",
    "size": 98024,
    "path": "../public/light/assets/fonts/fontawesome-webfont.woff"
  },
  "/light/assets/fonts/fontawesome-webfont.woff2": {
    "type": "font/woff2",
    "etag": "\"12d68-1vSMun0Hb7by/Wupk6dbncHsvww\"",
    "mtime": "2023-09-18T10:21:08.787Z",
    "size": 77160,
    "path": "../public/light/assets/fonts/fontawesome-webfont.woff2"
  },
  "/light/assets/fonts/ionicons.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1d794-YVMuieIS+N0WujHz6881wKczQDU\"",
    "mtime": "2023-09-18T10:21:08.786Z",
    "size": 120724,
    "path": "../public/light/assets/fonts/ionicons.eot"
  },
  "/light/assets/fonts/ionicons.ttf": {
    "type": "font/ttf",
    "etag": "\"2e05c-GwoN4ISQWUaiAwDKjDVIZd7EZ2Q\"",
    "mtime": "2023-09-18T10:21:08.786Z",
    "size": 188508,
    "path": "../public/light/assets/fonts/ionicons.ttf"
  },
  "/light/assets/fonts/ionicons.woff": {
    "type": "font/woff",
    "etag": "\"10940-5GgZ6GOkZ1HWIsEZDE6Kg+vCBhI\"",
    "mtime": "2023-09-18T10:21:08.785Z",
    "size": 67904,
    "path": "../public/light/assets/fonts/ionicons.woff"
  },
  "/light/assets/imgs/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"13e-iXDEO5dKBbgIChVUFTuoi4a90u0\"",
    "mtime": "2023-09-18T10:21:08.748Z",
    "size": 318,
    "path": "../public/light/assets/imgs/favicon.ico"
  },
  "/light/assets/imgs/logo-dark.png": {
    "type": "image/png",
    "etag": "\"1066-Dhvn1ItO10zHvHQ7wxsddVH+P54\"",
    "mtime": "2023-09-18T10:21:08.739Z",
    "size": 4198,
    "path": "../public/light/assets/imgs/logo-dark.png"
  },
  "/light/assets/imgs/logo-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"201-SakJPN1qKqbzb25oksSFX6e/194\"",
    "mtime": "2023-09-18T10:21:08.739Z",
    "size": 513,
    "path": "../public/light/assets/imgs/logo-dark.svg"
  },
  "/light/assets/imgs/logo-light.png": {
    "type": "image/png",
    "etag": "\"ef1-LtfkRZW+5IncOCQXFJwdMYWgD0k\"",
    "mtime": "2023-09-18T10:21:08.738Z",
    "size": 3825,
    "path": "../public/light/assets/imgs/logo-light.png"
  },
  "/light/assets/imgs/logo-light.svg": {
    "type": "image/svg+xml",
    "etag": "\"20b-dg/XJDCaKkexm+QdVMIbMbp8sW0\"",
    "mtime": "2023-09-18T10:21:08.738Z",
    "size": 523,
    "path": "../public/light/assets/imgs/logo-light.svg"
  },
  "/light/assets/imgs/vlogo-light.png": {
    "type": "image/png",
    "etag": "\"1a0c-oOnoa32bW736bCwxmVygoM8HxsI\"",
    "mtime": "2023-09-18T10:21:08.597Z",
    "size": 6668,
    "path": "../public/light/assets/imgs/vlogo-light.png"
  },
  "/light/assets/scss/style.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"651-WoyzIwNyt09Vyj+H2MURo88Xwn8\"",
    "mtime": "2023-09-18T10:21:08.530Z",
    "size": 1617,
    "path": "../public/light/assets/scss/style.scss"
  },
  "/showcase/assets/js/anime.min.js": {
    "type": "application/javascript",
    "etag": "\"3874-JAE8zQoJtcP++UlehOTynY2nc6s\"",
    "mtime": "2023-09-18T10:21:08.514Z",
    "size": 14452,
    "path": "../public/showcase/assets/js/anime.min.js"
  },
  "/showcase/assets/js/demo.js": {
    "type": "application/javascript",
    "etag": "\"25d0-JlHIxEP2MTtIIXfYGOK/P5E1+io\"",
    "mtime": "2023-09-18T10:21:08.514Z",
    "size": 9680,
    "path": "../public/showcase/assets/js/demo.js"
  },
  "/showcase/assets/js/imagesloaded.pkgd.min.js": {
    "type": "application/javascript",
    "etag": "\"1547-bgFCCIki8JtmbXJdg/UyWPYKzOE\"",
    "mtime": "2023-09-18T10:21:08.513Z",
    "size": 5447,
    "path": "../public/showcase/assets/js/imagesloaded.pkgd.min.js"
  },
  "/showcase/assets/js/showcase1.js": {
    "type": "application/javascript",
    "etag": "\"3f483-F4cBQH7Dds1BRnMDnRXiTPEl57c\"",
    "mtime": "2023-09-18T10:21:08.512Z",
    "size": 259203,
    "path": "../public/showcase/assets/js/showcase1.js"
  },
  "/showcase/assets/js/showcases.js": {
    "type": "application/javascript",
    "etag": "\"a75-TcZa2B1Y0aJmtseFQklFuaAL3rI\"",
    "mtime": "2023-09-18T10:21:08.509Z",
    "size": 2677,
    "path": "../public/showcase/assets/js/showcases.js"
  },
  "/dark/assets/css/components/_cursor.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"174b-1RQGpa6btJGK/fO9iLTpZDdlFyo\"",
    "mtime": "2023-09-18T10:21:09.351Z",
    "size": 5963,
    "path": "../public/dark/assets/css/components/_cursor.css"
  },
  "/dark/assets/css/components/_helper.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f4a-jNDNb6soGKhdfsWyE9lwSVuJ2zU\"",
    "mtime": "2023-09-18T10:21:09.351Z",
    "size": 20298,
    "path": "../public/dark/assets/css/components/_helper.css"
  },
  "/dark/assets/css/components/_overlay.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"86d-LyOkIH8AKm43UFNBwKvDMaJyUWU\"",
    "mtime": "2023-09-18T10:21:09.351Z",
    "size": 2157,
    "path": "../public/dark/assets/css/components/_overlay.css"
  },
  "/dark/assets/css/layout/_awards.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3cc-mxXgnVQJ4u3dEVHVstDOnBCpvfQ\"",
    "mtime": "2023-09-18T10:21:09.350Z",
    "size": 972,
    "path": "../public/dark/assets/css/layout/_awards.css"
  },
  "/dark/assets/css/layout/_brand.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c9c-HZMMgKUCU+/RKgtsCoDgeQY5m84\"",
    "mtime": "2023-09-18T10:21:09.350Z",
    "size": 3228,
    "path": "../public/dark/assets/css/layout/_brand.css"
  },
  "/dark/assets/css/layout/_footer.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c6-cULNPFYyo62ddNWJq95nkbtetmY\"",
    "mtime": "2023-09-18T10:21:09.350Z",
    "size": 966,
    "path": "../public/dark/assets/css/layout/_footer.css"
  },
  "/dark/assets/css/layout/_header.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a4-18MoeaqHW8WSDGoObH1xcqhYbGs\"",
    "mtime": "2023-09-18T10:21:09.350Z",
    "size": 2212,
    "path": "../public/dark/assets/css/layout/_header.css"
  },
  "/dark/assets/css/layout/_price.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b2-EF7wnu7O81VPAplmY09qUxFYYrM\"",
    "mtime": "2023-09-18T10:21:09.349Z",
    "size": 178,
    "path": "../public/dark/assets/css/layout/_price.css"
  },
  "/dark/assets/css/layout/_shop.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a5-Ho4Z0SE7k9q3F2IufZQbmf39Uis\"",
    "mtime": "2023-09-18T10:21:09.349Z",
    "size": 2213,
    "path": "../public/dark/assets/css/layout/_shop.css"
  },
  "/dark/assets/css/layout/_video.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"219-CyrX6elSQtRom6CYoeZhCAUq8SE\"",
    "mtime": "2023-09-18T10:21:09.349Z",
    "size": 537,
    "path": "../public/dark/assets/css/layout/_video.css"
  },
  "/dark/assets/css/plugins/YouTubePopUp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c66-s0kjbNRPb62IfQL3QYPbDb78zbM\"",
    "mtime": "2023-09-18T10:21:09.349Z",
    "size": 3174,
    "path": "../public/dark/assets/css/plugins/YouTubePopUp.css"
  },
  "/dark/assets/css/plugins/animate.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4242-Hm0B96sph8sp+OEfL7rjHy5K2Mg\"",
    "mtime": "2023-09-18T10:21:09.348Z",
    "size": 16962,
    "path": "../public/dark/assets/css/plugins/animate.min.css"
  },
  "/dark/assets/css/plugins/bootstrap.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"27bd2-3dyXWyoggVItkIvVtwwl4Q+Heh0\"",
    "mtime": "2023-09-18T10:21:09.348Z",
    "size": 162770,
    "path": "../public/dark/assets/css/plugins/bootstrap.min.css"
  },
  "/dark/assets/css/plugins/flaticon.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5f8-xNnzacuLi7sUX41+zSVsMyq9VR0\"",
    "mtime": "2023-09-18T10:21:09.347Z",
    "size": 1528,
    "path": "../public/dark/assets/css/plugins/flaticon.css"
  },
  "/dark/assets/css/plugins/fontawesome-all.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e7ae-hZOVyxc4Ub1sFKrs24XS1Gy87Lk\"",
    "mtime": "2023-09-18T10:21:09.347Z",
    "size": 59310,
    "path": "../public/dark/assets/css/plugins/fontawesome-all.min.css"
  },
  "/dark/assets/css/plugins/ionicons.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c86e-w6F91Xd6+fxgajjH41LYQqX4qGs\"",
    "mtime": "2023-09-18T10:21:09.346Z",
    "size": 51310,
    "path": "../public/dark/assets/css/plugins/ionicons.min.css"
  },
  "/dark/assets/css/plugins/justifiedGallery.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b7e-H2yzLinC9cyvQmyglKyuNpUBrDE\"",
    "mtime": "2023-09-18T10:21:09.345Z",
    "size": 2942,
    "path": "../public/dark/assets/css/plugins/justifiedGallery.min.css"
  },
  "/dark/assets/css/plugins/magnific-popup.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c86-dKQTctgzGVt33Z4Wf4LKOVzEcC0\"",
    "mtime": "2023-09-18T10:21:09.345Z",
    "size": 7302,
    "path": "../public/dark/assets/css/plugins/magnific-popup.css"
  },
  "/dark/assets/css/plugins/pe-icon-7-stroke.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2895-iY0GgUhQm7uMvONSMor9aVkHD3Q\"",
    "mtime": "2023-09-18T10:21:09.345Z",
    "size": 10389,
    "path": "../public/dark/assets/css/plugins/pe-icon-7-stroke.css"
  },
  "/dark/assets/css/plugins/slick-theme.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b3e-1LISeFpU609H1nFA9rnCAOiOxfk\"",
    "mtime": "2023-09-18T10:21:09.345Z",
    "size": 2878,
    "path": "../public/dark/assets/css/plugins/slick-theme.css"
  },
  "/dark/assets/css/plugins/slick.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"767-ZObF/5nxTGV1LgMiI0Fg+Og/xsI\"",
    "mtime": "2023-09-18T10:21:09.345Z",
    "size": 1895,
    "path": "../public/dark/assets/css/plugins/slick.css"
  },
  "/dark/assets/css/plugins/swiper.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"356e-XA17g5scW6uVedYW7kI3cSJq43M\"",
    "mtime": "2023-09-18T10:21:09.344Z",
    "size": 13678,
    "path": "../public/dark/assets/css/plugins/swiper.min.css"
  },
  "/dark/assets/css/utility/_variables.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53-Oi+mr+U7pLYYSTOyW5RloUprT8c\"",
    "mtime": "2023-09-18T10:21:09.343Z",
    "size": 83,
    "path": "../public/dark/assets/css/utility/_variables.css"
  },
  "/dark/assets/imgs/about/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"55964-gnkIzb4Of+k26CJj0ETK+ydh4aY\"",
    "mtime": "2023-09-18T10:21:09.328Z",
    "size": 350564,
    "path": "../public/dark/assets/imgs/about/01.jpg"
  },
  "/dark/assets/imgs/about/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"5fcb8-2MaSEmzi7ZEPmQL0VX7vKyOEGpo\"",
    "mtime": "2023-09-18T10:21:09.326Z",
    "size": 392376,
    "path": "../public/dark/assets/imgs/about/02.jpg"
  },
  "/dark/assets/imgs/about/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:09.325Z",
    "size": 41493,
    "path": "../public/dark/assets/imgs/about/1.jpg"
  },
  "/dark/assets/imgs/about/2-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"bc23-pKge3aHmI6laJ81r7wsf4Q2PDSQ\"",
    "mtime": "2023-09-18T10:21:09.324Z",
    "size": 48163,
    "path": "../public/dark/assets/imgs/about/2-origin.jpg"
  },
  "/dark/assets/imgs/about/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:09.323Z",
    "size": 41493,
    "path": "../public/dark/assets/imgs/about/3.jpg"
  },
  "/dark/assets/imgs/about/signature.png": {
    "type": "image/png",
    "etag": "\"1043-TZHnQhRhh9ygDZX4llpIetTG4AU\"",
    "mtime": "2023-09-18T10:21:09.323Z",
    "size": 4163,
    "path": "../public/dark/assets/imgs/about/signature.png"
  },
  "/dark/assets/imgs/about/sq1-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:09.322Z",
    "size": 41493,
    "path": "../public/dark/assets/imgs/about/sq1-origin.jpg"
  },
  "/dark/assets/imgs/about/sq1.jpg": {
    "type": "image/jpeg",
    "etag": "\"4d9e24-MSQervTUrMeS6y0aHTdRrrFA2PQ\"",
    "mtime": "2023-09-18T10:21:09.321Z",
    "size": 5086756,
    "path": "../public/dark/assets/imgs/about/sq1.jpg"
  },
  "/dark/assets/imgs/about/sq2-org.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:09.317Z",
    "size": 41493,
    "path": "../public/dark/assets/imgs/about/sq2-org.jpg"
  },
  "/dark/assets/imgs/about/sq2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d7f3d-hPwwwrC7E4BOZrNSsVMJFo2dwQg\"",
    "mtime": "2023-09-18T10:21:09.316Z",
    "size": 884541,
    "path": "../public/dark/assets/imgs/about/sq2.jpg"
  },
  "/dark/assets/imgs/about/sq3.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:09.315Z",
    "size": 41493,
    "path": "../public/dark/assets/imgs/about/sq3.jpg"
  },
  "/dark/assets/imgs/about/v1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b9fb-QJ2I9s8ZwKJpMWCMAnaJd0JS4Dc\"",
    "mtime": "2023-09-18T10:21:09.315Z",
    "size": 47611,
    "path": "../public/dark/assets/imgs/about/v1.jpg"
  },
  "/dark/assets/imgs/about/黑川.jpg": {
    "type": "image/jpeg",
    "etag": "\"12b312-Z7XblhLPA+PcMaT1KsxvTJSvAWc\"",
    "mtime": "2023-09-18T10:21:09.314Z",
    "size": 1225490,
    "path": "../public/dark/assets/imgs/about/黑川.jpg"
  },
  "/dark/assets/imgs/background/10.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.179Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/10.jpg"
  },
  "/dark/assets/imgs/background/11.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.178Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/11.jpg"
  },
  "/dark/assets/imgs/background/12.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.178Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/12.jpg"
  },
  "/dark/assets/imgs/background/13.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.177Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/13.jpg"
  },
  "/dark/assets/imgs/background/14-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.177Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/14-origin.jpg"
  },
  "/dark/assets/imgs/background/14.jpg": {
    "type": "image/jpeg",
    "etag": "\"187f338-K41bHy8WYoLmKBQCaAoPXzP17to\"",
    "mtime": "2023-09-18T10:21:09.174Z",
    "size": 25686840,
    "path": "../public/dark/assets/imgs/background/14.jpg"
  },
  "/dark/assets/imgs/background/15.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.141Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/15.jpg"
  },
  "/dark/assets/imgs/background/16.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.140Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/16.jpg"
  },
  "/dark/assets/imgs/background/17.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.140Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/17.jpg"
  },
  "/dark/assets/imgs/background/18.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.139Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/18.jpg"
  },
  "/dark/assets/imgs/background/19.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.138Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/19.jpg"
  },
  "/dark/assets/imgs/background/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.138Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/2.jpg"
  },
  "/dark/assets/imgs/background/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.137Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/3.jpg"
  },
  "/dark/assets/imgs/background/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.137Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/4.jpg"
  },
  "/dark/assets/imgs/background/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.136Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/5.jpg"
  },
  "/dark/assets/imgs/background/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.136Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/6.jpg"
  },
  "/dark/assets/imgs/background/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.135Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/7.jpg"
  },
  "/dark/assets/imgs/background/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.135Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/8.jpg"
  },
  "/dark/assets/imgs/background/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.134Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/background/9.jpg"
  },
  "/dark/assets/imgs/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.134Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/blog/1.jpg"
  },
  "/dark/assets/imgs/blog/author1.jpg": {
    "type": "image/jpeg",
    "etag": "\"87d7-nW9DBpvqZrD51ut++3gtWyfYGgs\"",
    "mtime": "2023-09-18T10:21:09.133Z",
    "size": 34775,
    "path": "../public/dark/assets/imgs/blog/author1.jpg"
  },
  "/dark/assets/imgs/blog/b1.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.133Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/blog/b1.jpg"
  },
  "/dark/assets/imgs/blog/b2.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.133Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/blog/b2.jpg"
  },
  "/dark/assets/imgs/blog/b3.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:09.132Z",
    "size": 63645,
    "path": "../public/dark/assets/imgs/blog/b3.jpg"
  },
  "/dark/assets/imgs/blog/h1.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:09.132Z",
    "size": 56081,
    "path": "../public/dark/assets/imgs/blog/h1.jpg"
  },
  "/dark/assets/imgs/blog/h2.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:09.131Z",
    "size": 56081,
    "path": "../public/dark/assets/imgs/blog/h2.jpg"
  },
  "/dark/assets/imgs/blog/h3.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:09.130Z",
    "size": 56081,
    "path": "../public/dark/assets/imgs/blog/h3.jpg"
  },
  "/dark/assets/imgs/blog/h4.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:09.129Z",
    "size": 56081,
    "path": "../public/dark/assets/imgs/blog/h4.jpg"
  },
  "/dark/assets/imgs/blog/h5.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:09.129Z",
    "size": 56081,
    "path": "../public/dark/assets/imgs/blog/h5.jpg"
  },
  "/dark/assets/imgs/blog/h6.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:09.129Z",
    "size": 56081,
    "path": "../public/dark/assets/imgs/blog/h6.jpg"
  },
  "/dark/assets/imgs/brands/01.png": {
    "type": "image/png",
    "etag": "\"6249-P20kQ9B15WBTUXW8AOBLV+D//Lc\"",
    "mtime": "2023-09-18T10:21:09.126Z",
    "size": 25161,
    "path": "../public/dark/assets/imgs/brands/01.png"
  },
  "/dark/assets/imgs/brands/02.png": {
    "type": "image/png",
    "etag": "\"5948-OmclHs3GW15St4Ou7Rj3FMFDswY\"",
    "mtime": "2023-09-18T10:21:09.126Z",
    "size": 22856,
    "path": "../public/dark/assets/imgs/brands/02.png"
  },
  "/dark/assets/imgs/brands/03.png": {
    "type": "image/png",
    "etag": "\"9468-qJX8wHBCKhvPfRkhNOuSQHH1EgA\"",
    "mtime": "2023-09-18T10:21:09.126Z",
    "size": 37992,
    "path": "../public/dark/assets/imgs/brands/03.png"
  },
  "/dark/assets/imgs/brands/04.png": {
    "type": "image/png",
    "etag": "\"8fa3-dsBLDJNBaqX35Ju1eA4P0xop3pE\"",
    "mtime": "2023-09-18T10:21:09.125Z",
    "size": 36771,
    "path": "../public/dark/assets/imgs/brands/04.png"
  },
  "/dark/assets/imgs/brands/05.png": {
    "type": "image/png",
    "etag": "\"92ec-Xr/RmMqx+I4AW4INrBZu2+FV40M\"",
    "mtime": "2023-09-18T10:21:09.125Z",
    "size": 37612,
    "path": "../public/dark/assets/imgs/brands/05.png"
  },
  "/dark/assets/imgs/brands/06.png": {
    "type": "image/png",
    "etag": "\"5948-OmclHs3GW15St4Ou7Rj3FMFDswY\"",
    "mtime": "2023-09-18T10:21:09.125Z",
    "size": 22856,
    "path": "../public/dark/assets/imgs/brands/06.png"
  },
  "/dark/assets/imgs/brands/07.png": {
    "type": "image/png",
    "etag": "\"9468-qJX8wHBCKhvPfRkhNOuSQHH1EgA\"",
    "mtime": "2023-09-18T10:21:09.124Z",
    "size": 37992,
    "path": "../public/dark/assets/imgs/brands/07.png"
  },
  "/dark/assets/imgs/brands/08.png": {
    "type": "image/png",
    "etag": "\"8fa3-dsBLDJNBaqX35Ju1eA4P0xop3pE\"",
    "mtime": "2023-09-18T10:21:09.124Z",
    "size": 36771,
    "path": "../public/dark/assets/imgs/brands/08.png"
  },
  "/dark/assets/imgs/brands/1.png": {
    "type": "image/png",
    "etag": "\"2264-oh5mmUoQ9XuEsIvoMiC9SQrmzZw\"",
    "mtime": "2023-09-18T10:21:09.124Z",
    "size": 8804,
    "path": "../public/dark/assets/imgs/brands/1.png"
  },
  "/dark/assets/imgs/brands/2.png": {
    "type": "image/png",
    "etag": "\"fa0-qzdOt/65IegJHepyqLulCkPhW9c\"",
    "mtime": "2023-09-18T10:21:09.123Z",
    "size": 4000,
    "path": "../public/dark/assets/imgs/brands/2.png"
  },
  "/dark/assets/imgs/brands/3.png": {
    "type": "image/png",
    "etag": "\"3513-mozweyMVXCwrBjxHsejvT08ptV4\"",
    "mtime": "2023-09-18T10:21:09.123Z",
    "size": 13587,
    "path": "../public/dark/assets/imgs/brands/3.png"
  },
  "/dark/assets/imgs/brands/4.png": {
    "type": "image/png",
    "etag": "\"31d5-kmpQj2zHrYaWR7h703OwHRrm9/I\"",
    "mtime": "2023-09-18T10:21:09.123Z",
    "size": 12757,
    "path": "../public/dark/assets/imgs/brands/4.png"
  },
  "/dark/assets/imgs/brands/5.png": {
    "type": "image/png",
    "etag": "\"14da-GA5/SHiEolpRi0B3EsbJRnL+uKI\"",
    "mtime": "2023-09-18T10:21:09.123Z",
    "size": 5338,
    "path": "../public/dark/assets/imgs/brands/5.png"
  },
  "/dark/assets/imgs/brands/6.png": {
    "type": "image/png",
    "etag": "\"30dd-soPLlEcoBFnkbERwH4EoW7FVoBY\"",
    "mtime": "2023-09-18T10:21:09.123Z",
    "size": 12509,
    "path": "../public/dark/assets/imgs/brands/6.png"
  },
  "/dark/assets/imgs/brands/7.png": {
    "type": "image/png",
    "etag": "\"1e32-ShEOU59+4gpPBchZTfGUOu2lKHA\"",
    "mtime": "2023-09-18T10:21:09.122Z",
    "size": 7730,
    "path": "../public/dark/assets/imgs/brands/7.png"
  },
  "/dark/assets/imgs/brands/8.png": {
    "type": "image/png",
    "etag": "\"3460-DSdFb4chhzsHfuXvzq0WJ50G3UY\"",
    "mtime": "2023-09-18T10:21:09.122Z",
    "size": 13408,
    "path": "../public/dark/assets/imgs/brands/8.png"
  },
  "/dark/assets/imgs/freelancer/h2.png": {
    "type": "image/png",
    "etag": "\"7d33-nGK6FjkCDxIrCd7wY2MsyFULYHo\"",
    "mtime": "2023-09-18T10:21:09.122Z",
    "size": 32051,
    "path": "../public/dark/assets/imgs/freelancer/h2.png"
  },
  "/dark/assets/imgs/header/c1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7dc4-3t0+8VOkaoOsXEXbXevekloqSM0\"",
    "mtime": "2023-09-18T10:21:09.116Z",
    "size": 32196,
    "path": "../public/dark/assets/imgs/header/c1.jpg"
  },
  "/dark/assets/imgs/header/c2.jpg": {
    "type": "image/jpeg",
    "etag": "\"734e-RIFuWcn+NMaXztUdJLnSD61qfTY\"",
    "mtime": "2023-09-18T10:21:09.116Z",
    "size": 29518,
    "path": "../public/dark/assets/imgs/header/c2.jpg"
  },
  "/dark/assets/imgs/header/slid1.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:09.115Z",
    "size": 55922,
    "path": "../public/dark/assets/imgs/header/slid1.jpg"
  },
  "/dark/assets/imgs/header/slid3.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:09.115Z",
    "size": 55922,
    "path": "../public/dark/assets/imgs/header/slid3.jpg"
  },
  "/dark/assets/imgs/header/slid5.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:09.114Z",
    "size": 55922,
    "path": "../public/dark/assets/imgs/header/slid5.jpg"
  },
  "/dark/assets/imgs/header/t1.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:09.114Z",
    "size": 55922,
    "path": "../public/dark/assets/imgs/header/t1.jpg"
  },
  "/dark/assets/imgs/header/t2.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:09.113Z",
    "size": 55922,
    "path": "../public/dark/assets/imgs/header/t2.jpg"
  },
  "/dark/assets/imgs/patterns/1.png": {
    "type": "image/png",
    "etag": "\"15efdb-nN+KlVDZu0om4I5ZVEcqLkm682g\"",
    "mtime": "2023-09-18T10:21:09.112Z",
    "size": 1437659,
    "path": "../public/dark/assets/imgs/patterns/1.png"
  },
  "/dark/assets/imgs/patterns/1.svg": {
    "type": "image/svg+xml",
    "etag": "\"17a8-E0dr58pqovVW9W1Pd/wbnccOHXo\"",
    "mtime": "2023-09-18T10:21:09.110Z",
    "size": 6056,
    "path": "../public/dark/assets/imgs/patterns/1.svg"
  },
  "/dark/assets/imgs/patterns/abstact-BG.png": {
    "type": "image/png",
    "etag": "\"dc84-Lz384942+j6zmbaq4sUnt8/bDt0\"",
    "mtime": "2023-09-18T10:21:09.109Z",
    "size": 56452,
    "path": "../public/dark/assets/imgs/patterns/abstact-BG.png"
  },
  "/dark/assets/imgs/patterns/asx7.png": {
    "type": "image/png",
    "etag": "\"5d74e-/HtIsLvSMqvyv/caBh+lhw5k360\"",
    "mtime": "2023-09-18T10:21:09.109Z",
    "size": 382798,
    "path": "../public/dark/assets/imgs/patterns/asx7.png"
  },
  "/dark/assets/imgs/patterns/bg-lines-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a25-ltb86M6W57ZgiITiTOb+jZsbC7w\"",
    "mtime": "2023-09-18T10:21:09.107Z",
    "size": 6693,
    "path": "../public/dark/assets/imgs/patterns/bg-lines-1.svg"
  },
  "/dark/assets/imgs/patterns/bg-pattern.png": {
    "type": "image/png",
    "etag": "\"898c-tEiComjiPJgPN0mCgaOE221um9k\"",
    "mtime": "2023-09-18T10:21:09.106Z",
    "size": 35212,
    "path": "../public/dark/assets/imgs/patterns/bg-pattern.png"
  },
  "/dark/assets/imgs/patterns/dots.png": {
    "type": "image/png",
    "etag": "\"671-ykMgnbnZ0e8uH71TjWSpd0Yb53M\"",
    "mtime": "2023-09-18T10:21:09.106Z",
    "size": 1649,
    "path": "../public/dark/assets/imgs/patterns/dots.png"
  },
  "/dark/assets/imgs/patterns/dots2.png": {
    "type": "image/png",
    "etag": "\"672-wYVe0rWE8liQWtggBxuB74NBYmM\"",
    "mtime": "2023-09-18T10:21:09.106Z",
    "size": 1650,
    "path": "../public/dark/assets/imgs/patterns/dots2.png"
  },
  "/dark/assets/imgs/patterns/graph.png": {
    "type": "image/png",
    "etag": "\"2be5-CqU09BR6sq721cvBa7ZnfzEYiy0\"",
    "mtime": "2023-09-18T10:21:09.106Z",
    "size": 11237,
    "path": "../public/dark/assets/imgs/patterns/graph.png"
  },
  "/dark/assets/imgs/patterns/home-hero-lines-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"87c-OUTpaOgqXUNTrcz/kOyhIg8P4uM\"",
    "mtime": "2023-09-18T10:21:09.106Z",
    "size": 2172,
    "path": "../public/dark/assets/imgs/patterns/home-hero-lines-2.svg"
  },
  "/dark/assets/imgs/patterns/home-inspiration-lines.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d8c-PRrqp7CosSnphFJDq/u/vYFjwzA\"",
    "mtime": "2023-09-18T10:21:09.105Z",
    "size": 7564,
    "path": "../public/dark/assets/imgs/patterns/home-inspiration-lines.svg"
  },
  "/dark/assets/imgs/patterns/noise.png": {
    "type": "image/png",
    "etag": "\"2afc-kEVRQlsjsYAL1WPO4LiK1yV29fg\"",
    "mtime": "2023-09-18T10:21:09.105Z",
    "size": 11004,
    "path": "../public/dark/assets/imgs/patterns/noise.png"
  },
  "/dark/assets/imgs/patterns/noise1.png": {
    "type": "image/png",
    "etag": "\"2eb37-LBzhsPCv6zuNljlo/B84nyd7t1Q\"",
    "mtime": "2023-09-18T10:21:09.105Z",
    "size": 191287,
    "path": "../public/dark/assets/imgs/patterns/noise1.png"
  },
  "/dark/assets/imgs/patterns/patt.svg": {
    "type": "image/svg+xml",
    "etag": "\"606-RJUJM6ABX1ztI39D32JGWen95Gk\"",
    "mtime": "2023-09-18T10:21:09.104Z",
    "size": 1542,
    "path": "../public/dark/assets/imgs/patterns/patt.svg"
  },
  "/dark/assets/imgs/patterns/pattern.png": {
    "type": "image/png",
    "etag": "\"3539b-vxuo6U8X45WYTs+T2/OxoaTolxs\"",
    "mtime": "2023-09-18T10:21:09.103Z",
    "size": 218011,
    "path": "../public/dark/assets/imgs/patterns/pattern.png"
  },
  "/dark/assets/imgs/patterns/pattern.svg": {
    "type": "image/svg+xml",
    "etag": "\"606-RJUJM6ABX1ztI39D32JGWen95Gk\"",
    "mtime": "2023-09-18T10:21:09.102Z",
    "size": 1542,
    "path": "../public/dark/assets/imgs/patterns/pattern.svg"
  },
  "/dark/assets/imgs/patterns/pattern2.png": {
    "type": "image/png",
    "etag": "\"24057-VrV0y+8BTD+t4eBNU49Sc8na2u4\"",
    "mtime": "2023-09-18T10:21:09.102Z",
    "size": 147543,
    "path": "../public/dark/assets/imgs/patterns/pattern2.png"
  },
  "/dark/assets/imgs/patterns/pattern3.png": {
    "type": "image/png",
    "etag": "\"59fd-dr0802W05fQZ5hkDtR7IYRulhuQ\"",
    "mtime": "2023-09-18T10:21:09.101Z",
    "size": 23037,
    "path": "../public/dark/assets/imgs/patterns/pattern3.png"
  },
  "/dark/assets/imgs/patterns/phrase-lines2.png": {
    "type": "image/png",
    "etag": "\"153e6-/f/na0JEolMW78HUEXqAzOFyOyA\"",
    "mtime": "2023-09-18T10:21:09.101Z",
    "size": 87014,
    "path": "../public/dark/assets/imgs/patterns/phrase-lines2.png"
  },
  "/dark/assets/imgs/patterns/s1.png": {
    "type": "image/png",
    "etag": "\"45604-kabdUVo80MOpaOh5dYdtrNf0ppU\"",
    "mtime": "2023-09-18T10:21:09.100Z",
    "size": 284164,
    "path": "../public/dark/assets/imgs/patterns/s1.png"
  },
  "/dark/assets/imgs/sass-img/a1.png": {
    "type": "image/png",
    "etag": "\"72d6-MVriY3s5hiGxGmAaVnnGQ13vXU4\"",
    "mtime": "2023-09-18T10:21:09.085Z",
    "size": 29398,
    "path": "../public/dark/assets/imgs/sass-img/a1.png"
  },
  "/dark/assets/imgs/sass-img/a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"311320-YNv5NAgJcFS4aGgKj9tLun2DgjY\"",
    "mtime": "2023-09-18T10:21:09.085Z",
    "size": 3216160,
    "path": "../public/dark/assets/imgs/sass-img/a1.svg"
  },
  "/dark/assets/imgs/sass-img/header1.png": {
    "type": "image/png",
    "etag": "\"40aac-B5yZBFVWlNhvR95P7ogvN7eqVsc\"",
    "mtime": "2023-09-18T10:21:09.073Z",
    "size": 264876,
    "path": "../public/dark/assets/imgs/sass-img/header1.png"
  },
  "/dark/assets/imgs/sass-img/shap1.png": {
    "type": "image/png",
    "etag": "\"14f23-rDC55NSxFn9E70exc94s8mOrs30\"",
    "mtime": "2023-09-18T10:21:09.061Z",
    "size": 85795,
    "path": "../public/dark/assets/imgs/sass-img/shap1.png"
  },
  "/dark/assets/imgs/sass-img/shap2.png": {
    "type": "image/png",
    "etag": "\"13d56-QPe1W5Z0V0HCZzwn8kMpf2gkPaw\"",
    "mtime": "2023-09-18T10:21:09.060Z",
    "size": 81238,
    "path": "../public/dark/assets/imgs/sass-img/shap2.png"
  },
  "/dark/assets/imgs/serv-icons/0.png": {
    "type": "image/png",
    "etag": "\"4992-rjG7zC7HYcO32SHilCobi1UCiPc\"",
    "mtime": "2023-09-18T10:21:09.049Z",
    "size": 18834,
    "path": "../public/dark/assets/imgs/serv-icons/0.png"
  },
  "/dark/assets/imgs/serv-icons/01-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"718-OvDlr31sCLGPDROk7tOUGKu5PT8\"",
    "mtime": "2023-09-18T10:21:09.049Z",
    "size": 1816,
    "path": "../public/dark/assets/imgs/serv-icons/01-dark.svg"
  },
  "/dark/assets/imgs/serv-icons/02-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"509-zv4j32NoOIn8FKjayfZkmo/eUkY\"",
    "mtime": "2023-09-18T10:21:09.048Z",
    "size": 1289,
    "path": "../public/dark/assets/imgs/serv-icons/02-dark.svg"
  },
  "/dark/assets/imgs/serv-icons/03-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"a08-BpCXdgo6wX61vBp/DRfk87nfxzE\"",
    "mtime": "2023-09-18T10:21:09.048Z",
    "size": 2568,
    "path": "../public/dark/assets/imgs/serv-icons/03-dark.svg"
  },
  "/dark/assets/imgs/serv-icons/04-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"4af-s50pL/+gnFJaGqIcjv1i0u2C82A\"",
    "mtime": "2023-09-18T10:21:09.048Z",
    "size": 1199,
    "path": "../public/dark/assets/imgs/serv-icons/04-dark.svg"
  },
  "/dark/assets/imgs/serv-icons/05-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"a5f-nRBJ+zYCL+T76vCfVew7mP7rDxw\"",
    "mtime": "2023-09-18T10:21:09.048Z",
    "size": 2655,
    "path": "../public/dark/assets/imgs/serv-icons/05-dark.svg"
  },
  "/dark/assets/imgs/serv-icons/1.png": {
    "type": "image/png",
    "etag": "\"527d-hM0YDIG4q9Is+9j/J/uMetti4Lw\"",
    "mtime": "2023-09-18T10:21:09.048Z",
    "size": 21117,
    "path": "../public/dark/assets/imgs/serv-icons/1.png"
  },
  "/dark/assets/imgs/serv-icons/2.png": {
    "type": "image/png",
    "etag": "\"4085-f7p5Mp3Zexl48+CBLyR86W9DhUg\"",
    "mtime": "2023-09-18T10:21:09.047Z",
    "size": 16517,
    "path": "../public/dark/assets/imgs/serv-icons/2.png"
  },
  "/dark/assets/imgs/serv-img/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:09.047Z",
    "size": 16766,
    "path": "../public/dark/assets/imgs/serv-img/1.jpg"
  },
  "/dark/assets/imgs/serv-img/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:09.047Z",
    "size": 16766,
    "path": "../public/dark/assets/imgs/serv-img/2.jpg"
  },
  "/dark/assets/imgs/serv-img/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:09.046Z",
    "size": 16766,
    "path": "../public/dark/assets/imgs/serv-img/3.jpg"
  },
  "/dark/assets/imgs/serv-img/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:09.046Z",
    "size": 16766,
    "path": "../public/dark/assets/imgs/serv-img/4.jpg"
  },
  "/dark/assets/imgs/serv-img/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:09.046Z",
    "size": 16766,
    "path": "../public/dark/assets/imgs/serv-img/5.jpg"
  },
  "/dark/assets/imgs/serv-img/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:09.045Z",
    "size": 16766,
    "path": "../public/dark/assets/imgs/serv-img/6.jpg"
  },
  "/dark/assets/imgs/shop/021c42171449197.646ed6f5a1ce0.jpeg": {
    "type": "image/jpeg",
    "etag": "\"16ac59-8zZmnG9QEXOyyI3eYkLIrAemVt8\"",
    "mtime": "2023-09-18T10:21:09.044Z",
    "size": 1485913,
    "path": "../public/dark/assets/imgs/shop/021c42171449197.646ed6f5a1ce0.jpeg"
  },
  "/dark/assets/imgs/shop/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"57480-7iPIFvx/3DXqMvvBSVhd85OUiUw\"",
    "mtime": "2023-09-18T10:21:09.041Z",
    "size": 357504,
    "path": "../public/dark/assets/imgs/shop/1.jpg"
  },
  "/dark/assets/imgs/shop/148a81106626955.5faa111329937.png": {
    "type": "image/png",
    "etag": "\"28cf3-iOad8lt9LsXLzt/KlmLc+wDMKY8\"",
    "mtime": "2023-09-18T10:21:09.040Z",
    "size": 167155,
    "path": "../public/dark/assets/imgs/shop/148a81106626955.5faa111329937.png"
  },
  "/dark/assets/imgs/shop/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4e275-ZH2mXQHuX3Y4hNCasT8f1sQeV9I\"",
    "mtime": "2023-09-18T10:21:09.039Z",
    "size": 320117,
    "path": "../public/dark/assets/imgs/shop/2.jpg"
  },
  "/dark/assets/imgs/shop/21d597170195381.645a08c48751e.jpg": {
    "type": "image/jpeg",
    "etag": "\"1618e-qyJ8KzV/2I84EiQ46YkA3a63FO4\"",
    "mtime": "2023-09-18T10:21:09.038Z",
    "size": 90510,
    "path": "../public/dark/assets/imgs/shop/21d597170195381.645a08c48751e.jpg"
  },
  "/dark/assets/imgs/shop/249077163666051.63ea18de3ab40.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1bcf3-D7m8ZAuieqv82X4ikNqslKG3ryE\"",
    "mtime": "2023-09-18T10:21:09.038Z",
    "size": 113907,
    "path": "../public/dark/assets/imgs/shop/249077163666051.63ea18de3ab40.jpeg"
  },
  "/dark/assets/imgs/shop/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"492eb-Ob06G/gKFM4UCyf1oMUwpYa4U7s\"",
    "mtime": "2023-09-18T10:21:09.037Z",
    "size": 299755,
    "path": "../public/dark/assets/imgs/shop/3.jpg"
  },
  "/dark/assets/imgs/shop/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b690-OF6cD+kRdyHBQR6c4gKokvb8IKE\"",
    "mtime": "2023-09-18T10:21:09.032Z",
    "size": 177808,
    "path": "../public/dark/assets/imgs/shop/4.jpg"
  },
  "/dark/assets/imgs/shop/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"44dbd-6jm8Qa6bv6kCJgRNHh1bcIVJaAY\"",
    "mtime": "2023-09-18T10:21:09.031Z",
    "size": 282045,
    "path": "../public/dark/assets/imgs/shop/5.jpg"
  },
  "/dark/assets/imgs/shop/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"f3f2-AtYQd2Vx8guwCzZa3HDdTSndveE\"",
    "mtime": "2023-09-18T10:21:09.030Z",
    "size": 62450,
    "path": "../public/dark/assets/imgs/shop/6.jpg"
  },
  "/dark/assets/imgs/shop/66c99a171449197.646ed6f5a41ea.jpg": {
    "type": "image/jpeg",
    "etag": "\"17a4da-ZsYaXV8yV2i6a+2wpQ+oip3SVfQ\"",
    "mtime": "2023-09-18T10:21:09.030Z",
    "size": 1549530,
    "path": "../public/dark/assets/imgs/shop/66c99a171449197.646ed6f5a41ea.jpg"
  },
  "/dark/assets/imgs/shop/695b60106626955.5f9d6d5c5ea83.png": {
    "type": "image/png",
    "etag": "\"67975-lycAXCgxbhPETT0wZUDYrhM3bM8\"",
    "mtime": "2023-09-18T10:21:09.027Z",
    "size": 424309,
    "path": "../public/dark/assets/imgs/shop/695b60106626955.5f9d6d5c5ea83.png"
  },
  "/dark/assets/imgs/shop/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"15220-ShK/WNv/9CrRsffLNXe4eBQOJ40\"",
    "mtime": "2023-09-18T10:21:09.025Z",
    "size": 86560,
    "path": "../public/dark/assets/imgs/shop/7.jpg"
  },
  "/dark/assets/imgs/shop/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c1bf-AR6QN1i6/JPZjkq1IFOLotnwfDU\"",
    "mtime": "2023-09-18T10:21:09.025Z",
    "size": 115135,
    "path": "../public/dark/assets/imgs/shop/8.jpg"
  },
  "/dark/assets/imgs/shop/861338108819477.5fc64fb27635a.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e1b5c-XvLk40kJpmWbn1a5Nu0ZOcp8dQw\"",
    "mtime": "2023-09-18T10:21:09.022Z",
    "size": 1973084,
    "path": "../public/dark/assets/imgs/shop/861338108819477.5fc64fb27635a.jpg"
  },
  "/dark/assets/imgs/shop/866f28108819477.5fc64fb275b16.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d3498-7WIwkbVOiFlDrYMwn/nt+UIf410\"",
    "mtime": "2023-09-18T10:21:09.017Z",
    "size": 1914008,
    "path": "../public/dark/assets/imgs/shop/866f28108819477.5fc64fb275b16.jpg"
  },
  "/dark/assets/imgs/shop/893d9b170195381.645a1131b96e0.jpg": {
    "type": "image/jpeg",
    "etag": "\"220e1-wScPFkhWbbBGh9uwa7on4uWmE7E\"",
    "mtime": "2023-09-18T10:21:09.014Z",
    "size": 139489,
    "path": "../public/dark/assets/imgs/shop/893d9b170195381.645a1131b96e0.jpg"
  },
  "/dark/assets/imgs/shop/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"11676-ji7nCd7M396GWFqv3+jhhQa5s4g\"",
    "mtime": "2023-09-18T10:21:09.013Z",
    "size": 71286,
    "path": "../public/dark/assets/imgs/shop/9.jpg"
  },
  "/dark/assets/imgs/shop/a215e7170195381.645a0ceab3303.jpg": {
    "type": "image/jpeg",
    "etag": "\"21bfc-amzDgijHC/+slGMXkZHbzxswMAQ\"",
    "mtime": "2023-09-18T10:21:09.012Z",
    "size": 138236,
    "path": "../public/dark/assets/imgs/shop/a215e7170195381.645a0ceab3303.jpg"
  },
  "/dark/assets/imgs/shop/b2faaf107708769.5fad187d4b4eb.png": {
    "type": "image/png",
    "etag": "\"1f2af-DCggBwaG+JporqjOQ8oKmHJKmZw\"",
    "mtime": "2023-09-18T10:21:09.011Z",
    "size": 127663,
    "path": "../public/dark/assets/imgs/shop/b2faaf107708769.5fad187d4b4eb.png"
  },
  "/dark/assets/imgs/shop/c44e27125748251.611f4c3ab11c1.jpg": {
    "type": "image/jpeg",
    "etag": "\"178c95-gAkq5E4QrGnF1A4+ovb1W3EkHpE\"",
    "mtime": "2023-09-18T10:21:09.009Z",
    "size": 1543317,
    "path": "../public/dark/assets/imgs/shop/c44e27125748251.611f4c3ab11c1.jpg"
  },
  "/dark/assets/imgs/shop/cce71a125748251.611f4c3ab0339.jpg": {
    "type": "image/jpeg",
    "etag": "\"196ece-EX+79hhyx3aPR2SCpBJPcXArpEE\"",
    "mtime": "2023-09-18T10:21:09.006Z",
    "size": 1666766,
    "path": "../public/dark/assets/imgs/shop/cce71a125748251.611f4c3ab0339.jpg"
  },
  "/dark/assets/imgs/shop/def519135204785.61e407b27e526.jpg": {
    "type": "image/jpeg",
    "etag": "\"2d56a-bKePcDnVg6h9LFQZ4m+Q8tZcBJg\"",
    "mtime": "2023-09-18T10:21:09.002Z",
    "size": 185706,
    "path": "../public/dark/assets/imgs/shop/def519135204785.61e407b27e526.jpg"
  },
  "/dark/assets/imgs/shop/f28492154111893.633c4cd2b6d3d.jpg": {
    "type": "image/jpeg",
    "etag": "\"e0cf9-FAx67lVWu6712OA70nN+MTypzUs\"",
    "mtime": "2023-09-18T10:21:08.999Z",
    "size": 920825,
    "path": "../public/dark/assets/imgs/shop/f28492154111893.633c4cd2b6d3d.jpg"
  },
  "/dark/assets/imgs/shop/f67ca4108819477.5fc64fb277c7a.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b7381-mNx22wOvVy7s1eiI+i0tCkARLDU\"",
    "mtime": "2023-09-18T10:21:08.997Z",
    "size": 1799041,
    "path": "../public/dark/assets/imgs/shop/f67ca4108819477.5fc64fb277c7a.jpg"
  },
  "/dark/assets/imgs/shop/ff4380125748251.611f4c3ab1c33.jpg": {
    "type": "image/jpeg",
    "etag": "\"2042fe-AIeCcGS0cCORmmwMMi9IwdTJ4dM\"",
    "mtime": "2023-09-18T10:21:08.993Z",
    "size": 2114302,
    "path": "../public/dark/assets/imgs/shop/ff4380125748251.611f4c3ab1c33.jpg"
  },
  "/dark/assets/imgs/shop/j.png": {
    "type": "image/png",
    "etag": "\"30516-gWlEjTRlHEO6eEZxAV7jO+MwevI\"",
    "mtime": "2023-09-18T10:21:08.987Z",
    "size": 197910,
    "path": "../public/dark/assets/imgs/shop/j.png"
  },
  "/dark/assets/imgs/shop/rwd (1).jpg": {
    "type": "image/jpeg",
    "etag": "\"294f1-iSPJd1lZyLz1Y5umId19pAfBNRo\"",
    "mtime": "2023-09-18T10:21:08.986Z",
    "size": 169201,
    "path": "../public/dark/assets/imgs/shop/rwd (1).jpg"
  },
  "/dark/assets/imgs/shop/rwd (2).jpg": {
    "type": "image/jpeg",
    "etag": "\"1adcc-T54bHdy1Av+l5kPX+weBoIoTnQo\"",
    "mtime": "2023-09-18T10:21:08.985Z",
    "size": 110028,
    "path": "../public/dark/assets/imgs/shop/rwd (2).jpg"
  },
  "/dark/assets/imgs/svg-assets/arrow-right-top.svg": {
    "type": "image/svg+xml",
    "etag": "\"10c-8hmPCmoZuugwpZDwbVdVe/rptX4\"",
    "mtime": "2023-09-18T10:21:08.984Z",
    "size": 268,
    "path": "../public/dark/assets/imgs/svg-assets/arrow-right-top.svg"
  },
  "/dark/assets/imgs/svg-assets/arrow-top-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"311-EN779gQIRQtbqylogUG9BqZqwAI\"",
    "mtime": "2023-09-18T10:21:08.984Z",
    "size": 785,
    "path": "../public/dark/assets/imgs/svg-assets/arrow-top-right.svg"
  },
  "/dark/assets/imgs/svg-assets/circle-star.svg": {
    "type": "image/svg+xml",
    "etag": "\"98e-XdxT7RLAGsl1CfYMUclnxE8DfI4\"",
    "mtime": "2023-09-18T10:21:08.983Z",
    "size": 2446,
    "path": "../public/dark/assets/imgs/svg-assets/circle-star.svg"
  },
  "/dark/assets/imgs/svg-assets/claw.svg": {
    "type": "image/svg+xml",
    "etag": "\"7f6-O84zZ4hPRvNmA+EHkvv12JZIFuA\"",
    "mtime": "2023-09-18T10:21:08.983Z",
    "size": 2038,
    "path": "../public/dark/assets/imgs/svg-assets/claw.svg"
  },
  "/dark/assets/imgs/svg-assets/cta-shape-2.png": {
    "type": "image/png",
    "etag": "\"4b49-rFMragHM5hCPR+w0xf2KSRJgBXs\"",
    "mtime": "2023-09-18T10:21:08.982Z",
    "size": 19273,
    "path": "../public/dark/assets/imgs/svg-assets/cta-shape-2.png"
  },
  "/dark/assets/imgs/svg-assets/hi.png": {
    "type": "image/png",
    "etag": "\"5160-uWpFQIo+LyTgy0fEJIns2v4K5+0\"",
    "mtime": "2023-09-18T10:21:08.982Z",
    "size": 20832,
    "path": "../public/dark/assets/imgs/svg-assets/hi.png"
  },
  "/dark/assets/imgs/svg-assets/left-arrow-curve.png": {
    "type": "image/png",
    "etag": "\"117c-XnnnLHX19TwFk7kkPwustzWtryY\"",
    "mtime": "2023-09-18T10:21:08.982Z",
    "size": 4476,
    "path": "../public/dark/assets/imgs/svg-assets/left-arrow-curve.png"
  },
  "/dark/assets/imgs/svg-assets/left-quote.png": {
    "type": "image/png",
    "etag": "\"488b-3WVY0n86AYX0FrcchhFx16txB28\"",
    "mtime": "2023-09-18T10:21:08.981Z",
    "size": 18571,
    "path": "../public/dark/assets/imgs/svg-assets/left-quote.png"
  },
  "/dark/assets/imgs/svg-assets/patern-bg.png": {
    "type": "image/png",
    "etag": "\"b569-uUoh6szXtCDuE2S71iViv46iuH0\"",
    "mtime": "2023-09-18T10:21:08.981Z",
    "size": 46441,
    "path": "../public/dark/assets/imgs/svg-assets/patern-bg.png"
  },
  "/dark/assets/imgs/svg-assets/quotation-mark.png": {
    "type": "image/png",
    "etag": "\"10b5-hle+oNefR5oj2uW1uJQ8bWe2nuU\"",
    "mtime": "2023-09-18T10:21:08.981Z",
    "size": 4277,
    "path": "../public/dark/assets/imgs/svg-assets/quotation-mark.png"
  },
  "/dark/assets/imgs/svg-assets/quote.png": {
    "type": "image/png",
    "etag": "\"12e4-he8tLzEo2Bojz75lszsBsz4Wcxo\"",
    "mtime": "2023-09-18T10:21:08.981Z",
    "size": 4836,
    "path": "../public/dark/assets/imgs/svg-assets/quote.png"
  },
  "/dark/assets/imgs/svg-assets/right-arrow-curve.png": {
    "type": "image/png",
    "etag": "\"1093-2LuRoylcsYUwklsSTwPq7+Ae1Mo\"",
    "mtime": "2023-09-18T10:21:08.980Z",
    "size": 4243,
    "path": "../public/dark/assets/imgs/svg-assets/right-arrow-curve.png"
  },
  "/dark/assets/imgs/svg-assets/star-pink.png": {
    "type": "image/png",
    "etag": "\"2280-MfnkPCT2X5snfI51J40u1HdGRcE\"",
    "mtime": "2023-09-18T10:21:08.980Z",
    "size": 8832,
    "path": "../public/dark/assets/imgs/svg-assets/star-pink.png"
  },
  "/dark/assets/imgs/svg-assets/star-shape.png": {
    "type": "image/png",
    "etag": "\"889f-9gJP6mf5SmcpGhHqj3V2sKC1Af8\"",
    "mtime": "2023-09-18T10:21:08.980Z",
    "size": 34975,
    "path": "../public/dark/assets/imgs/svg-assets/star-shape.png"
  },
  "/dark/assets/imgs/svg-assets/star-white.png": {
    "type": "image/png",
    "etag": "\"21d4-YeARgTpkd251MuTfe7W9Zy6i8RY\"",
    "mtime": "2023-09-18T10:21:08.979Z",
    "size": 8660,
    "path": "../public/dark/assets/imgs/svg-assets/star-white.png"
  },
  "/dark/assets/imgs/svg-assets/star.png": {
    "type": "image/png",
    "etag": "\"a84-0pGtFRP3fm5NIdKMdIYOPsxi1Rc\"",
    "mtime": "2023-09-18T10:21:08.979Z",
    "size": 2692,
    "path": "../public/dark/assets/imgs/svg-assets/star.png"
  },
  "/dark/assets/imgs/svg-assets/vector star.png": {
    "type": "image/png",
    "etag": "\"386c-3EWMfzZ3ekHGe4rxuMdEvmKbfZE\"",
    "mtime": "2023-09-18T10:21:08.979Z",
    "size": 14444,
    "path": "../public/dark/assets/imgs/svg-assets/vector star.png"
  },
  "/dark/assets/imgs/svg-assets/vector-star.png": {
    "type": "image/png",
    "etag": "\"194c-DOs2NRSmdWqx+U6M/ECb+Q34rG4\"",
    "mtime": "2023-09-18T10:21:08.979Z",
    "size": 6476,
    "path": "../public/dark/assets/imgs/svg-assets/vector-star.png"
  },
  "/dark/assets/imgs/team/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.978Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/team/1.jpg"
  },
  "/dark/assets/imgs/team/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.978Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/team/2.jpg"
  },
  "/dark/assets/imgs/team/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.978Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/team/3.jpg"
  },
  "/dark/assets/imgs/team/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.977Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/team/4.jpg"
  },
  "/dark/assets/imgs/team/t1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.977Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/team/t1.jpg"
  },
  "/dark/assets/imgs/team/t2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.977Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/team/t2.jpg"
  },
  "/dark/assets/imgs/team/t3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.976Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/team/t3.jpg"
  },
  "/dark/assets/imgs/team/t4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.976Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/team/t4.jpg"
  },
  "/dark/assets/imgs/testim/01.png": {
    "type": "image/png",
    "etag": "\"1427c-EjCTuK27AaeWMr7xfG3Tb15Rtzg\"",
    "mtime": "2023-09-18T10:21:08.976Z",
    "size": 82556,
    "path": "../public/dark/assets/imgs/testim/01.png"
  },
  "/dark/assets/imgs/testim/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.975Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/testim/1.jpg"
  },
  "/dark/assets/imgs/testim/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.975Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/testim/2.jpg"
  },
  "/dark/assets/imgs/testim/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.974Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/testim/3.jpg"
  },
  "/dark/assets/imgs/testim/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.974Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/testim/4.jpg"
  },
  "/dark/assets/imgs/testim/t1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.974Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/testim/t1.jpg"
  },
  "/dark/assets/imgs/testim/t2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.974Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/testim/t2.jpg"
  },
  "/dark/assets/imgs/testim/t3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.973Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/testim/t3.jpg"
  },
  "/dark/assets/imgs/testim/t4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.973Z",
    "size": 36262,
    "path": "../public/dark/assets/imgs/testim/t4.jpg"
  },
  "/dark/assets/scss/components/_buttons.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"10b1-goa9+yLJ265gczEvU6uKKOo9yoI\"",
    "mtime": "2023-09-18T10:21:08.857Z",
    "size": 4273,
    "path": "../public/dark/assets/scss/components/_buttons.scss"
  },
  "/dark/assets/scss/components/_cursor.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"c77-QzJJg7aX+j5lJsxUntoIs3JZRP8\"",
    "mtime": "2023-09-18T10:21:08.857Z",
    "size": 3191,
    "path": "../public/dark/assets/scss/components/_cursor.scss"
  },
  "/dark/assets/scss/components/_extra.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"1c91-zpIPuvFIvT53zKJXxub5pl5H7Io\"",
    "mtime": "2023-09-18T10:21:08.856Z",
    "size": 7313,
    "path": "../public/dark/assets/scss/components/_extra.scss"
  },
  "/dark/assets/scss/components/_helper.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"4ea9-I5ATFMhojW/PamR6YO5SzqzonE8\"",
    "mtime": "2023-09-18T10:21:08.856Z",
    "size": 20137,
    "path": "../public/dark/assets/scss/components/_helper.scss"
  },
  "/dark/assets/scss/components/_menu.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"346f-vY9erYUAfYpnzbDRli+KaFWXKSc\"",
    "mtime": "2023-09-18T10:21:08.856Z",
    "size": 13423,
    "path": "../public/dark/assets/scss/components/_menu.scss"
  },
  "/dark/assets/scss/components/_modal.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.856Z",
    "size": 0,
    "path": "../public/dark/assets/scss/components/_modal.scss"
  },
  "/dark/assets/scss/components/_overlay.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"866-ijTlY8aTMqM6CXAeWMq6eKy/lzY\"",
    "mtime": "2023-09-18T10:21:08.856Z",
    "size": 2150,
    "path": "../public/dark/assets/scss/components/_overlay.scss"
  },
  "/dark/assets/scss/components/_preloader.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"522-cLPTHyo5GCqP7d0D8dG6uHGo0lw\"",
    "mtime": "2023-09-18T10:21:08.856Z",
    "size": 1314,
    "path": "../public/dark/assets/scss/components/_preloader.scss"
  },
  "/dark/assets/scss/components/_title.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"d25-XJx8uo0yjGMgLDJq9qpfg/GbMbg\"",
    "mtime": "2023-09-18T10:21:08.855Z",
    "size": 3365,
    "path": "../public/dark/assets/scss/components/_title.scss"
  },
  "/dark/assets/scss/components/_typography.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"17fd-lhz5R/D5sw1bUofz9OW+GuTkLag\"",
    "mtime": "2023-09-18T10:21:08.855Z",
    "size": 6141,
    "path": "../public/dark/assets/scss/components/_typography.scss"
  },
  "/dark/assets/scss/layout/_about.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"3253-sVn8sHRkUYT+s/5uJHo2FsoL1PU\"",
    "mtime": "2023-09-18T10:21:08.855Z",
    "size": 12883,
    "path": "../public/dark/assets/scss/layout/_about.scss"
  },
  "/dark/assets/scss/layout/_awards.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"8c1-3nmc/o8k4PvUBbNnklF3IlUe06U\"",
    "mtime": "2023-09-18T10:21:08.855Z",
    "size": 2241,
    "path": "../public/dark/assets/scss/layout/_awards.scss"
  },
  "/dark/assets/scss/layout/_blog.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"264e-ruq1dMJFwyTfamIca5SklRBnDyo\"",
    "mtime": "2023-09-18T10:21:08.855Z",
    "size": 9806,
    "path": "../public/dark/assets/scss/layout/_blog.scss"
  },
  "/dark/assets/scss/layout/_brand.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"c24-6Jv0K4ZQPI4F9jS8B/UTZKJE13Q\"",
    "mtime": "2023-09-18T10:21:08.854Z",
    "size": 3108,
    "path": "../public/dark/assets/scss/layout/_brand.scss"
  },
  "/dark/assets/scss/layout/_career.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.854Z",
    "size": 0,
    "path": "../public/dark/assets/scss/layout/_career.scss"
  },
  "/dark/assets/scss/layout/_clients.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.854Z",
    "size": 0,
    "path": "../public/dark/assets/scss/layout/_clients.scss"
  },
  "/dark/assets/scss/layout/_contact.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"5f9-86SehtLqFX6dZJvtJIPfV9RmQ8k\"",
    "mtime": "2023-09-18T10:21:08.854Z",
    "size": 1529,
    "path": "../public/dark/assets/scss/layout/_contact.scss"
  },
  "/dark/assets/scss/layout/_counter.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"76a-c6WIrhI4m3iu6+ay9XxuBks+q1U\"",
    "mtime": "2023-09-18T10:21:08.854Z",
    "size": 1898,
    "path": "../public/dark/assets/scss/layout/_counter.scss"
  },
  "/dark/assets/scss/layout/_features.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"c49-jppA4I7GSxpK8DPNynf3tYF4ri0\"",
    "mtime": "2023-09-18T10:21:08.854Z",
    "size": 3145,
    "path": "../public/dark/assets/scss/layout/_features.scss"
  },
  "/dark/assets/scss/layout/_footer.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"65d-030b83Ifs+KC5EFdVdJxkmazSOI\"",
    "mtime": "2023-09-18T10:21:08.853Z",
    "size": 1629,
    "path": "../public/dark/assets/scss/layout/_footer.scss"
  },
  "/dark/assets/scss/layout/_header.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"953-yUHPzFPBUVC6ULd/cSERTzJaY0g\"",
    "mtime": "2023-09-18T10:21:08.853Z",
    "size": 2387,
    "path": "../public/dark/assets/scss/layout/_header.scss"
  },
  "/dark/assets/scss/layout/_hero.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"18c7-8iy7gX/vsjc5dyk+axnnKB7sJBE\"",
    "mtime": "2023-09-18T10:21:08.853Z",
    "size": 6343,
    "path": "../public/dark/assets/scss/layout/_hero.scss"
  },
  "/dark/assets/scss/layout/_portfolio.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"459f-vXBJ3p+0Sqpk/1IFIPds519aFgI\"",
    "mtime": "2023-09-18T10:21:08.853Z",
    "size": 17823,
    "path": "../public/dark/assets/scss/layout/_portfolio.scss"
  },
  "/dark/assets/scss/layout/_price.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"3d5-m44URTGDW3/NweUSsWMTCpHG/UY\"",
    "mtime": "2023-09-18T10:21:08.853Z",
    "size": 981,
    "path": "../public/dark/assets/scss/layout/_price.scss"
  },
  "/dark/assets/scss/layout/_process.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"49d-CZF+HKHsDk87muFWLCpYUovjax8\"",
    "mtime": "2023-09-18T10:21:08.852Z",
    "size": 1181,
    "path": "../public/dark/assets/scss/layout/_process.scss"
  },
  "/dark/assets/scss/layout/_services.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"1cf8-zMF/2Ni4/Frf1q4KpPxoYho1n9I\"",
    "mtime": "2023-09-18T10:21:08.852Z",
    "size": 7416,
    "path": "../public/dark/assets/scss/layout/_services.scss"
  },
  "/dark/assets/scss/layout/_shop.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"4d0d-7VfI2lIDz/fwwOXJDgtWSOVGpLc\"",
    "mtime": "2023-09-18T10:21:08.852Z",
    "size": 19725,
    "path": "../public/dark/assets/scss/layout/_shop.scss"
  },
  "/dark/assets/scss/layout/_slider.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"21ad-rtMckbzvJx61mtINq1OAMkJ9ryM\"",
    "mtime": "2023-09-18T10:21:08.852Z",
    "size": 8621,
    "path": "../public/dark/assets/scss/layout/_slider.scss"
  },
  "/dark/assets/scss/layout/_team.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"c06-2zGsVgxQi7h9IccjPIvCRMQwvrk\"",
    "mtime": "2023-09-18T10:21:08.852Z",
    "size": 3078,
    "path": "../public/dark/assets/scss/layout/_team.scss"
  },
  "/dark/assets/scss/layout/_testimonials.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"2c69-Z7Wg+fkgrOde+StZN6npEFfxveU\"",
    "mtime": "2023-09-18T10:21:08.851Z",
    "size": 11369,
    "path": "../public/dark/assets/scss/layout/_testimonials.scss"
  },
  "/dark/assets/scss/layout/_video.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"1c8-9GJWWndTvYjGFQ6HQ7GGclE515g\"",
    "mtime": "2023-09-18T10:21:08.851Z",
    "size": 456,
    "path": "../public/dark/assets/scss/layout/_video.scss"
  },
  "/dark/assets/scss/utility/_animation.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.850Z",
    "size": 0,
    "path": "../public/dark/assets/scss/utility/_animation.scss"
  },
  "/dark/assets/scss/utility/_mixin.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.850Z",
    "size": 0,
    "path": "../public/dark/assets/scss/utility/_mixin.scss"
  },
  "/dark/assets/scss/utility/_responsive.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"523a-XcRlgSnsGXk/C3a30hxinO/Sb2Q\"",
    "mtime": "2023-09-18T10:21:08.850Z",
    "size": 21050,
    "path": "../public/dark/assets/scss/utility/_responsive.scss"
  },
  "/dark/assets/scss/utility/_theme-dark.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.850Z",
    "size": 0,
    "path": "../public/dark/assets/scss/utility/_theme-dark.scss"
  },
  "/dark/assets/scss/utility/_variables.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"158-degZ6uNu3VwAuUN+aFgKVssAUvI\"",
    "mtime": "2023-09-18T10:21:08.850Z",
    "size": 344,
    "path": "../public/dark/assets/scss/utility/_variables.scss"
  },
  "/dark/showcase/assets/css/showcases.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1302-EfpbE+/PMGN1pzitxAEoc5nkXBU\"",
    "mtime": "2023-09-18T10:21:08.849Z",
    "size": 4866,
    "path": "../public/dark/showcase/assets/css/showcases.css"
  },
  "/dark/showcase/assets/scss/showcases.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"f31-32fqoJOuRGg2LcfmJg7p+L6/2YU\"",
    "mtime": "2023-09-18T10:21:08.848Z",
    "size": 3889,
    "path": "../public/dark/showcase/assets/scss/showcases.scss"
  },
  "/light/assets/css/components/_cursor.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"174b-1RQGpa6btJGK/fO9iLTpZDdlFyo\"",
    "mtime": "2023-09-18T10:21:08.805Z",
    "size": 5963,
    "path": "../public/light/assets/css/components/_cursor.css"
  },
  "/light/assets/css/components/_helper.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f3f-BDzcabq3Vcxj8vcEGiz64fKnU7E\"",
    "mtime": "2023-09-18T10:21:08.805Z",
    "size": 20287,
    "path": "../public/light/assets/css/components/_helper.css"
  },
  "/light/assets/css/components/_overlay.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"89b-7FaY57G30EZtVm6AM+iLp74ylhQ\"",
    "mtime": "2023-09-18T10:21:08.805Z",
    "size": 2203,
    "path": "../public/light/assets/css/components/_overlay.css"
  },
  "/light/assets/css/layout/_awards.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3cc-mxXgnVQJ4u3dEVHVstDOnBCpvfQ\"",
    "mtime": "2023-09-18T10:21:08.804Z",
    "size": 972,
    "path": "../public/light/assets/css/layout/_awards.css"
  },
  "/light/assets/css/layout/_brand.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c33-81YjDRXFJYwmGYB0kWmxcsV0sLw\"",
    "mtime": "2023-09-18T10:21:08.804Z",
    "size": 3123,
    "path": "../public/light/assets/css/layout/_brand.css"
  },
  "/light/assets/css/layout/_footer.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ba-uL7fR/ELHVRj+8AtnqG1Kgmol1o\"",
    "mtime": "2023-09-18T10:21:08.804Z",
    "size": 1210,
    "path": "../public/light/assets/css/layout/_footer.css"
  },
  "/light/assets/css/layout/_header.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8aa-SGwgy+vNrjFaF6u7D6xRKNQxNvc\"",
    "mtime": "2023-09-18T10:21:08.804Z",
    "size": 2218,
    "path": "../public/light/assets/css/layout/_header.css"
  },
  "/light/assets/css/layout/_price.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b2-EF7wnu7O81VPAplmY09qUxFYYrM\"",
    "mtime": "2023-09-18T10:21:08.804Z",
    "size": 178,
    "path": "../public/light/assets/css/layout/_price.css"
  },
  "/light/assets/css/layout/_video.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"219-CyrX6elSQtRom6CYoeZhCAUq8SE\"",
    "mtime": "2023-09-18T10:21:08.803Z",
    "size": 537,
    "path": "../public/light/assets/css/layout/_video.css"
  },
  "/light/assets/css/plugins/YouTubePopUp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c66-s0kjbNRPb62IfQL3QYPbDb78zbM\"",
    "mtime": "2023-09-18T10:21:08.803Z",
    "size": 3174,
    "path": "../public/light/assets/css/plugins/YouTubePopUp.css"
  },
  "/light/assets/css/plugins/animate.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4242-Hm0B96sph8sp+OEfL7rjHy5K2Mg\"",
    "mtime": "2023-09-18T10:21:08.803Z",
    "size": 16962,
    "path": "../public/light/assets/css/plugins/animate.min.css"
  },
  "/light/assets/css/plugins/bootstrap.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"27bd2-3dyXWyoggVItkIvVtwwl4Q+Heh0\"",
    "mtime": "2023-09-18T10:21:08.803Z",
    "size": 162770,
    "path": "../public/light/assets/css/plugins/bootstrap.min.css"
  },
  "/light/assets/css/plugins/flaticon.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5f8-xNnzacuLi7sUX41+zSVsMyq9VR0\"",
    "mtime": "2023-09-18T10:21:08.802Z",
    "size": 1528,
    "path": "../public/light/assets/css/plugins/flaticon.css"
  },
  "/light/assets/css/plugins/fontawesome-all.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e7ae-hZOVyxc4Ub1sFKrs24XS1Gy87Lk\"",
    "mtime": "2023-09-18T10:21:08.802Z",
    "size": 59310,
    "path": "../public/light/assets/css/plugins/fontawesome-all.min.css"
  },
  "/light/assets/css/plugins/ionicons.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c86e-w6F91Xd6+fxgajjH41LYQqX4qGs\"",
    "mtime": "2023-09-18T10:21:08.801Z",
    "size": 51310,
    "path": "../public/light/assets/css/plugins/ionicons.min.css"
  },
  "/light/assets/css/plugins/justifiedGallery.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b7e-H2yzLinC9cyvQmyglKyuNpUBrDE\"",
    "mtime": "2023-09-18T10:21:08.801Z",
    "size": 2942,
    "path": "../public/light/assets/css/plugins/justifiedGallery.min.css"
  },
  "/light/assets/css/plugins/magnific-popup.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c86-dKQTctgzGVt33Z4Wf4LKOVzEcC0\"",
    "mtime": "2023-09-18T10:21:08.801Z",
    "size": 7302,
    "path": "../public/light/assets/css/plugins/magnific-popup.css"
  },
  "/light/assets/css/plugins/pe-icon-7-stroke.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2895-iY0GgUhQm7uMvONSMor9aVkHD3Q\"",
    "mtime": "2023-09-18T10:21:08.801Z",
    "size": 10389,
    "path": "../public/light/assets/css/plugins/pe-icon-7-stroke.css"
  },
  "/light/assets/css/plugins/slick-theme.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b3e-1LISeFpU609H1nFA9rnCAOiOxfk\"",
    "mtime": "2023-09-18T10:21:08.800Z",
    "size": 2878,
    "path": "../public/light/assets/css/plugins/slick-theme.css"
  },
  "/light/assets/css/plugins/slick.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"767-ZObF/5nxTGV1LgMiI0Fg+Og/xsI\"",
    "mtime": "2023-09-18T10:21:08.800Z",
    "size": 1895,
    "path": "../public/light/assets/css/plugins/slick.css"
  },
  "/light/assets/css/plugins/swiper.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"356e-XA17g5scW6uVedYW7kI3cSJq43M\"",
    "mtime": "2023-09-18T10:21:08.800Z",
    "size": 13678,
    "path": "../public/light/assets/css/plugins/swiper.min.css"
  },
  "/light/assets/css/utility/_variables.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53-Oi+mr+U7pLYYSTOyW5RloUprT8c\"",
    "mtime": "2023-09-18T10:21:08.799Z",
    "size": 83,
    "path": "../public/light/assets/css/utility/_variables.css"
  },
  "/light/assets/imgs/about/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"55964-gnkIzb4Of+k26CJj0ETK+ydh4aY\"",
    "mtime": "2023-09-18T10:21:08.783Z",
    "size": 350564,
    "path": "../public/light/assets/imgs/about/01.jpg"
  },
  "/light/assets/imgs/about/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"5fcb8-2MaSEmzi7ZEPmQL0VX7vKyOEGpo\"",
    "mtime": "2023-09-18T10:21:08.781Z",
    "size": 392376,
    "path": "../public/light/assets/imgs/about/02.jpg"
  },
  "/light/assets/imgs/about/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:08.779Z",
    "size": 41493,
    "path": "../public/light/assets/imgs/about/1.jpg"
  },
  "/light/assets/imgs/about/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"bc23-pKge3aHmI6laJ81r7wsf4Q2PDSQ\"",
    "mtime": "2023-09-18T10:21:08.779Z",
    "size": 48163,
    "path": "../public/light/assets/imgs/about/2.jpg"
  },
  "/light/assets/imgs/about/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:08.778Z",
    "size": 41493,
    "path": "../public/light/assets/imgs/about/3.jpg"
  },
  "/light/assets/imgs/about/signature.png": {
    "type": "image/png",
    "etag": "\"1043-TZHnQhRhh9ygDZX4llpIetTG4AU\"",
    "mtime": "2023-09-18T10:21:08.778Z",
    "size": 4163,
    "path": "../public/light/assets/imgs/about/signature.png"
  },
  "/light/assets/imgs/about/sq1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:08.778Z",
    "size": 41493,
    "path": "../public/light/assets/imgs/about/sq1.jpg"
  },
  "/light/assets/imgs/about/sq2.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:08.777Z",
    "size": 41493,
    "path": "../public/light/assets/imgs/about/sq2.jpg"
  },
  "/light/assets/imgs/about/sq3.jpg": {
    "type": "image/jpeg",
    "etag": "\"a215-nryEFhPwi01WecgDjcGSJJ6HtlU\"",
    "mtime": "2023-09-18T10:21:08.777Z",
    "size": 41493,
    "path": "../public/light/assets/imgs/about/sq3.jpg"
  },
  "/light/assets/imgs/about/v1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b9fb-QJ2I9s8ZwKJpMWCMAnaJd0JS4Dc\"",
    "mtime": "2023-09-18T10:21:08.776Z",
    "size": 47611,
    "path": "../public/light/assets/imgs/about/v1.jpg"
  },
  "/light/assets/imgs/background/10.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.768Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/10.jpg"
  },
  "/light/assets/imgs/background/11.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.768Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/11.jpg"
  },
  "/light/assets/imgs/background/12.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.767Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/12.jpg"
  },
  "/light/assets/imgs/background/13.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.767Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/13.jpg"
  },
  "/light/assets/imgs/background/14.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.766Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/14.jpg"
  },
  "/light/assets/imgs/background/15.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.766Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/15.jpg"
  },
  "/light/assets/imgs/background/16.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.764Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/16.jpg"
  },
  "/light/assets/imgs/background/17.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.764Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/17.jpg"
  },
  "/light/assets/imgs/background/18.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.764Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/18.jpg"
  },
  "/light/assets/imgs/background/19.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.763Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/19.jpg"
  },
  "/light/assets/imgs/background/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.762Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/2.jpg"
  },
  "/light/assets/imgs/background/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.762Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/3.jpg"
  },
  "/light/assets/imgs/background/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.762Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/4.jpg"
  },
  "/light/assets/imgs/background/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.761Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/5.jpg"
  },
  "/light/assets/imgs/background/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.761Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/6.jpg"
  },
  "/light/assets/imgs/background/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.760Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/7.jpg"
  },
  "/light/assets/imgs/background/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.760Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/8.jpg"
  },
  "/light/assets/imgs/background/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.759Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/background/9.jpg"
  },
  "/light/assets/imgs/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.758Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/blog/1.jpg"
  },
  "/light/assets/imgs/blog/author1.jpg": {
    "type": "image/jpeg",
    "etag": "\"87d7-nW9DBpvqZrD51ut++3gtWyfYGgs\"",
    "mtime": "2023-09-18T10:21:08.758Z",
    "size": 34775,
    "path": "../public/light/assets/imgs/blog/author1.jpg"
  },
  "/light/assets/imgs/blog/b1.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.757Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/blog/b1.jpg"
  },
  "/light/assets/imgs/blog/b2.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.757Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/blog/b2.jpg"
  },
  "/light/assets/imgs/blog/b3.jpg": {
    "type": "image/jpeg",
    "etag": "\"f89d-NK4Fwy/1vpe8rOqJJxoKigiu2cg\"",
    "mtime": "2023-09-18T10:21:08.756Z",
    "size": 63645,
    "path": "../public/light/assets/imgs/blog/b3.jpg"
  },
  "/light/assets/imgs/blog/h1.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:08.756Z",
    "size": 56081,
    "path": "../public/light/assets/imgs/blog/h1.jpg"
  },
  "/light/assets/imgs/blog/h2.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:08.755Z",
    "size": 56081,
    "path": "../public/light/assets/imgs/blog/h2.jpg"
  },
  "/light/assets/imgs/blog/h3.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:08.755Z",
    "size": 56081,
    "path": "../public/light/assets/imgs/blog/h3.jpg"
  },
  "/light/assets/imgs/blog/h4.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:08.755Z",
    "size": 56081,
    "path": "../public/light/assets/imgs/blog/h4.jpg"
  },
  "/light/assets/imgs/blog/h5.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:08.754Z",
    "size": 56081,
    "path": "../public/light/assets/imgs/blog/h5.jpg"
  },
  "/light/assets/imgs/blog/h6.jpg": {
    "type": "image/jpeg",
    "etag": "\"db11-EAjr4vtdTaVd5h3sM+/LsKslQdw\"",
    "mtime": "2023-09-18T10:21:08.754Z",
    "size": 56081,
    "path": "../public/light/assets/imgs/blog/h6.jpg"
  },
  "/light/assets/imgs/brands/01.png": {
    "type": "image/png",
    "etag": "\"7a68-ytcYvZ/wAFD+z8hvm7YrbPq8jfo\"",
    "mtime": "2023-09-18T10:21:08.753Z",
    "size": 31336,
    "path": "../public/light/assets/imgs/brands/01.png"
  },
  "/light/assets/imgs/brands/02.png": {
    "type": "image/png",
    "etag": "\"9e7c-jnsSWZR8qOGS+UeuKRwPW0uu9Qk\"",
    "mtime": "2023-09-18T10:21:08.753Z",
    "size": 40572,
    "path": "../public/light/assets/imgs/brands/02.png"
  },
  "/light/assets/imgs/brands/03.png": {
    "type": "image/png",
    "etag": "\"a8b5-Uhr5WneECdNyrY/1De1k8JQxzhU\"",
    "mtime": "2023-09-18T10:21:08.752Z",
    "size": 43189,
    "path": "../public/light/assets/imgs/brands/03.png"
  },
  "/light/assets/imgs/brands/04.png": {
    "type": "image/png",
    "etag": "\"a24f-xOXAknj21fqls4/jDfWZjvCI3t0\"",
    "mtime": "2023-09-18T10:21:08.752Z",
    "size": 41551,
    "path": "../public/light/assets/imgs/brands/04.png"
  },
  "/light/assets/imgs/brands/05.png": {
    "type": "image/png",
    "etag": "\"a2fe-SxdW+OvUwYXgIM7AGpjOR2fs14s\"",
    "mtime": "2023-09-18T10:21:08.751Z",
    "size": 41726,
    "path": "../public/light/assets/imgs/brands/05.png"
  },
  "/light/assets/imgs/brands/06.png": {
    "type": "image/png",
    "etag": "\"9e7c-dVh0umLqDKVAj3kEXK1+UgZVfdI\"",
    "mtime": "2023-09-18T10:21:08.751Z",
    "size": 40572,
    "path": "../public/light/assets/imgs/brands/06.png"
  },
  "/light/assets/imgs/brands/07.png": {
    "type": "image/png",
    "etag": "\"a8b5-oTHCMyrZRtfxcABVpeJ0QC/R10g\"",
    "mtime": "2023-09-18T10:21:08.750Z",
    "size": 43189,
    "path": "../public/light/assets/imgs/brands/07.png"
  },
  "/light/assets/imgs/brands/08.png": {
    "type": "image/png",
    "etag": "\"a31c-01xqXnbthukrz3IKevcbr7AX7Uw\"",
    "mtime": "2023-09-18T10:21:08.750Z",
    "size": 41756,
    "path": "../public/light/assets/imgs/brands/08.png"
  },
  "/light/assets/imgs/brands/1.png": {
    "type": "image/png",
    "etag": "\"2264-oh5mmUoQ9XuEsIvoMiC9SQrmzZw\"",
    "mtime": "2023-09-18T10:21:08.750Z",
    "size": 8804,
    "path": "../public/light/assets/imgs/brands/1.png"
  },
  "/light/assets/imgs/brands/2.png": {
    "type": "image/png",
    "etag": "\"fa0-qzdOt/65IegJHepyqLulCkPhW9c\"",
    "mtime": "2023-09-18T10:21:08.750Z",
    "size": 4000,
    "path": "../public/light/assets/imgs/brands/2.png"
  },
  "/light/assets/imgs/brands/3.png": {
    "type": "image/png",
    "etag": "\"3513-mozweyMVXCwrBjxHsejvT08ptV4\"",
    "mtime": "2023-09-18T10:21:08.749Z",
    "size": 13587,
    "path": "../public/light/assets/imgs/brands/3.png"
  },
  "/light/assets/imgs/brands/4.png": {
    "type": "image/png",
    "etag": "\"31d5-kmpQj2zHrYaWR7h703OwHRrm9/I\"",
    "mtime": "2023-09-18T10:21:08.749Z",
    "size": 12757,
    "path": "../public/light/assets/imgs/brands/4.png"
  },
  "/light/assets/imgs/brands/5.png": {
    "type": "image/png",
    "etag": "\"14da-GA5/SHiEolpRi0B3EsbJRnL+uKI\"",
    "mtime": "2023-09-18T10:21:08.749Z",
    "size": 5338,
    "path": "../public/light/assets/imgs/brands/5.png"
  },
  "/light/assets/imgs/brands/6.png": {
    "type": "image/png",
    "etag": "\"30dd-soPLlEcoBFnkbERwH4EoW7FVoBY\"",
    "mtime": "2023-09-18T10:21:08.748Z",
    "size": 12509,
    "path": "../public/light/assets/imgs/brands/6.png"
  },
  "/light/assets/imgs/brands/7.png": {
    "type": "image/png",
    "etag": "\"1e32-ShEOU59+4gpPBchZTfGUOu2lKHA\"",
    "mtime": "2023-09-18T10:21:08.748Z",
    "size": 7730,
    "path": "../public/light/assets/imgs/brands/7.png"
  },
  "/light/assets/imgs/brands/8.png": {
    "type": "image/png",
    "etag": "\"3460-DSdFb4chhzsHfuXvzq0WJ50G3UY\"",
    "mtime": "2023-09-18T10:21:08.748Z",
    "size": 13408,
    "path": "../public/light/assets/imgs/brands/8.png"
  },
  "/light/assets/imgs/freelancer/h2.png": {
    "type": "image/png",
    "etag": "\"7d33-nGK6FjkCDxIrCd7wY2MsyFULYHo\"",
    "mtime": "2023-09-18T10:21:08.748Z",
    "size": 32051,
    "path": "../public/light/assets/imgs/freelancer/h2.png"
  },
  "/light/assets/imgs/header/c1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7dc4-3t0+8VOkaoOsXEXbXevekloqSM0\"",
    "mtime": "2023-09-18T10:21:08.743Z",
    "size": 32196,
    "path": "../public/light/assets/imgs/header/c1.jpg"
  },
  "/light/assets/imgs/header/c2.jpg": {
    "type": "image/jpeg",
    "etag": "\"734e-RIFuWcn+NMaXztUdJLnSD61qfTY\"",
    "mtime": "2023-09-18T10:21:08.742Z",
    "size": 29518,
    "path": "../public/light/assets/imgs/header/c2.jpg"
  },
  "/light/assets/imgs/header/slid1.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:08.742Z",
    "size": 55922,
    "path": "../public/light/assets/imgs/header/slid1.jpg"
  },
  "/light/assets/imgs/header/slid3.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:08.741Z",
    "size": 55922,
    "path": "../public/light/assets/imgs/header/slid3.jpg"
  },
  "/light/assets/imgs/header/slid5.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:08.741Z",
    "size": 55922,
    "path": "../public/light/assets/imgs/header/slid5.jpg"
  },
  "/light/assets/imgs/header/t1.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:08.740Z",
    "size": 55922,
    "path": "../public/light/assets/imgs/header/t1.jpg"
  },
  "/light/assets/imgs/header/t2.jpg": {
    "type": "image/jpeg",
    "etag": "\"da72-eNg/7Zn+wFcwK3hlalInX2gYLvA\"",
    "mtime": "2023-09-18T10:21:08.740Z",
    "size": 55922,
    "path": "../public/light/assets/imgs/header/t2.jpg"
  },
  "/light/assets/imgs/patterns/1.png": {
    "type": "image/png",
    "etag": "\"15efdb-nN+KlVDZu0om4I5ZVEcqLkm682g\"",
    "mtime": "2023-09-18T10:21:08.738Z",
    "size": 1437659,
    "path": "../public/light/assets/imgs/patterns/1.png"
  },
  "/light/assets/imgs/patterns/1.svg": {
    "type": "image/svg+xml",
    "etag": "\"1837-/t+EahMkU6O6QFKyGsDy/AvaLEY\"",
    "mtime": "2023-09-18T10:21:08.735Z",
    "size": 6199,
    "path": "../public/light/assets/imgs/patterns/1.svg"
  },
  "/light/assets/imgs/patterns/abstact-BG.png": {
    "type": "image/png",
    "etag": "\"1dbcf-PDxI2Oda/vBNW9Mg84W2wy5v72A\"",
    "mtime": "2023-09-18T10:21:08.735Z",
    "size": 121807,
    "path": "../public/light/assets/imgs/patterns/abstact-BG.png"
  },
  "/light/assets/imgs/patterns/asx7.png": {
    "type": "image/png",
    "etag": "\"5d74e-/HtIsLvSMqvyv/caBh+lhw5k360\"",
    "mtime": "2023-09-18T10:21:08.734Z",
    "size": 382798,
    "path": "../public/light/assets/imgs/patterns/asx7.png"
  },
  "/light/assets/imgs/patterns/bg-lines-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a25-ltb86M6W57ZgiITiTOb+jZsbC7w\"",
    "mtime": "2023-09-18T10:21:08.730Z",
    "size": 6693,
    "path": "../public/light/assets/imgs/patterns/bg-lines-1.svg"
  },
  "/light/assets/imgs/patterns/bg-pattern.png": {
    "type": "image/png",
    "etag": "\"898c-tEiComjiPJgPN0mCgaOE221um9k\"",
    "mtime": "2023-09-18T10:21:08.730Z",
    "size": 35212,
    "path": "../public/light/assets/imgs/patterns/bg-pattern.png"
  },
  "/light/assets/imgs/patterns/dots.png": {
    "type": "image/png",
    "etag": "\"671-ykMgnbnZ0e8uH71TjWSpd0Yb53M\"",
    "mtime": "2023-09-18T10:21:08.730Z",
    "size": 1649,
    "path": "../public/light/assets/imgs/patterns/dots.png"
  },
  "/light/assets/imgs/patterns/dots2.png": {
    "type": "image/png",
    "etag": "\"672-wYVe0rWE8liQWtggBxuB74NBYmM\"",
    "mtime": "2023-09-18T10:21:08.729Z",
    "size": 1650,
    "path": "../public/light/assets/imgs/patterns/dots2.png"
  },
  "/light/assets/imgs/patterns/graph.png": {
    "type": "image/png",
    "etag": "\"2caf-GKmhNdZ3JlOquf6moybM+uicOb4\"",
    "mtime": "2023-09-18T10:21:08.729Z",
    "size": 11439,
    "path": "../public/light/assets/imgs/patterns/graph.png"
  },
  "/light/assets/imgs/patterns/home-hero-lines-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"87c-OUTpaOgqXUNTrcz/kOyhIg8P4uM\"",
    "mtime": "2023-09-18T10:21:08.729Z",
    "size": 2172,
    "path": "../public/light/assets/imgs/patterns/home-hero-lines-2.svg"
  },
  "/light/assets/imgs/patterns/home-inspiration-lines.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d8c-PRrqp7CosSnphFJDq/u/vYFjwzA\"",
    "mtime": "2023-09-18T10:21:08.729Z",
    "size": 7564,
    "path": "../public/light/assets/imgs/patterns/home-inspiration-lines.svg"
  },
  "/light/assets/imgs/patterns/noise.png": {
    "type": "image/png",
    "etag": "\"2afc-kEVRQlsjsYAL1WPO4LiK1yV29fg\"",
    "mtime": "2023-09-18T10:21:08.728Z",
    "size": 11004,
    "path": "../public/light/assets/imgs/patterns/noise.png"
  },
  "/light/assets/imgs/patterns/noise1.png": {
    "type": "image/png",
    "etag": "\"2eb37-LBzhsPCv6zuNljlo/B84nyd7t1Q\"",
    "mtime": "2023-09-18T10:21:08.728Z",
    "size": 191287,
    "path": "../public/light/assets/imgs/patterns/noise1.png"
  },
  "/light/assets/imgs/patterns/patt.svg": {
    "type": "image/svg+xml",
    "etag": "\"606-RJUJM6ABX1ztI39D32JGWen95Gk\"",
    "mtime": "2023-09-18T10:21:08.727Z",
    "size": 1542,
    "path": "../public/light/assets/imgs/patterns/patt.svg"
  },
  "/light/assets/imgs/patterns/pattern.png": {
    "type": "image/png",
    "etag": "\"3539b-vxuo6U8X45WYTs+T2/OxoaTolxs\"",
    "mtime": "2023-09-18T10:21:08.727Z",
    "size": 218011,
    "path": "../public/light/assets/imgs/patterns/pattern.png"
  },
  "/light/assets/imgs/patterns/pattern.svg": {
    "type": "image/svg+xml",
    "etag": "\"606-RJUJM6ABX1ztI39D32JGWen95Gk\"",
    "mtime": "2023-09-18T10:21:08.726Z",
    "size": 1542,
    "path": "../public/light/assets/imgs/patterns/pattern.svg"
  },
  "/light/assets/imgs/patterns/pattern2.png": {
    "type": "image/png",
    "etag": "\"24057-VrV0y+8BTD+t4eBNU49Sc8na2u4\"",
    "mtime": "2023-09-18T10:21:08.725Z",
    "size": 147543,
    "path": "../public/light/assets/imgs/patterns/pattern2.png"
  },
  "/light/assets/imgs/patterns/pattern3.png": {
    "type": "image/png",
    "etag": "\"59fd-dr0802W05fQZ5hkDtR7IYRulhuQ\"",
    "mtime": "2023-09-18T10:21:08.725Z",
    "size": 23037,
    "path": "../public/light/assets/imgs/patterns/pattern3.png"
  },
  "/light/assets/imgs/patterns/phrase-lines2.png": {
    "type": "image/png",
    "etag": "\"153e6-/f/na0JEolMW78HUEXqAzOFyOyA\"",
    "mtime": "2023-09-18T10:21:08.724Z",
    "size": 87014,
    "path": "../public/light/assets/imgs/patterns/phrase-lines2.png"
  },
  "/light/assets/imgs/patterns/s1.png": {
    "type": "image/png",
    "etag": "\"45604-kabdUVo80MOpaOh5dYdtrNf0ppU\"",
    "mtime": "2023-09-18T10:21:08.724Z",
    "size": 284164,
    "path": "../public/light/assets/imgs/patterns/s1.png"
  },
  "/light/assets/imgs/sass-img/a1.png": {
    "type": "image/png",
    "etag": "\"72d6-MVriY3s5hiGxGmAaVnnGQ13vXU4\"",
    "mtime": "2023-09-18T10:21:08.711Z",
    "size": 29398,
    "path": "../public/light/assets/imgs/sass-img/a1.png"
  },
  "/light/assets/imgs/sass-img/a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"311320-YNv5NAgJcFS4aGgKj9tLun2DgjY\"",
    "mtime": "2023-09-18T10:21:08.709Z",
    "size": 3216160,
    "path": "../public/light/assets/imgs/sass-img/a1.svg"
  },
  "/light/assets/imgs/sass-img/header1.png": {
    "type": "image/png",
    "etag": "\"40aac-B5yZBFVWlNhvR95P7ogvN7eqVsc\"",
    "mtime": "2023-09-18T10:21:08.700Z",
    "size": 264876,
    "path": "../public/light/assets/imgs/sass-img/header1.png"
  },
  "/light/assets/imgs/sass-img/shap1.png": {
    "type": "image/png",
    "etag": "\"dea6-Slpr1g2G1Hsr1ghTmguLiwMfdao\"",
    "mtime": "2023-09-18T10:21:08.688Z",
    "size": 56998,
    "path": "../public/light/assets/imgs/sass-img/shap1.png"
  },
  "/light/assets/imgs/sass-img/shap2.png": {
    "type": "image/png",
    "etag": "\"e20e-s1sagFgBZo4pnWg9morKDKuMdwg\"",
    "mtime": "2023-09-18T10:21:08.688Z",
    "size": 57870,
    "path": "../public/light/assets/imgs/sass-img/shap2.png"
  },
  "/light/assets/imgs/serv-icons/0.png": {
    "type": "image/png",
    "etag": "\"4992-rjG7zC7HYcO32SHilCobi1UCiPc\"",
    "mtime": "2023-09-18T10:21:08.674Z",
    "size": 18834,
    "path": "../public/light/assets/imgs/serv-icons/0.png"
  },
  "/light/assets/imgs/serv-icons/01-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"718-OvDlr31sCLGPDROk7tOUGKu5PT8\"",
    "mtime": "2023-09-18T10:21:08.674Z",
    "size": 1816,
    "path": "../public/light/assets/imgs/serv-icons/01-dark.svg"
  },
  "/light/assets/imgs/serv-icons/02-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"509-zv4j32NoOIn8FKjayfZkmo/eUkY\"",
    "mtime": "2023-09-18T10:21:08.674Z",
    "size": 1289,
    "path": "../public/light/assets/imgs/serv-icons/02-dark.svg"
  },
  "/light/assets/imgs/serv-icons/03-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"a08-BpCXdgo6wX61vBp/DRfk87nfxzE\"",
    "mtime": "2023-09-18T10:21:08.674Z",
    "size": 2568,
    "path": "../public/light/assets/imgs/serv-icons/03-dark.svg"
  },
  "/light/assets/imgs/serv-icons/04-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"4af-s50pL/+gnFJaGqIcjv1i0u2C82A\"",
    "mtime": "2023-09-18T10:21:08.674Z",
    "size": 1199,
    "path": "../public/light/assets/imgs/serv-icons/04-dark.svg"
  },
  "/light/assets/imgs/serv-icons/05-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"a5f-nRBJ+zYCL+T76vCfVew7mP7rDxw\"",
    "mtime": "2023-09-18T10:21:08.673Z",
    "size": 2655,
    "path": "../public/light/assets/imgs/serv-icons/05-dark.svg"
  },
  "/light/assets/imgs/serv-icons/1.png": {
    "type": "image/png",
    "etag": "\"527d-hM0YDIG4q9Is+9j/J/uMetti4Lw\"",
    "mtime": "2023-09-18T10:21:08.673Z",
    "size": 21117,
    "path": "../public/light/assets/imgs/serv-icons/1.png"
  },
  "/light/assets/imgs/serv-icons/2.png": {
    "type": "image/png",
    "etag": "\"4085-f7p5Mp3Zexl48+CBLyR86W9DhUg\"",
    "mtime": "2023-09-18T10:21:08.673Z",
    "size": 16517,
    "path": "../public/light/assets/imgs/serv-icons/2.png"
  },
  "/light/assets/imgs/serv-img/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:08.673Z",
    "size": 16766,
    "path": "../public/light/assets/imgs/serv-img/1.jpg"
  },
  "/light/assets/imgs/serv-img/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:08.672Z",
    "size": 16766,
    "path": "../public/light/assets/imgs/serv-img/2.jpg"
  },
  "/light/assets/imgs/serv-img/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:08.672Z",
    "size": 16766,
    "path": "../public/light/assets/imgs/serv-img/3.jpg"
  },
  "/light/assets/imgs/serv-img/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:08.672Z",
    "size": 16766,
    "path": "../public/light/assets/imgs/serv-img/4.jpg"
  },
  "/light/assets/imgs/serv-img/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:08.671Z",
    "size": 16766,
    "path": "../public/light/assets/imgs/serv-img/5.jpg"
  },
  "/light/assets/imgs/serv-img/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"417e-iJdWweUeiVz6dplGF+hE1OwTCWw\"",
    "mtime": "2023-09-18T10:21:08.670Z",
    "size": 16766,
    "path": "../public/light/assets/imgs/serv-img/6.jpg"
  },
  "/light/assets/imgs/shop/021c42171449197.646ed6f5a1ce0.jpeg": {
    "type": "image/jpeg",
    "etag": "\"16ac59-8zZmnG9QEXOyyI3eYkLIrAemVt8\"",
    "mtime": "2023-09-18T10:21:08.670Z",
    "size": 1485913,
    "path": "../public/light/assets/imgs/shop/021c42171449197.646ed6f5a1ce0.jpeg"
  },
  "/light/assets/imgs/shop/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"57480-7iPIFvx/3DXqMvvBSVhd85OUiUw\"",
    "mtime": "2023-09-18T10:21:08.667Z",
    "size": 357504,
    "path": "../public/light/assets/imgs/shop/1.jpg"
  },
  "/light/assets/imgs/shop/148a81106626955.5faa111329937.png": {
    "type": "image/png",
    "etag": "\"28cf3-iOad8lt9LsXLzt/KlmLc+wDMKY8\"",
    "mtime": "2023-09-18T10:21:08.666Z",
    "size": 167155,
    "path": "../public/light/assets/imgs/shop/148a81106626955.5faa111329937.png"
  },
  "/light/assets/imgs/shop/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4e275-ZH2mXQHuX3Y4hNCasT8f1sQeV9I\"",
    "mtime": "2023-09-18T10:21:08.665Z",
    "size": 320117,
    "path": "../public/light/assets/imgs/shop/2.jpg"
  },
  "/light/assets/imgs/shop/21d597170195381.645a08c48751e.jpg": {
    "type": "image/jpeg",
    "etag": "\"1618e-qyJ8KzV/2I84EiQ46YkA3a63FO4\"",
    "mtime": "2023-09-18T10:21:08.664Z",
    "size": 90510,
    "path": "../public/light/assets/imgs/shop/21d597170195381.645a08c48751e.jpg"
  },
  "/light/assets/imgs/shop/249077163666051.63ea18de3ab40.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1bcf3-D7m8ZAuieqv82X4ikNqslKG3ryE\"",
    "mtime": "2023-09-18T10:21:08.663Z",
    "size": 113907,
    "path": "../public/light/assets/imgs/shop/249077163666051.63ea18de3ab40.jpeg"
  },
  "/light/assets/imgs/shop/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"492eb-Ob06G/gKFM4UCyf1oMUwpYa4U7s\"",
    "mtime": "2023-09-18T10:21:08.662Z",
    "size": 299755,
    "path": "../public/light/assets/imgs/shop/3.jpg"
  },
  "/light/assets/imgs/shop/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b690-OF6cD+kRdyHBQR6c4gKokvb8IKE\"",
    "mtime": "2023-09-18T10:21:08.661Z",
    "size": 177808,
    "path": "../public/light/assets/imgs/shop/4.jpg"
  },
  "/light/assets/imgs/shop/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"44dbd-6jm8Qa6bv6kCJgRNHh1bcIVJaAY\"",
    "mtime": "2023-09-18T10:21:08.660Z",
    "size": 282045,
    "path": "../public/light/assets/imgs/shop/5.jpg"
  },
  "/light/assets/imgs/shop/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"f3f2-AtYQd2Vx8guwCzZa3HDdTSndveE\"",
    "mtime": "2023-09-18T10:21:08.658Z",
    "size": 62450,
    "path": "../public/light/assets/imgs/shop/6.jpg"
  },
  "/light/assets/imgs/shop/66c99a171449197.646ed6f5a41ea.jpg": {
    "type": "image/jpeg",
    "etag": "\"17a4da-ZsYaXV8yV2i6a+2wpQ+oip3SVfQ\"",
    "mtime": "2023-09-18T10:21:08.657Z",
    "size": 1549530,
    "path": "../public/light/assets/imgs/shop/66c99a171449197.646ed6f5a41ea.jpg"
  },
  "/light/assets/imgs/shop/695b60106626955.5f9d6d5c5ea83.png": {
    "type": "image/png",
    "etag": "\"67975-lycAXCgxbhPETT0wZUDYrhM3bM8\"",
    "mtime": "2023-09-18T10:21:08.651Z",
    "size": 424309,
    "path": "../public/light/assets/imgs/shop/695b60106626955.5f9d6d5c5ea83.png"
  },
  "/light/assets/imgs/shop/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"15220-ShK/WNv/9CrRsffLNXe4eBQOJ40\"",
    "mtime": "2023-09-18T10:21:08.650Z",
    "size": 86560,
    "path": "../public/light/assets/imgs/shop/7.jpg"
  },
  "/light/assets/imgs/shop/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c1bf-AR6QN1i6/JPZjkq1IFOLotnwfDU\"",
    "mtime": "2023-09-18T10:21:08.649Z",
    "size": 115135,
    "path": "../public/light/assets/imgs/shop/8.jpg"
  },
  "/light/assets/imgs/shop/861338108819477.5fc64fb27635a.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e1b5c-XvLk40kJpmWbn1a5Nu0ZOcp8dQw\"",
    "mtime": "2023-09-18T10:21:08.648Z",
    "size": 1973084,
    "path": "../public/light/assets/imgs/shop/861338108819477.5fc64fb27635a.jpg"
  },
  "/light/assets/imgs/shop/866f28108819477.5fc64fb275b16.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d3498-7WIwkbVOiFlDrYMwn/nt+UIf410\"",
    "mtime": "2023-09-18T10:21:08.643Z",
    "size": 1914008,
    "path": "../public/light/assets/imgs/shop/866f28108819477.5fc64fb275b16.jpg"
  },
  "/light/assets/imgs/shop/893d9b170195381.645a1131b96e0.jpg": {
    "type": "image/jpeg",
    "etag": "\"220e1-wScPFkhWbbBGh9uwa7on4uWmE7E\"",
    "mtime": "2023-09-18T10:21:08.640Z",
    "size": 139489,
    "path": "../public/light/assets/imgs/shop/893d9b170195381.645a1131b96e0.jpg"
  },
  "/light/assets/imgs/shop/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"11676-ji7nCd7M396GWFqv3+jhhQa5s4g\"",
    "mtime": "2023-09-18T10:21:08.639Z",
    "size": 71286,
    "path": "../public/light/assets/imgs/shop/9.jpg"
  },
  "/light/assets/imgs/shop/a215e7170195381.645a0ceab3303.jpg": {
    "type": "image/jpeg",
    "etag": "\"21bfc-amzDgijHC/+slGMXkZHbzxswMAQ\"",
    "mtime": "2023-09-18T10:21:08.639Z",
    "size": 138236,
    "path": "../public/light/assets/imgs/shop/a215e7170195381.645a0ceab3303.jpg"
  },
  "/light/assets/imgs/shop/b2faaf107708769.5fad187d4b4eb.png": {
    "type": "image/png",
    "etag": "\"1f2af-DCggBwaG+JporqjOQ8oKmHJKmZw\"",
    "mtime": "2023-09-18T10:21:08.638Z",
    "size": 127663,
    "path": "../public/light/assets/imgs/shop/b2faaf107708769.5fad187d4b4eb.png"
  },
  "/light/assets/imgs/shop/c44e27125748251.611f4c3ab11c1.jpg": {
    "type": "image/jpeg",
    "etag": "\"178c95-gAkq5E4QrGnF1A4+ovb1W3EkHpE\"",
    "mtime": "2023-09-18T10:21:08.637Z",
    "size": 1543317,
    "path": "../public/light/assets/imgs/shop/c44e27125748251.611f4c3ab11c1.jpg"
  },
  "/light/assets/imgs/shop/cce71a125748251.611f4c3ab0339.jpg": {
    "type": "image/jpeg",
    "etag": "\"196ece-EX+79hhyx3aPR2SCpBJPcXArpEE\"",
    "mtime": "2023-09-18T10:21:08.629Z",
    "size": 1666766,
    "path": "../public/light/assets/imgs/shop/cce71a125748251.611f4c3ab0339.jpg"
  },
  "/light/assets/imgs/shop/def519135204785.61e407b27e526.jpg": {
    "type": "image/jpeg",
    "etag": "\"2d56a-bKePcDnVg6h9LFQZ4m+Q8tZcBJg\"",
    "mtime": "2023-09-18T10:21:08.626Z",
    "size": 185706,
    "path": "../public/light/assets/imgs/shop/def519135204785.61e407b27e526.jpg"
  },
  "/light/assets/imgs/shop/f28492154111893.633c4cd2b6d3d.jpg": {
    "type": "image/jpeg",
    "etag": "\"e0cf9-FAx67lVWu6712OA70nN+MTypzUs\"",
    "mtime": "2023-09-18T10:21:08.626Z",
    "size": 920825,
    "path": "../public/light/assets/imgs/shop/f28492154111893.633c4cd2b6d3d.jpg"
  },
  "/light/assets/imgs/shop/f67ca4108819477.5fc64fb277c7a.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b7381-mNx22wOvVy7s1eiI+i0tCkARLDU\"",
    "mtime": "2023-09-18T10:21:08.622Z",
    "size": 1799041,
    "path": "../public/light/assets/imgs/shop/f67ca4108819477.5fc64fb277c7a.jpg"
  },
  "/light/assets/imgs/shop/ff4380125748251.611f4c3ab1c33.jpg": {
    "type": "image/jpeg",
    "etag": "\"2042fe-AIeCcGS0cCORmmwMMi9IwdTJ4dM\"",
    "mtime": "2023-09-18T10:21:08.618Z",
    "size": 2114302,
    "path": "../public/light/assets/imgs/shop/ff4380125748251.611f4c3ab1c33.jpg"
  },
  "/light/assets/imgs/shop/j.png": {
    "type": "image/png",
    "etag": "\"30516-gWlEjTRlHEO6eEZxAV7jO+MwevI\"",
    "mtime": "2023-09-18T10:21:08.615Z",
    "size": 197910,
    "path": "../public/light/assets/imgs/shop/j.png"
  },
  "/light/assets/imgs/shop/rwd (1).jpg": {
    "type": "image/jpeg",
    "etag": "\"294f1-iSPJd1lZyLz1Y5umId19pAfBNRo\"",
    "mtime": "2023-09-18T10:21:08.614Z",
    "size": 169201,
    "path": "../public/light/assets/imgs/shop/rwd (1).jpg"
  },
  "/light/assets/imgs/shop/rwd (2).jpg": {
    "type": "image/jpeg",
    "etag": "\"1adcc-T54bHdy1Av+l5kPX+weBoIoTnQo\"",
    "mtime": "2023-09-18T10:21:08.613Z",
    "size": 110028,
    "path": "../public/light/assets/imgs/shop/rwd (2).jpg"
  },
  "/light/assets/imgs/svg-assets/arrow-right-top.svg": {
    "type": "image/svg+xml",
    "etag": "\"218-bjrXgfUy/VvzMPSqKhsR9JWUCvM\"",
    "mtime": "2023-09-18T10:21:08.613Z",
    "size": 536,
    "path": "../public/light/assets/imgs/svg-assets/arrow-right-top.svg"
  },
  "/light/assets/imgs/svg-assets/arrow-top-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"49e-HFkqlot5cWz79hIlnoE3eTbET1c\"",
    "mtime": "2023-09-18T10:21:08.612Z",
    "size": 1182,
    "path": "../public/light/assets/imgs/svg-assets/arrow-top-right.svg"
  },
  "/light/assets/imgs/svg-assets/circle-star.svg": {
    "type": "image/svg+xml",
    "etag": "\"6a8-4LqS5STKZOERo+hAhRWPtVMREAU\"",
    "mtime": "2023-09-18T10:21:08.612Z",
    "size": 1704,
    "path": "../public/light/assets/imgs/svg-assets/circle-star.svg"
  },
  "/light/assets/imgs/svg-assets/claw.svg": {
    "type": "image/svg+xml",
    "etag": "\"988-LqZ9OBRRbeIlBfgj35k8IaNTqfA\"",
    "mtime": "2023-09-18T10:21:08.612Z",
    "size": 2440,
    "path": "../public/light/assets/imgs/svg-assets/claw.svg"
  },
  "/light/assets/imgs/svg-assets/cta-shape-2.png": {
    "type": "image/png",
    "etag": "\"4b49-rFMragHM5hCPR+w0xf2KSRJgBXs\"",
    "mtime": "2023-09-18T10:21:08.612Z",
    "size": 19273,
    "path": "../public/light/assets/imgs/svg-assets/cta-shape-2.png"
  },
  "/light/assets/imgs/svg-assets/hi.png": {
    "type": "image/png",
    "etag": "\"5160-uWpFQIo+LyTgy0fEJIns2v4K5+0\"",
    "mtime": "2023-09-18T10:21:08.612Z",
    "size": 20832,
    "path": "../public/light/assets/imgs/svg-assets/hi.png"
  },
  "/light/assets/imgs/svg-assets/left-arrow-curve.png": {
    "type": "image/png",
    "etag": "\"117c-XnnnLHX19TwFk7kkPwustzWtryY\"",
    "mtime": "2023-09-18T10:21:08.611Z",
    "size": 4476,
    "path": "../public/light/assets/imgs/svg-assets/left-arrow-curve.png"
  },
  "/light/assets/imgs/svg-assets/left-quote.png": {
    "type": "image/png",
    "etag": "\"488b-3WVY0n86AYX0FrcchhFx16txB28\"",
    "mtime": "2023-09-18T10:21:08.611Z",
    "size": 18571,
    "path": "../public/light/assets/imgs/svg-assets/left-quote.png"
  },
  "/light/assets/imgs/svg-assets/patern-bg.png": {
    "type": "image/png",
    "etag": "\"b569-uUoh6szXtCDuE2S71iViv46iuH0\"",
    "mtime": "2023-09-18T10:21:08.611Z",
    "size": 46441,
    "path": "../public/light/assets/imgs/svg-assets/patern-bg.png"
  },
  "/light/assets/imgs/svg-assets/quotation-mark.png": {
    "type": "image/png",
    "etag": "\"10b5-hle+oNefR5oj2uW1uJQ8bWe2nuU\"",
    "mtime": "2023-09-18T10:21:08.610Z",
    "size": 4277,
    "path": "../public/light/assets/imgs/svg-assets/quotation-mark.png"
  },
  "/light/assets/imgs/svg-assets/quote.png": {
    "type": "image/png",
    "etag": "\"12ea-0WiF39FPzlYlJsggPhuX3CjMNuY\"",
    "mtime": "2023-09-18T10:21:08.610Z",
    "size": 4842,
    "path": "../public/light/assets/imgs/svg-assets/quote.png"
  },
  "/light/assets/imgs/svg-assets/right-arrow-curve.png": {
    "type": "image/png",
    "etag": "\"1093-2LuRoylcsYUwklsSTwPq7+Ae1Mo\"",
    "mtime": "2023-09-18T10:21:08.610Z",
    "size": 4243,
    "path": "../public/light/assets/imgs/svg-assets/right-arrow-curve.png"
  },
  "/light/assets/imgs/svg-assets/star-pink.png": {
    "type": "image/png",
    "etag": "\"2280-MfnkPCT2X5snfI51J40u1HdGRcE\"",
    "mtime": "2023-09-18T10:21:08.610Z",
    "size": 8832,
    "path": "../public/light/assets/imgs/svg-assets/star-pink.png"
  },
  "/light/assets/imgs/svg-assets/star-shape.png": {
    "type": "image/png",
    "etag": "\"889f-9gJP6mf5SmcpGhHqj3V2sKC1Af8\"",
    "mtime": "2023-09-18T10:21:08.609Z",
    "size": 34975,
    "path": "../public/light/assets/imgs/svg-assets/star-shape.png"
  },
  "/light/assets/imgs/svg-assets/star-white.png": {
    "type": "image/png",
    "etag": "\"21d4-YeARgTpkd251MuTfe7W9Zy6i8RY\"",
    "mtime": "2023-09-18T10:21:08.609Z",
    "size": 8660,
    "path": "../public/light/assets/imgs/svg-assets/star-white.png"
  },
  "/light/assets/imgs/svg-assets/star.png": {
    "type": "image/png",
    "etag": "\"a84-0pGtFRP3fm5NIdKMdIYOPsxi1Rc\"",
    "mtime": "2023-09-18T10:21:08.609Z",
    "size": 2692,
    "path": "../public/light/assets/imgs/svg-assets/star.png"
  },
  "/light/assets/imgs/svg-assets/vector star.png": {
    "type": "image/png",
    "etag": "\"386c-3EWMfzZ3ekHGe4rxuMdEvmKbfZE\"",
    "mtime": "2023-09-18T10:21:08.609Z",
    "size": 14444,
    "path": "../public/light/assets/imgs/svg-assets/vector star.png"
  },
  "/light/assets/imgs/svg-assets/vector-star.png": {
    "type": "image/png",
    "etag": "\"194c-DOs2NRSmdWqx+U6M/ECb+Q34rG4\"",
    "mtime": "2023-09-18T10:21:08.609Z",
    "size": 6476,
    "path": "../public/light/assets/imgs/svg-assets/vector-star.png"
  },
  "/light/assets/imgs/team/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.608Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/team/1.jpg"
  },
  "/light/assets/imgs/team/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.608Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/team/2.jpg"
  },
  "/light/assets/imgs/team/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.607Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/team/3.jpg"
  },
  "/light/assets/imgs/team/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.607Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/team/4.jpg"
  },
  "/light/assets/imgs/team/t1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.606Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/team/t1.jpg"
  },
  "/light/assets/imgs/team/t2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.605Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/team/t2.jpg"
  },
  "/light/assets/imgs/team/t3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.605Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/team/t3.jpg"
  },
  "/light/assets/imgs/team/t4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.605Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/team/t4.jpg"
  },
  "/light/assets/imgs/testim/01.png": {
    "type": "image/png",
    "etag": "\"1427c-EjCTuK27AaeWMr7xfG3Tb15Rtzg\"",
    "mtime": "2023-09-18T10:21:08.604Z",
    "size": 82556,
    "path": "../public/light/assets/imgs/testim/01.png"
  },
  "/light/assets/imgs/testim/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.600Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/testim/1.jpg"
  },
  "/light/assets/imgs/testim/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.599Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/testim/2.jpg"
  },
  "/light/assets/imgs/testim/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.599Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/testim/3.jpg"
  },
  "/light/assets/imgs/testim/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.599Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/testim/4.jpg"
  },
  "/light/assets/imgs/testim/t1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.598Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/testim/t1.jpg"
  },
  "/light/assets/imgs/testim/t2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.598Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/testim/t2.jpg"
  },
  "/light/assets/imgs/testim/t3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.598Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/testim/t3.jpg"
  },
  "/light/assets/imgs/testim/t4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8da6-pTJLJgawwhJd20UxWDqYC1sAWsE\"",
    "mtime": "2023-09-18T10:21:08.597Z",
    "size": 36262,
    "path": "../public/light/assets/imgs/testim/t4.jpg"
  },
  "/light/assets/scss/components/_buttons.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"123d-/wL1alwpv5Zv/tG0pjcycPMdONU\"",
    "mtime": "2023-09-18T10:21:08.539Z",
    "size": 4669,
    "path": "../public/light/assets/scss/components/_buttons.scss"
  },
  "/light/assets/scss/components/_cursor.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"c77-QzJJg7aX+j5lJsxUntoIs3JZRP8\"",
    "mtime": "2023-09-18T10:21:08.538Z",
    "size": 3191,
    "path": "../public/light/assets/scss/components/_cursor.scss"
  },
  "/light/assets/scss/components/_extra.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"1c8f-SrwftegtYW4tm4HT3soiA88Vo5E\"",
    "mtime": "2023-09-18T10:21:08.538Z",
    "size": 7311,
    "path": "../public/light/assets/scss/components/_extra.scss"
  },
  "/light/assets/scss/components/_helper.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"4e9e-bH8+TmA3zx5/q/oIzTjFV9JX+ks\"",
    "mtime": "2023-09-18T10:21:08.538Z",
    "size": 20126,
    "path": "../public/light/assets/scss/components/_helper.scss"
  },
  "/light/assets/scss/components/_menu.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"362b-Ted+gksJVItpbTVKzmtP0W21II4\"",
    "mtime": "2023-09-18T10:21:08.537Z",
    "size": 13867,
    "path": "../public/light/assets/scss/components/_menu.scss"
  },
  "/light/assets/scss/components/_modal.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.537Z",
    "size": 0,
    "path": "../public/light/assets/scss/components/_modal.scss"
  },
  "/light/assets/scss/components/_overlay.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"892-I228Tf7HZW3sa1wqlz9ij2wW8fg\"",
    "mtime": "2023-09-18T10:21:08.537Z",
    "size": 2194,
    "path": "../public/light/assets/scss/components/_overlay.scss"
  },
  "/light/assets/scss/components/_preloader.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"522-cLPTHyo5GCqP7d0D8dG6uHGo0lw\"",
    "mtime": "2023-09-18T10:21:08.537Z",
    "size": 1314,
    "path": "../public/light/assets/scss/components/_preloader.scss"
  },
  "/light/assets/scss/components/_title.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"d1f-XJoYDZyH9RmemWR0pk/JGdYabd8\"",
    "mtime": "2023-09-18T10:21:08.536Z",
    "size": 3359,
    "path": "../public/light/assets/scss/components/_title.scss"
  },
  "/light/assets/scss/components/_typography.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"1794-MsrIwq2mhvo1P5/qZFxpGMf9NfQ\"",
    "mtime": "2023-09-18T10:21:08.536Z",
    "size": 6036,
    "path": "../public/light/assets/scss/components/_typography.scss"
  },
  "/light/assets/scss/layout/_about.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"3253-sVn8sHRkUYT+s/5uJHo2FsoL1PU\"",
    "mtime": "2023-09-18T10:21:08.536Z",
    "size": 12883,
    "path": "../public/light/assets/scss/layout/_about.scss"
  },
  "/light/assets/scss/layout/_awards.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"8bf-0UMQEHVCAYTXotIa/CYRorztnW0\"",
    "mtime": "2023-09-18T10:21:08.535Z",
    "size": 2239,
    "path": "../public/light/assets/scss/layout/_awards.scss"
  },
  "/light/assets/scss/layout/_blog.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"25cc-U7bptSCoubdbvALQCikNDKpRhxE\"",
    "mtime": "2023-09-18T10:21:08.535Z",
    "size": 9676,
    "path": "../public/light/assets/scss/layout/_blog.scss"
  },
  "/light/assets/scss/layout/_brand.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"cb3-yiRC8pPlT2/DEozL/B3hXXg8mJk\"",
    "mtime": "2023-09-18T10:21:08.535Z",
    "size": 3251,
    "path": "../public/light/assets/scss/layout/_brand.scss"
  },
  "/light/assets/scss/layout/_career.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.535Z",
    "size": 0,
    "path": "../public/light/assets/scss/layout/_career.scss"
  },
  "/light/assets/scss/layout/_clients.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.535Z",
    "size": 0,
    "path": "../public/light/assets/scss/layout/_clients.scss"
  },
  "/light/assets/scss/layout/_contact.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"5dd-qqVSdd7kDSUiziS6Bexz2b3DRZA\"",
    "mtime": "2023-09-18T10:21:08.534Z",
    "size": 1501,
    "path": "../public/light/assets/scss/layout/_contact.scss"
  },
  "/light/assets/scss/layout/_counter.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"76a-c6WIrhI4m3iu6+ay9XxuBks+q1U\"",
    "mtime": "2023-09-18T10:21:08.534Z",
    "size": 1898,
    "path": "../public/light/assets/scss/layout/_counter.scss"
  },
  "/light/assets/scss/layout/_features.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"c43-M/u0ZGNLDuWtfa9JbxVJqWVq7B8\"",
    "mtime": "2023-09-18T10:21:08.534Z",
    "size": 3139,
    "path": "../public/light/assets/scss/layout/_features.scss"
  },
  "/light/assets/scss/layout/_footer.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"657-ZixM6JI8KamkBv4zlRYA2u1dPVw\"",
    "mtime": "2023-09-18T10:21:08.534Z",
    "size": 1623,
    "path": "../public/light/assets/scss/layout/_footer.scss"
  },
  "/light/assets/scss/layout/_header.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"959-+fSuQDnjnWyCZZGl703iUX+Mr94\"",
    "mtime": "2023-09-18T10:21:08.534Z",
    "size": 2393,
    "path": "../public/light/assets/scss/layout/_header.scss"
  },
  "/light/assets/scss/layout/_hero.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"183b-IzQRLOuyBKXvqGcJdqqPRnjsfBI\"",
    "mtime": "2023-09-18T10:21:08.533Z",
    "size": 6203,
    "path": "../public/light/assets/scss/layout/_hero.scss"
  },
  "/light/assets/scss/layout/_portfolio.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"45ea-SbtfGLfDB4zwFRdHdcvH6MSRYvs\"",
    "mtime": "2023-09-18T10:21:08.533Z",
    "size": 17898,
    "path": "../public/light/assets/scss/layout/_portfolio.scss"
  },
  "/light/assets/scss/layout/_price.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"3d3-y/27MkC6BuN7GV8jKhcSkiLNhlc\"",
    "mtime": "2023-09-18T10:21:08.533Z",
    "size": 979,
    "path": "../public/light/assets/scss/layout/_price.scss"
  },
  "/light/assets/scss/layout/_process.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"49d-CZF+HKHsDk87muFWLCpYUovjax8\"",
    "mtime": "2023-09-18T10:21:08.533Z",
    "size": 1181,
    "path": "../public/light/assets/scss/layout/_process.scss"
  },
  "/light/assets/scss/layout/_services.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"1cc8-CRED6aTW38g7qTYmLLr51V+kObM\"",
    "mtime": "2023-09-18T10:21:08.533Z",
    "size": 7368,
    "path": "../public/light/assets/scss/layout/_services.scss"
  },
  "/light/assets/scss/layout/_shop.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"4b33-RnX6tbJaZtYEq+cKeyjxbYuRk4k\"",
    "mtime": "2023-09-18T10:21:08.532Z",
    "size": 19251,
    "path": "../public/light/assets/scss/layout/_shop.scss"
  },
  "/light/assets/scss/layout/_slider.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"2270-RwWZ5OH94WfVzm2UGn/F4PYtNlk\"",
    "mtime": "2023-09-18T10:21:08.532Z",
    "size": 8816,
    "path": "../public/light/assets/scss/layout/_slider.scss"
  },
  "/light/assets/scss/layout/_team.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"b9a-T8JQuWMbu/pzihse3WK8wGttKI8\"",
    "mtime": "2023-09-18T10:21:08.531Z",
    "size": 2970,
    "path": "../public/light/assets/scss/layout/_team.scss"
  },
  "/light/assets/scss/layout/_testimonials.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"2c31-NWsC8p2K6+7GAH3Ju3ORYchQJAY\"",
    "mtime": "2023-09-18T10:21:08.531Z",
    "size": 11313,
    "path": "../public/light/assets/scss/layout/_testimonials.scss"
  },
  "/light/assets/scss/layout/_video.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"1c8-9GJWWndTvYjGFQ6HQ7GGclE515g\"",
    "mtime": "2023-09-18T10:21:08.531Z",
    "size": 456,
    "path": "../public/light/assets/scss/layout/_video.scss"
  },
  "/light/assets/scss/utility/_animation.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.530Z",
    "size": 0,
    "path": "../public/light/assets/scss/utility/_animation.scss"
  },
  "/light/assets/scss/utility/_mixin.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.529Z",
    "size": 0,
    "path": "../public/light/assets/scss/utility/_mixin.scss"
  },
  "/light/assets/scss/utility/_responsive.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"515e-CIzYHnFCOiGmWr/DIPzjeBIeP8w\"",
    "mtime": "2023-09-18T10:21:08.529Z",
    "size": 20830,
    "path": "../public/light/assets/scss/utility/_responsive.scss"
  },
  "/light/assets/scss/utility/_theme-dark.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-09-18T10:21:08.527Z",
    "size": 0,
    "path": "../public/light/assets/scss/utility/_theme-dark.scss"
  },
  "/light/assets/scss/utility/_variables.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"158-m3j0yxr7cNkJluE4yYy73lz9Kyo\"",
    "mtime": "2023-09-18T10:21:08.518Z",
    "size": 344,
    "path": "../public/light/assets/scss/utility/_variables.scss"
  },
  "/light/showcase/assets/css/showcases.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1312-qvZJ5i6flaqxJEnViYUIDFGQRD0\"",
    "mtime": "2023-09-18T10:21:08.517Z",
    "size": 4882,
    "path": "../public/light/showcase/assets/css/showcases.css"
  },
  "/light/showcase/assets/scss/showcases.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"f40-x3G5Y42arbH8Qq4YsnDc2D+gkyc\"",
    "mtime": "2023-09-18T10:21:08.516Z",
    "size": 3904,
    "path": "../public/light/showcase/assets/scss/showcases.scss"
  },
  "/dark/assets/imgs/arch/blog/1-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"1123a-HYouXz87x4BFF3g8sSAR3xFtVhA\"",
    "mtime": "2023-09-18T10:21:09.310Z",
    "size": 70202,
    "path": "../public/dark/assets/imgs/arch/blog/1-origin.jpg"
  },
  "/dark/assets/imgs/arch/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"187f338-K41bHy8WYoLmKBQCaAoPXzP17to\"",
    "mtime": "2023-09-18T10:21:09.309Z",
    "size": 25686840,
    "path": "../public/dark/assets/imgs/arch/blog/1.jpg"
  },
  "/dark/assets/imgs/arch/blog/2-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"1123a-HYouXz87x4BFF3g8sSAR3xFtVhA\"",
    "mtime": "2023-09-18T10:21:09.285Z",
    "size": 70202,
    "path": "../public/dark/assets/imgs/arch/blog/2-origin.jpg"
  },
  "/dark/assets/imgs/arch/blog/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"187f338-K41bHy8WYoLmKBQCaAoPXzP17to\"",
    "mtime": "2023-09-18T10:21:09.283Z",
    "size": 25686840,
    "path": "../public/dark/assets/imgs/arch/blog/2.jpg"
  },
  "/dark/assets/imgs/arch/intro/1-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"a195-t/gdprxmZJ8Y4sinmj+L9sU6wkk\"",
    "mtime": "2023-09-18T10:21:09.255Z",
    "size": 41365,
    "path": "../public/dark/assets/imgs/arch/intro/1-origin.jpg"
  },
  "/dark/assets/imgs/arch/intro/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"314ab-kCYD8TNsOdi3hfI4NSef/c71ero\"",
    "mtime": "2023-09-18T10:21:09.249Z",
    "size": 201899,
    "path": "../public/dark/assets/imgs/arch/intro/1.jpg"
  },
  "/dark/assets/imgs/arch/intro/2-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"b3e3-/wGwvcgLrXQJbzUz4J/GV6EEUjQ\"",
    "mtime": "2023-09-18T10:21:09.248Z",
    "size": 46051,
    "path": "../public/dark/assets/imgs/arch/intro/2-origin.jpg"
  },
  "/dark/assets/imgs/arch/intro/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"44bc9-FBHJcX2wyKE8XPoO3vwT6xuTKnQ\"",
    "mtime": "2023-09-18T10:21:09.246Z",
    "size": 281545,
    "path": "../public/dark/assets/imgs/arch/intro/2.jpg"
  },
  "/dark/assets/imgs/arch/intro/sq1-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"a935-+iFxPPfVCBTmigORvAmwnoKjWVY\"",
    "mtime": "2023-09-18T10:21:09.246Z",
    "size": 43317,
    "path": "../public/dark/assets/imgs/arch/intro/sq1-origin.jpg"
  },
  "/dark/assets/imgs/arch/intro/sq1.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d048-2Bz9MMTBXfvyUm/iYZvZLJ3gSoc\"",
    "mtime": "2023-09-18T10:21:09.246Z",
    "size": 381000,
    "path": "../public/dark/assets/imgs/arch/intro/sq1.jpg"
  },
  "/dark/assets/imgs/arch/intro/sq2-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"a935-+iFxPPfVCBTmigORvAmwnoKjWVY\"",
    "mtime": "2023-09-18T10:21:09.245Z",
    "size": 43317,
    "path": "../public/dark/assets/imgs/arch/intro/sq2-origin.jpg"
  },
  "/dark/assets/imgs/arch/intro/sq2.jpg": {
    "type": "image/jpeg",
    "etag": "\"63ef5-0XrpXY1V+xQvojYiJjtLlTlmwwI\"",
    "mtime": "2023-09-18T10:21:09.245Z",
    "size": 409333,
    "path": "../public/dark/assets/imgs/arch/intro/sq2.jpg"
  },
  "/dark/assets/imgs/arch/slid/1-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"187f338-K41bHy8WYoLmKBQCaAoPXzP17to\"",
    "mtime": "2023-09-18T10:21:09.244Z",
    "size": 25686840,
    "path": "../public/dark/assets/imgs/arch/slid/1-2.jpg"
  },
  "/dark/assets/imgs/arch/slid/1-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-t3HuY4L607X5/SNpiH3Me91/cdE\"",
    "mtime": "2023-09-18T10:21:09.215Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/arch/slid/1-origin.jpg"
  },
  "/dark/assets/imgs/arch/slid/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"59d99-P+hM/dKStaZywu+u7jju6YdyHGA\"",
    "mtime": "2023-09-18T10:21:09.214Z",
    "size": 368025,
    "path": "../public/dark/assets/imgs/arch/slid/1.jpg"
  },
  "/dark/assets/imgs/arch/slid/2-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-t3HuY4L607X5/SNpiH3Me91/cdE\"",
    "mtime": "2023-09-18T10:21:09.213Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/arch/slid/2-origin.jpg"
  },
  "/dark/assets/imgs/arch/slid/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"80841-BcXSyr9xpBl9MGU//X5cKT/qaLQ\"",
    "mtime": "2023-09-18T10:21:09.213Z",
    "size": 526401,
    "path": "../public/dark/assets/imgs/arch/slid/2.jpg"
  },
  "/dark/assets/imgs/arch/slid/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"c0073-GXt6OESu/RzD4Kq9+eW6rz+UBns\"",
    "mtime": "2023-09-18T10:21:09.210Z",
    "size": 786547,
    "path": "../public/dark/assets/imgs/arch/slid/3.jpg"
  },
  "/dark/assets/imgs/arch/slid/3.origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-t3HuY4L607X5/SNpiH3Me91/cdE\"",
    "mtime": "2023-09-18T10:21:09.210Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/arch/slid/3.origin.jpg"
  },
  "/dark/assets/imgs/arch/slid/FVL2022.mp4": {
    "type": "video/mp4",
    "etag": "\"f7ac37-k5lw6RIUUMkwxErfHib/lIAzTEg\"",
    "mtime": "2023-09-18T10:21:09.208Z",
    "size": 16231479,
    "path": "../public/dark/assets/imgs/arch/slid/FVL2022.mp4"
  },
  "/dark/assets/imgs/arch/works/1-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"a195-t/gdprxmZJ8Y4sinmj+L9sU6wkk\"",
    "mtime": "2023-09-18T10:21:09.189Z",
    "size": 41365,
    "path": "../public/dark/assets/imgs/arch/works/1-origin.jpg"
  },
  "/dark/assets/imgs/arch/works/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1bdbe-7wIx4KKo2OTk4e24R2dXgDyAHmw\"",
    "mtime": "2023-09-18T10:21:09.189Z",
    "size": 114110,
    "path": "../public/dark/assets/imgs/arch/works/1.jpg"
  },
  "/dark/assets/imgs/arch/works/2-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"6911-P3PBNF5PSwiCGBCrqfpUlFkLzy0\"",
    "mtime": "2023-09-18T10:21:09.188Z",
    "size": 26897,
    "path": "../public/dark/assets/imgs/arch/works/2-origin.jpg"
  },
  "/dark/assets/imgs/arch/works/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfccd-X3xnewMm9dN1PxWIfJGed/7fR1Y\"",
    "mtime": "2023-09-18T10:21:09.187Z",
    "size": 785613,
    "path": "../public/dark/assets/imgs/arch/works/2.jpg"
  },
  "/dark/assets/imgs/arch/works/3-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"a935-+iFxPPfVCBTmigORvAmwnoKjWVY\"",
    "mtime": "2023-09-18T10:21:09.186Z",
    "size": 43317,
    "path": "../public/dark/assets/imgs/arch/works/3-origin.jpg"
  },
  "/dark/assets/imgs/arch/works/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"192a0-X3S3oMu32zuyXo6pGuqKukyNlj8\"",
    "mtime": "2023-09-18T10:21:09.185Z",
    "size": 103072,
    "path": "../public/dark/assets/imgs/arch/works/3.jpg"
  },
  "/dark/assets/imgs/arch/works/4-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"a935-+iFxPPfVCBTmigORvAmwnoKjWVY\"",
    "mtime": "2023-09-18T10:21:09.183Z",
    "size": 43317,
    "path": "../public/dark/assets/imgs/arch/works/4-origin.jpg"
  },
  "/dark/assets/imgs/arch/works/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"26185b-mmgePTV1SkSqZZB6wPRctPJkXRw\"",
    "mtime": "2023-09-18T10:21:09.183Z",
    "size": 2496603,
    "path": "../public/dark/assets/imgs/arch/works/4.jpg"
  },
  "/dark/assets/imgs/freelancer/skills/angular.png": {
    "type": "image/png",
    "etag": "\"6860-oCs3CmvGFQDKuJNdo/DBQNIQOYY\"",
    "mtime": "2023-09-18T10:21:09.121Z",
    "size": 26720,
    "path": "../public/dark/assets/imgs/freelancer/skills/angular.png"
  },
  "/dark/assets/imgs/freelancer/skills/figma.png": {
    "type": "image/png",
    "etag": "\"396b-guCjJYJFzA1fro4aL3toKVkxw3A\"",
    "mtime": "2023-09-18T10:21:09.121Z",
    "size": 14699,
    "path": "../public/dark/assets/imgs/freelancer/skills/figma.png"
  },
  "/dark/assets/imgs/freelancer/skills/webflow.png": {
    "type": "image/png",
    "etag": "\"626e-/ZxLqCpXfWWpsCWQ1cBQsp7aYVc\"",
    "mtime": "2023-09-18T10:21:09.121Z",
    "size": 25198,
    "path": "../public/dark/assets/imgs/freelancer/skills/webflow.png"
  },
  "/dark/assets/imgs/freelancer/skills/wordpress.png": {
    "type": "image/png",
    "etag": "\"e8ab-Dv34eYCyO4ualGJInSipFhiPucY\"",
    "mtime": "2023-09-18T10:21:09.119Z",
    "size": 59563,
    "path": "../public/dark/assets/imgs/freelancer/skills/wordpress.png"
  },
  "/dark/assets/imgs/freelancer/works/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:09.118Z",
    "size": 38836,
    "path": "../public/dark/assets/imgs/freelancer/works/1.jpg"
  },
  "/dark/assets/imgs/freelancer/works/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:09.118Z",
    "size": 38836,
    "path": "../public/dark/assets/imgs/freelancer/works/2.jpg"
  },
  "/dark/assets/imgs/freelancer/works/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:09.117Z",
    "size": 38836,
    "path": "../public/dark/assets/imgs/freelancer/works/3.jpg"
  },
  "/dark/assets/imgs/freelancer/works/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:09.117Z",
    "size": 38836,
    "path": "../public/dark/assets/imgs/freelancer/works/4.jpg"
  },
  "/dark/assets/imgs/freelancer/works/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:09.117Z",
    "size": 38836,
    "path": "../public/dark/assets/imgs/freelancer/works/5.jpg"
  },
  "/dark/assets/imgs/portfolio/2/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"9906-lLEdP3h67LBHCMTl6lzRRllSkQA\"",
    "mtime": "2023-09-18T10:21:09.097Z",
    "size": 39174,
    "path": "../public/dark/assets/imgs/portfolio/2/1.jpg"
  },
  "/dark/assets/imgs/portfolio/2/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"688b-w8pCTVSg+YyRsXjdi+e0zhdMGZc\"",
    "mtime": "2023-09-18T10:21:09.097Z",
    "size": 26763,
    "path": "../public/dark/assets/imgs/portfolio/2/2.jpg"
  },
  "/dark/assets/imgs/portfolio/2/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"9345-2GAGKjqGlnnmpIUvm5Lue5SrpQY\"",
    "mtime": "2023-09-18T10:21:09.096Z",
    "size": 37701,
    "path": "../public/dark/assets/imgs/portfolio/2/3.jpg"
  },
  "/dark/assets/imgs/portfolio/2/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"9f24-ipLTbmfXsJ9OGde2/kJTs0lLE6A\"",
    "mtime": "2023-09-18T10:21:09.096Z",
    "size": 40740,
    "path": "../public/dark/assets/imgs/portfolio/2/4.jpg"
  },
  "/dark/assets/imgs/portfolio/2/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"7f4c-Duvc+OmP/xwMJism5tZ4NftHUJQ\"",
    "mtime": "2023-09-18T10:21:09.095Z",
    "size": 32588,
    "path": "../public/dark/assets/imgs/portfolio/2/5.jpg"
  },
  "/dark/assets/imgs/portfolio/2/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"9440-Bm/7rlZoaULmUa6cNijbzNIwEes\"",
    "mtime": "2023-09-18T10:21:09.095Z",
    "size": 37952,
    "path": "../public/dark/assets/imgs/portfolio/2/6.jpg"
  },
  "/dark/assets/imgs/portfolio/3/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:09.095Z",
    "size": 29631,
    "path": "../public/dark/assets/imgs/portfolio/3/1.jpg"
  },
  "/dark/assets/imgs/portfolio/3/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:09.094Z",
    "size": 29631,
    "path": "../public/dark/assets/imgs/portfolio/3/2.jpg"
  },
  "/dark/assets/imgs/portfolio/3/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:09.094Z",
    "size": 29631,
    "path": "../public/dark/assets/imgs/portfolio/3/3.jpg"
  },
  "/dark/assets/imgs/portfolio/gallery/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfab-7QTkjzVXsbS8BkHR4D9SIOecu3I\"",
    "mtime": "2023-09-18T10:21:09.091Z",
    "size": 49067,
    "path": "../public/dark/assets/imgs/portfolio/gallery/1.jpg"
  },
  "/dark/assets/imgs/portfolio/gallery/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfab-7QTkjzVXsbS8BkHR4D9SIOecu3I\"",
    "mtime": "2023-09-18T10:21:09.090Z",
    "size": 49067,
    "path": "../public/dark/assets/imgs/portfolio/gallery/2.jpg"
  },
  "/dark/assets/imgs/portfolio/gallery/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"ccccf-kvTCYFxs4d1EkhzGii90ztcBKp0\"",
    "mtime": "2023-09-18T10:21:09.090Z",
    "size": 838863,
    "path": "../public/dark/assets/imgs/portfolio/gallery/3.jpg"
  },
  "/dark/assets/imgs/portfolio/gallery/3wer.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfab-7QTkjzVXsbS8BkHR4D9SIOecu3I\"",
    "mtime": "2023-09-18T10:21:09.088Z",
    "size": 49067,
    "path": "../public/dark/assets/imgs/portfolio/gallery/3wer.jpg"
  },
  "/dark/assets/imgs/portfolio/4/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:09.094Z",
    "size": 29631,
    "path": "../public/dark/assets/imgs/portfolio/4/01.jpg"
  },
  "/dark/assets/imgs/portfolio/4/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:09.093Z",
    "size": 29631,
    "path": "../public/dark/assets/imgs/portfolio/4/02.jpg"
  },
  "/dark/assets/imgs/portfolio/4/03.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:09.093Z",
    "size": 29631,
    "path": "../public/dark/assets/imgs/portfolio/4/03.jpg"
  },
  "/dark/assets/imgs/portfolio/4/04.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:09.093Z",
    "size": 29631,
    "path": "../public/dark/assets/imgs/portfolio/4/04.jpg"
  },
  "/dark/assets/imgs/portfolio/4/05.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:09.093Z",
    "size": 29631,
    "path": "../public/dark/assets/imgs/portfolio/4/05.jpg"
  },
  "/dark/assets/imgs/portfolio/4/06.jpg": {
    "type": "image/jpeg",
    "etag": "\"37f47-fyEK2nsvpalrThdLoKkXJy3DN0A\"",
    "mtime": "2023-09-18T10:21:09.092Z",
    "size": 229191,
    "path": "../public/dark/assets/imgs/portfolio/4/06.jpg"
  },
  "/dark/assets/imgs/portfolio/mas/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"28cc-x53yZXjIY3DJx+ejonkLdbe0P8g\"",
    "mtime": "2023-09-18T10:21:09.087Z",
    "size": 10444,
    "path": "../public/dark/assets/imgs/portfolio/mas/1.jpg"
  },
  "/dark/assets/imgs/portfolio/mas/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"368b-jvuFX5PZkzWiJ2mQ9jU4gQxaCEY\"",
    "mtime": "2023-09-18T10:21:09.087Z",
    "size": 13963,
    "path": "../public/dark/assets/imgs/portfolio/mas/2.jpg"
  },
  "/dark/assets/imgs/portfolio/mas/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"30f6-15rx0O6AyaxaW4cPkJ34DRZh9jU\"",
    "mtime": "2023-09-18T10:21:09.087Z",
    "size": 12534,
    "path": "../public/dark/assets/imgs/portfolio/mas/3.jpg"
  },
  "/dark/assets/imgs/portfolio/mas/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"368b-jvuFX5PZkzWiJ2mQ9jU4gQxaCEY\"",
    "mtime": "2023-09-18T10:21:09.087Z",
    "size": 13963,
    "path": "../public/dark/assets/imgs/portfolio/mas/4.jpg"
  },
  "/dark/assets/imgs/portfolio/mas/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"30f6-15rx0O6AyaxaW4cPkJ34DRZh9jU\"",
    "mtime": "2023-09-18T10:21:09.086Z",
    "size": 12534,
    "path": "../public/dark/assets/imgs/portfolio/mas/5.jpg"
  },
  "/dark/assets/imgs/portfolio/mas/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"368b-jvuFX5PZkzWiJ2mQ9jU4gQxaCEY\"",
    "mtime": "2023-09-18T10:21:09.086Z",
    "size": 13963,
    "path": "../public/dark/assets/imgs/portfolio/mas/6.jpg"
  },
  "/dark/assets/imgs/portfolio/mas/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"30f6-15rx0O6AyaxaW4cPkJ34DRZh9jU\"",
    "mtime": "2023-09-18T10:21:09.086Z",
    "size": 12534,
    "path": "../public/dark/assets/imgs/portfolio/mas/7.jpg"
  },
  "/dark/assets/imgs/portfolio/mas/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"368b-jvuFX5PZkzWiJ2mQ9jU4gQxaCEY\"",
    "mtime": "2023-09-18T10:21:09.086Z",
    "size": 13963,
    "path": "../public/dark/assets/imgs/portfolio/mas/8.jpg"
  },
  "/dark/assets/imgs/sass-img/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"c15f1-DA7N7IotNCPL+B52yycSZqkvNj0\"",
    "mtime": "2023-09-18T10:21:09.080Z",
    "size": 792049,
    "path": "../public/dark/assets/imgs/sass-img/blog/1.jpg"
  },
  "/dark/assets/imgs/sass-img/blog/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"639df-mt9xsaJ+uys3SOn7MPoqi6BVstE\"",
    "mtime": "2023-09-18T10:21:09.075Z",
    "size": 408031,
    "path": "../public/dark/assets/imgs/sass-img/blog/2.jpg"
  },
  "/dark/assets/imgs/sass-img/serv/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d4354-BsBflFxrxB9/qP+2eWT4mWJvBAo\"",
    "mtime": "2023-09-18T10:21:09.072Z",
    "size": 1917780,
    "path": "../public/dark/assets/imgs/sass-img/serv/1.jpg"
  },
  "/dark/assets/imgs/sass-img/serv/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"615e9-i35lAbHvh1E4zZCGOPxrPQLb2co\"",
    "mtime": "2023-09-18T10:21:09.069Z",
    "size": 398825,
    "path": "../public/dark/assets/imgs/sass-img/serv/2.jpg"
  },
  "/dark/assets/imgs/sass-img/serv/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"96b87-igd8FIw3TgHbY7esatD7w5wHo+4\"",
    "mtime": "2023-09-18T10:21:09.066Z",
    "size": 617351,
    "path": "../public/dark/assets/imgs/sass-img/serv/3.jpg"
  },
  "/dark/assets/imgs/sass-img/serv/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"639df-mt9xsaJ+uys3SOn7MPoqi6BVstE\"",
    "mtime": "2023-09-18T10:21:09.064Z",
    "size": 408031,
    "path": "../public/dark/assets/imgs/sass-img/serv/4.jpg"
  },
  "/dark/assets/imgs/sass-img/work/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"3eca6-QOZGt0e6SoXBngIOpAjDjw9atj4\"",
    "mtime": "2023-09-18T10:21:09.060Z",
    "size": 257190,
    "path": "../public/dark/assets/imgs/sass-img/work/1.jpg"
  },
  "/dark/assets/imgs/sass-img/work/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"acda6-ZQi5dHqEzk5T06ggmVN5BRX0LQE\"",
    "mtime": "2023-09-18T10:21:09.059Z",
    "size": 708006,
    "path": "../public/dark/assets/imgs/sass-img/work/2.jpg"
  },
  "/dark/assets/imgs/sass-img/work/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"12418b-onsFkBbFY9E+KhlLDfIH65Pl6XY\"",
    "mtime": "2023-09-18T10:21:09.056Z",
    "size": 1196427,
    "path": "../public/dark/assets/imgs/sass-img/work/3.jpg"
  },
  "/dark/assets/imgs/sass-img/work/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1326f8-0QJvJMwSe8xT9Zs7kP9m94liHy8\"",
    "mtime": "2023-09-18T10:21:09.054Z",
    "size": 1255160,
    "path": "../public/dark/assets/imgs/sass-img/work/4.jpg"
  },
  "/dark/assets/imgs/sass-img/work/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"b191f-9CrE/Bf5BblyzY5DuRwXL1YjVQo\"",
    "mtime": "2023-09-18T10:21:09.051Z",
    "size": 727327,
    "path": "../public/dark/assets/imgs/sass-img/work/5.jpg"
  },
  "/dark/assets/imgs/works/full/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.972Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/full/1.jpg"
  },
  "/dark/assets/imgs/works/full/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.972Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/full/2.jpg"
  },
  "/dark/assets/imgs/works/full/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.972Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/full/3.jpg"
  },
  "/dark/assets/imgs/works/full/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.971Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/full/4.jpg"
  },
  "/dark/assets/imgs/works/full/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.971Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/full/5.jpg"
  },
  "/dark/assets/imgs/works/full/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.970Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/full/6.jpg"
  },
  "/dark/assets/imgs/works/grid/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.969Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/1.jpg"
  },
  "/dark/assets/imgs/works/grid/10.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.969Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/10.jpg"
  },
  "/dark/assets/imgs/works/grid/11.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.969Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/11.jpg"
  },
  "/dark/assets/imgs/works/grid/12.jpg": {
    "type": "image/jpeg",
    "etag": "\"3a1e-29j+1HV6qkp8RuQ3JfYOFDhXVnw\"",
    "mtime": "2023-09-18T10:21:08.969Z",
    "size": 14878,
    "path": "../public/dark/assets/imgs/works/grid/12.jpg"
  },
  "/dark/assets/imgs/works/grid/13.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d03-Fc31OtAocT5TqTj7WdIjJpWE9XQ\"",
    "mtime": "2023-09-18T10:21:08.969Z",
    "size": 15619,
    "path": "../public/dark/assets/imgs/works/grid/13.jpg"
  },
  "/dark/assets/imgs/works/grid/14.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.968Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/14.jpg"
  },
  "/dark/assets/imgs/works/grid/15.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.968Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/15.jpg"
  },
  "/dark/assets/imgs/works/grid/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.968Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/2.jpg"
  },
  "/dark/assets/imgs/works/grid/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.968Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/3.jpg"
  },
  "/dark/assets/imgs/works/grid/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.967Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/4.jpg"
  },
  "/dark/assets/imgs/works/grid/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.967Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/5.jpg"
  },
  "/dark/assets/imgs/works/grid/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.967Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/6.jpg"
  },
  "/dark/assets/imgs/works/grid/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.967Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/7.jpg"
  },
  "/dark/assets/imgs/works/grid/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.966Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/8.jpg"
  },
  "/dark/assets/imgs/works/grid/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.965Z",
    "size": 13780,
    "path": "../public/dark/assets/imgs/works/grid/9.jpg"
  },
  "/dark/assets/imgs/works/grid2/08e86c144358611.628b70160a7a6.jpg": {
    "type": "image/jpeg",
    "etag": "\"218bf6-/EwR4buARRB7RFqe9w2DIKmPOCg\"",
    "mtime": "2023-09-18T10:21:08.965Z",
    "size": 2198518,
    "path": "../public/dark/assets/imgs/works/grid2/08e86c144358611.628b70160a7a6.jpg"
  },
  "/dark/assets/imgs/works/grid2/0d7d68142933531.62710029eab2d.jpg": {
    "type": "image/jpeg",
    "etag": "\"337af-ejL+5Jbp8Y8KZTzqT17RYcfJcuA\"",
    "mtime": "2023-09-18T10:21:08.961Z",
    "size": 210863,
    "path": "../public/dark/assets/imgs/works/grid2/0d7d68142933531.62710029eab2d.jpg"
  },
  "/dark/assets/imgs/works/grid2/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"80841-BcXSyr9xpBl9MGU//X5cKT/qaLQ\"",
    "mtime": "2023-09-18T10:21:08.958Z",
    "size": 526401,
    "path": "../public/dark/assets/imgs/works/grid2/1.jpg"
  },
  "/dark/assets/imgs/works/grid2/10.jpg": {
    "type": "image/jpeg",
    "etag": "\"c0073-GXt6OESu/RzD4Kq9+eW6rz+UBns\"",
    "mtime": "2023-09-18T10:21:08.957Z",
    "size": 786547,
    "path": "../public/dark/assets/imgs/works/grid2/10.jpg"
  },
  "/dark/assets/imgs/works/grid2/11.jpg": {
    "type": "image/jpeg",
    "etag": "\"8254b-15N2xnamPwTqg43yvkOp1dzHqDk\"",
    "mtime": "2023-09-18T10:21:08.955Z",
    "size": 533835,
    "path": "../public/dark/assets/imgs/works/grid2/11.jpg"
  },
  "/dark/assets/imgs/works/grid2/12.jpg": {
    "type": "image/jpeg",
    "etag": "\"dbd3c-Iv5t+zJ7Dp3OxUsTOx5te9JEErs\"",
    "mtime": "2023-09-18T10:21:08.953Z",
    "size": 900412,
    "path": "../public/dark/assets/imgs/works/grid2/12.jpg"
  },
  "/dark/assets/imgs/works/grid2/13.jpg": {
    "type": "image/jpeg",
    "etag": "\"74dfa-Fo8oFUCDuDudU7FKLUfzRQ8rveQ\"",
    "mtime": "2023-09-18T10:21:08.951Z",
    "size": 478714,
    "path": "../public/dark/assets/imgs/works/grid2/13.jpg"
  },
  "/dark/assets/imgs/works/grid2/14.jpg": {
    "type": "image/jpeg",
    "etag": "\"6cf30-cEhQaU/g8wnREPO3vDmv2JCMTpQ\"",
    "mtime": "2023-09-18T10:21:08.949Z",
    "size": 446256,
    "path": "../public/dark/assets/imgs/works/grid2/14.jpg"
  },
  "/dark/assets/imgs/works/grid2/15.jpg": {
    "type": "image/jpeg",
    "etag": "\"803e3-bdywS2yfT6JmeGs6v86q0SoFmOo\"",
    "mtime": "2023-09-18T10:21:08.948Z",
    "size": 525283,
    "path": "../public/dark/assets/imgs/works/grid2/15.jpg"
  },
  "/dark/assets/imgs/works/grid2/16.jpg": {
    "type": "image/jpeg",
    "etag": "\"e5d14-bzqeTmj5j49wi9HYC1llgeLBi9s\"",
    "mtime": "2023-09-18T10:21:08.945Z",
    "size": 941332,
    "path": "../public/dark/assets/imgs/works/grid2/16.jpg"
  },
  "/dark/assets/imgs/works/grid2/17.jpg": {
    "type": "image/jpeg",
    "etag": "\"63ef5-0XrpXY1V+xQvojYiJjtLlTlmwwI\"",
    "mtime": "2023-09-18T10:21:08.943Z",
    "size": 409333,
    "path": "../public/dark/assets/imgs/works/grid2/17.jpg"
  },
  "/dark/assets/imgs/works/grid2/18.jpg": {
    "type": "image/jpeg",
    "etag": "\"b85c3-PfHNVmfMAp7tGmMb6D4zsVy3uz0\"",
    "mtime": "2023-09-18T10:21:08.942Z",
    "size": 755139,
    "path": "../public/dark/assets/imgs/works/grid2/18.jpg"
  },
  "/dark/assets/imgs/works/grid2/19.jpg": {
    "type": "image/jpeg",
    "etag": "\"df078-jn4/gadP20RnsV2xtUtJHuIHgJA\"",
    "mtime": "2023-09-18T10:21:08.939Z",
    "size": 913528,
    "path": "../public/dark/assets/imgs/works/grid2/19.jpg"
  },
  "/dark/assets/imgs/works/grid2/1bcf6d169040259.64463eac61df0.png": {
    "type": "image/png",
    "etag": "\"10d697-ERFpHBh6SQ8sTKQGa8gGBVn06Yo\"",
    "mtime": "2023-09-18T10:21:08.936Z",
    "size": 1103511,
    "path": "../public/dark/assets/imgs/works/grid2/1bcf6d169040259.64463eac61df0.png"
  },
  "/dark/assets/imgs/works/grid2/1origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.934Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/grid2/1origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"9be7e-CvWvjer80JKI635qaTQJ6iSudoQ\"",
    "mtime": "2023-09-18T10:21:08.933Z",
    "size": 638590,
    "path": "../public/dark/assets/imgs/works/grid2/2.jpg"
  },
  "/dark/assets/imgs/works/grid2/20.jpg": {
    "type": "image/jpeg",
    "etag": "\"cef44-eW14OJOfdrjbqq1gJ0O+pzQaw6Y\"",
    "mtime": "2023-09-18T10:21:08.932Z",
    "size": 847684,
    "path": "../public/dark/assets/imgs/works/grid2/20.jpg"
  },
  "/dark/assets/imgs/works/grid2/21.jpg": {
    "type": "image/jpeg",
    "etag": "\"d9b53-mg0f2xNGC4HR10sME/GoD9bmtSM\"",
    "mtime": "2023-09-18T10:21:08.929Z",
    "size": 891731,
    "path": "../public/dark/assets/imgs/works/grid2/21.jpg"
  },
  "/dark/assets/imgs/works/grid2/2origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.927Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/grid2/2origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4b-8W3OG1/5borzFyzjTgYtV/CSqC8\"",
    "mtime": "2023-09-18T10:21:08.926Z",
    "size": 621387,
    "path": "../public/dark/assets/imgs/works/grid2/3.jpg"
  },
  "/dark/assets/imgs/works/grid2/3c362e144557497.628e5bc84149c.jpg": {
    "type": "image/jpeg",
    "etag": "\"5b700-Yb9WKU2l53HqGhFIYoVdp01g9iM\"",
    "mtime": "2023-09-18T10:21:08.924Z",
    "size": 374528,
    "path": "../public/dark/assets/imgs/works/grid2/3c362e144557497.628e5bc84149c.jpg"
  },
  "/dark/assets/imgs/works/grid2/3origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.923Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/grid2/3origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d048-2Bz9MMTBXfvyUm/iYZvZLJ3gSoc\"",
    "mtime": "2023-09-18T10:21:08.921Z",
    "size": 381000,
    "path": "../public/dark/assets/imgs/works/grid2/4.jpg"
  },
  "/dark/assets/imgs/works/grid2/40e57f147099205.62bc3f08076a5.jpg": {
    "type": "image/jpeg",
    "etag": "\"a1c0f-+sB+XsBtigASz7Uhzhv1hWsHbUw\"",
    "mtime": "2023-09-18T10:21:08.920Z",
    "size": 662543,
    "path": "../public/dark/assets/imgs/works/grid2/40e57f147099205.62bc3f08076a5.jpg"
  },
  "/dark/assets/imgs/works/grid2/488dd6144557497.628e5bf32903f.jpg": {
    "type": "image/jpeg",
    "etag": "\"8c001-uaZBkMB3rinCVKdEb3/3uxbzLMA\"",
    "mtime": "2023-09-18T10:21:08.917Z",
    "size": 573441,
    "path": "../public/dark/assets/imgs/works/grid2/488dd6144557497.628e5bf32903f.jpg"
  },
  "/dark/assets/imgs/works/grid2/4f59a3150420097.62fa6e1a018ba.png": {
    "type": "image/png",
    "etag": "\"7a69a-lC8qXlrGsWVvbOtyjQe3M8RntJQ\"",
    "mtime": "2023-09-18T10:21:08.915Z",
    "size": 501402,
    "path": "../public/dark/assets/imgs/works/grid2/4f59a3150420097.62fa6e1a018ba.png"
  },
  "/dark/assets/imgs/works/grid2/4origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.913Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/grid2/4origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"4d9e24-MSQervTUrMeS6y0aHTdRrrFA2PQ\"",
    "mtime": "2023-09-18T10:21:08.911Z",
    "size": 5086756,
    "path": "../public/dark/assets/imgs/works/grid2/5.jpg"
  },
  "/dark/assets/imgs/works/grid2/5origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.904Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/grid2/5origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"d8639-VIoTT7uOYSEGvYBe62fzJkzR7lI\"",
    "mtime": "2023-09-18T10:21:08.904Z",
    "size": 886329,
    "path": "../public/dark/assets/imgs/works/grid2/6.jpg"
  },
  "/dark/assets/imgs/works/grid2/6origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.902Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/grid2/6origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"e036a-Z9WnvhJ/OByPhREnBa8uMfiHY8U\"",
    "mtime": "2023-09-18T10:21:08.902Z",
    "size": 918378,
    "path": "../public/dark/assets/imgs/works/grid2/7.jpg"
  },
  "/dark/assets/imgs/works/grid2/76d373162765773.64387bf091399.jpg": {
    "type": "image/jpeg",
    "etag": "\"d6625-iFm+X73uPEqaZGcd+TLW9M6rcAk\"",
    "mtime": "2023-09-18T10:21:08.898Z",
    "size": 878117,
    "path": "../public/dark/assets/imgs/works/grid2/76d373162765773.64387bf091399.jpg"
  },
  "/dark/assets/imgs/works/grid2/7origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"672c-MjZdOLF6xGm4UNf43Ks3BqWy+1I\"",
    "mtime": "2023-09-18T10:21:08.897Z",
    "size": 26412,
    "path": "../public/dark/assets/imgs/works/grid2/7origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"af575-TFhSz6BklOfwEN3ql+CH7tIEciQ\"",
    "mtime": "2023-09-18T10:21:08.896Z",
    "size": 718197,
    "path": "../public/dark/assets/imgs/works/grid2/8.jpg"
  },
  "/dark/assets/imgs/works/grid2/81bef4162314387.63d90871d8c27.png": {
    "type": "image/png",
    "etag": "\"a667a-PXxXg5qN5Vogp3SYqjlKozuFFIY\"",
    "mtime": "2023-09-18T10:21:08.894Z",
    "size": 681594,
    "path": "../public/dark/assets/imgs/works/grid2/81bef4162314387.63d90871d8c27.png"
  },
  "/dark/assets/imgs/works/grid2/8origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"3c4ec-Pg00Z9hqEe6CS/foUyAXg1GGX1g\"",
    "mtime": "2023-09-18T10:21:08.892Z",
    "size": 247020,
    "path": "../public/dark/assets/imgs/works/grid2/8origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"16fe66-q9v0f8jMnj0QiYQYSUOZQGk/k2s\"",
    "mtime": "2023-09-18T10:21:08.889Z",
    "size": 1506918,
    "path": "../public/dark/assets/imgs/works/grid2/9.jpg"
  },
  "/dark/assets/imgs/works/grid2/9407b4142933531.62710029eb5c7.jpg": {
    "type": "image/jpeg",
    "etag": "\"407e8-sr8saKvJHAOI4JHf1ShLci0Y2Mo\"",
    "mtime": "2023-09-18T10:21:08.886Z",
    "size": 264168,
    "path": "../public/dark/assets/imgs/works/grid2/9407b4142933531.62710029eb5c7.jpg"
  },
  "/dark/assets/imgs/works/grid2/9origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"30b07-WohZV7na49rNJG0/tZO9FugraLo\"",
    "mtime": "2023-09-18T10:21:08.885Z",
    "size": 199431,
    "path": "../public/dark/assets/imgs/works/grid2/9origin.jpg"
  },
  "/dark/assets/imgs/works/grid2/be62a0144557497.628e652189e03.jpg": {
    "type": "image/jpeg",
    "etag": "\"b718f-xtRG1rOrQ4/4R9Ji1C14XjsbdiY\"",
    "mtime": "2023-09-18T10:21:08.884Z",
    "size": 749967,
    "path": "../public/dark/assets/imgs/works/grid2/be62a0144557497.628e652189e03.jpg"
  },
  "/dark/assets/imgs/works/grid2/c4c5c5149282639.63fb93b818a1d.jpg": {
    "type": "image/jpeg",
    "etag": "\"6564f-MTBnA5zVv83Bf+CAah/rHxr9m/8\"",
    "mtime": "2023-09-18T10:21:08.882Z",
    "size": 415311,
    "path": "../public/dark/assets/imgs/works/grid2/c4c5c5149282639.63fb93b818a1d.jpg"
  },
  "/dark/assets/imgs/works/grid2/e75b2b144557497.628e5bc840be9.jpg": {
    "type": "image/jpeg",
    "etag": "\"531d8-VWf5POv0by8ng4re7T6mfnozJCY\"",
    "mtime": "2023-09-18T10:21:08.880Z",
    "size": 340440,
    "path": "../public/dark/assets/imgs/works/grid2/e75b2b144557497.628e5bc840be9.jpg"
  },
  "/dark/assets/imgs/works/grid2/v1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7a528-OKrDRjehBi2iww0/5+8hZM5Am14\"",
    "mtime": "2023-09-18T10:21:08.877Z",
    "size": 501032,
    "path": "../public/dark/assets/imgs/works/grid2/v1.jpg"
  },
  "/dark/assets/imgs/works/grid2/v2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4c97b-n/Gu6fxM9hGCYlLrR61ylQYbgMc\"",
    "mtime": "2023-09-18T10:21:08.874Z",
    "size": 313723,
    "path": "../public/dark/assets/imgs/works/grid2/v2.jpg"
  },
  "/dark/assets/imgs/works/grid2/v3.jpg": {
    "type": "image/jpeg",
    "etag": "\"b1bc5-d26nIp+OwwlXTT7tnyb/DFFaRjE\"",
    "mtime": "2023-09-18T10:21:08.873Z",
    "size": 728005,
    "path": "../public/dark/assets/imgs/works/grid2/v3.jpg"
  },
  "/dark/assets/imgs/works/grid2/v4.jpg": {
    "type": "image/jpeg",
    "etag": "\"585cb-HdpLuiq04Z2dyRV2TTVEqwXRBG0\"",
    "mtime": "2023-09-18T10:21:08.871Z",
    "size": 361931,
    "path": "../public/dark/assets/imgs/works/grid2/v4.jpg"
  },
  "/light/assets/imgs/arch/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1123a-HYouXz87x4BFF3g8sSAR3xFtVhA\"",
    "mtime": "2023-09-18T10:21:08.776Z",
    "size": 70202,
    "path": "../public/light/assets/imgs/arch/blog/1.jpg"
  },
  "/light/assets/imgs/arch/blog/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1123a-HYouXz87x4BFF3g8sSAR3xFtVhA\"",
    "mtime": "2023-09-18T10:21:08.775Z",
    "size": 70202,
    "path": "../public/light/assets/imgs/arch/blog/2.jpg"
  },
  "/light/assets/imgs/arch/intro/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a195-t/gdprxmZJ8Y4sinmj+L9sU6wkk\"",
    "mtime": "2023-09-18T10:21:08.775Z",
    "size": 41365,
    "path": "../public/light/assets/imgs/arch/intro/1.jpg"
  },
  "/light/assets/imgs/arch/intro/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"b3e3-/wGwvcgLrXQJbzUz4J/GV6EEUjQ\"",
    "mtime": "2023-09-18T10:21:08.774Z",
    "size": 46051,
    "path": "../public/light/assets/imgs/arch/intro/2.jpg"
  },
  "/light/assets/imgs/arch/intro/sq1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a935-+iFxPPfVCBTmigORvAmwnoKjWVY\"",
    "mtime": "2023-09-18T10:21:08.773Z",
    "size": 43317,
    "path": "../public/light/assets/imgs/arch/intro/sq1.jpg"
  },
  "/light/assets/imgs/arch/intro/sq2.jpg": {
    "type": "image/jpeg",
    "etag": "\"a935-+iFxPPfVCBTmigORvAmwnoKjWVY\"",
    "mtime": "2023-09-18T10:21:08.772Z",
    "size": 43317,
    "path": "../public/light/assets/imgs/arch/intro/sq2.jpg"
  },
  "/light/assets/imgs/arch/slid/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-t3HuY4L607X5/SNpiH3Me91/cdE\"",
    "mtime": "2023-09-18T10:21:08.772Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/arch/slid/1.jpg"
  },
  "/light/assets/imgs/arch/slid/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-t3HuY4L607X5/SNpiH3Me91/cdE\"",
    "mtime": "2023-09-18T10:21:08.771Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/arch/slid/2.jpg"
  },
  "/light/assets/imgs/arch/slid/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-t3HuY4L607X5/SNpiH3Me91/cdE\"",
    "mtime": "2023-09-18T10:21:08.771Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/arch/slid/3.jpg"
  },
  "/light/assets/imgs/arch/works/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a195-t/gdprxmZJ8Y4sinmj+L9sU6wkk\"",
    "mtime": "2023-09-18T10:21:08.770Z",
    "size": 41365,
    "path": "../public/light/assets/imgs/arch/works/1.jpg"
  },
  "/light/assets/imgs/arch/works/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6911-P3PBNF5PSwiCGBCrqfpUlFkLzy0\"",
    "mtime": "2023-09-18T10:21:08.770Z",
    "size": 26897,
    "path": "../public/light/assets/imgs/arch/works/2.jpg"
  },
  "/light/assets/imgs/arch/works/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"a935-+iFxPPfVCBTmigORvAmwnoKjWVY\"",
    "mtime": "2023-09-18T10:21:08.769Z",
    "size": 43317,
    "path": "../public/light/assets/imgs/arch/works/3.jpg"
  },
  "/light/assets/imgs/arch/works/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"a935-+iFxPPfVCBTmigORvAmwnoKjWVY\"",
    "mtime": "2023-09-18T10:21:08.769Z",
    "size": 43317,
    "path": "../public/light/assets/imgs/arch/works/4.jpg"
  },
  "/light/assets/imgs/freelancer/skills/angular.png": {
    "type": "image/png",
    "etag": "\"6860-oCs3CmvGFQDKuJNdo/DBQNIQOYY\"",
    "mtime": "2023-09-18T10:21:08.747Z",
    "size": 26720,
    "path": "../public/light/assets/imgs/freelancer/skills/angular.png"
  },
  "/light/assets/imgs/freelancer/skills/figma.png": {
    "type": "image/png",
    "etag": "\"396b-guCjJYJFzA1fro4aL3toKVkxw3A\"",
    "mtime": "2023-09-18T10:21:08.747Z",
    "size": 14699,
    "path": "../public/light/assets/imgs/freelancer/skills/figma.png"
  },
  "/light/assets/imgs/freelancer/skills/webflow.png": {
    "type": "image/png",
    "etag": "\"626e-/ZxLqCpXfWWpsCWQ1cBQsp7aYVc\"",
    "mtime": "2023-09-18T10:21:08.747Z",
    "size": 25198,
    "path": "../public/light/assets/imgs/freelancer/skills/webflow.png"
  },
  "/light/assets/imgs/freelancer/skills/wordpress.png": {
    "type": "image/png",
    "etag": "\"e8ab-Dv34eYCyO4ualGJInSipFhiPucY\"",
    "mtime": "2023-09-18T10:21:08.746Z",
    "size": 59563,
    "path": "../public/light/assets/imgs/freelancer/skills/wordpress.png"
  },
  "/light/assets/imgs/freelancer/works/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:08.746Z",
    "size": 38836,
    "path": "../public/light/assets/imgs/freelancer/works/1.jpg"
  },
  "/light/assets/imgs/freelancer/works/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:08.745Z",
    "size": 38836,
    "path": "../public/light/assets/imgs/freelancer/works/2.jpg"
  },
  "/light/assets/imgs/freelancer/works/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:08.744Z",
    "size": 38836,
    "path": "../public/light/assets/imgs/freelancer/works/3.jpg"
  },
  "/light/assets/imgs/freelancer/works/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:08.744Z",
    "size": 38836,
    "path": "../public/light/assets/imgs/freelancer/works/4.jpg"
  },
  "/light/assets/imgs/freelancer/works/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"97b4-ViGSZY7mXFrTS1VL9Xmh7b06q1s\"",
    "mtime": "2023-09-18T10:21:08.743Z",
    "size": 38836,
    "path": "../public/light/assets/imgs/freelancer/works/5.jpg"
  },
  "/light/assets/imgs/portfolio/3/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:08.720Z",
    "size": 29631,
    "path": "../public/light/assets/imgs/portfolio/3/1.jpg"
  },
  "/light/assets/imgs/portfolio/3/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:08.720Z",
    "size": 29631,
    "path": "../public/light/assets/imgs/portfolio/3/2.jpg"
  },
  "/light/assets/imgs/portfolio/3/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:08.719Z",
    "size": 29631,
    "path": "../public/light/assets/imgs/portfolio/3/3.jpg"
  },
  "/light/assets/imgs/portfolio/2/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"9906-lLEdP3h67LBHCMTl6lzRRllSkQA\"",
    "mtime": "2023-09-18T10:21:08.722Z",
    "size": 39174,
    "path": "../public/light/assets/imgs/portfolio/2/1.jpg"
  },
  "/light/assets/imgs/portfolio/2/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"688b-w8pCTVSg+YyRsXjdi+e0zhdMGZc\"",
    "mtime": "2023-09-18T10:21:08.722Z",
    "size": 26763,
    "path": "../public/light/assets/imgs/portfolio/2/2.jpg"
  },
  "/light/assets/imgs/portfolio/2/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"9345-2GAGKjqGlnnmpIUvm5Lue5SrpQY\"",
    "mtime": "2023-09-18T10:21:08.722Z",
    "size": 37701,
    "path": "../public/light/assets/imgs/portfolio/2/3.jpg"
  },
  "/light/assets/imgs/portfolio/2/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"9f24-ipLTbmfXsJ9OGde2/kJTs0lLE6A\"",
    "mtime": "2023-09-18T10:21:08.721Z",
    "size": 40740,
    "path": "../public/light/assets/imgs/portfolio/2/4.jpg"
  },
  "/light/assets/imgs/portfolio/2/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"7f4c-Duvc+OmP/xwMJism5tZ4NftHUJQ\"",
    "mtime": "2023-09-18T10:21:08.721Z",
    "size": 32588,
    "path": "../public/light/assets/imgs/portfolio/2/5.jpg"
  },
  "/light/assets/imgs/portfolio/2/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"9440-Bm/7rlZoaULmUa6cNijbzNIwEes\"",
    "mtime": "2023-09-18T10:21:08.720Z",
    "size": 37952,
    "path": "../public/light/assets/imgs/portfolio/2/6.jpg"
  },
  "/light/assets/imgs/portfolio/4/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:08.719Z",
    "size": 29631,
    "path": "../public/light/assets/imgs/portfolio/4/01.jpg"
  },
  "/light/assets/imgs/portfolio/4/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:08.719Z",
    "size": 29631,
    "path": "../public/light/assets/imgs/portfolio/4/02.jpg"
  },
  "/light/assets/imgs/portfolio/4/03.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:08.718Z",
    "size": 29631,
    "path": "../public/light/assets/imgs/portfolio/4/03.jpg"
  },
  "/light/assets/imgs/portfolio/4/04.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:08.718Z",
    "size": 29631,
    "path": "../public/light/assets/imgs/portfolio/4/04.jpg"
  },
  "/light/assets/imgs/portfolio/4/05.jpg": {
    "type": "image/jpeg",
    "etag": "\"73bf-0Kn4Q7WtMLPSJtHgAxiU1nzu7bw\"",
    "mtime": "2023-09-18T10:21:08.718Z",
    "size": 29631,
    "path": "../public/light/assets/imgs/portfolio/4/05.jpg"
  },
  "/light/assets/imgs/portfolio/4/06.jpg": {
    "type": "image/jpeg",
    "etag": "\"37f47-fyEK2nsvpalrThdLoKkXJy3DN0A\"",
    "mtime": "2023-09-18T10:21:08.717Z",
    "size": 229191,
    "path": "../public/light/assets/imgs/portfolio/4/06.jpg"
  },
  "/light/assets/imgs/portfolio/gallery/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfab-7QTkjzVXsbS8BkHR4D9SIOecu3I\"",
    "mtime": "2023-09-18T10:21:08.716Z",
    "size": 49067,
    "path": "../public/light/assets/imgs/portfolio/gallery/1.jpg"
  },
  "/light/assets/imgs/portfolio/gallery/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfab-7QTkjzVXsbS8BkHR4D9SIOecu3I\"",
    "mtime": "2023-09-18T10:21:08.715Z",
    "size": 49067,
    "path": "../public/light/assets/imgs/portfolio/gallery/2.jpg"
  },
  "/light/assets/imgs/portfolio/gallery/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfab-7QTkjzVXsbS8BkHR4D9SIOecu3I\"",
    "mtime": "2023-09-18T10:21:08.715Z",
    "size": 49067,
    "path": "../public/light/assets/imgs/portfolio/gallery/3.jpg"
  },
  "/light/assets/imgs/portfolio/mas/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"28cc-x53yZXjIY3DJx+ejonkLdbe0P8g\"",
    "mtime": "2023-09-18T10:21:08.714Z",
    "size": 10444,
    "path": "../public/light/assets/imgs/portfolio/mas/1.jpg"
  },
  "/light/assets/imgs/portfolio/mas/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"368b-jvuFX5PZkzWiJ2mQ9jU4gQxaCEY\"",
    "mtime": "2023-09-18T10:21:08.714Z",
    "size": 13963,
    "path": "../public/light/assets/imgs/portfolio/mas/2.jpg"
  },
  "/light/assets/imgs/portfolio/mas/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"30f6-15rx0O6AyaxaW4cPkJ34DRZh9jU\"",
    "mtime": "2023-09-18T10:21:08.714Z",
    "size": 12534,
    "path": "../public/light/assets/imgs/portfolio/mas/3.jpg"
  },
  "/light/assets/imgs/portfolio/mas/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"368b-jvuFX5PZkzWiJ2mQ9jU4gQxaCEY\"",
    "mtime": "2023-09-18T10:21:08.713Z",
    "size": 13963,
    "path": "../public/light/assets/imgs/portfolio/mas/4.jpg"
  },
  "/light/assets/imgs/portfolio/mas/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"30f6-15rx0O6AyaxaW4cPkJ34DRZh9jU\"",
    "mtime": "2023-09-18T10:21:08.713Z",
    "size": 12534,
    "path": "../public/light/assets/imgs/portfolio/mas/5.jpg"
  },
  "/light/assets/imgs/portfolio/mas/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"368b-jvuFX5PZkzWiJ2mQ9jU4gQxaCEY\"",
    "mtime": "2023-09-18T10:21:08.713Z",
    "size": 13963,
    "path": "../public/light/assets/imgs/portfolio/mas/6.jpg"
  },
  "/light/assets/imgs/portfolio/mas/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"30f6-15rx0O6AyaxaW4cPkJ34DRZh9jU\"",
    "mtime": "2023-09-18T10:21:08.713Z",
    "size": 12534,
    "path": "../public/light/assets/imgs/portfolio/mas/7.jpg"
  },
  "/light/assets/imgs/portfolio/mas/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"368b-jvuFX5PZkzWiJ2mQ9jU4gQxaCEY\"",
    "mtime": "2023-09-18T10:21:08.712Z",
    "size": 13963,
    "path": "../public/light/assets/imgs/portfolio/mas/8.jpg"
  },
  "/light/assets/imgs/sass-img/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"c15f1-DA7N7IotNCPL+B52yycSZqkvNj0\"",
    "mtime": "2023-09-18T10:21:08.705Z",
    "size": 792049,
    "path": "../public/light/assets/imgs/sass-img/blog/1.jpg"
  },
  "/light/assets/imgs/sass-img/blog/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"639df-mt9xsaJ+uys3SOn7MPoqi6BVstE\"",
    "mtime": "2023-09-18T10:21:08.701Z",
    "size": 408031,
    "path": "../public/light/assets/imgs/sass-img/blog/2.jpg"
  },
  "/light/assets/imgs/sass-img/serv/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d4354-BsBflFxrxB9/qP+2eWT4mWJvBAo\"",
    "mtime": "2023-09-18T10:21:08.697Z",
    "size": 1917780,
    "path": "../public/light/assets/imgs/sass-img/serv/1.jpg"
  },
  "/light/assets/imgs/sass-img/serv/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"615e9-i35lAbHvh1E4zZCGOPxrPQLb2co\"",
    "mtime": "2023-09-18T10:21:08.694Z",
    "size": 398825,
    "path": "../public/light/assets/imgs/sass-img/serv/2.jpg"
  },
  "/light/assets/imgs/sass-img/serv/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"96b87-igd8FIw3TgHbY7esatD7w5wHo+4\"",
    "mtime": "2023-09-18T10:21:08.692Z",
    "size": 617351,
    "path": "../public/light/assets/imgs/sass-img/serv/3.jpg"
  },
  "/light/assets/imgs/sass-img/serv/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"639df-mt9xsaJ+uys3SOn7MPoqi6BVstE\"",
    "mtime": "2023-09-18T10:21:08.690Z",
    "size": 408031,
    "path": "../public/light/assets/imgs/sass-img/serv/4.jpg"
  },
  "/light/assets/imgs/sass-img/work/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"3eca6-QOZGt0e6SoXBngIOpAjDjw9atj4\"",
    "mtime": "2023-09-18T10:21:08.687Z",
    "size": 257190,
    "path": "../public/light/assets/imgs/sass-img/work/1.jpg"
  },
  "/light/assets/imgs/sass-img/work/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"acda6-ZQi5dHqEzk5T06ggmVN5BRX0LQE\"",
    "mtime": "2023-09-18T10:21:08.686Z",
    "size": 708006,
    "path": "../public/light/assets/imgs/sass-img/work/2.jpg"
  },
  "/light/assets/imgs/sass-img/work/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"12418b-onsFkBbFY9E+KhlLDfIH65Pl6XY\"",
    "mtime": "2023-09-18T10:21:08.684Z",
    "size": 1196427,
    "path": "../public/light/assets/imgs/sass-img/work/3.jpg"
  },
  "/light/assets/imgs/sass-img/work/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1326f8-0QJvJMwSe8xT9Zs7kP9m94liHy8\"",
    "mtime": "2023-09-18T10:21:08.681Z",
    "size": 1255160,
    "path": "../public/light/assets/imgs/sass-img/work/4.jpg"
  },
  "/light/assets/imgs/sass-img/work/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"b191f-9CrE/Bf5BblyzY5DuRwXL1YjVQo\"",
    "mtime": "2023-09-18T10:21:08.677Z",
    "size": 727327,
    "path": "../public/light/assets/imgs/sass-img/work/5.jpg"
  },
  "/light/assets/imgs/works/full/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.596Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/full/1.jpg"
  },
  "/light/assets/imgs/works/full/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.596Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/full/2.jpg"
  },
  "/light/assets/imgs/works/full/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.595Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/full/3.jpg"
  },
  "/light/assets/imgs/works/full/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.594Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/full/4.jpg"
  },
  "/light/assets/imgs/works/full/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.594Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/full/5.jpg"
  },
  "/light/assets/imgs/works/full/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.593Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/full/6.jpg"
  },
  "/light/assets/imgs/works/grid/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.593Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/1.jpg"
  },
  "/light/assets/imgs/works/grid/10.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.593Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/10.jpg"
  },
  "/light/assets/imgs/works/grid/11.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.592Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/11.jpg"
  },
  "/light/assets/imgs/works/grid/12.jpg": {
    "type": "image/jpeg",
    "etag": "\"3a1e-29j+1HV6qkp8RuQ3JfYOFDhXVnw\"",
    "mtime": "2023-09-18T10:21:08.592Z",
    "size": 14878,
    "path": "../public/light/assets/imgs/works/grid/12.jpg"
  },
  "/light/assets/imgs/works/grid/13.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d03-Fc31OtAocT5TqTj7WdIjJpWE9XQ\"",
    "mtime": "2023-09-18T10:21:08.592Z",
    "size": 15619,
    "path": "../public/light/assets/imgs/works/grid/13.jpg"
  },
  "/light/assets/imgs/works/grid/14.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.591Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/14.jpg"
  },
  "/light/assets/imgs/works/grid/15.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.591Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/15.jpg"
  },
  "/light/assets/imgs/works/grid/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.591Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/2.jpg"
  },
  "/light/assets/imgs/works/grid/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.590Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/3.jpg"
  },
  "/light/assets/imgs/works/grid/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.590Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/4.jpg"
  },
  "/light/assets/imgs/works/grid/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.590Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/5.jpg"
  },
  "/light/assets/imgs/works/grid/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.590Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/6.jpg"
  },
  "/light/assets/imgs/works/grid/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.589Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/7.jpg"
  },
  "/light/assets/imgs/works/grid/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.589Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/8.jpg"
  },
  "/light/assets/imgs/works/grid/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"35d4-osRCbJhS2V75Vevpqu8mxZRtuQc\"",
    "mtime": "2023-09-18T10:21:08.589Z",
    "size": 13780,
    "path": "../public/light/assets/imgs/works/grid/9.jpg"
  },
  "/light/assets/imgs/works/grid2/08e86c144358611.628b70160a7a6.jpg": {
    "type": "image/jpeg",
    "etag": "\"218bf6-/EwR4buARRB7RFqe9w2DIKmPOCg\"",
    "mtime": "2023-09-18T10:21:08.588Z",
    "size": 2198518,
    "path": "../public/light/assets/imgs/works/grid2/08e86c144358611.628b70160a7a6.jpg"
  },
  "/light/assets/imgs/works/grid2/0d7d68142933531.62710029eab2d.jpg": {
    "type": "image/jpeg",
    "etag": "\"337af-ejL+5Jbp8Y8KZTzqT17RYcfJcuA\"",
    "mtime": "2023-09-18T10:21:08.585Z",
    "size": 210863,
    "path": "../public/light/assets/imgs/works/grid2/0d7d68142933531.62710029eab2d.jpg"
  },
  "/light/assets/imgs/works/grid2/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.582Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/grid2/1.jpg"
  },
  "/light/assets/imgs/works/grid2/1bcf6d169040259.64463eac61df0.png": {
    "type": "image/png",
    "etag": "\"10d697-ERFpHBh6SQ8sTKQGa8gGBVn06Yo\"",
    "mtime": "2023-09-18T10:21:08.581Z",
    "size": 1103511,
    "path": "../public/light/assets/imgs/works/grid2/1bcf6d169040259.64463eac61df0.png"
  },
  "/light/assets/imgs/works/grid2/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.579Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/grid2/2.jpg"
  },
  "/light/assets/imgs/works/grid2/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.578Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/grid2/3.jpg"
  },
  "/light/assets/imgs/works/grid2/3c362e144557497.628e5bc84149c.jpg": {
    "type": "image/jpeg",
    "etag": "\"5b700-Yb9WKU2l53HqGhFIYoVdp01g9iM\"",
    "mtime": "2023-09-18T10:21:08.578Z",
    "size": 374528,
    "path": "../public/light/assets/imgs/works/grid2/3c362e144557497.628e5bc84149c.jpg"
  },
  "/light/assets/imgs/works/grid2/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.576Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/grid2/4.jpg"
  },
  "/light/assets/imgs/works/grid2/40e57f147099205.62bc3f08076a5.jpg": {
    "type": "image/jpeg",
    "etag": "\"a1c0f-+sB+XsBtigASz7Uhzhv1hWsHbUw\"",
    "mtime": "2023-09-18T10:21:08.576Z",
    "size": 662543,
    "path": "../public/light/assets/imgs/works/grid2/40e57f147099205.62bc3f08076a5.jpg"
  },
  "/light/assets/imgs/works/grid2/488dd6144557497.628e5bf32903f.jpg": {
    "type": "image/jpeg",
    "etag": "\"8c001-uaZBkMB3rinCVKdEb3/3uxbzLMA\"",
    "mtime": "2023-09-18T10:21:08.574Z",
    "size": 573441,
    "path": "../public/light/assets/imgs/works/grid2/488dd6144557497.628e5bf32903f.jpg"
  },
  "/light/assets/imgs/works/grid2/4f59a3150420097.62fa6e1a018ba.png": {
    "type": "image/png",
    "etag": "\"7a69a-lC8qXlrGsWVvbOtyjQe3M8RntJQ\"",
    "mtime": "2023-09-18T10:21:08.572Z",
    "size": 501402,
    "path": "../public/light/assets/imgs/works/grid2/4f59a3150420097.62fa6e1a018ba.png"
  },
  "/light/assets/imgs/works/grid2/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.571Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/grid2/5.jpg"
  },
  "/light/assets/imgs/works/grid2/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-7hETnKNys+dUUANHeWWs2XcAM9U\"",
    "mtime": "2023-09-18T10:21:08.570Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/grid2/6.jpg"
  },
  "/light/assets/imgs/works/grid2/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"672c-MjZdOLF6xGm4UNf43Ks3BqWy+1I\"",
    "mtime": "2023-09-18T10:21:08.569Z",
    "size": 26412,
    "path": "../public/light/assets/imgs/works/grid2/7.jpg"
  },
  "/light/assets/imgs/works/grid2/76d373162765773.64387bf091399.jpg": {
    "type": "image/jpeg",
    "etag": "\"d6625-iFm+X73uPEqaZGcd+TLW9M6rcAk\"",
    "mtime": "2023-09-18T10:21:08.568Z",
    "size": 878117,
    "path": "../public/light/assets/imgs/works/grid2/76d373162765773.64387bf091399.jpg"
  },
  "/light/assets/imgs/works/grid2/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"3c4ec-Pg00Z9hqEe6CS/foUyAXg1GGX1g\"",
    "mtime": "2023-09-18T10:21:08.566Z",
    "size": 247020,
    "path": "../public/light/assets/imgs/works/grid2/8.jpg"
  },
  "/light/assets/imgs/works/grid2/81bef4162314387.63d90871d8c27.png": {
    "type": "image/png",
    "etag": "\"a667a-PXxXg5qN5Vogp3SYqjlKozuFFIY\"",
    "mtime": "2023-09-18T10:21:08.565Z",
    "size": 681594,
    "path": "../public/light/assets/imgs/works/grid2/81bef4162314387.63d90871d8c27.png"
  },
  "/light/assets/imgs/works/grid2/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"30b07-WohZV7na49rNJG0/tZO9FugraLo\"",
    "mtime": "2023-09-18T10:21:08.559Z",
    "size": 199431,
    "path": "../public/light/assets/imgs/works/grid2/9.jpg"
  },
  "/light/assets/imgs/works/grid2/9407b4142933531.62710029eb5c7.jpg": {
    "type": "image/jpeg",
    "etag": "\"407e8-sr8saKvJHAOI4JHf1ShLci0Y2Mo\"",
    "mtime": "2023-09-18T10:21:08.559Z",
    "size": 264168,
    "path": "../public/light/assets/imgs/works/grid2/9407b4142933531.62710029eb5c7.jpg"
  },
  "/light/assets/imgs/works/grid2/be62a0144557497.628e652189e03.jpg": {
    "type": "image/jpeg",
    "etag": "\"b718f-xtRG1rOrQ4/4R9Ji1C14XjsbdiY\"",
    "mtime": "2023-09-18T10:21:08.558Z",
    "size": 749967,
    "path": "../public/light/assets/imgs/works/grid2/be62a0144557497.628e652189e03.jpg"
  },
  "/light/assets/imgs/works/grid2/c4c5c5149282639.63fb93b818a1d.jpg": {
    "type": "image/jpeg",
    "etag": "\"6564f-MTBnA5zVv83Bf+CAah/rHxr9m/8\"",
    "mtime": "2023-09-18T10:21:08.555Z",
    "size": 415311,
    "path": "../public/light/assets/imgs/works/grid2/c4c5c5149282639.63fb93b818a1d.jpg"
  },
  "/light/assets/imgs/works/grid2/e75b2b144557497.628e5bc840be9.jpg": {
    "type": "image/jpeg",
    "etag": "\"531d8-VWf5POv0by8ng4re7T6mfnozJCY\"",
    "mtime": "2023-09-18T10:21:08.553Z",
    "size": 340440,
    "path": "../public/light/assets/imgs/works/grid2/e75b2b144557497.628e5bc840be9.jpg"
  },
  "/light/assets/imgs/works/grid2/v1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7a528-OKrDRjehBi2iww0/5+8hZM5Am14\"",
    "mtime": "2023-09-18T10:21:08.552Z",
    "size": 501032,
    "path": "../public/light/assets/imgs/works/grid2/v1.jpg"
  },
  "/light/assets/imgs/works/grid2/v2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4c97b-n/Gu6fxM9hGCYlLrR61ylQYbgMc\"",
    "mtime": "2023-09-18T10:21:08.550Z",
    "size": 313723,
    "path": "../public/light/assets/imgs/works/grid2/v2.jpg"
  },
  "/light/assets/imgs/works/grid2/v3.jpg": {
    "type": "image/jpeg",
    "etag": "\"b1bc5-d26nIp+OwwlXTT7tnyb/DFFaRjE\"",
    "mtime": "2023-09-18T10:21:08.549Z",
    "size": 728005,
    "path": "../public/light/assets/imgs/works/grid2/v3.jpg"
  },
  "/light/assets/imgs/works/grid2/v4.jpg": {
    "type": "image/jpeg",
    "etag": "\"585cb-HdpLuiq04Z2dyRV2TTVEqwXRBG0\"",
    "mtime": "2023-09-18T10:21:08.547Z",
    "size": 361931,
    "path": "../public/light/assets/imgs/works/grid2/v4.jpg"
  },
  "/dark/assets/imgs/works/projects/1/1-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-PqTEveDP1lFfBPZrzYai5RI6+qM\"",
    "mtime": "2023-09-18T10:21:08.870Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/projects/1/1-origin.jpg"
  },
  "/dark/assets/imgs/works/projects/1/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fc26-nudTjSYDgzBXkiE9tJdLNO6BGDw\"",
    "mtime": "2023-09-18T10:21:08.869Z",
    "size": 457766,
    "path": "../public/dark/assets/imgs/works/projects/1/1.jpg"
  },
  "/dark/assets/imgs/works/projects/1/1test.jpg": {
    "type": "image/jpeg",
    "etag": "\"6f702-zvd6phXH6gh7c3YyGayk+4SxslA\"",
    "mtime": "2023-09-18T10:21:08.868Z",
    "size": 456450,
    "path": "../public/dark/assets/imgs/works/projects/1/1test.jpg"
  },
  "/dark/assets/imgs/works/projects/1/2-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.865Z",
    "size": 46922,
    "path": "../public/dark/assets/imgs/works/projects/1/2-origin.jpg"
  },
  "/dark/assets/imgs/works/projects/1/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"12b312-Z7XblhLPA+PcMaT1KsxvTJSvAWc\"",
    "mtime": "2023-09-18T10:21:08.865Z",
    "size": 1225490,
    "path": "../public/dark/assets/imgs/works/projects/1/2.jpg"
  },
  "/dark/assets/imgs/works/projects/1/3-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.864Z",
    "size": 46922,
    "path": "../public/dark/assets/imgs/works/projects/1/3-origin.jpg"
  },
  "/dark/assets/imgs/works/projects/1/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"1bdbe-7wIx4KKo2OTk4e24R2dXgDyAHmw\"",
    "mtime": "2023-09-18T10:21:08.863Z",
    "size": 114110,
    "path": "../public/dark/assets/imgs/works/projects/1/3.jpg"
  },
  "/dark/assets/imgs/works/projects/1/4-origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.863Z",
    "size": 46922,
    "path": "../public/dark/assets/imgs/works/projects/1/4-origin.jpg"
  },
  "/dark/assets/imgs/works/projects/1/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf871-Mydb3GLbV2NbjbQU0WQ8tTqK38o\"",
    "mtime": "2023-09-18T10:21:08.863Z",
    "size": 850033,
    "path": "../public/dark/assets/imgs/works/projects/1/4.jpg"
  },
  "/dark/assets/imgs/works/projects/1/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"12962-w9dXgVYLXzfpKZMcD9ESOHYqy3o\"",
    "mtime": "2023-09-18T10:21:08.862Z",
    "size": 76130,
    "path": "../public/dark/assets/imgs/works/projects/1/5.jpg"
  },
  "/dark/assets/imgs/works/projects/2/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"80841-BcXSyr9xpBl9MGU//X5cKT/qaLQ\"",
    "mtime": "2023-09-18T10:21:08.862Z",
    "size": 526401,
    "path": "../public/dark/assets/imgs/works/projects/2/1.jpg"
  },
  "/dark/assets/imgs/works/projects/2/1origin.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-PqTEveDP1lFfBPZrzYai5RI6+qM\"",
    "mtime": "2023-09-18T10:21:08.860Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/projects/2/1origin.jpg"
  },
  "/dark/assets/imgs/works/projects/2/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-PqTEveDP1lFfBPZrzYai5RI6+qM\"",
    "mtime": "2023-09-18T10:21:08.859Z",
    "size": 54547,
    "path": "../public/dark/assets/imgs/works/projects/2/2.jpg"
  },
  "/dark/assets/imgs/works/projects/2/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.859Z",
    "size": 46922,
    "path": "../public/dark/assets/imgs/works/projects/2/3.jpg"
  },
  "/dark/assets/imgs/works/projects/2/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.858Z",
    "size": 46922,
    "path": "../public/dark/assets/imgs/works/projects/2/4.jpg"
  },
  "/dark/assets/imgs/works/projects/2/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.858Z",
    "size": 46922,
    "path": "../public/dark/assets/imgs/works/projects/2/5.jpg"
  },
  "/dark/assets/imgs/works/projects/2/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.858Z",
    "size": 46922,
    "path": "../public/dark/assets/imgs/works/projects/2/6.jpg"
  },
  "/light/assets/imgs/works/projects/1/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-PqTEveDP1lFfBPZrzYai5RI6+qM\"",
    "mtime": "2023-09-18T10:21:08.546Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/projects/1/1.jpg"
  },
  "/light/assets/imgs/works/projects/1/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.545Z",
    "size": 46922,
    "path": "../public/light/assets/imgs/works/projects/1/2.jpg"
  },
  "/light/assets/imgs/works/projects/1/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.545Z",
    "size": 46922,
    "path": "../public/light/assets/imgs/works/projects/1/3.jpg"
  },
  "/light/assets/imgs/works/projects/1/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.543Z",
    "size": 46922,
    "path": "../public/light/assets/imgs/works/projects/1/4.jpg"
  },
  "/light/assets/imgs/works/projects/1/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"12962-w9dXgVYLXzfpKZMcD9ESOHYqy3o\"",
    "mtime": "2023-09-18T10:21:08.543Z",
    "size": 76130,
    "path": "../public/light/assets/imgs/works/projects/1/5.jpg"
  },
  "/light/assets/imgs/works/projects/2/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-PqTEveDP1lFfBPZrzYai5RI6+qM\"",
    "mtime": "2023-09-18T10:21:08.542Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/projects/2/1.jpg"
  },
  "/light/assets/imgs/works/projects/2/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d513-PqTEveDP1lFfBPZrzYai5RI6+qM\"",
    "mtime": "2023-09-18T10:21:08.542Z",
    "size": 54547,
    "path": "../public/light/assets/imgs/works/projects/2/2.jpg"
  },
  "/light/assets/imgs/works/projects/2/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.541Z",
    "size": 46922,
    "path": "../public/light/assets/imgs/works/projects/2/3.jpg"
  },
  "/light/assets/imgs/works/projects/2/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.541Z",
    "size": 46922,
    "path": "../public/light/assets/imgs/works/projects/2/4.jpg"
  },
  "/light/assets/imgs/works/projects/2/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.540Z",
    "size": 46922,
    "path": "../public/light/assets/imgs/works/projects/2/5.jpg"
  },
  "/light/assets/imgs/works/projects/2/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"b74a-S70NPkmyGpVdPhTae4bL0wydMAI\"",
    "mtime": "2023-09-18T10:21:08.540Z",
    "size": 46922,
    "path": "../public/light/assets/imgs/works/projects/2/6.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_Eh0rBO = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Eh0rBO, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Eh0rBO, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
