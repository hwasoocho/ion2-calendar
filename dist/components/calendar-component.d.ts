import { ElementRef, ChangeDetectorRef, Renderer } from '@angular/core';
import { NavParams, ViewController, Content } from 'ionic-angular';
import { CalendarOriginal, CalendarDay, CalendarMonth, CalendarOptions, SavedDatesCache } from '../calendar.model';
export declare class CalendarComponent {
    params: NavParams;
    viewCtrl: ViewController;
    ref: ChangeDetectorRef;
    private _renderer;
    _elementRef: ElementRef;
    content: Content;
    monthsEle: ElementRef;
    title: string;
    closeLabel: string;
    dayTemp: Array<CalendarDay | null>;
    calendarMonths: Array<CalendarMonth>;
    monthTitleFilterStr: string;
    weekdaysTitle: Array<string>;
    _s: boolean;
    _id: string;
    _savedHistory: SavedDatesCache | any;
    _color: string;
    options: CalendarOptions;
    defaultDate: Date;
    scrollBackwards: boolean;
    weekStartDay: number;
    isSaveHistory: boolean;
    countNextMonths: number;
    constructor(params: NavParams, viewCtrl: ViewController, ref: ChangeDetectorRef, _renderer: Renderer, _elementRef: ElementRef);
    ionViewDidLoad(): void;
    init(): void;
    savedHistory: SavedDatesCache | null;
    findCssClass(): void;
    dismiss(): void;
    onSelected(item: CalendarDay): void;
    nextMonth(infiniteScroll: any): void;
    backwardsMonth(): void;
    scrollToDefaultDate(): void;
    onScroll($event: any): void;
    findDayConfig(day: any): any;
    createOriginalCalendar(time: number): CalendarOriginal;
    createCalendarDay(time: number): CalendarDay;
    createCalendarMonth(original: CalendarOriginal): CalendarMonth;
    createMonthsByPeriod(startTime: number, monthsNum: number): Array<CalendarMonth>;
    findInitMonthNumber(date: Date): number;
}
