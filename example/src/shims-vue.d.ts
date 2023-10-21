//  Tell the TypeScript compiler that importing .vue files is OK
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
