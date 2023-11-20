// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function loopingTriangle(n: number) {
  let hash = "";

  for (let i = 0; i < n; i++) {
    hash = hash + "#";
    console.log(hash)
}

}

loopingTriangle(8);

function loopingTriangleSolution () {
    for (let line = "#"; line.length < 8; line += "#") console.log(line);
}
