 import {Thread} from '../models/thread';

 export interface StoreData {
    threads: {[key: string]: Thread }
 }
