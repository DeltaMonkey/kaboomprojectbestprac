import kaboom, { KaboomCtx } from 'kaboom'
import { CapacitorConsts } from './constants/capacitor.consts';
import CapacitorInit from './initializations/capacitor.init';
import { AdMob } from '@capacitor-community/admob';
import * as dotenv from 'dotenv';

export class Main {

    //private kaboom: KaboomCtx;

    private _capacitorInit: CapacitorInit;

    constructor() {
        //new classes
        this._capacitorInit = new CapacitorInit(); //if name ends init.ts I can run the init of class and can attach then

        //init all class operations
        this.init();
    }

    public init() {
        dotenv.config();

        this._projectInit();
    }

    //kaboom and if requires other generic init operations
    private _projectInit() {
        this._capacitorInit.init().then((platform: string) => 
        {
            if(platform === CapacitorConsts.PLAFORM.WEB) this._kaboomInit();
            else this._lazyKaboomInit();
        })
        this._admobInit();
    }

    //till hide status and navbar we made a dummy waiting
    private _lazyKaboomInit(): void {
        setTimeout(() => {
            this._kaboomInit();
        }, 3000)
    }

    private _kaboomInit(): void{
        /*this.kaboom = **/kaboom();
        console.log(`${process.env.PROJECT_NAME} initialization finished.`);
    }

    private async _admobInit(): Promise<void> {
        const { status } = await AdMob.trackingAuthorizationStatus();
        console.log(`Status :${status}`);
    }
}