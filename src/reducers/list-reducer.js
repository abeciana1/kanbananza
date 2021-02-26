import { lists as defaultLists } from '../normalized-state'
import set from 'lodash/fp/set'


//! set(chainOfProperties, what you're trying to replace, object you want to replace it on)



const listsReducer = (lists = defaultLists, action) => {
    console.log(lists, action)
    if (action.type === 'CARD_CREATE') {
        const { cardId, listId } = action.payload
        // const entities = { ...lists.entities }
        
        const cards = lists.entities[listId].cards.concat(cardId)
        return set(['entities', listId, 'cards'], cards, lists)
        
        // entities[listId] = {
        //     ...entities[listId],
        //     cards: entities[listId].cards.concat(cardId)
        // }

        // return {
        //     ...lists,
        //     entities
        // }
    }
    return lists //! aka state
}

export default listsReducer