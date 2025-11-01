import { createContext } from 'svelte';
import type State from './state.svelte';

export const [getStateContext, setStateContext] = createContext<State>();
