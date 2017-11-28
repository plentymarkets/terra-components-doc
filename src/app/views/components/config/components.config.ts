import { Injectable } from '@angular/core';

@Injectable()
export class ComponentsConfig
{
    public get isAnyComponentOpen():boolean
    {
        return this._isAnyComponentOpen;
    }

    public set isAnyComponentOpen(value:boolean)
    {
        this._isAnyComponentOpen = value;
    }

    private _isAnyComponentOpen:boolean;

    constructor()
    {
        this._isAnyComponentOpen = false;
    }
}
