import { KUBPage } from "kuebox";
import { GetDrawFunction, NavigationButton, NavigationContainer } from "../components/navigation-buttons";
import style from './style.module.css'

export class MainPage extends KUBPage {
    public constructor() {
        super();
        this.pageViewRoot.className = style.mainPage; 
    };

    protected onAfterRender: () => void = () => {
        const buttons = [
            NavigationButton('about me', '/aboutme', GetDrawFunction({
                classname: style.drawBox,
                amount: 100,
                timeout: 0.03,
            })),
            NavigationButton('rdmt studios', '/aboutme', GetDrawFunction({
                classname: style.drawBox,
                amount: 100,
                timeout: 0.03,
            })),
            NavigationButton('mail', '/aboutme', GetDrawFunction({
                classname: style.drawBox,
                amount: 100,
                timeout: 0.03,
            })),
            NavigationButton('contacts', '/aboutme', GetDrawFunction({
                classname: style.drawBox,
                amount: 100,
                timeout: 0.03,
            })),
            // NavigationButton('RD', '/rdmtstudios', GetDrawFunction()),
            // NavigationButton('M', '/mail', GetDrawFunction()),
            // NavigationButton('CTM', '/contacts', GetDrawFunction()),
        ];
        
        this.pageViewRoot.append(
            NavigationContainer(...buttons.map((e) => {
                return e.container;
            })),
        );

        buttons.forEach((b) => {
            b.Play();
        })
    };
};