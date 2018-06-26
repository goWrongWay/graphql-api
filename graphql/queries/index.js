import userQuery from "./user";
import eventQuery from "./event";
import abilityQuery from "./ability";
import eventtoabilityQuery from "./eventtoability";
import scoreQuery from "./score";

export default {
  ...userQuery,
  ...eventQuery,
  ...abilityQuery,
  ...eventtoabilityQuery,
  ...scoreQuery
};
