import { IEvent } from './interfaces/index';
declare const INTERNAL_EVENTS: unique symbol;
declare const IS_AUTO_COMMIT_ENABLED: unique symbol;
export declare abstract class AggregateRoot {
    [IS_AUTO_COMMIT_ENABLED]: boolean;
    private readonly [INTERNAL_EVENTS];
    set autoCommit(value: boolean);
    get autoCommit(): boolean;
    publish(event: IEvent): void;
    commit(): void;
    uncommit(): void;
    getUncommittedEvents(): IEvent[];
    loadFromHistory(history: IEvent[]): void;
    apply(event: IEvent, isFromHistory?: boolean): void;
    private getEventHandler;
    protected getEventName(event: any): string;
}
export {};
