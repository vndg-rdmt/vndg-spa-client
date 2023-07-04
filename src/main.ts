window.addEventListener('DOMContentLoaded', main)
import { MainPage } from './pages/main';
import './style.css'

import { KUBApplication } from "kuebox";

function main(): void {
    const app = KUBApplication.createApp();
    app.configurePage('/', MainPage)
    app.launchApp();
};