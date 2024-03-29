import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterShema } from '../../types/counterSchema';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterShema) => counter.value,
);
