import kaboom, { KaboomCtx } from 'kaboom'
import { CapacitorConsts } from './constants/capacitor.consts';
import CapacitorInit from './initializations/capacitor.init';
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
        this._projectInit();

        dotenv.config();
    }

    //kaboom and if requires other generic init operations
    private _projectInit() {
        this._capacitorInit.init().then((platform: string) => 
        {
            if(platform === CapacitorConsts.PLAFORM.WEB) this._kaboomInit();
            else this._lazyKaboomInit();
            
        }) 
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
}