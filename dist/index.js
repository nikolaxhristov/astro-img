import { deepmerge as p } from "deepmerge-ts";
import e from "./options/index.js";
var s=(r={})=>{var o;const t=p(e(),r);return t.path=(o=t.path)!=null&&o.endsWith("/")?t.path:`${t.path}/`,{name:"astro-img",hooks:{}}};export { s as default };

