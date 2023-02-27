const defaultState = [];

const LOAD_RANDOM_PROMOTIONS = 'LOAD_RANDOM_PROMOTIONS';

export const randomPromotionProducts = (payload) => ({
	type: LOAD_RANDOM_PROMOTIONS,
	payload});

export const randomPromotionsReducer = (state = defaultState, action) => {
	if (action.type === LOAD_RANDOM_PROMOTIONS) {
		return action.payload;
		
	} else {
		return state;
	}
};
