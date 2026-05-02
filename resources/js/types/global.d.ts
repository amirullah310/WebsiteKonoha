import { AxiosInstance } from 'axios';
import { route as routeFn } from 'ziggy-js';

declare global {
    var axios: AxiosInstance;
    var route: typeof routeFn;
}
