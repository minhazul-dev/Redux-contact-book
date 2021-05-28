const initialState = [
    { id: 0, name: "Test 01", email: "email@email.com", phone: 1234567890 },

    { id: 1, name: "Test 02", email: "test@test.com", phone: 4567891230 },
  ],

 contactReducer = (state = initialState, action) => {
      switch(action.type) {
          case "ADD_CONTACT":
              state=[...state,action.payload];
              return state;
          default:
              return state;
      }
  }

  export default contactReducer;