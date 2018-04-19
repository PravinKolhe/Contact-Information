import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserComponent } from './user.component';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceStub } from './testing/user.service-stub';

xdescribe('UserComponent test', () => {
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    // For time being, I haven't used testHelper which will give us debug element to
    // hit the events like button click, check box click etc.

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComponent], // declare the test component
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [FormBuilder, 
                { provide: UserService, useClass: UserServiceStub }
            ]
        })
            .compileComponents();  // compile template and css
    }));
    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
        comp = fixture.componentInstance;
        });

    afterEach(() => {
        fixture = undefined;
        comp = undefined;
    });

    it('should load users on contact-information click',
        fakeAsync(() => {
            // When UI updated
            comp.indLoading = true;
            comp.users = undefined;

            // When load users called
            comp.LoadUsers();

            // Then
            expect(comp.users.length).toBeGreaterThan(0);
        }));
});
