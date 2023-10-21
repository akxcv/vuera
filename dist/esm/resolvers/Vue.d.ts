import { AsyncComponent, Component } from "vue";
export default function VueResolver<T>(component: (props: T) => any): Component<any, any, any, T> | AsyncComponent<any, any, any, T>;
