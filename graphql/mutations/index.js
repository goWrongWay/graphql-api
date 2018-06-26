import userMutation from './user';
import postMutation from './post'
import eventMutation from './event'
import abilityMutation from './ability'
import eventtoabilityMutation from './eventtoability'
import scoreMutation from './score'


export default {
    ...userMutation,
    ...postMutation,
    ...eventMutation,
    ...abilityMutation,
    ...eventtoabilityMutation,
    ...scoreMutation
}