import style from './style.module.css'
import {Div} from 'kuebox/constructors'


export function NavigationContainer(...nodes: HTMLElement[]) {
    return Div((e) => {
        e.className = style.navigation;
        e.append(...nodes)
        return e;
    });
};

export function NavigationButton(name: string, route: string, drawFunc: (ctx: HTMLElement, textHolder: HTMLElement) => VoidFunction) {
    const container = document.createElement('div');
    container.className = style.container;
    container.onclick = () => history.pushState(undefined, '', route)

    const canvas = document.createElement('div');
    canvas.className = style.painting;
    
    const title = document.createElement('div');
    title.className = style.title;
    title.textContent = Math.random().toString().substring(0, 7);

    container.append(canvas, title);

    function Play(): void {
        drawFunc(canvas, title);
    };

    return {
        container,
        Play,
    };
};


export interface DrawingConfig {
    timeout: number,
    classname: CSSModuleClasses[string],
    amount: number,
};

export function GetDrawFunction(config: DrawingConfig) {
    return function(canvas: HTMLElement, textHolder: HTMLElement) {
        const buffer: HTMLElement[] = new Array<HTMLElement>(config.amount);
        for (let i: number = 0; i < config.amount; i++) {
            buffer[i] = document.createElement('div');
            if (Math.random() >= 0.5) buffer[i].classList.add(config.classname);
            canvas.append(buffer[i]);
        };
        
        const stopper_1 = setInterval(function() {
            buffer[Math.floor((Math.random() * (buffer.length - 1 - 0 + 1) + 0))].classList.toggle(config.classname)
        }, config.timeout * 1000);

        const stopper_2 = setInterval(function() {
            textHolder.textContent = Math.random().toString(16).substring(0, 7)
        }, config.timeout * 4000);

        return function() {
            clearInterval(stopper_1);
            clearInterval(stopper_2);
        };
    };
};
