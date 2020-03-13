module.exports = function randomString(length) {
  const vals =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*?"
  let random = ""
  for (let i = 0; i < length; i++) {
    random += vals.charAt(Math.floor(Math.random() * vals.length))
  }
  return random
}
