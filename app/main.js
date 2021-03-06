"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const app_module_1 = require('./app.module');
const user_service_1 = require('./user.service');
const accounts_service_1 = require('./accounts.service');
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [user_service_1.UserService, accounts_service_1.AccountsService]);
//# sourceMappingURL=main.js.map