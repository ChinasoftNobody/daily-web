import {
    trigger,  // 动画封装触发，外部的触发器
    state, // 转场状态控制
    style, // 用来书写基本的样式
    transition, // 用来实现css3的 transition
    animate, // 用来实现css3的animations
    keyframes // 用来实现css3 keyframes的
} from '@angular/animations';

export function slideToBottomTransition() {
    return slideToBottom();
}

export function slideToRight() {
    return trigger('slideToBottomTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({transform: 'translateX(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
        ])
    ]);
}

export function slideToLeft() {
    return trigger('slideToBottomTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({transform: 'translateX(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
        ])
    ]);
}

export function slideToBottom() {
    return trigger('slideToBottomTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
        ])
    ]);
}

export function slideToTop() {
    return trigger('slideToBottomTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({transform: 'translateY(100%)'}),
            animate('2s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('2s ease-in-out', style({transform: 'translateY(-100%)'}))
        ])
    ]);
}
