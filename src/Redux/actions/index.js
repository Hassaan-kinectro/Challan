const ClassNameAction = (name) => {
    console.log("action2")
    const { type, payload } = name;
    console.log(name)
    return {
        type,
        payload,
    };
};
export default ClassNameAction;