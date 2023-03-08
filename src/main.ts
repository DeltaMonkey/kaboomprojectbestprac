import kaboom from 'kaboom'
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar'

let k = kaboom()

const hideStatusBar = async () => {
    await StatusBar.hide() //bu kodla zaman ayarlı olarak üstteki barı gizlememiz gerekiyor
    await NavigationBar.hide() //bu kodla zaman ayarlı olarak alttaki nav barı gizlememiz gerekiyor
};

if (Capacitor.getPlatform() === 'android') {
    hideStatusBar().then(() => 
    {
        k = kaboom()
        console.log("İşler Tamam")
    })
}else {
    k = kaboom()
}