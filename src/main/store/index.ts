import module from './module';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';


export interface State{
  rootCount: number; // 如果没有根state，可以为空，此处为了稍后验证，添加类型信息
}

const store = createStore<State>({
  state() {
    return {
      rootCount: 111,
    }
  },
  modules: {
    module,
  }
});


export interface State{
    rootCount: number;
  }
  export const key: InjectionKey<Store<State>> = Symbol() // ++
  
  // 定义自己的 `useStore` 组合式函数 ++
  export function useStore () {
    return baseUseStore(key)
  }

export default store;
