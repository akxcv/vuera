import ReactWrapper from "./wrappers/React";
import VueWrapper from "./wrappers/Vue";
import VuePlugin from "./VuePlugin";
import VueInReact, {
  babelReactResolver as __vueraReactResolver,
} from "./resolvers/React";
import config from "./config";
import ReactInVue from "./resolvers/Vue";

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, say hello to TypeScript.</div>
);

export {
  ReactWrapper,
  VueWrapper,
  __vueraReactResolver,
  VuePlugin,
  VueInReact,
  ReactInVue,
  config,
  // TEST
  SayHello,
};
