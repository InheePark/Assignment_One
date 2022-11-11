// Do not expose your credentials in your code.
// db data that we want to authenticated with jwt token

module.exports = {
    "ATLASDB": "mongodb+srv://dbuser:YmAtl2iVPIzhH4V6@cluster005.vkuwqmu.mongodb.net/products?retryWrites=true&w=majority",
    "LOCALDB": "mongodb://localhost:27017/dbapp",
    "SECRETKEY": "y$B&E)H+MbQeThWmZq4t7w!z%C*F-JaNcRfUjXn2r5u8x/A?D(G+KbPeSgVkYp3s"
    // secret keys are signature keys used for security
}