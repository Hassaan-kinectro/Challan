const GetClassNameReducer = (state = "", action) => {
    console.log("action", action)
  switch (action.type) {
    case "class_Name":
      return action.payload;
    default:
      return state;
  }
};
export default GetClassNameReducer;
