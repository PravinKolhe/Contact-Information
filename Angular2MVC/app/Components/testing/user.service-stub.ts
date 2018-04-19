import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../Model/user';

export class UserServiceStub {
    public _iUser: IUser[] = [<IUser>{FirstName:'PK'}, <IUser>{FirstName:'SecondObj'}];

    private resOptions: ResponseOptions = new ResponseOptions({ status: 200 });
    private resResult: Response = new Response(this.resOptions);

    public get(): Observable<Response> {
        return Observable.of(this.resResult);
    }
}
