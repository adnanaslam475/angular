import { HttpHeaders } from '@angular/common/http';
import { User } from './types';

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.token as User}`
    })
};