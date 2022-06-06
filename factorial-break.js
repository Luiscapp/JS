let i = 0
let max = 10
while (i < max) {
  i++
  console.log(i)
  if (i < 3) {
    console.log("Primer tercio")
  }
  if (i > 8) {
    break
  }
}
