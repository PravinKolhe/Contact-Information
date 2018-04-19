"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var UserServiceStub = (function () {
    function UserServiceStub() {
        this._iUser = [{ FirstName: 'PK' }, { FirstName: 'SecondObj' }];
        this.resOptions = new http_1.ResponseOptions({ status: 200 });
        this.resResult = new http_1.Response(this.resOptions);
    }
    UserServiceStub.prototype.get = function () {
        return Observable_1.Observable.of(this.resResult);
    };
    return UserServiceStub;
}());
exports.UserServiceStub = UserServiceStub;
//# sourceMappingURL=user.service-stub.js.map