declare const _default: {
    name: string;
    props: string[];
    render(createElement: any): any;
    methods: {
        mountReactComponent(comp: any): void;
    };
    mounted(): void;
    beforeDestroy(): void;
    updated(): void;
    inheritAttrs: boolean;
    watch: {
        $attrs: {
            handler(): void;
            deep: boolean;
        };
        "$props.component": {
            handler(newValue: any): void;
        };
        $listeners: {
            handler(): void;
            deep: boolean;
        };
        "$props.passedProps": {
            handler(): void;
            deep: boolean;
        };
    };
};
export default _default;
