import { counterReducer, counterActions } from './counterSlice';
import { CounterShema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterShema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    test('decrement', () => {
        const state: CounterShema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('should work without state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
