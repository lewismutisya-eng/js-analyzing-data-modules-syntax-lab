// Load the datejs tool so we can format dates easily
require('datejs');

function combineUsers(...args) {
    // 1. Create our starter object (const because the object itself won't change)
    const combinedObject = {
        users: []
    };

    // 2. Loop through every array of usernames passed into the function
    for (let i = 0; i < args.length; i++) {
        const currentArray = args[i]; // Get the current list of users

        // 3. Loop through each username inside that list and add it to our box
        for (let j = 0; j < currentArray.length; j++) {
            const username = currentArray[j];
            combinedObject.users.push(username); // .push() adds the name to our list
        }
    }

    // 4. Get the current date and format it as Month/Day/Year
    const today = new Date();
    combinedObject.merge_date = today.toString('M/d/yyyy');

    // 5. Return our completed object
    return combinedObject;
}

// Leave the school's testing export code exactly as it was
module.exports = {
   ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
