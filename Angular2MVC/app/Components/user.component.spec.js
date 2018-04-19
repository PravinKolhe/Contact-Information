"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var user_component_1 = require("./user.component");
var user_service_1 = require("../Service/user.service");
var forms_1 = require("@angular/forms");
var user_service_stub_1 = require("./testing/user.service-stub");
xdescribe('UserComponent test', function () {
    var comp;
    var fixture;
    // For time being, I haven't used testHelper which will give us debug element to
    // hit the events like button click, check box click etc.
    // async beforeEach
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_component_1.UserComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            providers: [forms_1.FormBuilder,
                { provide: user_service_1.UserService, useClass: user_service_stub_1.UserServiceStub }
            ]
        })
            .compileComponents(); // compile template and css
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(user_component_1.UserComponent);
        comp = fixture.componentInstance;
    });
    afterEach(function () {
        fixture = undefined;
        comp = undefined;
    });
    it('should load users on contact-information click', testing_1.fakeAsync(function () {
        // When UI updated
        comp.indLoading = true;
        comp.users = undefined;
        // When load users called
        comp.LoadUsers();
        // Then
        expect(comp.users.length).toBeGreaterThan(0);
    }));
});
//# sourceMappingURL=user.component.spec.js.map