// src/store/module.ts

import { Module } from 'vuex';
import { State } from './index';

export interface ModuleState {
  count: number;
}
export default {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
} as Module<ModuleState, State>;
