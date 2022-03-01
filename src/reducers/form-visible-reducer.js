export default (state = {}, action) => {
  const {visible} = action;
  switch (action.type) {
    case 'FORM_VISIBLE':
      return Object.assign({}, state, {
        visible: true
      })
    case 'FORM_NOT_VISIBLE':
      return Object.assign({}, state, {
        visible: false
      })
  }
};