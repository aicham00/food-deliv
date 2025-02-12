'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var component = require('@firebase/component');
var tslib = require('tslib');
var logger$1 = require('@firebase/logger');
var util = require('@firebase/util');
var idb = require('idb');

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerServiceImpl = /** @class */ (function () {
    function PlatformLoggerServiceImpl(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerServiceImpl.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return "".concat(service.library, "/").concat(service.version);
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerServiceImpl;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
}

var name$q = "@firebase/app";
var version$1 = "0.10.13";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

var name$p = "@firebase/app-compat";

var name$o = "@firebase/analytics-compat";

var name$n = "@firebase/analytics";

var name$m = "@firebase/app-check-compat";

var name$l = "@firebase/app-check";

var name$k = "@firebase/auth";

var name$j = "@firebase/auth-compat";

var name$i = "@firebase/database";

var name$h = "@firebase/data-connect";

var name$g = "@firebase/database-compat";

var name$f = "@firebase/functions";

var name$e = "@firebase/functions-compat";

var name$d = "@firebase/installations";

var name$c = "@firebase/installations-compat";

var name$b = "@firebase/messaging";

var name$a = "@firebase/messaging-compat";

var name$9 = "@firebase/performance";

var name$8 = "@firebase/performance-compat";

var name$7 = "@firebase/remote-config";

var name$6 = "@firebase/remote-config-compat";

var name$5 = "@firebase/storage";

var name$4 = "@firebase/storage-compat";

var name$3 = "@firebase/firestore";

var name$2 = "@firebase/vertexai-preview";

var name$1 = "@firebase/firestore-compat";

var name = "firebase";
var version = "10.14.1";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
/**
 * The default app name
 *
 * @internal
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$q] = 'fire-core',
    _a$1[name$p] = 'fire-core-compat',
    _a$1[name$n] = 'fire-analytics',
    _a$1[name$o] = 'fire-analytics-compat',
    _a$1[name$l] = 'fire-app-check',
    _a$1[name$m] = 'fire-app-check-compat',
    _a$1[name$k] = 'fire-auth',
    _a$1[name$j] = 'fire-auth-compat',
    _a$1[name$i] = 'fire-rtdb',
    _a$1[name$h] = 'fire-data-connect',
    _a$1[name$g] = 'fire-rtdb-compat',
    _a$1[name$f] = 'fire-fn',
    _a$1[name$e] = 'fire-fn-compat',
    _a$1[name$d] = 'fire-iid',
    _a$1[name$c] = 'fire-iid-compat',
    _a$1[name$b] = 'fire-fcm',
    _a$1[name$a] = 'fire-fcm-compat',
    _a$1[name$9] = 'fire-perf',
    _a$1[name$8] = 'fire-perf-compat',
    _a$1[name$7] = 'fire-rc',
    _a$1[name$6] = 'fire-rc-compat',
    _a$1[name$5] = 'fire-gcs',
    _a$1[name$4] = 'fire-gcs-compat',
    _a$1[name$3] = 'fire-fst',
    _a$1[name$1] = 'fire-fst-compat',
    _a$1[name$2] = 'fire-vertex',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
var _apps = new Map();
/**
 * @internal
 */
var _serverApps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    var e_1, _a, e_2, _b;
    var componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
        return false;
    }
    _components.set(componentName, component);
    try {
        // add the component to existing app instances
        for (var _c = tslib.__values(_apps.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var app = _d.value;
            _addComponent(app, component);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _e = tslib.__values(_serverApps.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var serverApp = _f.value;
            _addComponent(serverApp, component);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    var heartbeatController = app.container
        .getProvider('heartbeat')
        .getImmediate({ optional: true });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier) {
    if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 *
 * @param obj - an object of type FirebaseApp or FirebaseOptions.
 *
 * @returns true if the provide object is of type FirebaseApp.
 *
 * @internal
 */
function _isFirebaseApp(obj) {
    return obj.options !== undefined;
}
/**
 *
 * @param obj - an object of type FirebaseApp.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */
function _isFirebaseServerApp(obj) {
    return obj.settings !== undefined;
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* AppError.NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call initializeApp() first',
    _a["bad-app-name" /* AppError.BAD_APP_NAME */] = "Illegal App name: '{$appName}'",
    _a["duplicate-app" /* AppError.DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists with different options or config",
    _a["app-deleted" /* AppError.APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["server-app-deleted" /* AppError.SERVER_APP_DELETED */] = 'Firebase Server App has been deleted',
    _a["no-options" /* AppError.NO_OPTIONS */] = 'Need to provide options, when not being deployed to hosting via source.',
    _a["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a["idb-open" /* AppError.IDB_OPEN */] = 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-get" /* AppError.IDB_GET */] = 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-set" /* AppError.IDB_WRITE */] = 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-delete" /* AppError.IDB_DELETE */] = 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    _a["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */] = 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    _a["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */] = 'FirebaseServerApp is not for use in browser environments.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, container) {
        var _this = this;
        this._isDeleted = false;
        this._options = tslib.__assign({}, options);
        this._config = tslib.__assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* ComponentType.PUBLIC */));
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed();
            return this._automaticDataCollectionEnabled;
        },
        set: function (val) {
            this.checkDestroyed();
            this._automaticDataCollectionEnabled = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed();
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed();
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "config", {
        get: function () {
            this.checkDestroyed();
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "isDeleted", {
        get: function () {
            return this._isDeleted;
        },
        set: function (val) {
            this._isDeleted = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed = function () {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, { appName: this._name });
        }
    };
    return FirebaseAppImpl;
}());

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseServerAppImpl = /** @class */ (function (_super) {
    tslib.__extends(FirebaseServerAppImpl, _super);
    function FirebaseServerAppImpl(options, serverConfig, name, container) {
        var _this = this;
        // Build configuration parameters for the FirebaseAppImpl base class.
        var automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined
            ? serverConfig.automaticDataCollectionEnabled
            : false;
        // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
        var config = {
            name: name,
            automaticDataCollectionEnabled: automaticDataCollectionEnabled
        };
        if (options.apiKey !== undefined) {
            // Construct the parent FirebaseAppImp object.
            _this = _super.call(this, options, config, container) || this;
        }
        else {
            var appImpl = options;
            _this = _super.call(this, appImpl.options, config, container) || this;
        }
        // Now construct the data for the FirebaseServerAppImpl.
        _this._serverConfig = tslib.__assign({ automaticDataCollectionEnabled: automaticDataCollectionEnabled }, serverConfig);
        _this._finalizationRegistry = null;
        if (typeof FinalizationRegistry !== 'undefined') {
            _this._finalizationRegistry = new FinalizationRegistry(function () {
                _this.automaticCleanup();
            });
        }
        _this._refCount = 0;
        _this.incRefCount(_this._serverConfig.releaseOnDeref);
        // Do not retain a hard reference to the dref object, otherwise the FinalizationRegistry
        // will never trigger.
        _this._serverConfig.releaseOnDeref = undefined;
        serverConfig.releaseOnDeref = undefined;
        registerVersion(name$q, version$1, 'serverapp');
        return _this;
    }
    FirebaseServerAppImpl.prototype.toJSON = function () {
        return undefined;
    };
    Object.defineProperty(FirebaseServerAppImpl.prototype, "refCount", {
        get: function () {
            return this._refCount;
        },
        enumerable: false,
        configurable: true
    });
    // Increment the reference count of this server app. If an object is provided, register it
    // with the finalization registry.
    FirebaseServerAppImpl.prototype.incRefCount = function (obj) {
        if (this.isDeleted) {
            return;
        }
        this._refCount++;
        if (obj !== undefined && this._finalizationRegistry !== null) {
            this._finalizationRegistry.register(obj, this);
        }
    };
    // Decrement the reference count.
    FirebaseServerAppImpl.prototype.decRefCount = function () {
        if (this.isDeleted) {
            return 0;
        }
        return --this._refCount;
    };
    // Invoked by the FinalizationRegistry callback to note that this app should go through its
    // reference counts and delete itself if no reference count remain. The coordinating logic that
    // handles this is in deleteApp(...).
    FirebaseServerAppImpl.prototype.automaticCleanup = function () {
        void deleteApp(this);
    };
    Object.defineProperty(FirebaseServerAppImpl.prototype, "settings", {
        get: function () {
            this.checkDestroyed();
            return this._serverConfig;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseServerAppImpl.prototype.checkDestroyed = function () {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */);
        }
    };
    return FirebaseServerAppImpl;
}(FirebaseAppImpl));

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
var SDK_VERSION = version;
function initializeApp(_options, rawConfig) {
    var e_1, _a;
    if (rawConfig === void 0) { rawConfig = {}; }
    var options = _options;
    if (typeof rawConfig !== 'object') {
        var name_1 = rawConfig;
        rawConfig = { name: name_1 };
    }
    var config = tslib.__assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    var name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    options || (options = util.getDefaultAppConfig());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
    }
    var existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (util.deepEqual(options, existingApp.options) &&
            util.deepEqual(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, { appName: name });
        }
    }
    var container = new component.ComponentContainer(name);
    try {
        for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
function initializeServerApp(_options, _serverAppConfig) {
    var e_2, _a;
    if (util.isBrowser() && !util.isWebWorker()) {
        // FirebaseServerApp isn't designed to be run in browsers.
        throw ERROR_FACTORY.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */);
    }
    if (_serverAppConfig.automaticDataCollectionEnabled === undefined) {
        _serverAppConfig.automaticDataCollectionEnabled = false;
    }
    var appOptions;
    if (_isFirebaseApp(_options)) {
        appOptions = _options.options;
    }
    else {
        appOptions = _options;
    }
    // Build an app name based on a hash of the configuration options.
    var nameObj = tslib.__assign(tslib.__assign({}, _serverAppConfig), appOptions);
    // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
    // construction of FirebaseServerApp instances. For example, if the object is the request headers.
    if (nameObj.releaseOnDeref !== undefined) {
        delete nameObj.releaseOnDeref;
    }
    var hashCode = function (s) {
        return tslib.__spreadArray([], tslib.__read(s), false).reduce(function (hash, c) { return (Math.imul(31, hash) + c.charCodeAt(0)) | 0; }, 0);
    };
    if (_serverAppConfig.releaseOnDeref !== undefined) {
        if (typeof FinalizationRegistry === 'undefined') {
            throw ERROR_FACTORY.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */, {});
        }
    }
    var nameString = '' + hashCode(JSON.stringify(nameObj));
    var existingApp = _serverApps.get(nameString);
    if (existingApp) {
        existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
        return existingApp;
    }
    var container = new component.ComponentContainer(nameString);
    try {
        for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
    _serverApps.set(nameString, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name) {
    if (name === void 0) { name = DEFAULT_ENTRY_NAME; }
    var app = _apps.get(name);
    if (!app && name === DEFAULT_ENTRY_NAME && util.getDefaultAppConfig()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
function deleteApp(app) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var cleanupProviders, name, firebaseServerApp;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cleanupProviders = false;
                    name = app.name;
                    if (_apps.has(name)) {
                        cleanupProviders = true;
                        _apps.delete(name);
                    }
                    else if (_serverApps.has(name)) {
                        firebaseServerApp = app;
                        if (firebaseServerApp.decRefCount() <= 0) {
                            _serverApps.delete(name);
                            cleanupProviders = true;
                        }
                    }
                    if (!cleanupProviders) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(app.container
                            .getProviders()
                            .map(function (provider) { return provider.delete(); }))];
                case 1:
                    _a.sent();
                    app.isDeleted = true;
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += "-".concat(variant);
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        var warning = [
            "Unable to register library \"".concat(library, "\" with version \"").concat(version, "\":")
        ];
        if (libraryMismatch) {
            warning.push("library name \"".concat(library, "\" contains illegal characters (whitespace or \"/\")"));
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push("version name \"".concat(version, "\" contains illegal characters (whitespace or \"/\")"));
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new component.Component("".concat(library, "-version"), function () { return ({ library: library, version: version }); }, "VERSION" /* ComponentType.VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
    }
    logger$1.setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    logger$1.setLogLevel(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DB_NAME = 'firebase-heartbeat-database';
var DB_VERSION = 1;
var STORE_NAME = 'firebase-heartbeat-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = idb.openDB(DB_NAME, DB_VERSION, {
            upgrade: function (db, oldVersion) {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        try {
                            db.createObjectStore(STORE_NAME);
                        }
                        catch (e) {
                            // Safari/iOS browsers throw occasional exceptions on
                            // db.createObjectStore() that may be a bug. Avoid blocking
                            // the rest of the app functionality.
                            console.warn(e);
                        }
                }
            }
        }).catch(function (e) {
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
function readHeartbeatsFromIndexedDB(app) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var db, tx, result, e_1, idbGetError;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(STORE_NAME);
                    return [4 /*yield*/, tx.objectStore(STORE_NAME).get(computeKey(app))];
                case 2:
                    result = _a.sent();
                    // We already have the value but tx.done can throw,
                    // so we need to await it here to catch errors
                    return [4 /*yield*/, tx.done];
                case 3:
                    // We already have the value but tx.done can throw,
                    // so we need to await it here to catch errors
                    _a.sent();
                    return [2 /*return*/, result];
                case 4:
                    e_1 = _a.sent();
                    if (e_1 instanceof util.FirebaseError) {
                        logger.warn(e_1.message);
                    }
                    else {
                        idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
                            originalErrorMessage: e_1 === null || e_1 === void 0 ? void 0 : e_1.message
                        });
                        logger.warn(idbGetError.message);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var db, tx, objectStore, e_2, idbGetError;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(STORE_NAME, 'readwrite');
                    objectStore = tx.objectStore(STORE_NAME);
                    return [4 /*yield*/, objectStore.put(heartbeatObject, computeKey(app))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.done];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    if (e_2 instanceof util.FirebaseError) {
                        logger.warn(e_2.message);
                    }
                    else {
                        idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
                            originalErrorMessage: e_2 === null || e_2 === void 0 ? void 0 : e_2.message
                        });
                        logger.warn(idbGetError.message);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function computeKey(app) {
    return "".concat(app.name, "!").concat(app.options.appId);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_HEADER_BYTES = 1024;
// 30 days
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
var HeartbeatServiceImpl = /** @class */ (function () {
    function HeartbeatServiceImpl(container) {
        var _this = this;
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */
        this._heartbeatsCache = null;
        var app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then(function (result) {
            _this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    HeartbeatServiceImpl.prototype.triggerHeartbeat = function () {
        var _a, _b;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var platformLogger, agent, date_1, _c, e_1;
            return tslib.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        platformLogger = this.container
                            .getProvider('platform-logger')
                            .getImmediate();
                        agent = platformLogger.getPlatformInfoString();
                        date_1 = getUTCDateString();
                        if (!(((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null)) return [3 /*break*/, 2];
                        _c = this;
                        return [4 /*yield*/, this._heartbeatsCachePromise];
                    case 1:
                        _c._heartbeatsCache = _d.sent();
                        // If we failed to construct a heartbeats cache, then return immediately.
                        if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                            return [2 /*return*/];
                        }
                        _d.label = 2;
                    case 2:
                        // Do not store a heartbeat if one is already stored for this day
                        // or if a header has already been sent today.
                        if (this._heartbeatsCache.lastSentHeartbeatDate === date_1 ||
                            this._heartbeatsCache.heartbeats.some(function (singleDateHeartbeat) { return singleDateHeartbeat.date === date_1; })) {
                            return [2 /*return*/];
                        }
                        else {
                            // There is no entry for this date. Create one.
                            this._heartbeatsCache.heartbeats.push({ date: date_1, agent: agent });
                        }
                        // Remove entries older than 30 days.
                        this._heartbeatsCache.heartbeats =
                            this._heartbeatsCache.heartbeats.filter(function (singleDateHeartbeat) {
                                var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                                var now = Date.now();
                                return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                            });
                        return [2 /*return*/, this._storage.overwrite(this._heartbeatsCache)];
                    case 3:
                        e_1 = _d.sent();
                        logger.warn(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    HeartbeatServiceImpl.prototype.getHeartbeatsHeader = function () {
        var _a;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var date, _b, heartbeatsToSend, unsentEntries, headerString, e_2;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 6, , 7]);
                        if (!(this._heartbeatsCache === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._heartbeatsCachePromise];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        // If it's still null or the array is empty, there is no data to send.
                        if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null ||
                            this._heartbeatsCache.heartbeats.length === 0) {
                            return [2 /*return*/, ''];
                        }
                        date = getUTCDateString();
                        _b = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _b.heartbeatsToSend, unsentEntries = _b.unsentEntries;
                        headerString = util.base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
                        // Store last sent date to prevent another being logged/sent for the same day.
                        this._heartbeatsCache.lastSentHeartbeatDate = date;
                        if (!(unsentEntries.length > 0)) return [3 /*break*/, 4];
                        // Store any unsent entries if they exist.
                        this._heartbeatsCache.heartbeats = unsentEntries;
                        // This seems more likely than emptying the array (below) to lead to some odd state
                        // since the cache isn't empty and this will be called again on the next request,
                        // and is probably safest if we await it.
                        return [4 /*yield*/, this._storage.overwrite(this._heartbeatsCache)];
                    case 3:
                        // This seems more likely than emptying the array (below) to lead to some odd state
                        // since the cache isn't empty and this will be called again on the next request,
                        // and is probably safest if we await it.
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this._heartbeatsCache.heartbeats = [];
                        // Do not wait for this, to reduce latency.
                        void this._storage.overwrite(this._heartbeatsCache);
                        _c.label = 5;
                    case 5: return [2 /*return*/, headerString];
                    case 6:
                        e_2 = _c.sent();
                        logger.warn(e_2);
                        return [2 /*return*/, ''];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return HeartbeatServiceImpl;
}());
function getUTCDateString() {
    var today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize) {
    var e_3, _a;
    if (maxSize === void 0) { maxSize = MAX_HEADER_BYTES; }
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    var heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    var unsentEntries = heartbeatsCache.slice();
    var _loop_1 = function (singleDateHeartbeat) {
        // Look for an existing entry with the same user agent.
        var heartbeatEntry = heartbeatsToSend.find(function (hb) { return hb.agent === singleDateHeartbeat.agent; });
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                return "break";
            }
        }
        else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                return "break";
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    };
    try {
        for (var heartbeatsCache_1 = tslib.__values(heartbeatsCache), heartbeatsCache_1_1 = heartbeatsCache_1.next(); !heartbeatsCache_1_1.done; heartbeatsCache_1_1 = heartbeatsCache_1.next()) {
            var singleDateHeartbeat = heartbeatsCache_1_1.value;
            var state_1 = _loop_1(singleDateHeartbeat);
            if (state_1 === "break")
                break;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (heartbeatsCache_1_1 && !heartbeatsCache_1_1.done && (_a = heartbeatsCache_1.return)) _a.call(heartbeatsCache_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return {
        heartbeatsToSend: heartbeatsToSend,
        unsentEntries: unsentEntries
    };
}
var HeartbeatStorageImpl = /** @class */ (function () {
    function HeartbeatStorageImpl(app) {
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    HeartbeatStorageImpl.prototype.runIndexedDBEnvironmentCheck = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                if (!util.isIndexedDBAvailable()) {
                    return [2 /*return*/, false];
                }
                else {
                    return [2 /*return*/, util.validateIndexedDBOpenable()
                            .then(function () { return true; })
                            .catch(function () { return false; })];
                }
            });
        });
    };
    /**
     * Read all heartbeats.
     */
    HeartbeatStorageImpl.prototype.read = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, idbHeartbeatObject;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _a.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/, { heartbeats: [] }];
                    case 2: return [4 /*yield*/, readHeartbeatsFromIndexedDB(this.app)];
                    case 3:
                        idbHeartbeatObject = _a.sent();
                        if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                            return [2 /*return*/, idbHeartbeatObject];
                        }
                        else {
                            return [2 /*return*/, { heartbeats: [] }];
                        }
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // overwrite the storage with the provided heartbeats
    HeartbeatStorageImpl.prototype.overwrite = function (heartbeatsObject) {
        var _a;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, existingHeartbeatsObject;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _b.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.read()];
                    case 3:
                        existingHeartbeatsObject = _b.sent();
                        return [2 /*return*/, writeHeartbeatsToIndexedDB(this.app, {
                                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                                heartbeats: heartbeatsObject.heartbeats
                            })];
                }
            });
        });
    };
    // add heartbeats
    HeartbeatStorageImpl.prototype.add = function (heartbeatsObject) {
        var _a;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, existingHeartbeatsObject;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _b.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.read()];
                    case 3:
                        existingHeartbeatsObject = _b.sent();
                        return [2 /*return*/, writeHeartbeatsToIndexedDB(this.app, {
                                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                                heartbeats: tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(existingHeartbeatsObject.heartbeats), false), tslib.__read(heartbeatsObject.heartbeats), false)
                            })];
                }
            });
        });
    };
    return HeartbeatStorageImpl;
}());
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return util.base64urlEncodeWithoutPadding(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerServiceImpl(container); }, "PRIVATE" /* ComponentType.PRIVATE */));
    _registerComponent(new component.Component('heartbeat', function (container) { return new HeartbeatServiceImpl(container); }, "PRIVATE" /* ComponentType.PRIVATE */));
    // Register `app` package.
    registerVersion(name$q, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$q, version$1, 'cjs5');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('node');

Object.defineProperty(exports, 'FirebaseError', {
  enumerable: true,
  get: function () { return util.FirebaseError; }
});
exports.SDK_VERSION = SDK_VERSION;
exports._DEFAULT_ENTRY_NAME = DEFAULT_ENTRY_NAME;
exports._addComponent = _addComponent;
exports._addOrOverwriteComponent = _addOrOverwriteComponent;
exports._apps = _apps;
exports._clearComponents = _clearComponents;
exports._components = _components;
exports._getProvider = _getProvider;
exports._isFirebaseApp = _isFirebaseApp;
exports._isFirebaseServerApp = _isFirebaseServerApp;
exports._registerComponent = _registerComponent;
exports._removeServiceInstance = _removeServiceInstance;
exports._serverApps = _serverApps;
exports.deleteApp = deleteApp;
exports.getApp = getApp;
exports.getApps = getApps;
exports.initializeApp = initializeApp;
exports.initializeServerApp = initializeServerApp;
exports.onLog = onLog;
exports.registerVersion = registerVersion;
exports.setLogLevel = setLogLevel;
//# sourceMappingURL=index.cjs.js.map
